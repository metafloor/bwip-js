// file: node-bitmap.js
//
// Implements a PNG encoder using only the built-in zlib module.
// No other dependencies.
//
// This is part of the bwip-js project available at:
//
// 		http://metafloor.github.io/bwip-js
//
// Copyright (c) 2011-2016 Mark Warren
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

var zlib = require('zlib');

// We maintain a static buffer of pixel data to eliminate creating lots of GC items.
//
// Each pixel requires 3 entries : x,y coordinates plus a color index.
// MAX_PIXELS is not the maximum number of pixels in the image, just the maximum
// pixels we "set".   It puts a hard limit on maximum image size.
var MAX_PIXELS = 4 * 1024 * 1024;
var _pixels = [];

// Math.floor() is notoriously slow.  Caching it seems to help.
var floor = Math.floor;

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

// bgcolor is optional.
module.exports = function (rot, bgcolor) {
	var _text = "Software\0bwip-js.metafloor.com";
	var _imgw, _imgh;		// image width/height, excluding padding
	var _minx = Infinity, _miny = Infinity,
		_maxx = 0, _maxy = 0,
		_padx = 0, _pady = 0,
		_clrr = 0, _clrg = 0, _clrb = 0,
		_npix = 0;
	var _clrmap 	= { 0:0 };	// Index-0 is always the background color (black, fully trans)
	var _palette	= [ 0 ];	// Color palette
	var _trans		= true;		// Has transparency?

	// Background color does not support alpha-channel (the alpha compositing
	// algorithm we use cannot support it...)
	if (typeof bgcolor === 'string') {
		bgcolor = (0xff000000 | parseInt(bgcolor, 16)) >>> 0;
	} else if (bgcolor !== undefined) {
		bgcolor = (0xff000000 | bgcolor) >>> 0;
	} else {
		bgcolor = 0;	// black, fully transparent
	}
	if (bgcolor) {
		_palette = [ bgcolor ];
		_clrmap  = {};
		_clrmap[bgcolor] = 0;
		_trans = (bgcolor >>> 24) < 255;
	}

	var _baka = (bgcolor >>> 24) & 0xff;	// 0 or 255 for the bg alpha
	var _bakr = (bgcolor >>> 16) & 0xff;
	var _bakg = (bgcolor >>>  8) & 0xff;
	var _bakb = (bgcolor >>>  0) & 0xff;

	var tsX = Date.now();

	// Optional padding.  Rotates with the image.
	this.pad = function(width, height) {
		_padx = width|0;
		_pady = height|0;
	}
	
	this.color = function(r, g, b) {
		_clrr = r;
		_clrg = g;
		_clrb = b;
	}

	// Set a pixel to the ARGB color.  Coordinates are in PostScript convention,
	// with 0,0 at the bottom-left of the page. 
	this.set = function(x, y, a) {
		x = floor(x)|0;
		y = floor(y)|0;
		a = a|1;

		if (x > 4095 || y > 4095 || x < -4095 || y < -4095 || _npix >= MAX_PIXELS) {
			throw new Error("bwipjs: exceeded maximum image size");
		}
		if (x > _maxx) {
			_maxx = x;
		} else if (x < _minx) {
			_minx = x;
		}
		if (y > _maxy) {
			_maxy = y;
		} else if (y < _miny) {
			_miny = y;
		}

		// Alpha-blend with the background color
		var na = a / 255;
		var ia = 1 - na;
		var newa = _baka || a;
		var newr = (_clrr * na + _bakr * ia)|0;
		var newg = (_clrg * na + _bakg * ia)|0;
		var newb = (_clrb * na + _bakb * ia)|0;
		var	argb = ((newa<<24) | (newr<<16) | (newg<<8) | newb)>>>0;

		if (_clrmap[argb] === undefined) {
			_clrmap[argb] = _palette.length;
			_palette.push(argb);
			_trans = _trans || (argb >>> 24) < 255;
		}

		// Do not change the arithmetic in this expression without benchmarking.
		// For example, changing the multiply by 0x10000 to a bitshift added 50%
		// to the entire cost of the function!
		//
		// The color-index is in the upper most bits of the value so it can be
		// expanded to 16 bits, if needed.
		_pixels[_npix++] = (x + 4096) + (y + 4096) * 0x10000 + _clrmap[argb] * 0x100000000;
	}

	// Return a PNG in a Buffer
	// callback(err, png)
	this.render = function(callback) {
		if (_minx == Infinity || _miny == Infinity) {
			_minx = _miny = 0;
		}
		var ts0 = Date.now();

		// Determine image width and height
		if (rot == 'R' || rot == 'L') {
			_imgh = _maxx-_minx+1;
			_imgw = _maxy-_miny+1;
			// Swap padding values
			var t = _pady;
			_pady = _padx;
			_padx = t;
		} else {
			_imgw = _maxx-_minx+1;
			_imgh = _maxy-_miny+1;
		}

		// DEFLATE the image data based on color depth
		var image;
		var pngtype;
		if (_palette.length <= 256) {
			image = toPalette();
			pngtype = 3;
		} else if (_trans) {
			image = toTrueAlpha();
			pngtype = 6;
		} else {
			image = toTrueColor();
			pngtype = 2;
		}
		var ts1 = Date.now();

		var bufs = [];
		var buflen = 0;
		var deflator = zlib.createDeflate({
				chunkSize: 32 * 1024,
				level : zlib.Z_DEFAULT_COMPRESSION,
				strategy: zlib.Z_DEFAULT_STRATEGY });
		deflator.on('error', callback);
		deflator.on('data', function(data) { bufs.push(data); buflen += data.length; });
		deflator.on('end', returnPNG);
		deflator.end(image);

		function returnPNG() {
			var ts2 = Date.now();
			var length = 8 + 12 + 13 + 			// PNG Header + IHDR chunk
						 12 + _text.length +	// tEXt
						 12 + buflen +			// IDAT
						 12;					// IEND
			if (_palette.length <= 256) {
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
			if (_palette.length <= 256) {
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
				write8(pngtype);
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
	function toPalette() {
		// One extra byte per row for the filter type
		var row = _imgw + 2*_padx + 1;
		var buf = Buffer.alloc(row * (_imgh + 2*_pady));
		for (var i = 0, l = _npix; i < l; i++) {
			var m = _pixels[i];
			var x = (m & 0xffff) - 4096 - _minx;
			var y = (m >>> 16) - 4096 - _miny;
			var c = (m / 0x100000000)|0;
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
			buf[row * (y + _pady) + 1 + _padx + x] = c;
		}
		return buf;
	}
	// Convert the image data to TrueColor
	function toTrueColor() {
		// One extra byte per row for the filter type
		var row = (_imgw + 2*_padx) * 3 + 1;
		var buf = Buffer.alloc(row * (_imgh + 2*_pady));
		for (var i = 0, l = _npix; i < l; i++) {
			var m = _pixels[i];
			var x = (m & 0xffff) - 4096 - _minx;
			var y = (m >>> 16) - 4096 - _miny;
			var c = _palette[(m / 0x100000000)|0];
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
			var pos = row * (y + _pady) + 1 + (_padx + x) * 3;
			buf[pos+0] = c >>> 16;		// red
			buf[pos+1] = c >>>  8;		// green
			buf[pos+2] = c;				// blue
		}
		return buf;
	}
	// Convert the image data to TrueColor with alpha
	function toTrueAlpha() {
		// One extra byte per row for the filter type
		var row = (_imgw + 2*_padx) * 4 + 1;
		var buf = Buffer.alloc(row * (_imgh + 2*_pady));
		for (var i = 0, l = _npix; i < l; i++) {
			var m = _pixels[i];
			var x = (m & 0xffff) - 4096 - _minx;
			var y = (m >>> 16) - 4096 - _miny;
			var c = _palette[(m / 0x100000000)|0];
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
			var pos = row * (y + _pady) + 1 + (_padx + x) * 4;
			buf[pos+0] = c >>> 16;		// red
			buf[pos+1] = c >>>  8;		// green
			buf[pos+2] = c;				// blue
			buf[pos+3] = c >>> 24;		// alpha
		}
		return buf;
	}
}
