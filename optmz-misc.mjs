// optmz-misc.mjs
//
// This pass should occur after if- and for- opts.

// No stack operations or exec calls.  Exec calls are always
// zero-args.  Note that a function definition is a false
// positive thus (?<!function *) before the empty parens.
const restack = /\$j\b|\$[ad]\(\)|\$r\(|\$astore\(|\$aload\(|\$(?:anchor)?search\(|(?<!function *)\(\)/;

export function optmz(lines, before, after) {
    let changed = false;
    do {
        changed = false;
        for (let i = 0, l = lines.length; i < l; i++) {
            if (poppush(i) || pushnostackpop(i) || pusharraypop(i) ||
                varalias(i) || varinfinity(i) || vardef(i) ||
                /*pushdef(i) ||*/ savereturnval(i)) {
                changed = true;
            }
        }
    } while (changed);
    return changed;

    // Scan the lines looking to match the find-re.
    // Bail if the reno or rezero matches or end of current block is hit.
    // `reno` applies at any depth.  `rezero` applies only at depth 0.
    function until(i, refind, reno, rezero) {
        let depth = 0;
        for (let l = lines.length; i < l; i++) {
            let m1 = refind.exec(lines[i]);
            if (m1 && depth == 0) {
                m1.lineIndex = i;
                return m1;
            }
            // Remove string literals to prevent false positives (preserve 'names'
            // as they are safe and often a target of one of the REs).
            let safe = lines[i].replace(/"(?:[^\\"]|\\.)*"/, '""');
            // Stop on bad matches
            if (reno?.test(safe) || depth === 0 && rezero?.test(safe)) {
                return false;
            }
            // Track code block depth
            let recurly = /[{}]/g;
            let m = recurly.exec(safe);
            while (m) {
                if (m[0] == '}') {
                    if (--depth < 0) {
                        return false;
                    }
                } else {
                    depth++;
                }
                m = recurly.exec(safe);
            }
        }
        return depth === 0;
    }

    // Scan the lines until end of block, calling the callback on each line.
    function untileob(i, callback) {
        let depth = 0;
        for (let l = lines.length; i < l; i++) {
            if (callback(lines[i]) === false) {
                return false;
            }
            // Remove string literals to prevent false positives.
            let safe = lines[i].replace(/"(?:[^\\"]|\\.)*"/, '""');
            let recurly = /[{}]/g;
            let m = recurly.exec(safe);
            while (m) {
                if (m[0] == '}') {
                    if (--depth < 0) {
                        return true;
                    }
                } else {
                    depth++;
                }
                m = recurly.exec(safe);
            }
        }
        return depth === 0;
    }

    //    var _aL = $k[--$j]; //#3614
    //    $k[$j++] = _aL + 1900; //#3614
    function poppush(i) {
        let m0 = /^( *)var (_\w+) *= *\$k\[--\$j];/.exec(lines[i]);
        let m1 = m0 && /^ *\$k\[\$j\+\+] *= *(_\w+) *([-+]) *(\d+;.*)/.exec(lines[i+1]);
        if (!m1 || m0[2] != m1[1]) {
            return false;
        }
        // No var references to end of block
        let re = new RegExp('\\b' + m0[2] + '\\b');
        let ok = untileob(i+2, (line) => !re.test(line));
        if (ok) {
            before?.(i, 2, 'poppush');
            lines[i] = m0[1] + '$k[$j-1] ' + m1[2] + '= ' + m1[3];
            lines.splice(i+1, 1);
            after?.(i, 1);
        }
        return ok;
    }

    // push no-stack pop
    //    $k[$j++] = $_.checksum; //#8780
    //    var _X = $get($_.barcode, $_.i + 4) - 48; //#8780
    //    if (($_.i % 2) == 0) { //#8780
    //        _X = _X * 3; //#8780
    //    } //#8780
    //    var _Y = $k[--$j]; //#8780
    function pushnostackpop(i) {
        let m0 = /^ *\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+0]);
        if (!m0 || /function *\(\)/.test(m0[1])) {
            return false;
        }
        let m1 = until(i+1, /^( *var _\w+) *= *\$k\[--\$j];/, restack);
        if (!m1) {
            return false;
        }
        let j = m1.lineIndex;
        before?.(i, j-i+1, 'pushnostackpop');
        lines[i] = m1[1] + '=' + m0[1]; 
        lines.splice(j, 1);
        after?.(i, j-i);
        return true;
    }

    // pusharraypop
    //    $k[$j++] = $_.ecbs; //#23527
    //    $k[$j++] = $_.i; //#23527
    //    $k[$j++] = Infinity; //#23527
    //    for (var _Ks = 0, _Kt = ~~($_.rscw / $_.rsbl); _Ks < _Kt; _Ks++) { //#23527
    //        $k[$j++] = 0; //#23527
    //    } //#23527
    //    var _Ku = $a(); //#23527
    //    var _Kv = $k[--$j]; //#23527
    //    var _Kw = $k[--$j]; //#23527
    //    $put(_Kw, _Kv, _Ku); //#23527
    function pusharraypop(i) {
        let m0 = /^ *\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+0]);
        if (!m0 || /function *\(\)/.test(m0[1]) || restack.test(m0[1])) {
            return false;
        }
        let m1 = until(i+1, /^ *\$k\[\$j\+\+] *= *Infinity;/, restack);
        if (!m1) {
            return false;
        }
        let m2 = until(m1.lineIndex+1, /^ *var _\w+ *= *\$[ad]\(\);/, /= *Infinity;/);
        if (!m2) {
            return false
        }
        let m3 = until(m2.lineIndex+1, /^( *var _\w+) *= *\$k\[--\$j];/, restack);
        if (!m3) {
            return false;
        }
        let j = m3.lineIndex;
        before?.(i, j-i+1, 'pusharraypop');
        lines[i] = m3[1] + '=' + m0[1]; 
        lines.splice(j, 1);
        after?.(i, j-i);
        return true;
    }

    // Eliminate variable aliases. 
    //    var _JV = _JS; //#23458
    //    if (_JS > 254) { //#23458
    //        _JV = _JV - 254; //#23458
    //    } //#23458
    //    $put($_.cws, $_.i, _JV); //#23459
    function varalias(i) {
        let m = /^ *var (_\w+) *= *(_\w+);/.exec(lines[i]); 
        if (!m) {
            return false;
        }
        let v1 = m[1];
        let v2 = m[2];
        let temp = [];  // needed for before/after logging

        let last = 0;
        let ok = untileob(i+1, (line) => {
                    let m = /^ *(_\w+) *=/.exec(line);
                    if (m && m[1] == v2) {
                        return false;
                    }
                    temp.push(line.replace(/(?<!\w)_\w+/g, ($0) => {
                            if ($0 == v1 || $0 == v2) {
                                last = temp.length+1;
                            }
                            return $0 == v1 ? v2 : $0;
                        }));
                });
        if (ok) {
            before?.(i, last+1, 'var alias');
            for (let j = 0; j < last; j++) {
                lines[i+j+1] = temp[j];
            }
            lines.splice(i, 1);
            after?.(i, last);
        }
        return ok;
    }

    //    var _3J = Infinity; //#22745
    //    var _3K = _3F; //#22745
    //    $k[$j++] = _3J; //#22745
    function varinfinity(i) {
        let m0 = /^ *var (_\w+) *= *Infinity;/.exec(lines[i]);
        if (!m0) {
            return false;
        }
        for (let j = i+1, l = lines.length; j < l; j++) {
            let m1 = /^ *\$k\[\$j\+\+] *= *(_\w+);/.exec(lines[j]);
            if (m1 && m1[1] == m0[1]) {
                before?.(i, j-i+1, 'var Infinity')
                lines[j] = lines[j].replace(/_\w+;/, 'Infinity;');
                lines.splice(i, 1);
                after?.(i, j-i);
                return true;
            }
        }
        return false;
    }

    //    var _j = 'barlen'; //#13770
    //    var _i = $_.barcode.length; //#13770
    //    if ($_.validatecheck) { //#13770
    //        _i = _i - 1; //#13770
    //    } //#13770
    //    $_[_j] = _i; //#13770
    function vardef(i) {
        let m0 = /^ *var (_\w+) *= *'([a-zA-Z_]\w*)';/.exec(lines[i]);
        if (!m0) {
            return false;
        }
        let m1 = until(i+1, /^( *)\$_\[(_\w+)] *= *(.*)/, null, /^ *(var _\w+|\$k\[\$j\+\+]) *= *'([a-zA-Z_]\w*)';/);
        if (!m1 || m1[2] !== m0[1]) {
            return false;
        }
        let j = m1.lineIndex;
        before?.(i, j-i+1);
        lines[j] = m1[1] + '$_.' + m0[2] + '=' + m1[3];
        lines.splice(i, 1);
        return true;
    }

    // $k[$j++] = 'barlen'; //#9063
    // var _L=$_.barcode.length; //#9063
    // if ($_.validatecheck) { //#9063
    //     _L=_L - 1; //#9063
    // } //#9063
    // var _M = $k[--$j]; //#9063
    // $_[_M] = _L; //#9063
    /*
    This logic cannot be proved true under all circumstances.  From ean8composite:
        /borderleft
            linsym /borderleft 2 copy known { get } { pop pop 10 } ifelse linpad length 1 add sub
            1  % CC-A QZ; left inset 0
            2 copy lt { exch } if pop dup 0 lt { pop 0 } if
        def
    The double-push of /borderleft causes the wrong /borderleft to be optimized out.

    function pushdef(i) {
        let m0 = /^ *\$k\[\$j\+\+] *= *'([a-zA-Z_]\w*)';/.exec(lines[i]);
        if (!m0) {
            return false;
        }
        let m1 = until(i+1, /^( *)\$_\[(_\w+)] *= *(.*)/, null, /^ *(var _\w+|\$k\[\$j\+\+]) *= *'([a-zA-Z_]\w*)';/);
        if (!m1) {
            return false;
        }
        let j = m1.lineIndex;
        let m2 = /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[j-1]);
        if (!m2 || m2[1] !== m1[2]) {
            return false;
        }
        before?.(i, j-i+1, 'pushdef');
        lines[j] = m1[1] + '$_.' + m0[1] + '=' + m1[3];
        lines.splice(j-1, 1);
        lines.splice(i, 1);
        after?.(i, j-i-1);
        return true;
    }
    */

    // save return value
    //    $k[$j++] = 'cdf'; //#11754
    //    $k[$j++] = _5P; //#11754
    //    $_.conv13to44(); //#11754
    //    var _5Q = $k[--$j]; //#11754
    //    $_[$k[--$j]] = _5Q; //#11754     
    function savereturnval(i) {
        return false;
        let m0 = /^ *\$k\[\$j\+\+] *= *'([a-zA-Z_]\w*)';/.exec(lines[i]);
        if (!m0) {
            return false;
        }
        let j = i+1;
        let l = lines.length;

        // Allow any number of args to be pushed, as long as its
        // not a name string.
        for (let l = lines.length; j < l; j++) {
            let m1 = /^ *\$k\[\$j\+\+] *= *(.*);/.exec(lines[j]);
            if (!m1) {
                break;
            }
            if (/^'.*'$/.test(m1[1])) {
                return false;
            }
        }
        // Now the exec call
        if (!/(?<!function *)\(\)/.test(lines[j++])) {
            return false;
        }
        // Return value pop and save
        let m1 = /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[j]);
        let m2 = /^( *)\$_\[\$k\[--\$j]] *= *(_\w+);(.*)/.exec(lines[j+1]);
        if (!m1 || !m2 || m1[1] !== m2[2]) {
            return false;
        }
        before?.(i, j-i+2, 'savereturnval');
        lines[j] = m2[1] + '$_.' + m0[1] + '=$k[--$j];' + m2[3];
        lines.splice(j+1, 1);
        lines.splice(i, 1);
        after?.(i, j-i);
        return true;
    }

}
