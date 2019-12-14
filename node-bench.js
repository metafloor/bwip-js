// file: bwip-js/node-bench.js
//
// Benchmark version of node-bwipjs.js.  Doesn't encode images to PNG.
"use strict";

var fontlib = require('./fontlib');
var bwipjs  = require('./bwipjs');
var bwipp   = require('./bwipp');

// No callback required as we are not producing an image.
module.exports = function(args) {
	// Set the defaults
	var scale		= args.scale || 2;
	var scaleX		= +args.scaleX || scale;
	var scaleY		= +args.scaleY || scaleX;
	var rot			= args.rotate || 'N';

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

	// Fix a disconnect in the BWIPP rendering logic
	if (args.alttext)
		args.includetext = true;

	// Initialize a barcode writer object
	var bw = new bwipjs(fontlib);
	bw.scale(scaleX, scaleY);
	//bw.bitmap(new Bitmap);

	// Call into BWIPP - no rendering
	bwipp()(bw, bcid, text, args);
}

module.exports.bwipjs_version = bwipjs.VERSION;
module.exports.bwipp_version = bwipp.VERSION;
