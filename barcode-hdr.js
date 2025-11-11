// bwip-js/barcode-hdr.js
//
// This code is injected above the cross-compiled barcode.js.

// The BWIPJS object (graphics interface)
var $$ = null;
var $j = 0;     // stack pointer
var $k = [];    // operand stack
var $_ = {};    // base of the dictionary stack

// Aliases from Math ops
const $abs = Math.abs;
const $ceil = Math.ceil;
const $floor = Math.floor;
const $log = Math.log;
const $pow = Math.pow
const $round = Math.round;
const $sqrt = Math.sqrt;

// Code instrumenting
const $metrics = {};

// Array ctor
//  $a()    : Build a new array up to the Infinity-marker on the stack.
//  $a(arr) : Convert native array to a "view" of the array.
//  $a(len) : Create a new array of length `len`
function $a(a) {
    if (!arguments.length) {
        for (var i=$j-1;i>=0&&$k[i]!==Infinity;i--);
        if (i < 0) {
            throw new Error('array-marker-not-found');
        }
        a=$k.splice(i+1,$j-1-i);
        $j=i;
    } else if (!(a instanceof Array)) {
        a=new Array(+arguments[0]);
        for (var i = 0, l = a.length; i < l; i++) {
            a[i] = null;
        }
    }
    a.b = a;    // base array
    a.o = 0;    // offset into base
    return a;
}

// dict ctor
//  $d() : look for the Infinity marker on the stack
function $d() {
    // Build the dictionary in the order the keys/values were pushed so enumeration
    // occurs in the correct sequence.
    for (var mark = $j - 1; mark >= 0 && $k[mark] !== Infinity; mark -= 2) {
        if ($k[mark - 1] === Infinity) {
            throw new Error('dict-malformed-stack');
        }
    }
    if (mark < 0) {
        throw new Error('dict-marker-not-found');
    }
    var d = new Map;
    for (var i = mark+1; i < $j; i += 2) {
        // Unlike javascript, postscript dict keys differentiate between
        // numbers and the string representation of a number.
        var k = $k[i]; // "key" into the dict entry
        var t = typeof k;
        if (t == 'number' || t == 'string') {
            d.set(k, $k[i+1]);
        } else if (k instanceof Uint8Array) {
            d.set($z(k), $k[i+1]);
        } else {
            throw new Error('dict-not-a-valid-key(' + k + ')');
        }
    }
    $j = mark;
    return d;
}

// string ctor
//  s(number)   : create zero-filled string of number-length
//  s(string)   : make a copy of the string
//  s(uint8[])  : make a copy of the string
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
    for (var i = 0, l = v.length; i < l; i++) {
        s[i] = v.charCodeAt(i);
    }
    return s;
}

// ... n c roll
function $r(n, c) {
    if ($j < n) {
        throw new Error('roll: --stack-underflow--');
    }
    if (!c) {
        return;
    }
    if (c < 0) {
        var t = $k.splice($j-n, -c);
    } else {
        var t = $k.splice($j-n, n-c);
    }
    $k.splice.apply($k, [$j-t.length, 0].concat(t));
}

// Primarily designed to convert uint8-string to string, but will call the
// the toString() method on any value.
function $z(s) {
    if (s instanceof Uint8Array) {
        return String.fromCharCode.apply(null,s);
    }
    return ''+s;
}

// Copies source to dest and returns a view of just the copied characters
function $strcpy(dst, src) {
    if (typeof dst === 'string') {
        dst = $s(dst);
    }
    if (src instanceof Uint8Array) {
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

// Copies source to dest and should (but doesn't) return a view of just the copied elements
function $arrcpy(dst, src) {
    for (var i = 0, l = src.length; i < l; i++) {
        dst[i] = src[i];
    }
    dst.length = src.length;
    return dst;
}

// cvs operator - convert a value to its string representation
//  s : string to store into
//  v : any value
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
// cvi operator - converts a numeric string value to integer/real.
function $cvi(s) {
    if (s instanceof Uint8Array) {
        // nul-chars on the end of a string are ignored by postscript but cause javascript
        // to return a zero result.
        return $floor(String.fromCharCode.apply(null,s).replace(/\0+$/, ''));
    }
    return $floor(''+s);
}

// cvrs operator - convert a number to a radix string
//  s : string to store into
//  n : number
//  r : radix
function $cvrs(s,n,r) {
    return $strcpy(s,(~~n).toString(r).toUpperCase());
}

// get operator
//  s : source
//  k : key
function $get(s,k) {
    if (s instanceof Uint8Array) {
        return s[k];
    }
    if (typeof s === 'string') {
        return s.charCodeAt(k);
    }
    if (s instanceof Array) {
        return s.b[s.o+k];
    }
    // Map or Object - need a string key
    if (k instanceof Uint8Array) {
        k = $z(k);
    }
    if (s instanceof Map) {
        return s.get(k);
    }
    return s[k];
}

// put operator
//  d : dest
//  k : key
//  v : value
function $put(d,k,v) {
    if (d instanceof Uint8Array) {
        d[k] = v;
    } else if (d instanceof Array) {
        d.b[d.o+k] = v;
    } else if (typeof d == 'object') {
        if (k instanceof Uint8Array) {
            d.set($z(k), v);
        } else {
            d.set(k, v);
        }
    } else {
        throw new Error('put-not-writable-' + (typeof d));
    }
}

// getinterval operator
//  s : src
//  o : offset
//  l : length
function $geti(s,o,l) {
    if (s instanceof Uint8Array) {
        return s.subarray(o,o+l);
    }
    if (s instanceof Array) {
        var a = new Array(l);
        a.b = s.b;      // base array
        a.o = s.o + o;  // offset into base
        return a;
    }
    // Must be a string
    return s.substr(o,l);
}

// putinterval operator
//  d : dst
//  o : offset
//  s : src
function $puti(d,o,s) {
    if (d instanceof Uint8Array) {
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
    } else if (d instanceof Array) {
        // Operate on the base arrays
        var darr = d.b;
        var doff = o + d.o;
        var sarr = s.b;
        var soff = s.o;

        for (var i = 0, l = s.length; i < l; i++) {
            darr[doff+i] = sarr[soff+i];
        }
    } else {
        throw new Error('putinterval-not-writable-' + (typeof d));
    }
}

// type operator
function $type(v) {
    // null can be mis-typed - get it out of the way
    if (v == null) {
        return 'nulltype';
    }
    var t = typeof v;
    if (t == 'number') {
        return v % 1 ? 'realtype' : 'integertype';
    }
    if (t == 'boolean') {
        return 'booleantype';
    }
    if (t == 'string' || v instanceof Uint8Array) {
        return 'stringtype';
    }
    if (t == 'function') {
        return 'operatortype';
    }
    if (v instanceof Array) {
        return 'arraytype';
    }
    return 'dicttype';
    // filetype
    // fonttype
    // gstatetype
    // marktype (v === Infinity)
    // nametype
    // savetype
}

// anchorsearch operator
//      string seek anchorsearch suffix seek true %if-found
//                               string false     %if-not-found
function $anchorsearch(str, seek) {
    if (!(str instanceof Uint8Array)) {
        str = $s(str);
    }
    var i = 0, ls = str.length, lk = seek.length;

    // Optimize for single characters.
    if (lk == 1) {
        var cd = seek instanceof Uint8Array ? seek[0] : seek.charCodeAt(0);
        i = str[0] == cd ? 1 : ls;
    } else if (seek.length <= ls) {
        // Slow path,
        if (!(seek instanceof Uint8Array)) {
            seek = $s(seek);
        }
        for ( ; i < lk && str[i] == seek[i]; i++) ;
    }
    if (i == lk) {
        $k[$j++] = str.subarray(lk);
        $k[$j++] = str.subarray(0, lk);
        $k[$j++] = true;
    } else {
        $k[$j++] = str;
        $k[$j++] = false;
    }
}

// search operator
//      string seek search suffix match prefix true %if-found
//                         string false             %if-not-found
function $search(str, seek) {
    if (!(str instanceof Uint8Array)) {
        str = $s(str);
    }
    var ls = str.length;

    // Virtually all uses of search in BWIPP are for single-characters.
    // Optimize for that case.
    if (seek.length == 1) {
        var lk = 1;
        var cd = seek instanceof Uint8Array ? seek[0] : seek.charCodeAt(0);
        for (var i = 0; i < ls && str[i] != cd; i++) ;
    } else {
        // Slow path,
        if (!(seek instanceof Uint8Array)) {
            seek = $s(seek);
        }
        var lk = seek.length;
        var cd = seek[0];
        for (var i = 0; i < ls && str[i] != cd; i++) ;
        while (i < ls) {
            for (var j = 1; j < lk && str[i+j] === seek[j]; j++) ;
            if (j === lk) {
                break;
            }
            for (i++; i < ls && str[i] != cd; i++) ;
        }
    }
    if (i < ls) {
        $k[$j++] = str.subarray(i+lk);
        $k[$j++] = str.subarray(i, i+lk);
        $k[$j++] = str.subarray(0, i);
        $k[$j++] = true;
    } else {
        $k[$j++] = str;
        $k[$j++] = false;
    }
}

// The callback is omitted when forall is being used just to push onto the
// stack.  The callback normally returns undefined.  A return of true means break.
function $forall(o, cb) {
    if (o instanceof Uint8Array) {
        for (var i = 0, l = o.length; i < l; i++) {
            $k[$j++] = o[i];
            if (cb && cb()) break;
        }
    } else if (o instanceof Array) {
        // The array may be a view.
        for (var a = o.b, i = o.o, l = o.o + o.length; i < l; i++) {
            $k[$j++] = a[i];
            if (cb && cb()) break;
        }
    } else if (typeof o === 'string') {
        for (var i = 0, l = o.length; i < l; i++) {
            $k[$j++] = o.charCodeAt(i);
            if (cb && cb()) break;
        }
    } else if (o instanceof Map) {
        for (var keys = o.keys(), i = 0, l = o.size; i < l; i++) {
            var id = keys.next().value;
            $k[$j++] = id;
            $k[$j++] = o.get(id);
            if (cb && cb()) break;
        }
    } else {
        for (var id in o) {
            $k[$j++] = id;
            $k[$j++] = o[id];
            if (cb && cb()) break;
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
    if (a instanceof Uint8Array && b instanceof Uint8Array) {
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
    if (a instanceof Uint8Array && typeof b === 'string' ||
        b instanceof Uint8Array && typeof a === 'string') {
        if (a instanceof Uint8Array) {
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
    if (a instanceof Uint8Array) {
        a = $z(a);
    }
    if (b instanceof Uint8Array) {
        b = $z(b);
    }
    return a < b;
}
function $le(a, b) {
    if (a instanceof Uint8Array) {
        a = $z(a);
    }
    if (b instanceof Uint8Array) {
        b = $z(b);
    }
    return a <= b;
}
function $gt(a, b) {
    if (a instanceof Uint8Array) {
        a = $z(a);
    }
    if (b instanceof Uint8Array) {
        b = $z(b);
    }
    return a > b;
}
function $ge(a, b) {
    if (a instanceof Uint8Array) {
        a = $z(a);
    }
    if (b instanceof Uint8Array) {
        b = $z(b);
    }
    return a >= b;
}
function $an(a, b) {    // and
    return (typeof a === 'boolean') ? a && b : a & b;
}
function $or(a, b) {    // or
    return (typeof a === 'boolean') ? a || b : a | b;
}
function $xo(a, b) {    // xor
    return (typeof a === 'boolean') ? a != b : a ^ b;
}
function $nt(a) {
    return typeof a == 'boolean' ? !a : ~a;
}
// emulate single-precision floating-point.  This is not Math.fround().
// More like ffloor()...
var $f = (function (fa) {
    return (v)=>{
        //return Number.isInteger(v) ? v : (fa[0] = v, fa[0]);
        return (v|0) == v ? v : (fa[0] = v, fa[0]);
    };
})(new Float32Array(1));

// This is a replacement for the BWIPP raiseerror function.
function bwipp_raiseerror() {
    var info = $k[--$j];
    var name = $k[--$j];
    if (typeof info == 'string' || info instanceof Uint8Array) {
        throw new Error($z(name) + ": " + $z(info));
    } else {
        $k[$j++] = info;  // see mktests debugEqual
        // Match ghostscript output
        throw $z(name) + '\nAdditional information: ' + tostring(info);
    }

    function tostring(v) {
        if (v instanceof Array) {
            let s = '';
            for (let i = v.o, l = v.o + v.length; i < l; i++) {
                s += ' ' + tostring(v.b[i]);
            }
            return '[' + s.substr(1) + ']';
        } else if (v instanceof Uint8Array) {
            return String.fromCharCode.apply(String, v);
        } else if (v instanceof Map) {
            let s = '';
            for (const [key, val] of v) {
                s += ' ' + tostring(key) + ' ' + tostring(val);
            }
            return '<<' + s.substr(1) + '>>';
        } else if (v && typeof v == 'object') {
            let s = '';
            for (let id in v) {
                s += ' ' + tostring(id) + ' ' + tostring(v[id]);
            }
            return '<<' + s.substr(1) + '>>';
        } else {
            return '' + v;
        }
    }
}

// This is a replacement for the BWIPP processoptions function.
// We cannot use the BWIPP version due to two reasons:
// - legacy code allows strings to be numbers and numbers to be strings
// - in javascript, there is no way to tell the difference between a real
//   number that is an integer, and an actual integer.
//
// options currentdict processoptions exec -> options
function bwipp_processoptions() {
    var dict = $k[--$j];
    var opts = $k[$j-1];
    if (opts instanceof Uint8Array) {
        opts = $z(opts);
    }
    if (typeof opts == 'string') {
        let vals = opts.trim().split(/ +/g)
        $k[$j-1] = opts = new Map();
        for (let i = 0; i < vals.length; i++) {
            let pair = vals[i].split('=');
            if (pair.length == 1) {
                opts.set(pair[0], true);
            } else {
                opts.set(pair[0], pair[1]);
            }
        }
    }
    for (var id in dict) {
        var val;
        if (!opts.has(id)) {
            continue;
        }
        val = opts.get(id);
        var def = dict[id];
        var typ = typeof def;

        // null is a placeholder for realtype
        if (def == null || typ == 'number') {
            // This allows for numeric strings
            if (!isFinite(+val)) {
                throw new Error('bwipp.invalidOptionType: ' + id +
                        ': not a realtype: ' + val);
            }
            if (typeof val == 'string') {
                val = +val;
                opts.set(id, val);
            }
        } else if (typ == 'boolean') {
            if (val !== true && val !== false) {
                // In keeping with the ethos of javascript, allow a more relaxed
                // interpretation of boolean.
                if (val == null || (val|0) === val) {
                    val = !!val;
                } else if (val == 'true') {
                    val = true;
                } else if (val == 'false') {
                    val = false;
                } else {
                    throw new Error('bwipp.invalidOptionType: ' + id +
                            ': not a booleantype: ' + val);
                }
                opts.set(id, val);
            }
        } else if (typ == 'string' || def instanceof Uint8Array) {
            // This allows numbers to be strings
            if (typeof val == 'number') {
                val = ''+val;
                opts.set(id, val);
            } else if ((id === 'extratext' || id === 'alttext') && typeof val === 'string') {
                // BWIPP 2025-06-13 introduced (alt|extra)textsubspace which 
                // allows replacing a marker character with space.  This
                // requires the text to be a uint8array otherwise we get
                //      Error: put-not-writable-string
                val = $s(val);
                opts.set(id, val);
            } else if (typeof val != 'string' && !(val instanceof Uint8Array)) {
                throw new Error('bwipp.invalidOptionType: ' + id +
                        ': not a stringtype: ' + val);
            }
        }
        // Set the option into the dictionary
        dict[id] = val;
    }
}
