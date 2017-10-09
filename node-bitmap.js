// file: bwip-js/node-bitmap.js
//
// Implements a PNG encoder using only the built-in zlib module.
// No other dependencies.
//
// This is part of the bwip-js project available at:
//
// 		http://metafloor.github.io/bwip-js
//
// Copyright (c) 2011-2017 Mark Warren
//
// The MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
"use strict";

var zlib = require('zlib');

// Math.floor() is notoriously slow.  Caching it seems to help.
var floor = Math.floor;

var PNGTYPE_PALETTE = 3;
var PNGTYPE_TRUEALPHA = 6;

// Statically calculate the crc lookup table
var crcCalc = [];
(function() {
	for (var i = 0; i < 256; i++) {
		var c = i;
		for (var j = 0; j < 8; j++) {
			if (c & 1) {
				c = 0xedb88320 ^ (c >>> 1);
			} else {
				c = c >>> 1;
			}
		}
		crcCalc[i] = c;
	}
})();

module.exports = function(rot, bgcolor, opts) {
	opts = opts || {};

	var _text = "Software\0bwip-js.metafloor.com";
	var _imgw, _imgh;		// image width/height, excluding padding
	var _imgbuf, _imgrow;	// Image data and row length
	var _pngtype;
	var _padx = 0, _pady = 0,
		_clrr = 0, _clrg = 0, _clrb = 0;
	var _clrmap 	= {};		// ARGB to index mapping
	var _palette	= [];		// Color palette
	var _trans = false;			// Alpha colors

	// Background color does not support alpha-channel (the alpha compositing
	// algorithm used cannot support it...)
	if (typeof bgcolor === 'string') {
        if (bgcolor.length == 8) {
			// CMYK
            var c = parseInt(bgcolor.substr(0,2), 16) / 255;
            var m = parseInt(bgcolor.substr(2,2), 16) / 255;
            var y = parseInt(bgcolor.substr(4,2), 16) / 255;
            var k = parseInt(bgcolor.substr(6,2), 16) / 255;
            var r = Math.floor((1-c) * (1-k) * 255);
            var g = Math.floor((1-m) * (1-k) * 255);
            var b = Math.floor((1-y) * (1-k) * 255);
			bgcolor = (0xff000000 | (r << 16) | (g << 8) | b) >>> 0;
		} else {
			// RGB
			bgcolor = (0xff000000 | parseInt(bgcolor, 16)) >>> 0;
		}
	} else if (bgcolor != null) {
		bgcolor = (0xff000000 | bgcolor) >>> 0;
	} else {
		bgcolor = 0;	// black, fully transparent
	}

	var _baka = (bgcolor >>> 24) & 0xff;	// 0 or 255 for the bg alpha
	var _bakr = (bgcolor >>> 16) & 0xff;
	var _bakg = (bgcolor >>>  8) & 0xff;
	var _bakb = (bgcolor >>>  0) & 0xff;

	var tsX = Date.now();

	// Optional padding.  Rotates with the image.
	this.pad = function(width, height) {
		if (rot == 'R' || rot == 'L') {
			_pady = width|0;
			_padx = height|0;
		} else {
			_padx = width|0;
			_pady = height|0;
		}
	}

	// ncolors is an estimate and will often exceed the actual number of colors but is
	// designed to accurately indicate whether we can use a paletted PNG format or not.
	this.imageinfo = function(width, height, ncolors) {
		if (opts.sizelimit && opts.sizelimit < width * height) {
			throw new Error("bwipjs: exceeded maximum image size");
		}

		if (rot == 'R' || rot == 'L') {
			_imgh = width;
			_imgw = height;
		} else {
			_imgw = width;
			_imgh = height;
		}

		if (ncolors <= 256) {
			// Palette Color
			_imgrow  = _imgw + 2*_padx + 1;
			_imgbuf  = new Buffer(_imgrow * (_imgh + 2*_pady));
			_pngtype = PNGTYPE_PALETTE;

			_palette = [ bgcolor ];
			_clrmap[bgcolor] = 0;
			_trans = (bgcolor >>> 24) < 255;

			this.set = setPalette;
		} else {
			// TrueColor with Alpha
			_imgrow  = (_imgw + 2*_padx) * 4 + 1;
			_imgbuf  = new Buffer(_imgrow * (_imgh + 2*_pady));
			_pngtype = PNGTYPE_TRUEALPHA;

			this.set = setTrueAlpha
		}
		_imgbuf.fill(0);
	}
	
	this.color = function(r, g, b) {
		_clrr = r;
		_clrg = g;
		_clrb = b;
	}

	// Set a pixel to the ARGB color.  Coordinates are in PostScript convention,
	// with 0,0 at the bottom-left of the page. 
	this.set = function(x, y, a) {
		x = x|0;
		y = y|0;
		a = a|0;

		// Alpha-blend with the background color
		var na = a / 255;
		var ia = 1 - na;
		var newa = _baka || a;
		var newr = (_clrr * na + _bakr * ia)|0;
		var newg = (_clrg * na + _bakg * ia)|0;
		var newb = (_clrb * na + _bakb * ia)|0;

		// Convert from bottom-up coordinates and add in the rotate transform.
		if (rot == 'N') {
			y = _imgh - y - 1;  // Invert y
		} else if (rot == 'I') {
			x = _imgw - x - 1;  // Invert x
		} else {
			y = _imgw - y;      // Invert y
			if (rot == 'L') {
				var t = y;
				y = _imgh - x - 1;
				x = t - 1;
			} else {
				var t = x;
				x = _imgw - y;
				y = t;
			}
		}

		if (_pngtype == PNGTYPE_PALETTE) {
			// Palette Color
			var	argb = ((newa<<24) | (newr<<16) | (newg<<8) | newb)>>>0;
			if (_clrmap[argb] == null) {
				_clrmap[argb] = _palette.length;
				_palette.push(argb);
				_trans = _trans || newa < 255;
			}
			_imgbuf[_imgrow * (y + _pady) + 1 + _padx + x] = _clrmap[argb];
		} else {
			// TrueColor with Alpha
			var pos = _imgrow * (y + _pady) + 1 + (_padx + x) * 4;
			_imgbuf[pos+0] = newr;
			_imgbuf[pos+1] = newg;
			_imgbuf[pos+2] = newb;
			_imgbuf[pos+3] = newa;
		}
	}

	// Set a pixel to the ARGB color.  Coordinates are in PostScript convention,
	// with 0,0 at the bottom-left of the page. 
	function setPalette(x, y, a) {
		x = x|0;
		y = y|0;
		a = a|0;

		// Alpha-blend with the background color
		var na = a / 255;
		var ia = 1 - na;
		var newa = _baka || a;
		var newr = (_clrr * na + _bakr * ia)|0;
		var newg = (_clrg * na + _bakg * ia)|0;
		var newb = (_clrb * na + _bakb * ia)|0;

		// Convert from bottom-up coordinates and add in the rotate transform.
		if (rot == 'N') {
			y = _imgh - y - 1;  // Invert y
		} else if (rot == 'I') {
			x = _imgw - x - 1;  // Invert x
		} else {
			y = _imgw - y;      // Invert y
			if (rot == 'L') {
				var t = y;
				y = _imgh - x - 1;
				x = t - 1;
			} else {
				var t = x;
				x = _imgw - y;
				y = t;
			}
		}

		// Palette Color
		var	argb = ((newa<<24) | (newr<<16) | (newg<<8) | newb)>>>0;
		if (_clrmap[argb] == null) {
			_clrmap[argb] = _palette.length;
			_palette.push(argb);
			_trans = _trans || newa < 255;
		}
		_imgbuf[_imgrow * (y + _pady) + 1 + _padx + x] = _clrmap[argb];
	}

	// Set a pixel to the ARGB color.  Coordinates are in PostScript convention,
	// with 0,0 at the bottom-left of the page. 
	function setTrueAlpha(x, y, a) {
		x = x|0;
		y = y|0;
		a = a|0;

		// Alpha-blend with the background color
		var na = a / 255;
		var ia = 1 - na;
		var newa = _baka || a;
		var newr = (_clrr * na + _bakr * ia)|0;
		var newg = (_clrg * na + _bakg * ia)|0;
		var newb = (_clrb * na + _bakb * ia)|0;

		// Convert from bottom-up coordinates and add in the rotate transform.
		if (rot == 'N') {
			y = _imgh - y - 1;  // Invert y
		} else if (rot == 'I') {
			x = _imgw - x - 1;  // Invert x
		} else {
			y = _imgw - y;      // Invert y
			if (rot == 'L') {
				var t = y;
				y = _imgh - x - 1;
				x = t - 1;
			} else {
				var t = x;
				x = _imgw - y;
				y = t;
			}
		}

		// TrueColor with Alpha
		var pos = _imgrow * (y + _pady) + 1 + (_padx + x) * 4;
		_imgbuf[pos+0] = newr;
		_imgbuf[pos+1] = newg;
		_imgbuf[pos+2] = newb;
		_imgbuf[pos+3] = newa;
	}

	// Return a PNG in a Buffer
	// callback(err, png)
	this.finalize = function(callback) {
		// DEFLATE the image data
		var ts1  = Date.now();
		var bufs = [];
		var buflen = 0;
		var deflator = zlib.createDeflate({
				chunkSize: 32 * 1024,
				level : zlib.Z_DEFAULT_COMPRESSION,
				strategy: zlib.Z_DEFAULT_STRATEGY });
		deflator.on('error', callback);
		deflator.on('data', function(data) { bufs.push(data); buflen += data.length; });
		deflator.on('end', returnPNG);
		deflator.end(_imgbuf);

		function returnPNG() {
			var ts2 = Date.now();
			var length = 8 + 12 + 13 + 			// PNG Header + IHDR chunk
						 12 + _text.length +	// tEXt
						 12 + buflen +			// IDAT
						 12;					// IEND
			if (_pngtype == PNGTYPE_PALETTE) {
				// Should never happen...
				if (_palette.length > 256) {
					return callback(new Error('INTERNAL ERROR - PALETTE EXCEEDS 256'));
				}
				length += 12 + 3*_palette.length;	// PLTE
				if (_trans) {
					length += 12 + _palette.length;	// tRNS		
				}
			}

			// Emulate a byte-stream
			var png = new Buffer(length);
			var pngoff = 0;	// running offset into the png buffer

			write('\x89PNG\x0d\x0a\x1a\x0a'); // PNG file header
			writeIHDR();
			writeTEXT();
			if (_pngtype == PNGTYPE_PALETTE) {
				writePLTE();
				if (_trans) {
					writeTRNS();
				}
			}
			writeIDAT();
			writeIEND();
			var ts3 = Date.now();

			//console.log('IMAGE plotting:  ' + (ts0-tsX) + ' msecs');
			//console.log('PNG conversion:  ' + (ts1-ts0) + ' msecs');
			//console.log('PNG DEFLATE\'ing: ' + (ts2-ts1) + ' msecs');
			//console.log('PNG formatting:  ' + (ts3-ts2) + ' msecs');

			// Success
			callback(null, png);

			function writeIHDR() {
				write32(13);	// chunk length
				var crcoff = pngoff;

				write('IHDR');
				write32(_imgw + 2*_padx);
				write32(_imgh + 2*_pady);
				write8(8);		// bit depth
				write8(_pngtype);
				write8(0);		// compression default
				write8(0);		// filter default
				write8(0);		// no interlace

				writeCRC(crcoff);
			}
			function writeTEXT() {
				write32(_text.length);	// chunk length
				var crcoff = pngoff;

				write('tEXt');
				write(_text);
				writeCRC(crcoff);
			}
			function writePLTE() {
				write32(_palette.length*3);	// chunk length
				var crcoff = pngoff;

				write('PLTE');
				for (var i = 0; i < _palette.length; i++) {
					var c = _palette[i];
					write8((c >>> 16) & 0xff);
					write8((c >>>  8) & 0xff);
					write8(c & 0xff);
				}
				writeCRC(crcoff);
			}
			function writeTRNS() {
				write32(_palette.length);	// chunk length
				var crcoff = pngoff;

				write('tRNS');
				for (var i = 0; i < _palette.length; i++) {
					write8((_palette[i] >>> 24) & 0xff);
				}
				writeCRC(crcoff);
			}
			function writeIDAT() {
				write32(buflen);	// chunk length
				var crcoff = pngoff;

				write('IDAT');
				for (var i = 0; i < bufs.length; i++) {
					bufs[i].copy(png, pngoff);
					pngoff += bufs[i].length;
				}
				writeCRC(crcoff);
			}
			function writeIEND() {
				write32(0);				// chunk length;
				var crcoff = pngoff;

				write('IEND');
				writeCRC(crcoff);
			}

			function write(s) {
				png.write(s, pngoff, 'binary');
				pngoff += s.length;
			}
			function write32(v) {
				png.writeUInt32BE(v, pngoff);
				pngoff += 4;
			}
			function write16(v) {
				png.writeUInt16BE(v, pngoff);
				pngoff += 2;
			}
			function write8(v) {
				png[pngoff++] = v;
			}
			function writeCRC(off) {
				var crc = -1;
				while (off < pngoff) {
					crc = crcCalc[(crc ^ png[off++]) & 0xff] ^ (crc >>> 8);
				}
				write32((crc ^ -1) >>> 0);	// >>> 0 casts to Uint32
			}
		}
	}
}
