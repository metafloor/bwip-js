
function valtostr(v) {
    if (v instanceof Uint8Array) {
        return '(' + v.reduce(function(s,v) {
                                if (v < 32 || v > 126) {
                                    return s + '\\x' + ('00' + v.toString(16)).slice(-2);
                                }
                                return s + String.fromCharCode(v);
                            }, '') + ')';
    } else if (typeof v == 'string') {
        return '(' + v + ')';
    } else if (v instanceof Map) {
        let s = '<<#' + v.size;
        for (let [key,val] of v) {
            if (typeof key == 'string') {
                s += ' /' + key + ' ' + valtostr(val);
            } else {
                s += ' ' + key + ' ' + valtostr(val);
            }
        }
        return s + ' >>';
    } else if (v instanceof Array) {
        // The array may be a view....
        let s = '[#' + v.length;
        if (v.length > 72) {
            let n = 0;
            s += '\n ';
            for (var a = v.b, i = v.o, l = v.o + v.length; i < l; i++) {
                s += ' ' + valtostr(a[i]);
                if (++n == 72) {
                    s += '\n ';
                    n = 0;
                }
            }
        } else {
            for (var a = v.b, i = v.o, l = v.o + v.length; i < l; i++) {
                s += ' ' + valtostr(a[i]);
            }
        }
        return s + ' ]';
    } else if (typeof v == 'function') {
        return '{ @function@ }';
    } else if (typeof v == 'number' && !Number.isInteger(v)) {
        return v.toFixed(7).replace(/0+$/, '');
    } else {
        return ''+v;
    }
}

let dictproxy = {
    set: function(obj, prop, value) {
        if (typeof value != 'function') {
            (prop + '=' + valtostr(value)).split('\n').forEach((s)=>console.log(s));
        }
        obj[prop] = value;
        return true;
    }
};
