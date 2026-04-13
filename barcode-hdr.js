// bwip-js/barcode-hdr.js
//
// This code is injected above the cross-compiled barcode.js.

var $$ = null;  // The BWIPJS object (graphics interface)
var $j = 0;     // stack pointer
var $k = [];    // operand stack
var $_ = {};    // base of the dictionary stack

// If you add a global variable here, add it to bwippdefs in psc.js replacing the
// bwipp_ prefix with $-sign.
// All globals must be referenced with $-sign prefix in the ps code.  They are handled
// special in the cross-compiler.
var bwipp_enabledontdraw = false;  // Used by the BWIPP pstests - always false in production
var bwipp_error = new Map;         // The postscript system error dict

// Aliases from Math ops
const $abs = Math.abs;
const $ceil = Math.ceil;
const $flr = Math.floor;
const $log = Math.log;
const $pow = Math.pow
const $rnd = Math.round;
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
        return $flr(String.fromCharCode.apply(null,s).replace(/\0+$/, ''));
    }
    return $flr(''+s);
}

// cvrs operator - convert a number to a radix string
//  s : string to store into
//  n : number
//  r : radix
function $cvrs(s,n,r) {
    return $strcpy(s,(~~n).toString(r).toUpperCase());
}

// cvx operator
// BWIPP uses this to bind a function to ...args
// The operand must be an array with a function as its last element.
// All other elements get pushed on the stack before invoking the
// function.
function $cvx(a) {
    if (!(a instanceof Array)) {
        throw new Error('cvx: not arraytype');
    }
    if (typeof a[a.length-1] !== 'function') {
        throw new Error('cvx: last array element not function');
    }
    const last = a.length-1;
    return function() {
        for (let i = 0; i < last; i++) {
            $k[$j++] = a[i];
        }
        a[last]();
    };
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

// known operator
function $has(v,k) {
    if (v instanceof Uint8Array) {
        return k < v.length;
    }
    if (typeof v === 'string') {
        return k < v.length;
    }
    if (v instanceof Array) {
        return k < v.length;
    }
    // Map or Object - need a string key
    if (k instanceof Uint8Array) {
        k = $z(k);
    }
    if (v instanceof Map) {
        return v.has(k);
    }
    return k in v;
}

// undef operator
//  d : dict
//  k : key
function $del(d,k) {
    if (d instanceof Map) {
        if (k instanceof Uint8Array) {
            d.delete($z(k));
        } else {
            d.delete(k);
        }
    } else if (typeof d == 'object') {
        if (k instanceof Uint8Array) {
            delete d[$z(k)];
        } else {
            delete d[k];
        }
    } else {
        throw new Error('undef-not-a-dict-' + (typeof d));
    }
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
    } else if (d instanceof Map) {
        if (k instanceof Uint8Array) {
            d.set($z(k), v);
        } else {
            d.set(k, v);
        }
    } else if (typeof d == 'object') {
        if (k instanceof Uint8Array) {
            d[$z(k)] = v;
        } else {
            d[k] = v;
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

// see rendertext
function $splay() {
    var map = $k[--$j];
    for (var keys = map.keys(), i = 0, l = map.size; i < l; i++) {
        var id = keys.next().value;
        if (id && typeof id === 'string') {
            $_[id] = map.get(id);
        }
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
        if (isFinite(v)) {
            return v % 1 ? 'realtype' : 'integertype';
        }
        return 'marktype';
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
function $bs(v,n) {
    // 64-bit shifts
    return n < 0 ? $flr(v / $pow(2, -n)) : v * $pow(2, n);
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
    bwipp_error.set('errorname', name);
    bwipp_error.set('errorinfo', info);

    if (typeof info == 'string' || info instanceof Uint8Array) {
        throw new Error($z(name) + ": " + $z(info));
    } else {
        throw $z(name);
    }
}

// This list was taken from BWIPP 2026-03-31
const _textOptions = new Map([
    [ '',           "" ],
    [ 'subspace',   "" ],
    [ 'split',      "" ],
    [ 'linegaps',   1.2 ],
    [ 'color',      "unset" ],
    [ 'xalign',     "left" ],
    [ 'yalign',     "above" ],
    [ 'direction',  "forward" ],
    [ 'font',       "OCR-B" ],
    [ 'size',       10.0 ],
    [ 'xoffset',    0.0 ],
    [ 'yoffset',    0.0 ],
    [ 'gaps',       0.0 ],
]);


// processoptions.generate
// The BWIPP code uses currentdict as a user dict, which we do not support.
// It also pulls in render.groupoptions which is not visible due to the
// code transforms.
function bwipp_inittextoptions() {
    for (var grp = 1; grp <= 9; grp++) {
        var map = _textOptions;
        for (var keys = map.keys(), i = 0, l = map.size; i < l; i++) { 
            var id = keys.next().value;
            $_['text' + grp + id] = map.get(id); 
        }
    }
}

// processoptions.collectgroup
function bwipp_grouptextoptions() {
    var a = $a(9);
    var map = _textOptions;
    for (var grp = 1; grp <= 9; grp++) {
        var dict = new Map;
        var pfx = 'text' + grp; 
        for (var keys = map.keys(), i = 0, l = map.size; i < l; i++) { 
            var id = keys.next().value;
            dict.set(id, $_[pfx + id]);
        }
        $put(a, grp-1, dict);
    }
    $k[$j++] = a;
}

// This list was taken from BWIPP 2026-03-31
const _textAliases = {
    alttext:              'text1',
    alttextsubspace:      'text1subspace',
    alttextsplit:         'text1split',
    textlinegaps:         'text1linegaps',
    textcolor:            'text1color',
    textxalign:           'text1xalign',
    textyalign:           'text1yalign',
    textdirection:        'text1direction',
    textfont:             'text1font',
    textsize:             'text1size',
    textxoffset:          'text1xoffset',
    textyoffset:          'text1yoffset',
    textgaps:             'text1gaps',
    extratext:            'text2',
    extratextsubspace:    'text2subspace',
    extratextsplit:       'text2split',
    extratextlinegaps:    'text2linegaps',
    extratextcolor:       'text2color',
    extratextxalign:      'text2xalign',
    extratextyalign:      'text2yalign',
    extratextdirection:   'text2direction',
    extratextfont:        'text2font',
    extratextsize:        'text2size',
    extratextxoffset:     'text2xoffset',
    extratextyoffset:     'text2yoffset',
    extratextgaps:        'text2gaps',
};

// This is a replacement for the BWIPP processoptions function.
// We cannot use the BWIPP version for several reasons:
// - legacy code allows strings to be numbers and numbers to be strings
// - in javascript, there is no way to tell the difference between a real
//   number that is an integer, and an actual integer.
// - (alt|extra)text must be uint8array due to the bwipp option 
//   (alt|extra)subspace, which requires the text to be writable.
//
// Invoked as:
//      options //processoptions exec -> options
function bwipp_processoptions() {
    var opts = $k[$j-1];
    if (opts instanceof Uint8Array) {
        opts = $z(opts);
    }
    if (typeof opts === 'string') {
        let vals = opts.trim().split(/ +/g)
        $k[$j-1] = opts = new Map();
        for (let i = 0; i < vals.length; i++) {
            let pair = vals[i].split('=');
            if (pair.length === 1) {
                opts.set(pair[0], true);
            } else {
                opts.set(pair[0], pair[1]);
            }
        }
    }
    // BWIPP does not raiseerror on these (text1* and text2* override alttext* and extratext*)
    if (opts.has('alttext') && opts.has('text1')) {
        throw new Error('bwipp.invalidTextOptions: alttext and text1 are mutually exclusive');
    }
    if (opts.has('extratext') && opts.has('text2')) {
        throw new Error('bwipp.invalidTextOptions: extratext and text2 are mutually exclusive');
    }
    // alttext* -> text1*, extratext* -> text2*
    for (var keys = opts.keys(), i = 0, l = opts.size; i < l; i++) { 
        var id = keys.next().value;
        if (_textAliases[id]) {
            opts.set(_textAliases[id], opts.get(id));
            if (/^(?:alt|extra)text/.test(id)) {
                opts.delete(id);
            }
        }
    }
    for (var id in $_) {
        var val;
        if (!opts.has(id)) {
            continue;
        }
        val = opts.get(id);
        var def = $_[id];
        var typ = typeof def;

        // null is a placeholder for realtype
        if (def === null || typ == 'number') {
            // Allow numeric strings to be numbers
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
                } else if (val === 'true') {
                    val = true;
                } else if (val === 'false') {
                    val = false;
                } else {
                    throw new Error('bwipp.invalidOptionType: ' + id +
                            ': not a booleantype: ' + val);
                }
                opts.set(id, val);
            }
        } else if (typ == 'string' || def instanceof Uint8Array) {
            // Allow numbers to be strings
            if (typeof val == 'number') {
                val = ''+val;
                opts.set(id, val);
            } else if (/^text\d$/.test(id) && typeof val === 'string') {
                // BWIPP 2025-06-13 introduced textsubspace which allows replacing
                // a marker character with space.  This requires the text to be a
                // uint8array otherwise we get
                //      Error: put-not-writable-string
                val = $s(val);
                opts.set(id, val);
            } else if (typeof val != 'string' && !(val instanceof Uint8Array)) {
                throw new Error('bwipp.invalidOptionType: ' + id +
                        ': not a stringtype: ' + val);
            }
        }
        // Set the option into the dictionary
        $_[id] = val;
    }
}

// Replacement for fifocache constructor.  We can't use the postscript version
// because it creates a user defined dict << ... >>> and fetch installs it as
// the current dictionary...
//    /fifocache {
//        8 dict begin
//    
//        /limit exch def
//        /max exch def
//        /cache max dict def
//        /fifo max array def
//        /state << /head 0 /cnt 0 /total 0 >> def
//        /fetch currentdict [
//            exch { //fifocache.fetch exec } aload pop
//        ] cvx def
//    
//        currentdict  % Leave this on the stack
//        end
//    } bind def
function bwipp_fifocache() {
    var limit = $k[--$j];
    var max = $k[--$j];
    var dict = {
        limit:limit, max:max, cache:new Map(), fifo:[],
        state:{ head:0, cnt:0, total:0 },
        fetch() {
            $k[$j++] = dict;
            bwipp_fifocache_fetch();
        },
    };
    $k[$j++] = dict;
}

function bwipp_fifocache_fetch() {
    var self = $k[--$j];
    var cardfn = $k[--$j];
    var genfn = $k[--$j];
    var key = $k[--$j];
    if (key instanceof Uint8Array) {
        key = String.fromCharCode.apply(null,key);
    }
    var cache = self.cache;
    if (cache.has(key)) {
        $k[$j++] = cache.get(key);
        return;
    }
    var fifo = self.fifo;
    var max = self.max;
    var limit = self.limit;
    genfn();
    var result = $k[$j-1];
    cardfn();
    var card = $k[--$j];
    var state = self.state; // { head:0, cnt:0, total:0 }
    if (card < limit) {
        for (;;) {
            if (state.total + card <= limit && state.cnt < max) {
                break;
            }
            var oldkey = fifo[state.head];
            $k[$j++] = cache.get(oldkey);
            cardfn();
            state.total = state.total - $k[--$j];
            cache.delete(oldkey);
            state.head = (state.head + 1) % max;
            state.cnt--;
        }
        cache.set(key, result);
        fifo[(state.head + state.cnt) % max] = key;
        state.cnt++;
        state.total = state.total + card;
    }
    $k[$j++] = result;
}


