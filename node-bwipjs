// file: node-bwipjs
//
// Copyright (c) 2011-2015 Mark Warren
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
//
var url	= require('url'),
	fs	= require('fs'),
	vm	= require('vm'),
	zlibPNG	= require(__dirname + '/node-zlibPNG')
	;

// The global inside a sandboxed context is virtually useless.  None of
// the goodies available in a primary context.
// Emscripten uses the existence of require() and process to decide whether it is
// running in node.  And console is really nice to have.  
// And it cannot run without all of the TypedArray constructors.
var sandbox = vm.createContext({
		require:require,
		process:process,
		console:console,
		ArrayBuffer:ArrayBuffer, DataView:DataView,
		Int8Array:Int8Array, Uint8Array:Uint8Array,
		Uint8ClampedArray:Uint8ClampedArray,
		Int16Array:Int16Array, Uint16Array:Uint16Array,
		Int32Array:Int32Array, Uint32Array:Uint32Array,
		Float32Array:Float32Array, Float64Array:Float64Array,

		// The .mem image makes it really hard to use as a library module
		Module:{ memoryInitializerPrefixURL : __dirname + '/' }
	});

load('freetype.js');

// We will use a synchronous demand-loader as each module's load-cost is
// a one-time hit and it prevents any potential race conditions.
function load(path) {
	var text = fs.readFileSync(__dirname + '/' + path);
	if (!text)
		throw new Error(path + ": could not read file");

	vm.runInContext(text, sandbox, { filename:path });
}


// This module's primary export is the bwip-js HTTP request handler
module.exports = function(req, res) {
	var args = url.parse(req.url, true).query;

	// Convert boolean empty parameters to true
	for (var id in args) {
		if (args[id] === '')
			args[id] = true;
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
	// Finish loading bwip-js?
	if (typeof sandbox.BWIPJS === 'undefined') {
		load('bwip.js');
		sandbox.BWIPJS.load = load;
	}

	// Set the defaults
	var scale	= args.scale || 2;
	var scaleX	= +args.scaleX || scale;
	var scaleY	= +args.scaleY || scaleX;
	var rot		= args.rotate || 'N';
	var mono	= args.monochrome || false;

	// The required parameters
	var bcid	= args.bcid;
	var text	= args.text;

	if (!text)
		return callback('Bar code text not specified.');
	if (!bcid)
		return callback('Bar code type not specified.');
	if (!fs.existsSync(__dirname + '/bwipp/' + bcid + '.js'))
		return callback('Bar code type "' + bcid + '" unknown.');

	// Remove the non-BWIPP options
	delete args.scale;
	delete args.scaleX;
	delete args.scaleY;
	delete args.rotate;
	delete args.text;
	delete args.bcid;
	delete args.monochrome;

	// Initialize a barcode writer object
	var bw = new sandbox.BWIPJS;

	// Set the options
	var opts = {};
	for (var id in args) {
		opts[id] = bw.value(args[id]);
	}

	// Fix a disconnect in the BWIPP rendering logic
	if (opts.alttext)
		opts.includetext = bw.value(true);

	// We use mm rather than inches for height - except pharmacode2 height
	// is explicitly in mm
	if (opts.height && bcid != 'pharmacode2')
		opts.height = opts.height / 25.4 || 0.5;
	
	// Enable/disable monochrome font rendering
	sandbox.BWIPJS.ft_monochrome(mono ? 1 : 0);

	// Feature or bug, BWIPP does not extend the background color into the
	// human readable text.  Fix that in the bitmap interface.
	if (opts.backgroundcolor) {
		bw.bitmap(new Bitmap(parseInt(''+opts.backgroundcolor, 16)));
		delete opts.backgroundcolor;
	} else {
		bw.bitmap(new Bitmap);
	}

	bw.scale(scaleX, scaleY);
	bw.push(text);
	bw.push(opts);

	bw.call(bcid, function(e) {
		if (e) {
			callback('BWIP-JS ERROR: ' + e);
		} else {
			bw.bitmap().getPNG(rot, callback);
		}
	});
}

module.exports.loadFont = function(fontname, sizemult, fontfile) {
	sandbox.Module.FS_createDataFile('/', fontname, fontfile, true, false);

	var load_font = sandbox.Module.cwrap("load_font", 'number',
										['string','string','number']);
	var rv = load_font('/' + fontname, fontname, sizemult);
	if (rv != 0) {
		sandbox.FS.unlink('/' + fontname);
		throw 'Error: font load failed [' + rv + ']';
	}
}

module.exports.unloadFont = function(fontname) {
	// Unload from freetype
	var close_font = sandbox.Module.cwrap("close_font", 'number', ['string']);
	close_font(fontname);

	// Delete from emscripten
	sandbox.FS.unlink('/' + fontname);
}


// bwip-js bitmap interface
// Must export to the PostScript emulation:
//		this.color(r, g, b)		## The color to use for subsequent set()'s.
//		this.set(x, y, a)		## Sets the pixel at (x,y) using the current
//								## color with alpha-a.
//
// bgcolor is optional.  If specified, if must be an integer or string RGB value.
//						 Alpha channel is not supported.
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
		} else {
			var w = _maxx-_minx+1;
			var h = _maxy-_miny+1;
		}

		var png = new zlibPNG(w, h, bgcolor);
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
			png.set(x, y, _pixs[xy]);
		}

		return png.render(callback);
	}
}

