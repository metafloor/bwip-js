// file : bwip-js/bwipjs.js
//
// Graphics-context interface to the BWIPP cross-compiled code

// Math.floor(), etc. are notoriously slow.  Caching seems to help.
var floor = Math.floor;
var round = Math.round;
var ceil  = Math.ceil;

// fontlib : fixedfont or freetype
function BWIPJS(fontlib, monochrome) {
	if (this.constructor !== BWIPJS) {
		return new BWIPJS(fontlib, monochrome);
	}
	this.bmap	 = null;// Bitmap interface
	this.gstk	 = [];	// Graphics save/restore stack
	this.cmds	 = [];	// Graphics primitives to replay when rendering
	this.rgbmap  = {};	// Unique RGB entries used with the fonts
	this.ncolors = 0;	// Number of unique RGBA entries
	this.fontlib = fontlib;

	this.reset();

	// Bounding box
	this.minx = this.miny = Infinity;
	this.maxx = this.maxy = 0;

	fontlib.monochrome(monochrome);
}

BWIPJS.prototype.bitmap = function(bitmap) {
	if (bitmap) {
		this.bmap = bitmap;
	}
	return this.bmap;
}

// All graphics state that must be saved/restored is given a prefix of g_
BWIPJS.prototype.reset = function() {
	// Current Transform Matrix - since we don't do rotation, we can fake
	// the matrix math
	this.g_tdx	= 0;		// CTM x-offset
	this.g_tdy	= 0;		// CTM y-offset
	this.g_tsx	= 1;		// CTM x-scale factor
	this.g_tsy	= 1;		// CTM y-scale factor

	this.g_posx	= 0;		// current x position
	this.g_posy	= 0;		// current y position
	this.g_penw	= 1;		// current line/pen width
	this.g_path	= [];		// current path
	this.g_font	= null;		// current font object
	this.g_rgb  = [0,0,0];	// current color (black)
}
BWIPJS.prototype.save = function() {
	// clone all g_ properties
	var ctx = {};
	for (var id in this) {
		if (id.indexOf('g_') == 0) {
			ctx[id] = clone(this[id]);
		}
	}
	this.gstk.push(ctx);

	// Perform a deep clone of the graphics state properties
	function clone(v) {
		if (v instanceof Array) {
			var t = [];
			for (var i = 0; i < v.length; i++)
				t[i] = clone(v[i]);
			return t;
		}
		if (v instanceof Object) {
			var t = {};
			for (var id in v)
				t[id] = clone(v[id]);
			return t;
		}
		return v;
	}
}
BWIPJS.prototype.restore = function() {
	if (!this.gstk.length) {
		throw new Error('grestore: stack underflow');
	}
	var ctx = this.gstk.pop();
	for (var id in ctx) {
		this[id] = ctx[id];
	}
	// Color is part of the bitmap interface and must be restored separately.
	var self = this;
	var r = this.g_rgb[0], g = this.g_rgb[1], b = this.g_rgb[2];
	this.cmds.push(function() {
		self.bmap.color(r, g, b);
	});
}
// Per the postscript spec:
//	As discussed in Section 4.4.1, Current Path, points entered into a path
//	are immediately converted to device coordinates by the current
//	transformation matrix (CTM); subsequent modifications to the CTM do not
//	affect existing points.  `currentpoint` computes the user space
//	coordinates corresponding to the current point according to the current
//	value of the CTM. Thus, if a current point is set and then the CTM is
//	changed, the coordinates returned by currentpoint will be different
//	from those that were originally specified for the point. 
BWIPJS.prototype.currpos = function() {
	return { x:(this.g_posx-this.g_tdx)/this.g_tsx,
			 y:(this.g_posy-this.g_tdy)/this.g_tsy
		};
}
BWIPJS.prototype.currfont = function() {
	return this.g_font;
}
BWIPJS.prototype.findfont = function(name) {
	return { FontName:name };
}
BWIPJS.prototype.translate = function(x, y) {
	this.g_tdx = this.g_tsx * x;
	this.g_tdy = this.g_tsy * y;
}
BWIPJS.prototype.scale = function(x, y) {
	this.g_tsx *= x;
	this.g_tsy *= y;
}
BWIPJS.prototype.setlinewidth = function(w) {
	this.g_penw = w;
}
BWIPJS.prototype.setfont = function(f) {
	this.g_font = f;
}
BWIPJS.prototype.getfont = function() {
	return this.fontlib.lookup(this.g_font.FontName.toString());
}
// Special function to replace setanycolor in BWIPP
// Takes a string of hex digits either 6 chars in length (rrggbb) or
// 8 chars (ccmmyykk).
BWIPJS.prototype.setcolor = function(s) {
	if (s.length == 6) {
		var r = parseInt(s.substr(0,2), 16);
		var g = parseInt(s.substr(2,2), 16);
		var b = parseInt(s.substr(4,2), 16);
	} else if (s.length == 8) {
		var c = parseInt(s.substr(0,2), 16) / 255;
		var m = parseInt(s.substr(2,2), 16) / 255;
		var y = parseInt(s.substr(4,2), 16) / 255;
		var k = parseInt(s.substr(6,2), 16) / 255;
		var r = round((1-c) * (1-k) * 255);
		var g = round((1-m) * (1-k) * 255);
		var b = round((1-y) * (1-k) * 255);
	} else {
		throw 'bwipp.setcolor: invalid string length (' + s + ')' ;
	}

	// Set the color in the bitmap
	var self = this;
	self.cmds.push(function() {
		self.bmap.color(r, g, b);
	});

	this.g_rgb = [ r, g, b ];
}
BWIPJS.prototype.newpath = function() {
	this.g_path = [];
}
BWIPJS.prototype.closepath = function() {
	if (this.g_path.length)  {
		var c0 = this.g_path[0];
		var c1 = this.g_path[this.g_path.length-1];
		this.g_path.push([ c1[0], c1[1] ]);
		this.g_path.push(['c']);
		this.g_path.push([ c0[0], c0[1] ]);
	}
}
BWIPJS.prototype.moveto = function(x,y) {
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
}
BWIPJS.prototype.rmoveto = function(x,y) {
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
}
BWIPJS.prototype.lineto = function(x,y) {
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
}
BWIPJS.prototype.rlineto = function(x,y) {
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
}
BWIPJS.prototype.stringwidth = function(str) {
	var font = this.getfont();
	var size = (+this.g_font.FontSize || 10) * this.g_tsx;

	// str may be a uint8-string or normal string
	var cca = typeof str === 'string';

	// Width, ascent, and descent of the char-path.
	// Font metrics are always available.
	var w = 0, a = 0, d = 0;
	for (var i = 0; i < str.length; i++) {
		var cd = cca ? str.charCodeAt(i) : str[i];
		var glyph = this.fontlib.getglyph(font, cd, size, size); // no y-scaling
		w += glyph.advance;
		a = Math.max(a, glyph.top);
		d = Math.max(d, glyph.height-glyph.top);
	}
	return { w:w/this.g_tsx, h:(a+d)/this.g_tsy,
		 a:a/this.g_tsy, d:d/this.g_tsy };
}
BWIPJS.prototype.charpath = function(str, b) {
	var sw = this.stringwidth(str);

	// Emulate the char-path by placing a rectangle around it
	this.rlineto(0, sw.a);
	this.rlineto(sw.w, 0);
	this.rlineto(0, -sw.h);
}
BWIPJS.prototype.pathbbox = function() {
	if (!this.g_path.length)	throw new Error('pathbbox: --nocurrentpoint--');
	var pth = this.g_path;
	var llx = pth[0][0];
	var lly = pth[0][1];
	var urx = 0;
	var ury = 0;
	for (var i = 2, inc = 2; i < pth.length; i += inc) {
		if (llx > pth[i][0]) llx = pth[i][0];
		if (urx < pth[i][0]) urx = pth[i][0];
		if (lly > pth[i][1]) lly = pth[i][1];
		if (ury < pth[i][1]) ury = pth[i][1];
		inc = (inc == 2 ? 1 : 2);
	}

	// Convert to user-space coordinates
	var rv = {	llx:(llx-this.g_tdx)/this.g_tsx,
				lly:(lly-this.g_tdy)/this.g_tsy,
				urx:(urx-this.g_tdx)/this.g_tsx,
				ury:(ury-this.g_tdy)/this.g_tsy };
	return rv;
}
BWIPJS.prototype.stroke = function() {
	var self = this;
	var penx = this.g_penw*this.g_tsx;
	var peny = this.g_penw*this.g_tsy;
	var path = this.g_path;
	var segs = this.g_path.length / 3;	// number of line segments
	if (this.g_path[this.g_path.length-2][0] == 'c')
		segs--;

	// Track number of colors
	var rgb = (this.g_rgb[0] << 16) | (this.g_rgb[1] << 8) | this.g_rgb[2];
	if (!this.rgbmap[rgb]) {
		this.rgbmap[rgb] = 1;
		this.ncolors += 1;
	}

	// Calcuate the bounding boxes
	for (var i = 0; i < path.length; ) {
		var s = path[i++];	// start point
		var a = path[i++];	// opcode
		var e = path[i++];	// end point
		if (a[0] == 'l') {
			this.linebbox(s[0], s[1], e[0], e[1], penx, peny);
		}
	}

	// Render the lines
	this.cmds.push(function() {
		// Draw the lines
		for (var i = 0; i < path.length; ) {
			var s = path[i++];	// start point
			var a = path[i++];	// opcode
			var e = path[i++];	// end point
			if (a[0] == 'l') {
				self.drawline(true, s[0], s[1], e[0], e[1], penx, peny, segs > 1);
			}
		}
	});

	this.g_path = [];
}
// Fix sources of rounding error by making the scale-factors integral.
// Currently, only floor is being used.
BWIPJS.prototype.floorscale = function() {
	this.g_tsx = floor(this.g_tsx) || 1;
	this.g_tsy = floor(this.g_tsy) || 1;
}
BWIPJS.prototype.ceilscale = function() {
	this.g_tsx = ceil(this.g_tsx) || 1;
	this.g_tsy = ceil(this.g_tsy) || 1;
}
BWIPJS.prototype.roundscale = function() {
	this.g_tsx = round(this.g_tsx) || 1;
	this.g_tsy = round(this.g_tsy) || 1;
}

// source is an 8-bit bitmask
// This implementation is optimized for 2D bar codes.  That is, it does not
// distort the image due to rounding errors.  Every pixel is scaled
// identically, so the resulting image may be smaller by a few pixels than
// the scaling factor would require.  The transform matrix is not used.
BWIPJS.prototype.imagemask = function(width, height, source) {
	var tx = floor(this.g_tdx);
	var ty = floor(this.g_tdy);
	var sx = round(this.g_tsx);
	var sy = round(this.g_tsy);
	var dx = floor(sx / width);		// pixel width
	var dy = floor(sy / height);	// pixel height
	var rl = ceil(width / 8); 		// row length (bytes per row)
	var y0 = ty + height * dy;
	var x0;
	var self = this;

	if (!dx || !dy) {
		throw new Error('Image scaled to zero size.');
	}

	// Track number of colors
	var rgb = (this.g_rgb[0] << 16) | (this.g_rgb[1] << 8) | this.g_rgb[2];
	if (!this.rgbmap[rgb]) {
		this.rgbmap[rgb] = 1;
		this.ncolors += 1;
	}

	this.bbox(tx, ty, dx * width, dy * height);
	this.cmds.push(function() {
		var minx = self.minx;
		var miny = self.miny;
		for (var y = 0; y < height; y++) {
			x0 = tx;
			y0 -= dy;
			for (var x = 0; x < width; x++) {
				var by = source[y*rl + (x>>>3)];
				var bt = by & (1 << 7-(x&7));
				if (bt) {
					var x1 = x0 + dx;
					var y1 = y0 + dy;
					for (var j = y0; j < y1; j++) {
						for (var k = x0; k < x1; k++) {
							self.bmap.set(k-minx,j-miny,255);
						}
					}
				}
				x0 += dx;
			}
		}
	});
}
// dx,dy are inter-character gaps
BWIPJS.prototype.show = function(str, dx, dy) {
	if (!str.length) {
		return;
	}

	// Capture current graphics state
	var self = this;
	var font = self.getfont();
	var size = +self.g_font.FontSize || 10;
	var tsx	 = self.g_tsx;
	var tsy  = self.g_tsy;
	var posx = floor(self.g_posx);
	var posy = floor(self.g_posy);
	var r	 = self.g_rgb[0];
	var g	 = self.g_rgb[1];
	var b	 = self.g_rgb[2];
	var szx  = floor(size * tsx);
	var szy	 = floor(size * tsy);

	// The string can be either a uint8-string or regular string
	var cca = typeof str === 'string';

	// Convert dx,dy to device space
	dx = floor(self.g_tsx * dx);
	dy = floor(self.g_tsy * dy);

	// Estimate number of colors
	var rgb = (r << 16) | (g << 8) | b;
	var nalpha = self.rgbmap[rgb];
	if (!nalpha) {
		self.ncolors += 256;
	} else if (nalpha == 1) {
		self.ncolors += 255;
	}
	self.rgbmap[rgb] = 256;

	// Bounding box.  Use the actual glyph sizes.
	var base = floor(self.g_posy) + dy;		// loop invariant
	for (var i = 0; i < str.length; i++) {
		var ch = cca ? str.charCodeAt(i) : str[i];
		var glyph = self.fontlib.getglyph(font, ch, szx, szx);	// no y-scaling

		// The OCR glyphs seem to be about a point right compared to the
		// font metrics hard-coded into BWIPP.  This is especially apparent
		// in the EAN and UPC codes where the bars mix with the text.
		var left = floor(this.g_posx) + glyph.left;
		if (font <= 1) { // && ch >= 48 && ch <= 57) {
			left -= floor(1.0 * tsx);
		}
		self.bbox(left, base+glyph.top-glyph.height, glyph.width, glyph.height);
		this.g_posx += glyph.advance + dx;
	}
	this.g_posx -= dx;	// overshot
	this.maxicount = 0;

	self.cmds.push(function() {
		var minx = self.minx;
		var miny = self.miny;

		// PostScript renders bottom-up, so we must render the glyphs inverted.
		for (var i = 0; i < str.length; i++) {
			var ch = cca ? str.charCodeAt(i) : str[i];
			var glyph = self.fontlib.getglyph(font, ch, szx, szx);	// no y-scaling

			// The OCR glyphs seem to be about a point right compared to the
			// font metrics hard-coded into BWIPP.  This is especially apparent
			// in the EAN and UPC codes where the bars mix with the text.
			var top  = posy + glyph.top + dy - 1;
			var left = posx + glyph.left;
			if (font <= 1) { // && ch >= 48 && ch <= 57) {
				left -= floor(1.0 * tsx);
			}
			var w = glyph.width;
			var h = glyph.height;
			var b = glyph.bytes;
			var o = glyph.offset;		// offset into bytes

			for (var x = 0; x < w; x++) {
				for (var y = 0; y < h; y++) {
					var a = b[o + y * w + x];
					if (a)
						self.bmap.set(left+x-minx, top-y-miny, a);
				}
			}
			posx += glyph.advance + dx;
		}
	});
}

// Line algorithm that produces a more symmetric line than Bresenham's
//
// optmz == boolean 
// x1,y1 == starting coordinates
// x2,y2 == ending coordinates
// penx,peny == pen dimensions
// merge == multi-line : merge the end points
//
// When optmz is true, we use the fast vertical/horizontal line drawing
// optimizations.  This works well for single lines.
// When optmz is false, we always use the arbitrary line drawing alg, as
// it better connects one line with the next.
BWIPJS.prototype.drawline = function(optmz, x1, y1, x2, y2, penx, peny, merge) {
	var minx = this.minx;
	var miny = this.miny;

	if (optmz && (x1 == x2 || y1 == y2)) {
		var lx = round(penx);
		var ly = round(peny);

		if (y2 < y1) { var t = y1; y1 = y2; y2 = t; }
		if (x2 < x1) { var t = x1; x1 = x2; x2 = t; }

		// Horizontal or vertical line?
		if (x1 == x2) {
			// Vertical line
			x1 = floor(x1 - lx/2);
			x2 = floor(x2 + lx/2);
			y1 = floor(y1 - (merge ? ly/2 : 0));
			y2 = floor(y2 + (merge ? ly/2 : 0));
		} else {
			// Horizontal line
			y1 = floor(y1 - ly/2);
			y2 = floor(y2 + ly/2);
			x1 = floor(x1 - (merge ? lx/2 : 0));
			x2 = floor(x2 + (merge ? lx/2 : 0));
		}
		for (var y = y1; y < y2; y++) {
			for (var x = x1; x < x2; x++) {
				this.bmap.set(x-minx,y-miny,255);
			}
		}
		return;
	}

	// Draw an arbitrary line
	x1 = floor(x1);
	x2 = floor(x2);
	y1 = floor(y1);
	y2 = floor(y2);

	var du = Math.abs(x2-x1);
	var dv = Math.abs(y2-y1);
	var kx = (x2 < x1 ? -1 : 1);
	var ky = (y2 < y1 ? -1 : 1);
	var x  = x1;
	var y  = y1;
	var d  = 0;

	// Calculate the effect of pen width
	var penw = floor(Math.sqrt(penx*penx + peny*peny));
	var pixh = round(Math.sqrt((penw*penw)/((dv*dv)/(du*du)+1))) || 1;
	var pixw = round(Math.sqrt(penw*penw-pixh*pixh)) || 1;

	if (du >= dv) {
		// Increment on x
		while (x != x2) {
			for (var j = 0; j < pixh; j++) {
				this.bmap.set(x-minx, y+j-miny, 255);
			}
			d += dv;
			if (d >= du) {
				d -= du;
				y += ky;
			}
			x += kx;
		}
		for (var j = 0; j < pixh; j++) {
			this.bmap.set(x-minx, y+j-miny, 255);
		}
	} else {
		// Increment on y
		while (y != y2) {
			for (var j = 0; j < pixw; j++) {
				this.bmap.set(x+j-minx, y-miny, 255);
			}
			d += du;
			if (d >= dv) {
				d -= dv;
				x += kx;
			}
			y += ky;
		}
		for (var j = 0; j < pixw; j++) {
			this.bmap.set(x+j-minx, y-miny, 255);
		}
	}
} // end of drawline()

// Bounding box for a line.  The renderers only draw orthogonal lines.
// Maxicode is drawn using a font.
BWIPJS.prototype.linebbox = function(x0, y0, x1, y1, penw, penh) {
    if (x0 > x1) {
		var t = x0;
		x0 = x1;
		x1 = t;
    }
    if (y0 > y1) {
		var t = y0;
		y0 = y1;
		y1 = t;
    }
	penw = round(penw);
	penh = round(penh);
    if (x0 == x1) {
        // vertical line
		var xl = floor(x0 - penw/2);
		var xr = floor(x0 + penw/2);
        this.bbox(floor(xl), floor(y0), xr-xl, floor(y1-y0));
    } else if (y0 == y1) {
        // horizontal line
        this.bbox(x0, y0 - penh/2, x1-x0, penh);
    } else {
        this.bbox(x0, y0, x1-x0, y1-y0);
    }
}
// Track the bounding box of the image
BWIPJS.prototype.bbox = function(x, y, w, h) {
	if (this.minx > x) {
        this.minx = x;
    }
    if (this.maxx < x + w - 1) {
        this.maxx = x + w - 1;
    }
    if (this.miny > y) {
        this.miny = y;
    }
    if (this.maxy < y + h - 1) {
        this.maxy = y + h - 1;
    }
}
BWIPJS.prototype.render = function(callback) {
	this.minx = floor(this.minx);
	this.miny = floor(this.miny);
	this.maxx = floor(this.maxx);
	this.maxy = floor(this.maxy);

	// Tell the bitmap about the image
	if (this.bmap.imageinfo) {
		this.bmap.imageinfo(this.maxx - this.minx + 1,
							this.maxy - this.miny + 1,
							this.ncolors);
	}

	// Draw the image to the bitmap
	for (var i = 0, l = this.cmds.length; i < l; i++) {
		this.cmds[i]();
	}

	if (this.bmap.finalize) {
		this.bmap.finalize(callback);
	}
}

BWIPJS.VERSION = '1.5.6 (2017-09-18)';
if (typeof module === 'object' && module.exports) {
	module.exports = BWIPJS;
}
