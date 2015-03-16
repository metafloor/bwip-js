// file: lib/canvas.js
//
// Copyright (c) 2011-2015 Mark Warren
//
// See the COPYRIGHT file in the bwip.js root directory
// for the extended copyright notice.

// With embedding in the browser, we load the symbols externally
BWIPJS.load = function(path) {};

BWIPJS.print = function(s) {
	var div = document.getElementById('output');
	if (div)
		div.innerHTML += s.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '<br>';
};

(function() {
	var head = document.getElementsByTagName('head')[0];

	function emit(s) {
		var tag = document.createElement('script');
		tag.type = 'text/javascript';
		tag.src  = s + '.js';
		head.appendChild(tag);
	}

	// Load all the encoders
	for (var i = 0; i < symdesc.length; i++) {
		if (!symdesc[i])	// last entry can be null
			continue;
		emit('bwipp/' + symdesc[i].sym);
	}

	// Renderers
	emit('bwipp/renlinear');
	emit('bwipp/renmatrix');
	emit('bwipp/renmaximatrix');

	// Fonts
	for (var x = 1; x <= 10; x++) {
		emit('fonts/ocrb10-' + (x < 10 ? '0' : '') + x);
		emit('fonts/ocrb12-' + (x < 10 ? '0' : '') + x);
	}
})();

// Encapsulate the bitmap interface
function Bitmap() {
	var clr  = [0, 0, 0];
	var pts  = [];
	var minx = Infinity;	// min-x
	var miny = Infinity;	// min-y
	var maxx = 0;			// max-x
	var maxy = 0;			// max-y

	this.color = function(r, g, b) {
		clr = [r, g, b];
	}

	this.set = function(x,y) {
		x = Math.floor(x);
		y = Math.floor(y);
		pts.push([ x,y,clr ]);
		if (minx > x) minx = x;
		if (miny > y) miny = y;
		if (maxx < x) maxx = x;
		if (maxy < y) maxy = y;
	}

	this.show = function(cvsid, rot) {
		var cvs = document.getElementById(cvsid);
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

		cvs.width  = w;
		cvs.height = h;

		var ctx = cvs.getContext('2d');
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		ctx.fillStyle = '#000';

		var id  = ctx.getImageData(0, 0, cvs.width, cvs.height);
		var dat = id.data;

		for (var i = 0; i < pts.length; i++) {
			// PostScript builds bottom-up, we build top-down.
			var x = pts[i][0] - minx;
			var y = pts[i][1] - miny;
			var c = pts[i][2];

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
			dat[idx++] = c[0];	// r
			dat[idx++] = c[1];	// g
			dat[idx++] = c[2];	// b
			dat[idx]   = 255;
		}
		ctx.putImageData(id, 0, 0);
		cvs.style.visibility = 'visible';
	}
}
