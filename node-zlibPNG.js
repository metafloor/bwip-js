// file: node-zlibPNG.js
//
// Implements a PNG encoder using only the built-in zlib module.
// No other dependencies.
//
// This is part of the bwip-js project available at:
//
// 		http://metafloor.github.io/bwip-js
//
// Copyright (c) 2011-2015 Mark Warren
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
module.exports = function (width, height, bgcolor) {
	width	= width | 0;
	height	= height | 0;

	var TEXT   		= "Software\0bwip-js.metafloor.com";
	var _pixels  	= [];		// Cannot use Uint32Array - need undefined elts
	var _palette 	= { 0:0 };	// Index-0 is always the background color
	var _ncolors	= 1;		// The background color
	var _cmap		= [];		// Only if ncolors <= 256
	var _trans		= false;	// Has transparency?
	var _gray		= false;	// Has only grays?
	var _nset		= 0;		// Number of set pixels

	// Background color does not support alpha-channel
	if (bgcolor !== undefined) {
		bgcolor	 = (0xff000000|bgcolor) >>> 0;
		_gray	 = ((bgcolor >>> 16) & 0xff) == (bgcolor & 0xff) &&
				   ((bgcolor >>> 8) & 0xff) == (bgcolor & 0xff);
		_nset	 = width * height;

		_palette = {};
		_palette[bgcolor] = 0;
		for (var i = 0; i < _nset; i++)
			_pixels[i] = bgcolor;
	}

	// Set a pixel to the given RGB color
	this.setRGB = function(x, y, c) {
		this.set(x, y, (0xff000000|c) >>> 0);
	}
	// Set a pixel to the given ARGB color
	this.set = function(x, y, clr) {
		var cur = _pixels[y * width + x];
		if (cur === undefined) {
			_nset++;
		} else {
			// alpha-blend with the existing color
			var cura = (cur >>> 24) / 255;
			var curr = (cur >>> 16) & 0xff;
			var curg = (cur >>>  8) & 0xff;
			var curb = cur & 0xff;
			var clra = (clr >>> 24) / 255;
			var clrr = (clr >>> 16) & 0xff;
			var clrg = (clr >>>  8) & 0xff;
			var clrb = clr & 0xff;

			var newa = clra + cura * (1 - clra);	// new alpha 0.0 - 1.0
			if (!newa) {
				clr = 0;	// fully transparent
			} else {
				var newr = ((clrr * clra + curr * cura * (1 - clra)) / newa)|0;
				var newg = ((clrg * clra + curg * cura * (1 - clra)) / newa)|0;
				var newb = ((clrb * clra + curb * cura * (1 - clra)) / newa)|0;
				clr = ((((newa * 255)|0)<<24) | (newr<<16) | (newg<<8) | newb) >>> 0;
			}
		}

		_gray = _gray && 
			((clr >>> 16) & 0xff) == (clr & 0xff) && 
			((clr >>> 8) & 0xff) == (clr & 0xff);
		_trans = _trans || (clr >>> 24) < 255;

		// If we exceed 256 unique colors, we automatically switch to 32-bit
		// PNG (TrueColor with alpha)
		if (_ncolors <= 256 && _palette[clr] === undefined)
			_palette[clr] = _ncolors++;

		_pixels[y * width + x] = clr;
	}
	this.get = function(x, y) {
		return _pixels[y * width + x] || 0;
	}

	// Return a PNG in a Buffer
	// callback(e, png)
	this.render = function(callback) {
		// If not all pixels were set, the 0-alpha background shows through
		_trans = _trans || _nset < width * height;

		// DEFLATE the image data based on color depth
		var image;
		if (_gray && !_trans) {
			image = toGrayScale();
		} else if (_ncolors <= 256) {
			image = toPalette();
		} else if (_gray) {
			image = toGrayAlpha();
		} else {
			image = _trans ? toTrueAlpha() : toTrueColor();
		}
		// v0.12 only...
		//zlib.deflate(image, {
		//		chunkSize: 32 * 1024,
		//		level : zlib.Z_DEFAULT_COMPRESSION,
		//		strategy: zlib.Z_DEFAULT_STRATEGY
		//	}, returnPNG);

		// v0.10+ compatible
		var bufs = [];
		var blen = 0;
		var deflator = zlib.createDeflate({
				chunkSize: 32 * 1024,
				level : zlib.Z_DEFAULT_COMPRESSION,
				strategy: zlib.Z_DEFAULT_STRATEGY });
		deflator.on('error', callback);
		deflator.on('data', function(data) { bufs.push(data); blen += data.length; });
		deflator.on('end', function() { returnPNG(Buffer.concat(bufs, blen)); });
		deflator.end(image);

		function returnPNG(data) {
			var length = 8 + 12 + 13 + 			// PNG Header + IDHR chunk
						 12 + TEXT.length +		// tEXt
						 12 + data.length +		// IDAT
						 12;					// IEND
			if (_gray && !_trans) {
				// no extra chunks
			} else if (_ncolors <= 256) {
				length += 12 + 3*_ncolors;		// PLTE
				if (_trans)
				  length += 12 + _ncolors;		// tRNS		
			}

			// Emulate a byte-stream
			var png = new Buffer(length);
			var pngoff = 0;	// running offset into the png buffer

			write('\x89PNG\x0d\x0a\x1a\x0a'); // PNG file header
			writeIHDR();
			writeTEXT();
			if (_gray && !_trans) {
				// no extra chunks
			} else if (_ncolors <= 256) {
				writePLTE();
				if (_trans)
					writeTRNS();
			}
			writeIDAT();
			writeIEND();

			// Success
			callback(null, png);

			function writeIHDR() {
				write32(13);	// chunk length
				var crcoff = pngoff;

				write('IHDR');
				write32(width);
				write32(height);
				write8(8);		// bit depth
				if (_gray && !_trans) {
					write8(0);	// grayscale
				} else if (_ncolors <= 256) {
					write8(3);	// rgb palette
				} else if (_gray) {
					write8(4);	// grayscale with alpha
				} else if (_trans) {
					write8(6);	// truecolor with alpha
				} else {
					write8(2);	// truecolor
				}
				write8(0);		// compression default
				write8(0);		// filter default
				write8(0);		// no interlace

				writeCRC(crcoff);
			}
			function writeTEXT() {
				write32(TEXT.length);	// chunk length
				var crcoff = pngoff;

				write('tEXt');
				write(TEXT);
				writeCRC(crcoff);
			}
			function writePLTE() {
				write32(_ncolors*3);	// chunk length
				var crcoff = pngoff;

				write('PLTE');
				for (var i = 0; i < _cmap.length; i++) {
					var c = _cmap[i];
					write8((c >>> 16) & 0xff);
					write8((c >>>  8) & 0xff);
					write8(c & 0xff);
				}
				writeCRC(crcoff);
			}
			function writeTRNS() {
				write32(_ncolors);		// chunk length
				var crcoff = pngoff;

				write('tRNS');
				for (var i = 0; i < _cmap.length; i++) {
					write8((_cmap[i] >>> 24) & 0xff);
				}
				writeCRC(crcoff);
			}
			function writeIDAT() {
				write32(data.length);	// chunk length
				var crcoff = pngoff;

				write('IDAT');
				data.copy(png, pngoff);
				pngoff += data.length;
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
	// Convert the image to grayscale
	function toGrayScale() {
		// One extra byte per row for the filter type
		var buf = new Buffer((width + 1) * height);
		var pos = 0;
		for (var y = 0; y < height; y++) {
			var row = y * width;
			buf[pos++] = 0;		// Row filters not implemented
			for (var x = 0; x < width; x++) {
				buf[pos++] = (_pixels[row + x] || 0) & 0xff;
			}
		}
		return buf;
	}
	// Convert the image to grayscale with alpha
	function toGrayAlpha() {
		// One extra byte per row for the filter type
		var buf = new Buffer((width * 2 + 1) * height);
		var pos = 0;
		for (var y = 0; y < height; y++) {
			var row = y * width;
			buf[pos++] = 0;		// Row filters not implemented
			for (var x = 0; x < width; x++) {
				var c = _pixels[row + x] || 0;
				buf[pos++] = c & 0xff;				// gray
				buf[pos++] = (c >>> 24) & 0xff;		// alpha
			}
		}
		return buf;
	}
	// Convert the image data to indexed palette
	function toPalette() {
		// Convert the palette object to the color map
		for (var color in _palette) {
			_cmap[_palette[color]] = color;
		}

		// One extra byte per row for the filter type
		var buf = new Buffer((width + 1) * height);
		var pos = 0;
		for (var y = 0; y < height; y++) {
			var row = y * width;
			buf[pos++] = 0;		// Row filters not implemented
			for (var x = 0; x < width; x++) {
				buf[pos++] = _palette[_pixels[row + x] || 0];
			}
		}
		return buf;
	}
	// Convert the image data to TrueColor
	function toTrueColor() {
		// One extra byte per row for the filter type
		var buf = new Buffer((width * 3 + 1) * height);
		var pos = 0;
		for (var y = 0; y < height; y++) {
			var row	= y * width;
			buf[pos++] = 0;		// Row filters not implemented
			for (var x = 0; x < width; x++) {
				var c = _pixels[row + x] || 0;
				buf[pos++] = (c >>> 16) & 0xff;		// red
				buf[pos++] = (c >>>  8) & 0xff;		// green
				buf[pos++] = c & 0xff;				// blue
			}
		}
		return buf;
	}
	// Convert the image data to TrueColor with alpha
	function toTrueAlpha() {
		// One extra byte per row for the filter type
		var buf = new Buffer((width * 4 + 1) * height);
		var pos = 0;
		for (var y = 0; y < height; y++) {
			var row	= y * width;
			buf[pos++] = 0;		// Row filters not implemented
			for (var x = 0; x < width; x++) {
				var c = _pixels[row + x] || 0;
				buf[pos++] = (c >>> 16) & 0xff;		// red
				buf[pos++] = (c >>>  8) & 0xff;		// green
				buf[pos++] = c & 0xff;				// blue
				buf[pos++] = (c >>> 24) & 0xff;		// alpha
			}
		}
		return buf;
	}
}
