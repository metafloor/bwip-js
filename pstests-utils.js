
// print operator
// writes the characters of string to the standard out. This operator provides the
// simplest means of sending text to an application or an interactive user.
function $pstr() {
    let s = $k[--$j];
    if (s instanceof Uint8Array) {
        s = $z(s);
    } else if (typeof s !== 'string') {
        s = '--nostringval--';
    }
    process.stdout.write(s);
}

// = operator
// pops an object from the operand stack, produces a text representation of that object’s value,
// and writes the result to the standard out, followed by a newline character. The text is that
// produced by the cvs operator; thus, = prints the value of a number, boolean, string, name,
// or operator object and prints --nostringval-- for an object of any other type.
function $pr() {
    let v = $k[--$j];
    process.stdout.write(_tostring(v) + '\n');
}

// == operator
// pops an object from the operand stack, produces a text representation of that object, and
// writes the result to the standard out, followed by a newline character.
// This operator attempts to produce a result that resembles the PostScript
// syntax for creating the object. It precedes literal names with /, brackets strings
// with ( … ), and expands the values of arrays and packed arrays and brackets them
// with [ … ] or { … }. For an object with no printable representation, == produces
// the name of its type in the form -type-, such as -mark- or -dict-.
function $prpr() {
    let v = $k[--$j];
    process.stdout.write(_tostring(v) + '\n');
}

// pstack operator
// writes text representations of every object on the stack to the standard out,
// but leaves the stack unchanged. pstack applies the == operator to each element of
// the stack, starting with the topmost element.
function $pstack() {
    for (let i = $j-1; i >= 0; i--) {
        process.stdout.write(_tostring($k[i]) + '\n');
    }
}

// stack operator
// writes text representations of every object on the stack to the standard out,
// but leaves the stack unchanged. stack applies the = operator to each element of
// the stack, starting with the topmost element.
function $stack() {
    for (let i = $j-1; i >= 0; i--) {
        process.stdout.write(_tostring($k[i]) + '\n');
    }
}

function _tostring(v) {
    // null can be mis-typed - get it out of the way
    if (v === null) {
        return 'null';
    } else if (v === undefined) {
        return '--undefined--';
    } else if (v instanceof Array) {
        var s = '<array,' + v.o + ',' + v.length + '>[';
        for (var j = v.o, a = v.b, l = v.length + v.o; j < l; j++) {
            s += (j == v.o ? '' : ',') + _tostring(a[j]);
        }
        return s + ']';
    } else if (v instanceof Uint8Array) {
        return '<v8>"' + $z(v) + '"';
    } else if (typeof v === 'function') {
        return '--function--';
    } else if (typeof v === 'object') {
        var s = '<<';
        for (var id in v) {
            s += (s.length == 2 ? '' : ',') + id + ':' + _tostring(v[id]);
        }
        return s + '>>';
    } else if (typeof v === 'string') {
        return '"' + v + '"';
    } else {
        return '' + v;
    }
}

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
    if (typeof s === 'function') {
        return s;
    }
    return s[k];
}
// Code-patching aware put
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
    } else if (typeof d == 'function') {
        if (k == 0) {
            $_._arg0_ = v;
        } else if (k == 1) {
            $_._arg1_ = v;
        } else if (k === 4) {
            // See processoptions
            $_._arg4_ = v;
        } else {
            throw new Error('put-invalid-function-arg-' + k);
        }
    } else {
        throw new Error('put-not-writable-' + (typeof d));
    }
}
// Code-patching aware putinterval
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
    } else if (typeof d == 'function') {
        if (o !== 0 || s.length !== 2) {
            console.log('offset=' + o, 'length=' + s.length);
            throw new Error('putinterval-invalid-function-args');
        }
        if (!(s instanceof Array)) {
            console.log(s);
            throw new Error('putinterval-source-not-an-array');
        }
        $_._arg0_ = s.b[s.o];
        $_._arg1_ = s.b[s.o+1];
    } else {
        throw new Error('putinterval-not-writable-' + (typeof d));
    }
}
