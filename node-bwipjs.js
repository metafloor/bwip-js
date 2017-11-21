// file: bwip-js/node-bwipjs.js
//
// Copyright (c) 2011-2017 Mark Warren
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
//
"use strict";

var url	= require('url'),
	bwipp = require('./bwipp'),
	bwipjs = require('./bwipjs'),
	Bitmap = require('./node-bitmap'),
	fixedfont = require('./node-fonts')	// freetype alternative, default
	;

// freetype is the module, freefont is the font manager interface identical to fixedfont
var freetype, freefont;

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
			res.end('' + (err.stack || err), 'utf-8');
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
	// Set the bwip-js defaults
	var scale	= args.scale || 2;
	var scaleX	= +args.scaleX || scale;
	var scaleY	= +args.scaleY || scaleX;
	var rot		= args.rotate || 'N';
	var mono	= args.monochrome || false;
	var padX	= +args.paddingwidth || 0;
	var padY	= +args.paddingheight || 0;

	// The required parameters
	var bcid	= args.bcid;
	var text	= args.text;

	if (!text) {
		return callback('Bar code text not specified.');
	}
	if (!bcid) {
		return callback('Bar code type not specified.');
	}

	// Initialize a barcode writer object.  This is the interface between
	// the low-level BWIPP code, the font manager, and the Bitmap object.
	var bw = new bwipjs(freefont || fixedfont, mono);

	// Set the BWIPP options
	var opts = {};
	for (var id in args) {
		opts[id] = args[id];
	}

	// Remove the non-BWIPP options
	delete opts.bcid;
	delete opts.text;
	delete opts.scale;
	delete opts.scaleX;
	delete opts.scaleY;
	delete opts.rotate;
	delete opts.monochrome;
	delete opts.paddingwidth;
	delete opts.paddingheight;

	// Fix a disconnect in the BWIPP rendering logic
	if (opts.alttext) {
		opts.includetext = true;
	}
	// We use mm rather than inches for height - except pharmacode2 height
	// which is already in mm.
	if (+opts.height && bcid != 'pharmacode2') {
		opts.height = opts.height / 25.4 || 0.5;
	}
	// Likewise, width
	if (+opts.width) {
		opts.width = opts.width / 25.4 || 0;
	}

	// Override the `backgroundcolor` option.
	if (opts.backgroundcolor != null) {
		bw.bitmap(new Bitmap(rot, opts.backgroundcolor, opts));
		delete opts.backgroundcolor;
	} else {
		bw.bitmap(new Bitmap(rot, null, opts));
	}

	// Add optional padding and scale the image.
	bw.bitmap().pad(padX*scaleX || 0, padY*scaleY || 0);
	bw.scale(scaleX, scaleY);

	// Call into the BWIPP cross-compiled code.
	try {
		var ts0 = Date.now();
		bwipp()(bw, bcid, text, opts);
		var ts1 = Date.now();
		bw.render(callback);
		var ts2 = Date.now();
	} catch (e) {
		callback(e);
	}

	// For testing...
	//bw.render(function (err, png) {
	//	if (err) {
	//		callback(err);
	//	} else {
	//		var ts2 = Date.now();
	//		console.log('Encoded,Rendered,Elapsed: ' + (ts1-ts0) + ',' + (ts2-ts1) +
	//					',' + (ts2-ts0) + ' msecs');
	//		callback(null, png);
	//	}
	//});
}

module.exports.useFreetype = function(useFT) {
	if (useFT || useFT == null) {
		freetype = require('./freetype');
		
		var ft_monochr	= freetype.cwrap("monochrome", 'number', ['number']);
		var ft_lookup	= freetype.cwrap("find_font", 'number', ['string']);
		var ft_bitmap	= freetype.cwrap("get_bitmap", 'number',
										['number','number','number','number']);
		var ft_width	= freetype.cwrap("get_width", 'number', []);
		var ft_height	= freetype.cwrap("get_height", 'number', []);
		var ft_left		= freetype.cwrap("get_left", 'number', []);
		var ft_top		= freetype.cwrap("get_top", 'number', []);
		var ft_advance	= freetype.cwrap("get_advance", 'number', []);

		// bwipjs needs the following interfaces:
		//	lookup(fontname)	returns fontid
		//	monochrome(bool)	set the fonts to monochrome or anti-aliased
		//	getglyph(fontid, charcode, width, height)
		freefont = {
			lookup(name) {
				return ft_lookup(name);
			},
			monochrome(enable) {
				return ft_monochr(enable ? 1 : 0);
			},
			getglyph(fontid, charcode, size) {
				var offset = ft_bitmap(fontid, charcode, size, size);
				if (offset <= 0) {
					return { width:0, height:0, top:0, left:0, advance:ft_advance() };
				}
				return {
					width:ft_width(), height:ft_height(), top:ft_top(), left:ft_left(),
					advance:ft_advance(), bytes:freetype.HEAPU8, offset:offset
				}
			}
		};

		// Bring in the custom symbol font for maxicode support (and dotcode when that
		// renderer changes).
		module.exports.loadFont('Symbol', 100,
				require('fs').readFileSync(__dirname + '/fonts/BWIPJS-Symbol.otf', 'binary'));
	} else {
		freetype = freefont = null;
	}
}

module.exports.loadFont = function(fontname, sizemult, fontfile) {
	freetype.FS_createDataFile('/', fontname, fontfile, true, false);

	var load_font = freetype.cwrap("load_font", 'number',
										['string','string','number']);
	var rv = load_font('/' + fontname, fontname, sizemult);
	if (rv != 0) {
		freetype.FS_unlink('/' + fontname);
		throw 'Error: font load failed [' + rv + ']';
	}
}

module.exports.unloadFont = function(fontname) {
	// Unload from freetype
	var close_font = freetype.cwrap("close_font", 'number', ['string']);
	close_font(fontname);

	// Delete from emscripten
	freetype.FS_unlink('/' + fontname);
}

module.exports.bwipjs_version = bwipjs.VERSION;
module.exports.bwipp_version = bwipp.VERSION;
