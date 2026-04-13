// optmz-if.mjs
// Common patterns caused by a context flush on an if-stmt.
//
// This pass should occur after the peephole opts as it is aware
// of their transforms.

export function optmz(lines, before, after) {
    let changed = false;
    restart: for (let i = 0, l = lines.length; i < l; i++) {
        if (pushifpop(i) || pushifelsepop(i) || ifelsepushpop(i) || pushifreplacepop(i)) {
            changed = true;
        }
    }
    return changed;

    // push if pop push pop
    //  $k[$j++] = $_.barcode.length; //#9063
    //  if ($_.validatecheck) { //#9063
    //      var _K = $k[--$j]; //#9063
    //      $k[$j++] = _K - 1; //#9063
    //  } //#9063
    //  var _L = $k[--$j]; //#9063 
    function pushifpop(i) {
        let m0 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i]);
        let m1 = m0 && /^ *if *\((.*)\) *\{/.exec(lines[i+1]);
        let m2 = m1 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+2]);
        let m3 = m2 && /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+3]);
        let m4 = m3 && /^ *} *(\/\/.*)?$/.exec(lines[i+4]);
        let m5 = m4 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+5]);
        if (!m5 || /\$j\b/.test(m1[1])) {
            return false;
        }
        before?.(i, 6, 'pushifpop');
        lines[i] = m0[1] + 'var ' + m5[1] + '=' + m0[2];
        lines[i+3] = m3[1] + m5[1] + '=' + m3[2].replace(/\b_\w+\b/g, ($0) => {
                if ($0 === m2[1]) {
                    return m5[1];
                }
                return $0;
            });
        lines.splice(i+5, 1);
        lines.splice(i+2, 1);
        after?.(i, 4);
        return true;
    }

    // Similar to push-if-pop, but with an else
    //    $k[$j++] = $get($_.barcode, $_.i) - 48; //#10177
    //    if (($_.i % 2) == 0) { //#10177
    //        var _E = $k[--$j]; //#10177
    //        $k[$j++] = _E * 4; //#10177
    //    } else { //#10177
    //        var _F = $k[--$j]; //#10177
    //        $k[$j++] = _F * 9; //#10177
    //    } //#10177
    //    var _G = $k[--$j]; //#10177
    function pushifelsepop(i) {
        let m0 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i]);
        let m1 = m0 && /^ *if *\((.*)\) *\{/.exec(lines[i+1]);
        let m2 = m1 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+2]);
        let m3 = m2 && /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+3]);
        let m4 = m3 && /^ *} *else *{/.exec(lines[i+4]);
        let m5 = m4 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+5]);
        let m6 = m5 && /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+6]);
        let m7 = m6 && /^ *} *(\/\/.*)?$/.exec(lines[i+7]);
        let m8 = m7 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+8]);
        if (!m8 || /\$j\b/.test(m1[1])) {
            return false;
        }
        before?.(i, 9, 'pushifelsepop');
        lines[i] = m0[1] + 'var ' + m8[1] + '=' + m0[2];
        lines[i+3] = m3[1] + m8[1] + '=' + m3[2].replace(/\b_\w+\b/g, ($0) => {
                if ($0 === m2[1]) {
                    return m8[1];
                }
                return $0;
            });
        lines[i+6] = m6[1] + m8[1] + '=' + m6[2].replace(/\b_\w+\b/g, ($0) => {
                if ($0 === m5[1]) {
                    return m8[1];
                }
                return $0;
            });
        lines.splice(i+8, 1);
        lines.splice(i+5, 1);
        lines.splice(i+2, 1);
        after?.(i, 6);
        return true;
    }

    // ifelsepushpop
    //    if ($_.isbn.length == 9) { //#7248
    //        $k[$j++] = -1; //#7248
    //    } else { //#7248
    //        $k[$j++] = -12; //#7248
    //    } //#7248
    //    var _2R = $k[--$j]; //#7248
    function ifelsepushpop(i) {
        let m0 = /^ *if *\((.*)\) *\{/.exec(lines[i+0]);
        let m1 = m0 && /^ *\$k\[\$j\+\+] *= *(.*);/.exec(lines[i+1]);
        let m2 = m1 && /^ *} *else *{/.exec(lines[i+2]);
        let m3 = m2 && /^ *\$k\[\$j\+\+] *= *(.*);/.exec(lines[i+3]);
        let m4 = m3 && /^ *} *(\/\/.*)?$/.exec(lines[i+4]);
        let m5 = m4 && /^( *var _\w+ *= *)\$k\[--\$j](;.*)/.exec(lines[i+5]);
        if (!m5 || /\$j\b/.test(m0[1])) {
            return false;
        }
        let test = m0[1];
        if (/\?.*:/.test(test)) {
            test = '(' + test + ')';
        }
        let truex = m1[1];
        if (/\?.*:/.test(truex)) {
            truex = '(' + truex + ')';
        }
        let elsex = m3[1]; 
        if (/\?.*:/.test(elsex)) {
            elsex = '(' + elsex + ')';
        }
        before?.(i, 6, 'ifelsepushpop');
        lines[i] = m5[1] + test + '?' + truex + ':' + elsex + m5[2];
        lines.splice(i+1, 5);
        after?.(i, 1);
        return true;
    }

    //    $k[$j++] = _1D; //#7154
    //    if (_1D == 10) { //#7154
    //        $j--;
    //        $k[$j++] = 40; //#7154
    //    } //#7154
    //    var _1E = $k[--$j]; //#7154
    function pushifreplacepop(i) {
        let m0 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+0]);
        let m1 = m0 && /^ *if *\((.*)\) *\{/.exec(lines[i+1]);
        let m2 = m1 && /^ *\$j--;/.test(lines[i+2]);
        let m3 = m2 && /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+3]);
        let m4 = m3 && /^ *} *(\/\/.*)?$/.exec(lines[i+4]);
        let m5 = m4 && /^ *var (_\w+) *= *\$k\[--\$j](;.*)/.exec(lines[i+5]);
        if (!m5 || /\$j\b/.test(m1[1])) {
            return false;
        }
        before?.(i, 6, 'pushifreplacepop');
        lines[i] = m0[1] + 'var ' + m5[1] + '=' + m0[2];
        lines[i+3] = m3[1] + m5[1] + '=' + m3[2];
        lines.splice(i+5, 1);
        lines.splice(i+2, 1);
        after?.(i, 4);
        return true;
    }
}
