// drawing-zlibpng.js
//
var PNGTYPE_PALETTE = 3;
var PNGTYPE_TRUEALPHA = 6;
var PNG_TEXT = "Software\0bwip-js.metafloor.com";
var PNG_CRC = (function() {
	var precalc = [];
	for (var i = 0; i < 256; i++) {
		var c = i;
		for (var j = 0; j < 8; j++) {
			if (c & 1) {
				c = 0xedb88320 ^ (c >>> 1);
			} else {
				c = c >>> 1;
			}
		}
		precalc[i] = c;
	}
	return precalc;
})();

// This has been moved to the nodejs-only section of exports.js due to 
// react-native polyfils.
//var PNG_ZLIB = require('zlib');

// opts is the same options object passed into the bwipjs methods.
function DrawingZlibPng(opts, callback) {
	var image_buffer, image_width, image_height;

	// Provide our specializations for the builtin drawing
	var drawing = DrawingBuiltin(opts);
	drawing.image = image;
	drawing.end = end;
	return drawing;

	// Called by DrawingBuiltin.init() to get the RGBA image data for rendering.
	function image(width, height) {
		// PNG RGBA buffers are prefixed with a one-byte filter type
		image_buffer = Buffer.alloc ? Buffer.alloc(width * height * 4 + height)
									: new Buffer(width * height * 4 + height);
		image_width = width;
		image_height = height;

		// Set background 
		if (/^[0-9a-fA-F]{6}$/.test(''+opts.backgroundcolor)) {
			var rgb = opts.backgroundcolor;
			fillRGB(parseInt(rgb.substr(0,2), 16),
					parseInt(rgb.substr(2,2), 16),
					parseInt(rgb.substr(4,2), 16));
		}

		// The return value is designed to accommodate both canvas pure-RGBA buffers
		// and PNG's row-filter prefixed RGBA buffers.
		return { buffer:image_buffer, ispng:true };
	}

	function fillRGB(r, g, b) {
		var color = ((r << 24) | (g << 16) | (b << 8) | 0xff) >>> 0;

		// This is made complex by the filter byte that prefixes each row...
		var len = image_width * 4 + 1;
		var row = Buffer.alloc ? Buffer.alloc(len) : new Buffer(len);
		for (var i = 1; i < len; i += 4) {
			row.writeUInt32BE(color, i);
		}
		image_buffer.fill(row);
	}

	function end() {
		if (!callback) {
			return new Promise(makePNG);
		} else {
			makePNG(function(png) { callback(null, png); }, function(err) { callback(err); });
		}
	}

	function makePNG(resolve, reject) {
		// DEFLATE the image data
		var bufs = [];
		var buflen = 0;
		var deflator = PNG_ZLIB.createDeflate({
				chunkSize: 32 * 1024,
				level : PNG_ZLIB.Z_DEFAULT_COMPRESSION,
				strategy: PNG_ZLIB.Z_DEFAULT_STRATEGY });
		deflator.on('error', reject);
		deflator.on('data', function(data) { bufs.push(data); buflen += data.length; });
		deflator.on('end', returnPNG);
		deflator.end(image_buffer);

		function returnPNG() {
			var length = 8 + 12 + 13 + 			// PNG Header + IHDR chunk
						 12 + PNG_TEXT.length +	// tEXt
						 12 + buflen +			// IDAT
						 12;					// IEND
			if (opts.dpi) {
				length += 12 + 9;				// pHYs
			}

			// Emulate a byte-stream
			var png = Buffer.alloc(length);
			var pngoff = 0;	// running offset into the png buffer

			write('\x89PNG\x0d\x0a\x1a\x0a'); // PNG file header
			writeIHDR();
			writeTEXT();
			if (opts.dpi) {
				writePHYS();
			}
			writeIDAT();
			writeIEND();

			// Success
			resolve(png);

			function writeIHDR() {
				write32(13);	// chunk length
				var crcoff = pngoff;

				write('IHDR');
				write32(image_width);
				write32(image_height);
				write8(8);		// bit depth
				write8(PNGTYPE_TRUEALPHA);
				write8(0);		// compression default
				write8(0);		// filter default
				write8(0);		// no interlace

				writeCRC(crcoff);
			}
			function writeTEXT() {
				write32(PNG_TEXT.length);	// chunk length
				var crcoff = pngoff;

				write('tEXt');
				write(PNG_TEXT);
				writeCRC(crcoff);
			}
			function writePHYS() {
				write32(9);
				var crcoff = pngoff;

				var pxm = ((opts.dpi || 72) / 0.0254)|0;
				write('pHYs');
				write32(pxm);	// x-axis
				write32(pxm);	// y-axis
				write8(1);		// px/m (the only usable option)
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
					crc = PNG_CRC[(crc ^ png[off++]) & 0xff] ^ (crc >>> 8);
				}
				write32((crc ^ -1) >>> 0);
			}
		}
	}
}
