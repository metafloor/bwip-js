// file: bwip.js)
//
// Copyright (c) 2011-2015 Mark Warren
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.

// The one and only global - our class constructor
var BWIPJS = function() {
	
	// PostScript state
	this.ptr	= 0;				// operand stack pointer
	this.stk	= [];				// operand stack
	this.dict 	= {};				// current dictionary
	this.dstk	= [this.dict];		// dictionary stack
	this.gstk	= [];				// graphics state stack
	this.bmap	= null;				// host bitmap instance

	// dict-stack lookup
	this.dstk.get = function(id) {
		if (typeof id == 'number')
			id = '\uffff' + id;
		for (var i = this.length-1; i >= 0; i--) {
			if (this[i][id] !== undefined) {
				return this[i][id];
			}
		}
		if (BWIPJS.bwipp[id])
			return BWIPJS.bwipp[id];
		throw new Error('dict: ' + id + ': --undefined--');
	}

	// Initialize the graphics 
	this.greset();

	// Initialize the error handling
	var $error = {};
	this.dict.$error = $error;
	this.dict.handleerror = function() {
		// errorinfo is the message
		// errorname is the name of the function
		// Don't use an Error object - keeps the message cleaner
		throw '[' + $error.errorname.toString() + ']\r\n\r\n' +
			  $error.errorinfo.toString();
	}

}

BWIPJS.bwipp = {};		// BWIPP encoders and renderers
BWIPJS.queue = {};		// Instances waiting for loading to finish

BWIPJS.increfs = function(module, depend) {
	if (BWIPJS.queue[depend] && BWIPJS.queue[depend].length)
		return false;
	if (!BWIPJS.queue[depend])
		BWIPJS.queue[depend] = [];
	if (BWIPJS.queue[module]) {
		// Queue entries are [ refs, encoder, this, callback ]
		var queue = BWIPJS.queue[module];
		for (var i = 0; i < queue.length; i++) {
			queue[i][0]++;
			BWIPJS.queue[depend].push(queue[i]);
		}
	}
	return true;
}
BWIPJS.decrefs = function(module) {
	if (BWIPJS.queue[module]) {
		var queue = BWIPJS.queue[module];
		for (var i = 0; i < queue.length; i++) {
			if (--queue[i][0] == 0) {
				var name = queue[i][1];
				var that = queue[i][2];

				// Call the encoder
				try {
					BWIPJS.bwipp[name].call(that);
					if (queue[i][3])
						queue[i][3]();
				} catch (e) {
					if (queue[i][3])
						queue[i][3](e);
					continue;
				}
			}
		}
		delete BWIPJS.queue[module];
	}
}

BWIPJS.get = function(obj, id) {
	if (obj instanceof BWIPJS.psarray || obj instanceof BWIPJS.psstring)
		return obj.value[obj.offset+parseFloat(id)];
	if (typeof id === 'number')
		return obj['\uffff' + id];
	// Explicit toString() to convert psstrings
	return obj[id.toString()];
}
BWIPJS.set = function(obj, id, val) {
	if (obj instanceof BWIPJS.psarray || obj instanceof BWIPJS.psstring)
		obj.value[obj.offset+parseFloat(id)] = val;
	else if (typeof id === 'number')
		obj['\uffff' + id] = val;
	else
		// Explicit toString() to convert psstrings
		obj[id.toString()] = val;
}

// FreeType interface
BWIPJS.ft_monochrome = Module.cwrap("monochrome", 'number', ['number']);
BWIPJS.ft_lookup = Module.cwrap("find_font", 'number', ['string']);
BWIPJS.ft_bitmap = Module.cwrap("get_bitmap", 'number', ['number','number','number','number']);
BWIPJS.ft_width	 = Module.cwrap("get_width", 'number', []);
BWIPJS.ft_height = Module.cwrap("get_height", 'number', []);
BWIPJS.ft_left	 = Module.cwrap("get_left", 'number', []);
BWIPJS.ft_top    = Module.cwrap("get_top", 'number', []);
BWIPJS.ft_advance= Module.cwrap("get_advance", 'number', []);

// Host-specific overrides
BWIPJS.debug = function(s) { return; console.log(''+s); };
BWIPJS.logapi = function(fn, args) {
	return;
	var s = fn + '(';
	for (var i = 0; i < args.length; i++) {
		s += (i ? ', ' : '') + JSON.stringify(args[i]);
	}
	s += ')';
	console.log(s);
};
//BWIPJS.load  = function(s) {};	// force a run-time error	

BWIPJS.psarray = function(v) {
	if (!(this instanceof BWIPJS.psarray))
		return new BWIPJS.psarray(v);

	if (typeof(v) == "number") {
		var a = [];
		for (var i = 0; i < v; i++)
			a[i] = null;

		this.value  = a;
		this.length = v;
		this.offset = 0;
	}
	else if (v instanceof Array) {
		this.value  = v;
		this.offset = 0;
		this.length = v.length;
	}
	else {	// v is a psarray
		this.value  = [];
		this.length = v.length;
		this.offset = 0;

		for (var i = 0; i < v.length; i++)
			this.value[i] = v.value[v.offset+i];
	}
	// Define the indexes (just for show) so forall works correctly.
	// The actual implementation uses get/set.
	for (var i = 0; i < this.length; i++)
		this[i] = undefined;
}
BWIPJS.psarray.prototype.toString = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += ' ' + BWIPJS.pstostring(this.value[i]);
	return '[' + s.substr(1) + ']';
}
BWIPJS.psarray.prototype.valueOf = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += ' ' + BWIPJS.pstostring(this.value[i]);
	return '[' + s.substr(1) + ']';
}
BWIPJS.psarray.prototype.get = function(n) {
	return this.value[this.offset+parseFloat(n)];
}
BWIPJS.psarray.prototype.set = function(n, v) {
	this.value[this.offset+parseFloat(n)] = v;
}
// extracts a live subset/range of elements
BWIPJS.psarray.prototype.subset = function(offset, length) {
	if (isNaN(length) || offset+length > this.length)
		length = this.length-offset;

	var copy = new BWIPJS.psarray(length);
	copy.value  = this.value;
	copy.offset = this.offset + offset;

	return copy;
}
// assigns a subset/range of elements
BWIPJS.psarray.prototype.assign = function(offset, source) {
	if (source instanceof Array) {
		// array optimization
		if (this.length == this.value.length && this.length == source.length)
			this.value = source;
		else
			for (var i = 0; i < source.length; i++)
				this.value[this.offset+offset+i] = source[i];
	}
	else
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.value[source.offset+i];
}

BWIPJS.psstring = function(v) {
	if (!(this instanceof BWIPJS.psstring))
		return new BWIPJS.psstring(v);

	if (typeof(v) == 'number') {
		this.value  = [];
		this.length = v;
		this.offset = 0;

		for (var i = 0; i < v; i++)
			this.value[i] = 0;
	}
	else if (typeof(v) == 'string') {
		this.value  = [];
		this.length = v.length;
		this.offset = 0;
		for (var i = 0; i < v.length; i++) 
			this.value[i] = v.charCodeAt(i);
	}
	else { // v is a psstring
		this.value  = [];
		this.length = v.length;
		this.offset = 0;

		for (var i = 0; i < v.length; i++)
			this.value[i] = v.value[v.offset+i];
	}
	// Define the indexes (just for show) so forall works correctly.
	// The actual implementation uses get/set.
	for (var i = 0; i < this.length; i++)
		this[i] = NaN;
}
BWIPJS.psstring.prototype.toString = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += String.fromCharCode(this.value[i]);
	return s;
}
BWIPJS.psstring.prototype.valueOf = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += String.fromCharCode(this.value[i]);
	return s;
}
BWIPJS.psstring.prototype.get = function(n) {
	return this.value[this.offset+parseFloat(n)];
}
BWIPJS.psstring.prototype.set = function(n, v) {
	this.value[this.offset+parseFloat(n)] = v;
}
// extracts a live subset/range of elements
BWIPJS.psstring.prototype.subset = function(offset, length) {
	if (isNaN(length) || offset+length > this.length)
		length = this.length-offset;

	var copy = new BWIPJS.psstring(length);
	copy.value  = this.value;
	copy.offset = this.offset + offset;

	return copy;
}
// assigns a subset/range of elements
BWIPJS.psstring.prototype.assign = function(offset, source) {
	if (typeof(source) === 'string') {
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.charCodeAt(i);
	}
	else {
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.value[source.offset+i];
	}
}
BWIPJS.psstring.prototype.indexOf = function(s) {
	return this.toString().indexOf(s.toString());
}
BWIPJS.pstype = function(v) {
	// null can cause trouble - get it out of the way
	if (v === null || v === undefined)
		return 'nulltype';

	var t = typeof(v);
	if (t == 'number')
		return v % 1 ? 'realtype' : 'integertype';
	if (t == 'boolean')
		return 'booleantype';

	if (v instanceof BWIPJS.psarray)
		return 'arraytype';
	if (v instanceof BWIPJS.psstring)
		return 'stringtype';

	return 'dicttype';
}

BWIPJS.pstostring = function(v) {
	// null can cause trouble - get it out of the way
	if (v === null)
		return 'null';
	if (typeof(v) == 'function')
		return '--function--';
	if (v instanceof BWIPJS.psarray)
		return v.toString();
	if (v instanceof BWIPJS.psstring) {
		// postscript strings often contain binary data...
		var s = '(';
		for (var i = 0; i < v.length; i++) {
			var cd = v.value[v.offset+i];
			switch (cd) {
			case 92:	s += '\\\\';	break;
			case 10:	s += '\\n';		break;
			case 13:	s += '\\r';		break;
			case  9:	s += '\\t';		break;
			case  8:	s += '\\b';		break;
			case 40:	s += '\\(';		break;
			case 41:	s += '\\)';		break;
			default:
				if (cd < 32 || cd > 127)
					s += '\\'+(function(s) { return '000'.substr(s.length)+s; })(cd.toString(8));
				else
					s += String.fromCharCode(cd);
			}
		}
		return s + ')';
	}
	if (typeof(v) == 'object') {
		var s = '';
		for (var i in v) {
			if (i.charCodeAt(0) == 0xffff)
				s += ' ' + i.substr(1) + ' ' + BWIPJS.pstostring(v[i]);
			else
				s += ' (' + i + ') ' + BWIPJS.pstostring(v[i]);
		}
		return '<<' + s + ' >>';
	}
	// Watch for the usual floating-point nonsense
	if (typeof(v) == 'number' && v % 1) {
		return v.toPrecision(12).replace(/0*$/,'');
	}
	return '' + v;
}

// BEGIN BWIPJS METHODS

// Host bitmap getter/setter
BWIPJS.prototype.bitmap = function(bmap) {
	if (!bmap)
		return this.bmap;
	this.bmap = bmap;
}
// operators print, =, and == are all tied to this
BWIPJS.prototype.print = function(s) {
	console.log(''+s);
};

// Converts a javascript value into a postscript value
BWIPJS.prototype.value = function(v) {
	if (v === true || v === false || v === null)
		return v;
	if (v === undefined)
		throw new Error('undefined not a valid PostScript value');

	var t = typeof(v);
	if (t == 'number') {
		if (!isFinite(v))
			throw new Error(v + ': not a valid PostScript value');
		return v;
	}
	if (t == 'string') {
		// Ensure the string is 8-bit clean
		for (var i = 0; i < v.length && v.charCodeAt(i) < 256; i++)
			;
		if (i == v.length)
			return BWIPJS.psstring(v);
		// Convert to utf-8
		return BWIPJS.psstring(unescape(encodeURIComponent(v)));
	}
	if (v instanceof Array)
		return BWIPJS.psarray(v);
	return v;	// s.b. a dictionary object
}

BWIPJS.prototype.push = function(v) {
	this.stk[this.ptr++] = this.value(v);
}

BWIPJS.prototype.pop = function() {
	if (this.ptr <= 0)
		throw new Error('--underflow--');
	return this.stk[--this.ptr];
}

BWIPJS.prototype.call = function(name, callback) {
	// Make sure the encoder is loaded
	if (!BWIPJS.bwipp[name]) {
		if (!BWIPJS.queue[name])
			BWIPJS.queue[name] = [ [ 1, name, this, callback] ];
		else
			BWIPJS.queue[name].push([1, name, this, callback]);
		BWIPJS.load('bwipp/' + name + '.js');
		return;
	}
	
	// Call the encoder
	try {
		BWIPJS.bwipp[name].call(this);
		if (callback)
			callback();
	} catch (e) {
		if (callback)
			callback(e);
		return;
	}
}
// eval on a psstring - emulates postscript '<string> exec'.
// BWIPP only requires support for two forms of eval; hex string literals in
// the form <rrggbb> and <ccmmyykk>.
BWIPJS.prototype.eval = function(src) {
	src = src.toString();	// work with a javascript string
	if (!/^<(([0-9A-F][0-9A-F])*)>$/i.test(src))
			throw new Error('eval: not a hex string literal');

	var dst = new BWIPJS.psstring((src.length-2)/2);  // the RE above ensures pairs of digits
	var idx = 0;
	for (var i = 1; i < src.length-1; i += 2)
		dst.set(idx++, parseInt(src.substr(i, 2), 16));

	// Push the string onto the stack
	this.stk[this.ptr++] = dst;
}



// All graphics state that must be gsaved/grestored are given
// an identifying prefix of g_
BWIPJS.prototype.greset = function() {
	BWIPJS.logapi('greset', arguments);
	// Current Transform Matrix - since we don't do rotation, we can fake
	// the matrix math
	this.g_tdx	= 0;	// CTM x-offset
	this.g_tdy	= 0;	// CTM y-offset
	this.g_tsx	= 1;	// CTM x-scale factor
	this.g_tsy	= 1;	// CTM y-scale factor

	this.g_posx	= 0;		// current x position
	this.g_posy	= 0;		// current y position
	this.g_penw	= 1;		// current line/pen width
	this.g_path	= [];		// current path
	this.g_font	= null;		// current font object
	this.g_rgb  = [0,0,0];	// current color (black)
}

BWIPJS.prototype.currentpoint = function() {
	BWIPJS.logapi('currentpoint', arguments);
	return { x:(this.g_posx-this.g_tdx)/this.g_tsx, y:(this.g_posy-this.g_tdy)/this.g_tsy };
}
BWIPJS.prototype.currentfont = function() {
	BWIPJS.logapi('currentfont', arguments);
	return this.g_font;
}
BWIPJS.prototype.findfont = function(name) {	// name is a psstring
	BWIPJS.logapi('findfont', arguments);
	return { FontName:name };
}
// dtransform is a no-op
BWIPJS.prototype.dtransform = function(mtx,dx,dy) {
	BWIPJS.logapi('dtransform', arguments);
	return { dx:dx, dy:dy };
}
BWIPJS.prototype.translate = function(x, y) {
	BWIPJS.logapi('translate', arguments);
	this.g_tdx = this.g_tsx * x;
	this.g_tdy = this.g_tsy * y;
}
BWIPJS.prototype.scale = function(x, y) {
	BWIPJS.logapi('scale', arguments);
	this.g_tsx *= x;
	this.g_tsy *= y;
}
BWIPJS.prototype.setlinewidth = function(w) {
	BWIPJS.logapi('setlinewidth', arguments);
	this.g_penw = w;
}
BWIPJS.prototype.setfont = function(f) {
	BWIPJS.logapi('setfont', arguments);
	this.g_font = f;
}
BWIPJS.prototype.setrgb = function(r, g, b) {
	BWIPJS.logapi('setrgb', arguments);
	var r = Math.round(r*255);
	var g = Math.round(g*255);
	var b = Math.round(b*255);
	this.bmap.color(r, g, b);
	this.g_rgb = [ r, g, b ];
}
BWIPJS.prototype.setcmyk = function(c, m, y, k) {
	BWIPJS.logapi('setcmyk', arguments);
	var r = Math.round((1-c) * (1-k) * 255);
	var g = Math.round((1-m) * (1-k) * 255);
	var b = Math.round((1-y) * (1-k) * 255);
	this.bmap.color(r, g, b);
	this.g_rgb = [ r, g, b ];
}
BWIPJS.prototype.newpath = function() {
	BWIPJS.logapi('newpath', arguments);
	this.g_path = [];
}
BWIPJS.prototype.closepath = function() {
	BWIPJS.logapi('closepath', arguments);
	if (this.g_path.length)  {
		var c0 = this.g_path[0];
		var c1 = this.g_path[this.g_path.length-1];
		this.g_path.push([ c1[0], c1[1] ]);
		this.g_path.push(['c']);
		this.g_path.push([ c0[0], c0[1] ]);
	}
}
BWIPJS.prototype.moveto = function(x,y) {
	BWIPJS.logapi('moveto', arguments);
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
}
BWIPJS.prototype.rmoveto = function(x,y) {
	BWIPJS.logapi('rmoveto', arguments);
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
}
BWIPJS.prototype.lineto = function(x,y) {
	BWIPJS.logapi('lineto', arguments);
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
}
BWIPJS.prototype.rlineto = function(x,y) {
	BWIPJS.logapi('rlineto', arguments);
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
}
// implements both arc and arcn
BWIPJS.prototype.arc = function(x,y,r,sa,ea,ccw) {
	BWIPJS.logapi('arc', arguments);
	if (sa == ea)
		return;

	// TBD: For now, we only implement full circles...
	if (sa != 0 && sa != 360 || ea != 0 && ea != 360)
		throw new Error('arc: not a full circle (' + sa + ',' + ea + ')');

	// Calculate the bounding rect
	x = this.g_tdx + this.g_tsx * x;
	y = this.g_tdy + this.g_tsy * y;

	var rx = r * this.g_tsx;
	var ry = r * this.g_tsy;

	this.g_path.push([ x-rx, y-ry ]);
	this.g_path.push([ 'a', { x:x, y:y, rx:rx, ry:ry, sa:sa, ea:ea, ccw:ccw } ]);
	this.g_path.push([ x+rx, y+ry ]);
}
// This is an internal method
BWIPJS.prototype.getfont = function() {
	BWIPJS.logapi('getfont', arguments);
	return BWIPJS.ft_lookup(this.g_font.FontName.toString());
}
BWIPJS.prototype.stringwidth = function(str) {
	BWIPJS.logapi('stringwidth', arguments);
	var font = this.getfont();
	var size = +this.g_font.FontSize || 10;

	// width, ascent, and descent of the char-path
	var w = 0, a = 0, d = 0;
	for (var i = 0; i < str.length; i++) {
		var offset = BWIPJS.ft_bitmap(font, str.get(i), size*this.g_tsx, size*this.g_tsy);
		w += BWIPJS.ft_advance();
		if (!offset)
			continue;
		var h = BWIPJS.ft_height();
		var t = BWIPJS.ft_top();
		a = Math.max(a, t);
		d = Math.max(d, h-t);
	}
	return { w:w/this.g_tsx, h:(a+d)/this.g_tsy,
		 a:a/this.g_tsy, d:d/this.g_tsy };
}
BWIPJS.prototype.charpath = function(str, b) {
	BWIPJS.logapi('charpath', arguments);
	var sw = this.stringwidth(str);

	// Emulate the char-path by placing a rectangle around it
	this.rlineto(0, sw.a);
	this.rlineto(sw.w, 0);
	this.rlineto(0, -sw.h);
}
BWIPJS.prototype.pathbbox = function() {
	BWIPJS.logapi('pathbbox', arguments);
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
BWIPJS.prototype.gsave = function() {
	BWIPJS.logapi('gsave', arguments);
	// clone all g_ properties
	var ctx = {};
	for (var id in this)
		if (id.indexOf('g_') == 0)
			ctx[id] = this.gclone(this[id]);

	this.gstk.push(ctx);
}
BWIPJS.prototype.grestore = function() {
	BWIPJS.logapi('grestore', arguments);
	if (!this.gstk.length)
		throw new Error('grestore: stack underflow');
	var ctx = this.gstk.pop();
	for (var id in ctx)
		this[id] = ctx[id];

	// color is part of the bitmap interface and must be restored separately
	this.bmap.color(this.g_rgb[0], this.g_rgb[1], this.g_rgb[2]);
}
BWIPJS.prototype.stroke = function() {
	BWIPJS.logapi('stroke', arguments);
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
		case 'a':
			this.drawarc(s[0], s[1], e[0], e[1], a[1].sa, a[1].se, penx, peny);
			break;
		case 'c':	// closepath
			break;
		default:
			throw new Error('stroke: undefined opcode: ' + a[0]);
		}
	}
	this.g_path = [];
}
BWIPJS.prototype.fill = function() {
	BWIPJS.logapi('fill', arguments);
	if (!this.g_path.length)						 // Nothing to do?
		return;
	if (this.g_path[this.g_path.length-2][0] != 'c') // Is the path closed?
		this.closepath();

	// Save off the existing bitmap and install a custom one for
	// fast filling
	var bmap = this.bmap;
	this.bmap = new BWIPJS.fillmap;

	for (var i = 0; i < this.g_path.length; ) {
		var s = this.g_path[i++];	// start point
		var a = this.g_path[i++];	// args
		var e = this.g_path[i++];	// end point
		switch (a[0]) {
		case 'l':	// line
			this.drawline(false, s[0], s[1], e[0], e[1], 1, 1);
			break;
		case 'a':	// arc/arcn
			this.drawarc(s[0], s[1], e[0], e[1], a[1].sa, a[1].se, 1, 1);
			break;
		case 'c':	// closepath
			this.bmap.fill();
			break;
		default:
			throw new Error('fill: undefined opcode: ' + a[0]);
		}
	}

	// Transfer the fill to the actual bitmap
	this.bmap.xfer(bmap);

	// Restore the actual bitmap
	this.bmap = bmap;

	this.g_path = [];
}
// source is an 8-bit bitmask
BWIPJS.prototype.imagemask = function(width, height, polarity, matrix, source) {
	BWIPJS.logapi('imagemask', arguments);
	// Extract the matrix values for easier usage
	var ma = matrix.get(0);
	var mb = matrix.get(1);
	var mc = matrix.get(2);
	var md = matrix.get(3);
	var mx = matrix.get(4);
	var my = matrix.get(5);
	var sx = this.g_tsx;
	var sy = this.g_tsy;
	var w2 = width * width;
	var h2 = height * height;
	var da = (ma < 0 ? 1 : 0);
	var db = (mb < 0 ? 1 : 0);
	var dc = (mc < 0 ? 1 : 0);
	var dd = (md < 0 ? 1 : 0);
	var rl = Math.ceil(width / 8); 	// row length (bytes per row)
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var by = source.get(y*rl + Math.floor(x/8));
			var bt = by & (1 << 7-(x%8));
			if (bt && !polarity || !bt && polarity)
				continue;
			var x0 = Math.floor(this.g_tdx + ((x+da-mx)*ma + (y+dc-my)*mc) * sx / w2);
			var y0 = Math.floor(this.g_tdy + ((y+dd-my)*md + (x+db-mx)*mb) * sy / h2);
			var x1 = Math.floor(x0 + sx/width);
			var y1 = Math.floor(y0 + sy/height);
			for (var j = y0; j < y1; j++) {
				for (var i = x0; i < x1; i++)
					this.bmap.set(i,j,255);
			}
		}
	}
}
// dx,dy are inter-character gaps
BWIPJS.prototype.show = function(str, dx, dy) {	// str is a psstring
	BWIPJS.logapi('show', arguments);
	var font = this.getfont();
	var size = +this.g_font.FontSize || 10;

	// Convert dx,dy to device space
	dx = this.g_tsx * dx;
	dy = this.g_tsy * dy;

	// PostScript renders bottom-up, so we must render the glyphs inverted.
	for (var i = 0; i < str.length; i++) {
		var ch = str.get(i);
		var offset = BWIPJS.ft_bitmap(font, ch, size*this.g_tsx, size*this.g_tsy);
		if (!offset) {
			this.g_posx += BWIPJS.ft_advance() + dx;
			continue;
		}

		// The OCR digits seem to be about a half-point right compared to the
		// font metrics hard-coded into BWIPP.  This is especially apparent
		// in the EAN and UPC codes where the bars mix with the text.
		var l = this.g_posx + BWIPJS.ft_left();
		if (font <= 1 && ch >= 48 && ch <= 57)
			l -= 0.5 * this.g_tsx;

		var t = this.g_posy + BWIPJS.ft_top() + dy;
		var w = BWIPJS.ft_width();
		var h = BWIPJS.ft_height();
		var b = Module.HEAPU8.subarray(offset, offset + w * h);
		var a;  // alpha

		for (var x = 0; x < w; x++) {
			for (var y = 0; y < h; y++) {
				a = b[y * w + x];
				if (a)
					this.bmap.set(l+x, t-y, a);
			}
		}

		this.g_posx += BWIPJS.ft_advance() + dx;
	}
}

// Perform a deep clone of the graphics state properties
BWIPJS.prototype.gclone = function(o) {
	//BWIPJS.logapi('gclone', arguments);
	if (o instanceof BWIPJS.psstring)
		return new BWIPJS.psstring(o);

	if (o instanceof Array) {
		var t = [];
		for (var i = 0; i < o.length; i++)
			t[i] = this.gclone(o[i]);
		return t;
	}

	if (o instanceof Object) {
		var t = {};
		for (var id in o)
			t[id] = this.gclone(o[id]);
		return t;
	}
	return o;
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
	BWIPJS.logapi('drawline', arguments);
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

BWIPJS.prototype.drawarc = function(x0, y0, x1, y1, sa, se, penx, peny) {
	BWIPJS.logapi('drawarc', arguments);
	var a = Math.abs(x1-x0);
	var b = Math.abs(y1-y0);
	var b1 = b & 1;
	var dx = 4*(1-a)*b*b;
	var dy = 4*(b1+1)*a*a;
	var err = dx + dy + b1*a*a;
	var e2;

	if (x0 > x1) { x0 = x1; x1 += a; }
	if (y0 > y1) y0 = y1;
	y0 += Math.floor((b+1)/2);
	y1 = y0 - b1;
	a *= 8*a; b1 = 8*b*b;

	do {
		this.bmap.set(x1, y0, 255);		// 1st quadrant
		this.bmap.set(x0, y0, 255);		// 2nd quadrant
		this.bmap.set(x0, y1, 255);		// 3rd quadrant
		this.bmap.set(x1, y1, 255);		// 4th quadrant
		e2 = 2*err;
		if (e2 >= dx) { x0++; x1--; dx += b1; err += dx; }
		if (e2 <= dy) { y0++; y1--; dy += a;  err += dy; }
	} while (x0 <= x1);

	while (y0-y1 < b) {	// too early stop of flat ellipse
		this.bmap.set(x0-1, y0, 255);
		this.bmap.set(x1+1, y0++, 255);
		this.bmap.set(x0-1, y1, 255);
		this.bmap.set(x1+1, y1--, 255);
	}
}


// A bitmap implementation for faster filling.
// TBD: Too simplistic algorithm - needs to be enhanced.
// barcode.ps has very simple fill rqmts - we implement fill by walking
// away from the center of the path-box.  And to handle the concentric
// rings in maxicode, each fill operation inverts the previous content.
//
// The bitmap will contain three possible values per bit:
//	undefined : hasn't been set()
//	0 (zero)  :	was set by the current path operation
//	1 (one)	  : was set by the previous fill()
// 
// When filling, all zeros and undefines (bounded by the path) will be
// inverted to ones.  All ones will be inverted to undefined.
BWIPJS.fillmap = function() {
	BWIPJS.logapi('fillmap', arguments);
	var bmap = [];
	var minx = Infinity;
	var miny = Infinity;
	var maxx = -Infinity;
	var maxy = -Infinity;

	this.set = function(x,y) {
		x = ~~x;
		y = ~~y;

		if (!bmap[y])
			bmap[y] = [];
		bmap[y][x] = 0;

		if (minx > x)	minx = x;
		if (maxx < x)	maxx = x;
		if (miny > y)	miny = y;
		if (maxy < y)	maxy = y;
	}

	function get(x,y) {
		return (bmap[y] ? bmap[y][x] : undefined);
		//return bmap[y][x];
	}
	function inv(x,y) {
		bmap[y][x] = bmap[y][x] == 1 ? undefined : 1;
	}

	// A very simplistic filling algorithm - will only handle regular shapes
	this.fill = function() {
		var x0 = Math.floor(minx + (maxx-minx) / 2);
		var y0 = Math.floor(miny + (maxy-miny) / 2);

		// Fill up
		for (var y = y0; y <= maxy; y++) {
			// Find the bounds for this line
			for (var t0 = minx; t0 <= maxx && get(t0,y) !== 0; t0++);
			for (var t1 = maxx; t1 >= minx && get(t1,y) !== 0; t1--);
			while (t0 <= t1)
				inv(t0++, y);
		}

		// Fill down
		for (var y = y0-1; y >= miny; y--) {
			// Find the bounds for this line
			for (var t0 = minx; t0 <= maxx && get(t0,y) !== 0; t0++);
			for (var t1 = maxx; t1 >= minx && get(t1,y) !== 0; t1--);
			while (t0 <= t1)
				inv(t0++, y);
		}
	}

	this.xfer = function(bmap) {
		var x0 = minx;
		var x1 = maxx;
		var y0 = miny;
		var y1 = maxy;

		var out = '';
		for (var y = y0; y <= y1; y++) {
			for (var x = x0; x <= x1; x++) {
				if (get(x,y) === 1)
					bmap.set(x,y,255);
				out += get(x,y) === 1 ? 'X' : '0';
			}
			out += '\r\n';
		}
	}
}
