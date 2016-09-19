// file: node-bwipjs.js
//
// Copyright (c) 2011-2016 Mark Warren
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
//
var url	= require('url'),
	bwipp = require(__dirname + '/bwipp'),
	bwipjs = require(__dirname + '/bwipjs'),
	zlibPNG	= require(__dirname + '/node-zlibPNG'),
	freetype = require(__dirname + '/freetype')
	;

// This module's primary export is the bwip-js HTTP request handler
module.exports = function(req, res, opts) {
	var args = url.parse(req.url, true).query;

	// Convert boolean empty parameters to true
	for (var id in args) {
		if (args[id] === '')
			args[id] = true;
	}
	// Add in server options/overrides
	opts = opts || {};
	for (var id in opts) {
		args[id] = opts[id];
	}

	module.exports.toBuffer(args, function(err, png) {
		if (err) {
			res.writeHead(400, { 'Content-Type':'text/plain' });
			res.end(err, 'ascii');
		} else {
			res.writeHead(200, { 'Content-Type':'image/png' });
			res.end(png, 'binary');
		}
	});
}

//
// bwipjs.toBuffer(options, callback)
//
// Generates a PNG-encoded image in a buffer.
//
// `options` are the bwip-js/BWIPP options wrapped in an object.
// `callback` is an event handler with prototype:
//
// 		function callback(err, png)
//
// 		`err` is an Error object or string.  If `err` is set, `png` is null.
// 		`png` is a node Buffer containing the PNG image.
//
module.exports.toBuffer = function(args, callback) {
	// Set the defaults
	var scale	= args.scale || 2;
	var scaleX	= +args.scaleX || scale;
	var scaleY	= +args.scaleY || scaleX;
	var rot		= args.rotate || 'N';
	var mono	= args.monochrome || false;

	// To protect the server from memory exhaustion, you can optionally limit
	// the size of the image.  Value is in pixels.
	// For example sizelimit=1024*1024 will limit images to under (roughly) 1MiB.
	var sizelimit = +args.sizelimit || 0;

	// The required parameters
	var bcid	= args.bcid;
	var text	= args.text;

	if (!text) {
		return callback('Bar code text not specified.');
	}
	if (!bcid) {
		return callback('Bar code type not specified.');
	}
	// Remove the non-BWIPP options
	delete args.scale;
	delete args.scaleX;
	delete args.scaleY;
	delete args.rotate;
	delete args.text;
	delete args.bcid;
	delete args.monochrome;
	delete args.sizelimit;

	// Initialize a barcode writer object.  This is the interface between
	// the low-level BWIPP code, freetype, and the Bitmap object.
	var bw = new bwipjs(freetype, mono);

	// Set the options
	var opts = {};
	for (var id in args) {
		opts[id] = args[id];
	}
	// Fix a disconnect in the BWIPP rendering logic
	if (opts.alttext) {
		opts.includetext = true;
	}
	// We use mm rather than inches for height - except pharmacode2 height
	// is explicitly in mm
	if (opts.height && bcid != 'pharmacode2') {
		opts.height = opts.height / 25.4 || 0.5;
	}

	// Override the `backgroundcolor` option.
	if (opts.backgroundcolor) {
		bw.bitmap(new Bitmap(parseInt(''+opts.backgroundcolor, 16)));
		delete opts.backgroundcolor;
	} else {
		bw.bitmap(new Bitmap);
	}

	// Constrain resulting image size
	bw.bitmap().limit(sizelimit);

	// Add optional padding and scale the image.
	bw.bitmap().pad(+opts.paddingwidth*scaleX || 0,
					+opts.paddingheight*scaleY || 0);
	bw.scale(scaleX, scaleY);

	// Call into the BWIPP cross-compiled code
	try {
		bwipp()(bw, bcid, text, opts);
		bw.bitmap().getPNG(rot, callback);
	} catch (e) {
		// Invoking this callback is synchronous.
		callback('' + e);
	}
}

module.exports.loadFont = function(fontname, sizemult, fontfile) {
	freetype.FS_createDataFile('/', fontname, fontfile, true, false);

	var load_font = freetype.cwrap("load_font", 'number',
										['string','string','number']);
	var rv = load_font('/' + fontname, fontname, sizemult);
	if (rv != 0) {
		freetype.unlink('/' + fontname);
		throw 'Error: font load failed [' + rv + ']';
	}
}

module.exports.unloadFont = function(fontname) {
	// Unload from freetype
	var close_font = freetype.cwrap("close_font", 'number', ['string']);
	close_font(fontname);

	// Delete from emscripten
	freetype.unlink('/' + fontname);
}

module.exports.bwipjs_version = "1.1.1 (2016-09-19)";
module.exports.bwipp_version = "2016-08-29";


// bwipjs Bitmap interface
// Must export to the PostScript emulation:
//      this.extent(llx, lly, urx, ury) {   ## See comments below.
//		this.color(r, g, b)		## The color to use for subsequent set()'s.
//		this.set(x, y, a)		## Sets the pixel at (x,y) using the current
//								## color with alpha-a.
//
// bgcolor is optional.  If specified, if must be an integer or string RGB
//						 value. Alpha channel is not supported.
function Bitmap(bgcolor) {
	var _clrr = 0;					// current red
	var _clrg = 0;					// current green
	var _clrb = 0;					// current blue
	var _pixs = {};					// x,y = argb
	var _minx = Infinity;
	var _miny = Infinity;
	var _maxx = 0;
	var _maxy = 0;
	var _padx = 0;					// optional left/right padding
	var _pady = 0;					// optional top/bottom padding
	var _sizelim = 0;				// optional size limit

	if (typeof bgcolor === 'string') {
		bgcolor = (0xff000000 | parseInt(bgcolor, 16)) >>> 0;
	} else if (bgcolor !== undefined) {
		bgcolor = (0xff000000 | bgcolor) >>> 0;
	}

	// Optional padding.  Rotates with the image.
	this.pad = function(width, height) {
		_padx = width;
		_pady = height;
	}

	this.limit = function(size) {
		_sizelim = size;
	}

	// Sets the minimim size for the drawing surface (can grow larger).
	// BWIPP has logic for borders (padding) that without this custom call
	// gets lost.  See custom/renlinear.ps.
	this.extent = function(llx, lly, urx, ury) {
		llx = Math.floor(llx);
		lly = Math.floor(lly);
		urx = Math.floor(urx);
		ury = Math.floor(ury);
		if (_minx > llx) _minx = llx;
		if (_miny > lly) _miny = lly;
		if (_maxx < urx) _maxx = urx;
		if (_maxy < ury) _maxy = ury;

		// This is the only place where size limit is enforced.
		if (_sizelim && _maxx * _maxy > _sizelim) {
			throw 'BWIPJS: image exceeded size limit';
		}
	}

	this.color = function(r,g,b) {
		_clrr = r;
		_clrg = g;
		_clrb = b;
	}

	this.set = function(x, y, a) {
		// postscript graphics work with floating-pt numbers
		x = Math.floor(x);
		y = Math.floor(y);

		if (_minx > x) _minx = x;
		if (_maxx < x) _maxx = x;
		if (_miny > y) _miny = y;
		if (_maxy < y) _maxy = y;
		
		var xy	= x + ',' + y;
		var cx	= _pixs[xy];
		var r, g, b;
		if (cx === undefined)
			cx = bgcolor;
		if (cx === undefined) {
			r = _clrr;
			g = _clrg;
			b = _clrb;
		} else {
			// alpha-blend with the existing color
			// dst is the existing "background" color
			// src is the new color
			var dsta = (cx >>> 24) / 255;
			var dstr = (cx >>> 16) & 0xff;
			var dstg = (cx >>>  8) & 0xff;
			var dstb = cx & 0xff;
			var srca = a / 255;
			var newa = srca + dsta * (1 - srca);	// new alpha 0.0 - 1.0
			if (!newa) {
				r = g = b = a = 0;
			} else {
				r = ((_clrr * srca + dstr * dsta * (1 - srca)) / newa)|0;
				g = ((_clrg * srca + dstg * dsta * (1 - srca)) / newa)|0;
				b = ((_clrb * srca + dstb * dsta * (1 - srca)) / newa)|0;
				a = (newa * 255)|0;
			}
		}

		_pixs[xy] = ((a << 24) | (r << 16) | (g << 8) | b) >>> 0;
	}

	// `rot` is the desired image rotation
	// `callback` prototype: function(err, png)
	this.getPNG = function(rot, callback) {
		// determine image width and height
		if (rot == 'R' || rot == 'L') {
			var h = _maxx-_minx+1;
			var w = _maxy-_miny+1;
			// Swap padding values
			var t = _pady;
			_pady = _padx;
			_padx = t;
		} else {
			var w = _maxx-_minx+1;
			var h = _maxy-_miny+1;
		}

		var png = new zlibPNG(w + 2*_padx, h + 2*_pady, bgcolor);

		for (var xy in _pixs) {
			var pts = xy.split(',');
			var x	= +pts[0] - _minx;
			var y	= +pts[1] - _miny;

			// PostScript builds bottom-up, we build top-down.
			if (rot == 'N') {
				y = h - y - 1; 	// Invert y
			} else if (rot == 'I') {
				x = w - x - 1;	// Invert x
			} else {
				y = w - y; 		// Invert y
				if (rot == 'L') {
					var t = y;
					y = h - x - 1;
					x = t - 1;
				} else {
					var t = x;
					x = w - y;
					y = t;
				}
			}
			png.set(x + _padx, y + _pady, _pixs[xy]);
		}

		return png.render(callback);
	}
}

