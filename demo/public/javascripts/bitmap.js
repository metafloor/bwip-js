// file : bwip-js/lib/canvas.js
// 
// bwip-js bitmap interface for an HTML canvas.
//
// Copyright (c) 2011-2016 Mark Warren
//
// Licensed MIT.  See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.

// bgcolor is optional, defaults to #fff.
function Bitmap(bgcolor) {
	var clr  = [0, 0, 0];
	var pts  = [];
	var minx = 0;	// min-x
	var miny = 0;	// min-y
	var maxx = 0;	// max-x
	var maxy = 0;	// max-y
	var padx = 0;	// padding-x
	var pady = 0;	// padding-y

	this.pad = function(x, y) {
		padx = x;
		pady = y;
	}

	this.color = function(r, g, b) {
		clr = [r, g, b];
	}

	// Sets the minimim size for the drawing surface (can grow larger).
	// BWIPP has logic for borders (padding) that without this custom call
	// gets lost.  See custom/ren*.ps.
	this.extent = function(llx, lly, urx, ury) {
		llx = Math.floor(llx);
		lly = Math.floor(lly);
		urx = Math.floor(urx);
		ury = Math.floor(ury);
		if (minx > llx) minx = llx;
		if (miny > lly) miny = lly;
		if (maxx < urx) maxx = urx;
		if (maxy < ury) maxy = ury;
	}

	// a is the alpha-level of the pixel [0 .. 255]
	this.set = function(x,y,a) {
		x = Math.floor(x);
		y = Math.floor(y);
		pts.push([ x, y, clr, a ]);
		if (minx > x) minx = x;
		if (miny > y) miny = y;
		if (maxx < x) maxx = x;
		if (maxy < y) maxy = y;
	}

	this.show = function(cvsid, rot) {
		var cvs = cvsid instanceof window.HTMLCanvasElement
					? cvsid : document.getElementById(cvsid);
		if (pts.length == 0) {
			cvs.width  = 32;
			cvs.height = 32;
			cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
			cvs.style.visibility = 'visible';
			return;
		}

		if (rot == 'R' || rot == 'L') {
			var h = maxx-minx+1;
			var w = maxy-miny+1;
		} else {
			var w = maxx-minx+1;
			var h = maxy-miny+1;
		}

		cvs.width  = w + 2*padx;
		cvs.height = h + 2*pady;

		// Convert from cmyk?
		if (bgcolor && bgcolor.length == 8) {
			var c = parseInt(bgcolor.substr(0,2), 16) / 255;
			var m = parseInt(bgcolor.substr(2,2), 16) / 255;
			var y = parseInt(bgcolor.substr(4,2), 16) / 255;
			var k = parseInt(bgcolor.substr(6,2), 16) / 255;
			var r = Math.floor((1-c) * (1-k) * 255);
			var g = Math.floor((1-m) * (1-k) * 255);
			var b = Math.floor((1-y) * (1-k) * 255);
			bgcolor = 'rgb(' + r + ',' + g + ',' + b + ')';
		} else if (bgcolor) {
			bgcolor = '#' + bgcolor;
		}

		var ctx = cvs.getContext('2d');
		ctx.fillStyle = bgcolor || '#fff';
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		ctx.fillStyle = '#000';

		var id  = ctx.getImageData(0, 0, cvs.width, cvs.height);
		var dat = id.data;

		for (var i = 0; i < pts.length; i++) {
			// PostScript builds bottom-up, we build top-down.
			var x = pts[i][0] - minx;
			var y = pts[i][1] - miny;
			var c = pts[i][2];
			var a = pts[i][3] / 255;

			if (rot == 'N') {
				y = h - y - 1; 	// Invert y
			} else if (rot == 'I') {
				x = w - x - 1;	// Invert x
			} else {
				y = w - y; 	// Invert y
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

			var idx = (y * id.width + x) * 4
			dat[idx+0] = (dat[idx+0] * (1 - a) + c[0] * a)|0;
			dat[idx+1] = (dat[idx+1] * (1 - a) + c[1] * a)|0;
			dat[idx+2] = (dat[idx+2] * (1 - a) + c[2] * a)|0;
			dat[idx+3] = 255;
		}
		ctx.putImageData(id, padx, pady);
		cvs.style.visibility = 'visible';
	}
}
