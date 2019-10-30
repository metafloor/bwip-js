// file : bwip-js/browser-bitmap.js
// 
// bwip-js bitmap interface for an HTML canvas.
//
// Copyright (c) 2011-2018 Mark Warren
//
// Licensed MIT.  See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
"use strict";

if (typeof module == 'object' && typeof exports == 'object') {
	module.exports = Bitmap;
}

// bgcolor is optional, defaults to transparent
function Bitmap(cvsid, rot, bgcolor) {
	var rgb  = [0, 0, 0];
	var padx = 0;	// padding-x
	var pady = 0;	// padding-y

	// Initialized in imageinfo()
	var imgwidth, imgheight, cvs, ctx, idata, bytes;

	this.pad = function(x, y) {
		if (rot == 'R' || rot == 'L') {
			padx = y;
			pady = x;
		} else {
			padx = x;
			pady = y;
		}
	}

	// Sets the final size for the drawing surface and maximum number of
	// colors.  If fonts are lazy-loaded and not available when the cross-compiled
	// code is executing, the number of colors can be wrong.
	this.imageinfo = function(width, height, ncolors) {
		if (rot == 'R' || rot == 'L') {
			imgwidth  = height;
			imgheight = width;
		} else {
			imgwidth  = width;
			imgheight = height;
		}

		cvs  = cvsid instanceof window.HTMLCanvasElement
						? cvsid : document.getElementById(cvsid);
		cvs.width  = imgwidth + 2*padx;
		cvs.height = imgheight + 2*pady;

		ctx = cvs.getContext('2d');

		// Convert from BWIPP cmyk?
		if (typeof bgcolor == 'string') {
			if (/^[0-9a-fA-F]{8}$/.test(bgcolor)) {
				var c = parseInt(bgcolor.substr(0,2), 16) / 255;
				var m = parseInt(bgcolor.substr(2,2), 16) / 255;
				var y = parseInt(bgcolor.substr(4,2), 16) / 255;
				var k = parseInt(bgcolor.substr(6,2), 16) / 255;
				var r = Math.floor((1-c) * (1-k) * 255);
				var g = Math.floor((1-m) * (1-k) * 255);
				var b = Math.floor((1-y) * (1-k) * 255);
				bgcolor = 'rgb(' + r + ',' + g + ',' + b + ')';
			// Convert from BWIPP rgb?
			} else if (/^[0-9a-fA-F]{6}$/.test(bgcolor)) {
				bgcolor = '#' + bgcolor;
			} else {
				bgcolor = '';
			}
			if (bgcolor) {
				var fill = ctx.fillStyle;
				ctx.fillStyle = bgcolor;
				ctx.fillRect(0, 0, cvs.width, cvs.height);
				ctx.fillStyle = fill;
			}
		}

		idata = ctx.getImageData(padx, pady, imgwidth, imgheight);
		bytes = idata.data;
	}

	this.color = function(r, g, b) {
		rgb = [r, g, b];
	}

	// a is the alpha-level of the pixel [0 .. 255]
	this.set = function(x, y, a) {
		// PostScript builds bottom-up, we build top-down.
		if (rot == 'N') {
			y = imgheight - y - 1;
		} else if (rot == 'I') {
			x = imgwidth - x - 1;
		} else {
			y = imgwidth - y;
			if (rot == 'L') {
				var t = y;
				y = imgheight - x - 1;
				x = t - 1;
			} else {
				var t = x;
				x = imgwidth - y;
				y = t;
			}
		}

		// alpha-blend with the existing pixel
		var idx = (y * imgwidth + x) * 4
		a = a / 255;
		bytes[idx+0] = (bytes[idx+0] * (1 - a) + rgb[0] * a)|0;
		bytes[idx+1] = (bytes[idx+1] * (1 - a) + rgb[1] * a)|0;
		bytes[idx+2] = (bytes[idx+2] * (1 - a) + rgb[2] * a)|0;
		bytes[idx+3] = (bytes[idx+3] * (1 - a) + 255 * a)|0;
	}

	this.finalize = function(callback) {
		ctx.putImageData(idata, padx, pady);
		callback && callback(null, cvsid);
	}
}
