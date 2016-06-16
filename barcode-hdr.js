// bwip-js/barcode-hdr.js
//
// This code is injected above the cross-compiled barcode.ps.

// The BWIPJS object (graphics interface)
var $$ = null;

// The global dictionary.  Each renderer and encoder declare a
// $1 local dict.
var $0 = {
	$error:{}	// the postscript error object
};

var $j = 0;		// stack pointer
var $k = [];	// operand stack

// Array ctor
//	$a()	: Build a new array up to the Infinity-marker on the stack.
//	$a(arr)	: Convert native array to a "view" of the array.
//	$a(len)	: Create a new array of length `len`
function $a(a) {
	if (!arguments.length) {
		for (var i=$j-1;i>=0&&$k[i]!==Infinity;i--);
		if (i < 0) {
			throw 'array-marker-not-found';
		}
		a=$k.splice(i+1,$j-1-i);
		$j=i;
	} else if (!(a instanceof Array)) {
		a=new Array(+arguments[0]);
		a.fill(null);
	} 
	a.b = a;	// base array
	a.o = 0;	// offset into base
	return a;
}

// dict ctor
//	$d() : look for the Infinity marker on the stack
function $d() {
	var d = {};
	for (var i=$j-1;i>=0&&$k[i]!==Infinity;i-=2) {
		if ($k[i-1]===Infinity) {
			throw 'dict-malformed-stack';
		}
		// Unlike javascript, postscript dict keys differentiate between
		// numbers and the string representation of a number.
		var k = $k[i-1];		// "key" into the dict entry
		var t = typeof k;
		if (t === 'number') {
			d['\uffff' + k]=$k[i];
		} else if (t === 'string') {
			d[k]=$k[i];
		} else if (ArrayBuffer.isView(k)) {
			d[$z(k)] = $k[i];
		} else {
			throw 'dict-not-a-valid-key(' + k + ')';
		}
	}
	if (i < 0) {
		throw 'dict-marker-not-found';
	}
	$j=i;
	return d;
}

// string ctor
//	s(number)	: create zero-filled string of number-length
//	s(string)	: make a copy of the string
//	s(uint8[])	: make a copy of the string
//
// Returns a Uint8Array-string.
function $s(v) {
	var t = typeof v;
	if (t === 'number') {
		return new Uint8Array(v);
	}
	if (t !== 'string') {
		v = ''+v;
	}
	var s = new Uint8Array(v.length);
	for (var i = 0; i < v.length; i++) {
		s[i] = v.charCodeAt(i);
	}
	return s;
}

// Primarily designed to convert uint8-string to string, but will call the
// the toString() method on any value.
function $z(s) {
	if (ArrayBuffer.isView(s)) {
		// Postscript treats nul-char as end of string, even if string is
		// longer.
		for (var i = 0, l = s.length; i < l && s[i]; i++);
		if (i < l) {
			return String.fromCharCode.apply(null,s.subarray(0, i));
		}
		return String.fromCharCode.apply(null,s)
	}
	return ''+s;
}

// Copies source to dest and returns a view of just the copied characters
function $strcpy(dst, src) {
	if (typeof dst === 'string') {
		dst = $s(dst);
	}
	if (ArrayBuffer.isView(src)) {
		for (var i = 0, l = src.length; i < l; i++) {
			dst[i] = src[i];
		}
	} else {
		for (var i = 0, l = src.length; i < l; i++) {
			dst[i] = src.charCodeAt(i);
		}
	}
	return src.length < dst.length ? dst.subarray(0, src.length) : dst;
}

// cvs operator - convert a value to its string representation
//	s : string to store into
//	v : any value
function $cvs(s,v) {
	var t = typeof v;
	if (t == 'number' || t == 'boolean' || v === null) {
		v = '' + v;
	} else if (t !== 'string') {
		v = '--nostringval--';
	}
	for (var i = 0, l = v.length; i < l; i++) {
		s[i] = v.charCodeAt(i);
	}
	$k[$j++] = i < s.length ? s.subarray(0, i) : s;
}
// cvrs operator - convert a number to a radix string
//	s : string to store into
//	n : number
//	r : radix
function $cvrs(s,n,r) {
	return $strcpy(s,(~~n).toString(r).toUpperCase());
}

// get operator
//	s : source
//	k : key
function $get(s,k) {
	if (ArrayBuffer.isView(s)) {
		return s[k];
	}
	if (typeof s === 'string') {
		return s.charCodeAt(k);
	}
	if (Array.isArray(s)) {
		return s.b[s.o+k];
	}
	// Must be a dict object : with postscript dict objects, a number key
	// is differerent than its string representation.  postscript uses
	// 8-bit strings, so \uffff can never be in a key value.
	if (typeof k === 'number') {
		return s['\uffff'+k];
	}
	if (ArrayBuffer.isView(k)) {
		return s[$z(k)];
	}
	return s[k];
}

// put operator
//	d : dest
//	k : key
//	v : value
function $put(d,k,v) {
	if (ArrayBuffer.isView(d)) {
		d[k] = v;
	} else if (Array.isArray(d)) {
		d.b[d.o+k] = v;
	} else if (typeof d == 'object') {
		if (ArrayBuffer.isView(k)) {
			d[$z(k)] = v;
		} else {
			d[typeof k == 'number' ? '\uffff'+k : k] = v;
		}
	} else {
		throw 'put-not-writable-' + (typeof d);
	}
}

// getinterval operator
//	s : src
//	o : offset
//	l : length
function $geti(s,o,l) {
	if (ArrayBuffer.isView(s)) {
		return s.subarray(o,o+l);
	}
	if (Array.isArray(s)) {
		var a = new Array(l);
		a.b = s.b;		// base array
		a.o = s.o + o;	// offset into base
		return a;
	}
	// Must be a string
	return s.substr(o,l);
}

// putinterval operator
//	d : dst
//	o : offset
//	s : src
function $puti(d,o,s) {
	if (ArrayBuffer.isView(d)) {
		if (typeof s == 'string') {
			for (var i = 0, l = s.length; i < l; i++) {
				d[o+i] = s.charCodeAt(i);
			}
		} else {
			// When both d and s are the same, we want to copy
			// backwards, which works for the general case as well.
			for (var i = s.length-1; i >= 0; i--) {
				d[o+i] = s[i];
			}
		}
	} else if (Array.isArray(d)) {
		// Operate on the base arrays
		var darr = d.b;
		var doff = o + d.o;
		var sarr = s.b;
		var soff = s.o;

		for (var i = 0, l = s.length; i < l; i++) {
			darr[doff+i] = sarr[soff+i];
		}
	} else {
		throw 'putinterval-not-writable-' + (typeof d);
	}
}

// type operator
function $type(v) {
	// null can be mis-typed - get it out of the way
	if (v === null || v === undefined) {
		return 'nulltype';
	}
	var t = typeof v;
	if (t == 'number') {
		return v % 1 ? 'realtype' : 'integertype';
	}
	if (t == 'boolean') {
		return 'booleantype';
	}
	if (t == 'string' || ArrayBuffer.isView(v)) {
		return 'stringtype';
	}
	if (t == 'function') {
		return 'operatortype';
	}
	if (Array.isArray(v)) {
		return 'arraytype';
	}
	return 'dicttype';
	// filetype
	// fonttype
	// gstatetype
	// marktype	(v === Infinity)
	// nametype
	// savetype
}

// search operator
//		string seek search suffix match prefix true %if-found
//						   string false				%if-not-found
function $search(str, seek) {
	if (!ArrayBuffer.isView(str)) {
		str = $s(str);
	}
	// Virtually all uses of search in BWIPP are for single-characters.
	// Optimize for that case.
	if (seek.length == 1) {
		var cd = ArrayBuffer.isView(seek) ? seek[0] : seek.charCodeAt(0);
		var i = str.indexOf(cd);
		if (i >= 0) {
			$k[$j++] = str.subarray(i+1, l);
			$k[$j++] = str.subarray(i, i+1);
			$k[$j++] = str.subarray(0, i);
			$k[$j++] = true;
		} else {
			$k[$j++] = str;
			$k[$j++] = false;
		}
		return;
	}

	// Slow path, 
	if (!ArrayBuffer.isView(seek)) {
		seek = $(seek);
	}
	var i = str.indexOf(seek[0]);
	var l = seek.length;
	while (i >= 0) {
		for (var j = 1; j < l && str[i+j] === seek[j]; j++);
		if (j === l) {
			$k[$j++] = str.subarray(i+l);
			$k[$j++] = str.subarray(i, i+l);
			$k[$j++] = str.subarray(0, i);
			$k[$j++] = true;
			return;
		}
		i = str.indexOf(seek[0], i+1);
	}
	$k[$j++] = str;
	$k[$j++] = false;
}

// The callback is omitted when forall is being used just to push onto the
// stack.
function $forall(o, cb) {
	if (ArrayBuffer.isView(o)) {
		for (var i = 0, l = o.length; i < l; i++) {
			$k[$j++] = o[i];
			cb && cb();
		}
	} else if (Array.isArray(o)) {
		// The array may be a view.
		for (var a = o.b, i = o.o, l = o.o + o.length; i < l; i++) {
			$k[$j++] = a[i];
			cb && cb();
		}
	} else if (typeof o === 'string') {
		for (var i = 0, l = o.length; i < l; i++) {
			$k[$j++] = o.charCodeAt(i);
			cb && cb();
		}
	} else {
		for (var id in o) {
			$k[$j++] = id;
			$k[$j++] = o[id];
			cb && cb();
		}
	}
}

function $cleartomark() {
	while ($j > 0 && $k[--$j] !== Infinity);
}

function $counttomark() {
	for (var i = $j-1; i >= 0 && $k[i] !== Infinity; i--);
	return $j - i - 1;
}

function $aload(a) {
	for (var i = 0, l = a.length, b = a.b, o = a.o; i < l; i++) {
		$k[$j++] = b[o+i];
	}
	// This push has been optimized out.  See $.aload() in psc.js.
	//$k[$j++] = a;
}
function $astore(a) {
	for (var i = 0, l = a.length, b = a.b, o = a.o+l-1; i < l; i++) {
		b[o-i] = $k[--$j];
	}
	$k[$j++] = a;
}

function $eq(a,b) {
	if (typeof a === 'string' && typeof b === 'string') {
		return a == b;
	}
	if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
		if (a.length != b.length) {
			return false;
		}
		for (var i = 0, l = a.length; i < l; i++) {
			if (a[i] != b[i]) {
				return false;
			}
		}
		return true;
	}
	if (ArrayBuffer.isView(a) && typeof b === 'string' ||
		ArrayBuffer.isView(b) && typeof a === 'string') {
		if (ArrayBuffer.isView(a)) {
			a = $z(a);
		} else {
			b = $z(b);
		}
		return a == b;
	}
	return a == b;
}
function $ne(a,b) {
	return !$eq(a,b);
}
function $lt(a, b) {
	if (ArrayBuffer.isView(a)) {
		a = $z(a);
	}
	if (ArrayBuffer.isView(b)) {
		b = $z(b);
	}
	return a < b;
}
function $le(a, b) {
	if (ArrayBuffer.isView(a)) {
		a = $z(a);
	}
	if (ArrayBuffer.isView(b)) {
		b = $z(b);
	}
	return a <= b;
}
function $gt(a, b) {
	if (ArrayBuffer.isView(a)) {
		a = $z(a);
	}
	if (ArrayBuffer.isView(b)) {
		b = $z(b);
	}
	return a > b;
}
function $ge(a, b) {
	if (ArrayBuffer.isView(a)) {
		a = $z(a);
	}
	if (ArrayBuffer.isView(b)) {
		b = $z(b);
	}
	return a >= b;
}
function $an(a, b) {	// and
	return (typeof a === 'boolean') ? a && b : a & b;
}
function $or(a, b) {	// or
	return (typeof a === 'boolean') ? a || b : a | b;
}
function $xo(a, b) {	// xor
	return (typeof a === 'boolean') ? !a && b || a && !b : a ^ b;
}

// DEBUG-BEGIN
function $stack() {
	console.log('[[[');
	for (var i = $j-1; i >= 0; i--) {
		console.log(tostring($k[i]));
	}
	console.log(']]]');
	
	function tostring(v) {
		// null can be mis-typed - get it out of the way
		if (v === null) {
			return 'null';
		} else if (v === undefined) {
			return '<undefined>';
		} else if (Array.isArray(v)) {
			var s = '<array,' + v.o + ',' + v.length + '>[';
			for (var j = v.o, a = v.b, l = v.length + v.o; j < l; j++) {
				s += (j == v.o ? '' : ',') + tostring(a[j]);
			}
			return s + ']';
		} else if (ArrayBuffer.isView(v)) {
			return '(' + $z[v] + ')';
		} else if (typeof v === 'object') {
			var s = '<<';
			for (var id in v) {
				s += (s.length == 7 ? '' : ',') + id + ':' + tostring(v[id]);
			}
			return s + '>>';
		} else if (typeof v === 'string') {
			return '"' + v + '"';
		} else {
			return '' + v;
		}
	}
}
// DEBUG-END
