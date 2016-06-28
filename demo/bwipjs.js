// file : bwip-js/bwipjs.js
//
// Graphics-context interface to the BWIPP cross-compiled code

function BWIPJS(freetype, monochrome) {
	if (this.constructor !== BWIPJS) {
		return new BWIPJS(freetype, monochrome);
	}
	this.bmap = null;	// bitmap interface
	this.gstk = [];		// graphics save/restore stack
	this.reset();

	// FreeType interface
	this.ft = {
		monochrome:freetype.cwrap("monochrome", 'number', ['number']),
		lookup:freetype.cwrap("find_font", 'number', ['string']),
		bitmap:freetype.cwrap("get_bitmap", 'number',
							['number','number','number','number']),
		width:freetype.cwrap("get_width", 'number', []),
		height:freetype.cwrap("get_height", 'number', []),
		left:freetype.cwrap("get_left", 'number', []),
		top:freetype.cwrap("get_top", 'number', []),
		advance:freetype.cwrap("get_advance", 'number', []),
		module:freetype,
	};

	this.ft.monochrome(monochrome ? 1 : 0);
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
	// We can run without a bitmap when running tests.
	if (this.bmap) {
		this.bmap.color(this.g_rgb[0], this.g_rgb[1], this.g_rgb[2]);
	}
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
	// This is an internal method
	return this.ft.lookup(this.g_font.FontName.toString());
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
		var r = Math.round((1-c) * (1-k) * 255);
		var g = Math.round((1-m) * (1-k) * 255);
		var b = Math.round((1-y) * (1-k) * 255);
	} else {
		throw 'bwipp.setcolor: invalid string length (' + s + ')' ;
	}

	this.bmap.color(r, g, b);
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
	var size = +this.g_font.FontSize || 10;

	// str may be a uint8-string or normal string
	var cca = typeof str === 'string';

	// width, ascent, and descent of the char-path
	var w = 0, a = 0, d = 0;
	for (var i = 0; i < str.length; i++) {
		var cd = cca ? str.charCodeAt(i) : str[i];
		var offset = this.ft.bitmap(font,cd,size*this.g_tsx,size*this.g_tsy);
		w += this.ft.advance();
		if (!offset)
			continue;
		var h = this.ft.height();
		var t = this.ft.top();
		a = Math.max(a, t);
		d = Math.max(d, h-t);
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
	if (this.__miny === undefined)
		this.__miny = Infinity;
	var penx = this.g_penw*this.g_tsx;
	var peny = this.g_penw*this.g_tsy;
	var segs = this.g_path.length / 3;	// number of line segments
	if (this.g_path[this.g_path.length-2][0] == 'c')
		segs--;
	for (var i = 0; i < this.g_path.length; ) {
		var s = this.g_path[i++];	// start point
		var a = this.g_path[i++];	// args
		var e = this.g_path[i++];	// end point
		if (this.__miny > s[1])
			this.__miny = s[1];
		if (this.__miny > e[1])
			this.__miny = e[1];
		switch (a[0]) {
		case 'l':	// line
			this.drawline(true, s[0], s[1], e[0], e[1], penx, peny, segs > 1);
			break;
		case 'c':	// closepath
			break;
		default:
			throw new Error('stroke: undefined opcode: ' + a[0]);
		}
	}
	this.g_path = [];
}
BWIPJS.prototype.setextent = function() {
	if (!this.g_path.length)						 // Nothing to do?
		return;

	// pathbbox() without the user-space conversion
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

	this.bmap.extent(llx, lly, urx, ury);
}
// source is an 8-bit bitmask
// This implementation is optimized for 2D bar codes.  That is, it does not
// distort the image due to rounding errors.  Every pixel is sized
// identically, so the resulting image may be smaller by a few pixels than
// the scaling factor would require.  And the transform matrix is not used.
BWIPJS.prototype.imagemask = function(width, height, source) {
	var sx = Math.round(this.g_tsx);
	var sy = Math.round(this.g_tsy);
	var dx = Math.floor(sx / width);		// pixel width
	var dy = Math.floor(sy / height);		// pixel height
	var rl = Math.ceil(width / 8); 	// row length (bytes per row)
	var y0 = Math.floor(this.g_tdy) + height * dy;
	var x0;
	
	for (var y = 0; y < height; y++) {
		x0 = Math.floor(this.g_tdx);
		y0 -= dy;
		for (var x = 0; x < width; x++) {
			var by = source[y*rl + (x>>>3)];
			var bt = by & (1 << 7-(x&7));
			if (bt) {
				var x1 = x0 + dx;
				var y1 = y0 + dy;
				for (var j = y0; j < y1; j++) {
					for (var k = x0; k < x1; k++) {
						this.bmap.set(k,j,255);
					}
				}
			}
			x0 += dx;
		}
	}
}
// dx,dy are inter-character gaps
BWIPJS.prototype.show = function(str, dx, dy) {	// str is a psstring
	var font = this.getfont();
	var size = +this.g_font.FontSize || 10;

	// The string can be either a uint8-string or regular string
	var cca = typeof str === 'string';

	// Convert dx,dy to device space
	dx = this.g_tsx * dx;
	dy = this.g_tsy * dy;

	// PostScript renders bottom-up, so we must render the glyphs inverted.
	for (var i = 0; i < str.length; i++) {
		var ch = cca ? str.charCodeAt(i) : str[i];
		var offset = this.ft.bitmap(font, ch, size*this.g_tsx, size*this.g_tsy);
		if (!offset) {
			this.g_posx += this.ft.advance() + dx;
			continue;
		}

		// The OCR digits seem to be about a half-point right compared to the
		// font metrics hard-coded into BWIPP.  This is especially apparent
		// in the EAN and UPC codes where the bars mix with the text.
		var l = this.g_posx + this.ft.left();
		if (font <= 1 && ch >= 48 && ch <= 57)
			l -= 0.5 * this.g_tsx;

		var t = this.g_posy + this.ft.top() + dy;
		var w = this.ft.width();
		var h = this.ft.height();
		var b = this.ft.module.HEAPU8.subarray(offset, offset + w * h);
		var a;  // alpha

		for (var x = 0; x < w; x++) {
			for (var y = 0; y < h; y++) {
				a = b[y * w + x];
				if (a)
					this.bmap.set(l+x, t-y, a);
			}
		}

		this.g_posx += this.ft.advance() + dx;
	}
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
	if (optmz && (x1 == x2 || y1 == y2)) {
		var lx = Math.round(penx);
		var ly = Math.round(peny);

		if (y2 < y1) { var t = y1; y1 = y2; y2 = t; }
		if (x2 < x1) { var t = x1; x1 = x2; x2 = t; }

		// Horizontal or vertical line?
		if (x1 == x2) {
			// Vertical line
			x1 = Math.floor(x1 - lx/2);
			x2 = Math.floor(x2 + lx/2);
			y1 = Math.floor(y1 - (merge ? ly/2 : 0));
			y2 = Math.floor(y2 + (merge ? ly/2 : 0));
		} else {
			// Horizontal line
			y1 = Math.floor(y1 - ly/2);
			y2 = Math.floor(y2 + ly/2);
			x1 = Math.floor(x1 - (merge ? lx/2 : 0));
			x2 = Math.floor(x2 + (merge ? lx/2 : 0));
		}
		for (var y = y1; y < y2; y++)
			for (var x = x1; x < x2; x++)
				this.bmap.set(x,y,255);

		return;
	}

	// Draw an arbitrary line
	x1 = Math.floor(x1);
	x2 = Math.floor(x2);
	y1 = Math.floor(y1);
	y2 = Math.floor(y2);

	var du = Math.abs(x2-x1);
	var dv = Math.abs(y2-y1);
	var kx = (x2 < x1 ? -1 : 1);
	var ky = (y2 < y1 ? -1 : 1);
	var x  = x1;
	var y  = y1;
	var d  = 0;

	// Calculate the effect of pen width
	var penw = Math.floor(Math.sqrt(penx*penx + peny*peny));
	var pixh = Math.round(Math.sqrt((penw*penw)/((dv*dv)/(du*du)+1))) || 1;
	var pixw = Math.round(Math.sqrt(penw*penw-pixh*pixh)) || 1;

	if (du >= dv) {
		// Increment on x
		while (x != x2) {
			for (var j = 0; j < pixh; j++)
				this.bmap.set(x, y+j, 255);
			d += dv;
			if (d >= du) {
				d -= du;
				y += ky;
			}
			x += kx;
		}
		for (var j = 0; j < pixh; j++)
			this.bmap.set(x, y+j, 255);
	} else {
		// Increment on y
		while (y != y2) {
			for (var j = 0; j < pixw; j++)
				this.bmap.set(x+j, y, 255);
			d += du;
			if (d >= dv) {
				d -= dv;
				x += kx;
			}
			y += ky;
		}
		for (var j = 0; j < pixw; j++)
			this.bmap.set(x+j, y, 255);
	}
} // end of drawline()

if (typeof module === 'object' && module.exports) {
	module.exports = BWIPJS;
}
