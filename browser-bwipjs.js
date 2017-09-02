// file: bwip-js/browser-bwipjs.js
//
// Copyright (c) 2011-2017 Mark Warren
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
//
"use strict";

var bwipp = require('./bwipp'),
	bwipjs = require('./bwipjs'),
	Bitmap = require('./browser-bitmap'),
	fontlib = require('./browser-fonts')
	;

// Make it easy on the callers - transparent async loading of fonts.
var fontsloaded = false;
var pending = [];
fontlib.onready(function() {
	fontsloaded = true;
	for (var i = 0; i < pending.length; i++) {
		pending[i]();
	}
	pending = null;
});

// This module's one and only export is the canvas rendering.
// `cvs` is either an id to a canvas element, or the actual canvas element.
// `opts` is the bwip-js/BWIPP options object.
// `callback` has the usual node callback signature:
//
//		function (err, cvs)
//
// Where cvs is the same parameter as passed into this call.
module.exports = function toCanvas(cvs, opts, callback) {
	if (!fontsloaded) {
		pending.push(function() { toCanvas(cvs, opts, callback) });
		return;
	}

	// Make a mutable copy of the user's options
	var vals = {};
	for (var id in opts) {
		vals[id] = opts[id];
	}

	// Set the defaults
	var scale	= vals.scale || 2;
	var scaleX	= +vals.scaleX || scale;
	var scaleY	= +vals.scaleY || scaleX;
	var rot		= vals.rotate || 'N';
	var mono	= vals.monochrome || false;
	var padX	= +vals.paddingwidth || 0;
	var padY	= +vals.paddingheight || 0;

	// The required parameters
	var bcid	= vals.bcid;
	var text	= vals.text;

	if (!text) {
		return callback('Bar code text not specified.');
	}
	if (!bcid) {
		return callback('Bar code type not specified.');
	}
	// Remove the non-BWIPP options
	delete vals.scale;
	delete vals.scaleX;
	delete vals.scaleY;
	delete vals.rotate;
	delete vals.text;
	delete vals.bcid;
	delete vals.monochrome;
	delete vals.paddingwidth;
	delete vals.paddingheight;

	// Initialize a barcode writer object.  This is the interface between
	// the low-level BWIPP code, the font manager, and the Bitmap object.
	var bw = new bwipjs(fontlib, mono);

	// Fix a disconnect in the BWIPP rendering logic
	if (vals.alttext) {
		vals.includetext = true;
	}
	// We use mm rather than inches for height - except pharmacode2 height
	// which is already in mm.
	if (+vals.height && bcid != 'pharmacode2') {
		vals.height = vals.height / 25.4 || 0.5;
	}
	// Likewise, width
	if (+vals.width) {
		vals.width = vals.width / 25.4 || 0;
	}

	// Override the `backgroundcolor` option.
	if (vals.backgroundcolor) {
		bw.bitmap(new Bitmap(cvs, rot, parseInt(''+vals.backgroundcolor, 16)));
		delete vals.backgroundcolor;
	} else {
		bw.bitmap(new Bitmap(cvs, rot));
	}

	// Add optional padding and scale the image.
	bw.bitmap().pad(padX*scaleX || 0, padY*scaleY || 0);
	bw.scale(scaleX, scaleY);

	// Call into the BWIPP cross-compiled code
	try {
		bwipp()(bw, bcid, text, vals);

		// Let the font manager demand-load any fonts.
		fontlib.loadfonts(function(err) {
			if (err) {
				callback(err);
			} else {
				bw.render(callback);
			}
		});
	} catch (e) {
		callback(e.stack || e);
	}
}

module.exports.bwipjs_version = bwipjs.VERSION;
module.exports.bwipp_version = bwipp.VERSION;
