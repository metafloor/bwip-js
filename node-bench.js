// file: bwip-js/node-bench.js
//
// Benchmark version of node-bwipjs.js.  Doesn't encode images to PNG.
var freetype = require('./freetype');
var bwipjs   = require('./bwipjs');
var bwipp    = require('./bwipp');

// No callback required as we are not producing an image.
module.exports = function(args) {
	// Set the defaults
	var scale		= args.scale || 2;
	var scaleX		= +args.scaleX || scale;
	var scaleY		= +args.scaleY || scaleX;
	var rot			= args.rotate || 'N';
	var monochrome	= args.monochrome || false;

	// The required parameters
	var bcid = args.bcid;
	var text = args.text;

	if (!text)
		return callback('Bar code text not specified.');
	if (!bcid)
		return callback('Bar code type not specified.');

	// Remove the non-BWIPP options
	delete args.scale;
	delete args.scaleX;
	delete args.scaleY;
	delete args.rotate;
	delete args.text;
	delete args.bcid;
	delete args.monochrome;

	// Fix a disconnect in the BWIPP rendering logic
	if (args.alttext)
		args.includetext = true;

	// Initialize a barcode writer object
	var bw = new bwipjs(freetype, monochrome);
	bw.scale(scaleX, scaleY);
	bw.bitmap(new Bitmap);

	// Call into BWIPP
	bwipp()(bw, bcid, text, args);
}

// bwip-js bitmap interface
// Must export to the PostScript emulation:
//		this.color(r, g, b)		## The color to use for subsequent set()'s.
//		this.extent(llx, lly, urx, ury) {	## See comments below.
//		this.set(x, y, a)		## Sets the pixel at (x,y) using the current
//								## color with alpha-a.
//
// bgcolor is optional.  If specified, if must be an integer or string RGB
// value.  Alpha channel is not supported.
function Bitmap(bgcolor) {
	var _clrr = 0;					// current red
	var _clrg = 0;					// current green
	var _clrb = 0;					// current blue
	var _pixs = {};					// x,y = argb
	var _minx = Infinity;
	var _miny = Infinity;
	var _maxx = 0;
	var _maxy = 0;

	if (typeof bgcolor === 'string')
		bgcolor = (0xff000000 | parseInt(bgcolor, 16)) >>> 0;
	else if (bgcolor !== undefined)
		bgcolor = (0xff000000 | bgcolor) >>> 0;

	this.color = function(r,g,b) {
		_clrr = r;
		_clrg = g;
		_clrb = b;
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
}

