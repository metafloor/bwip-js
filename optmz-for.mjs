// optmz-for.mjs
// Common patterns caused by a context flush on a for-loop.
//
// This pass should occur after the peephole opts as it is aware
// of their transforms.

// RE that matches anything that might change the stack
const restack = /\$j\b|\$[ad]\(\)|\$r\(|\$aload\(|\$astore\(|\$(?:anchor)?search\(/;

export function optmz(lines, before, after) {
    let changed = false;
    restart: for (let i = 0, l = lines.length; i < l; i++) {
        if (pushfor(i) || pushfortmp(i) || pushforall(i) || forarray(i)) {
            changed = true;
        }
    }
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
        return false;
    }

    // push for pop push 
    //    $k[$j++] = true; //#11668
    //    for (var _2e = 0, _2f = _2d.length; _2e < _2f; _2e++) { //#11668
    //          ... no stack ...
    //        var _2j = $k[--$j]; //#11668
    //        $k[$j++] = _2j && $ne($get(_2d, _2e), $get($_.ais, 2)); //#11668
    //    } //#11668
    //    var _2k = $k[--$j]; //#11668
    function pushfor(i) {
        let m0 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+0]);
        let m1 = m0 && /^ *for *\(var (_\w+) *.*;.*;.*\)/.exec(lines[i+1]);
        if (!m1) {
            return false;
        }
        let m2 = until(i+2, /^ *var (_\w+) *= *\$k\[--\$j];/, restack);
        if (!m2) {
            return false;
        }
        let j = m2.lineIndex;
        let m3 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[++j]);
        let m4 = m3 && /^ *} *(\/\/.*)?$/.exec(lines[++j]);
        let m5 = m4 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[++j]);
        if (!m5) {
            return false;
        }
        before?.(i, j-i+1, 'pushfor');
        lines[i] = m0[1] + 'var ' + m5[1] + '=' + m0[2];
        lines[j-2] = m3[1] + m5[1] + '=' + m3[2].replace(/\b_\w+\b/g, ($0) => {
                if ($0 === m2[1]) {
                    return m5[1];
                }
                return $0;
            });
        lines.splice(j, 1);
        lines.splice(j-3, 1);
        after?.(i, j-i-1);
        return true;
    }

    // push for temp-loop-var pop push
    //    $k[$j++] = 0; //#12111
    //    for (var _Dy = 0; _Dy <= 11; _Dy += 1) { //#12111
    //        $_.j = _Dy; //#12111
    //        var _E3 = $k[--$j]; //#12111
    //        $k[$j++] = $f(_E3 + ((~~$pow(2, 11 - $_.j)) * $get($_.d, $_.j))); //#12111
    //    } //#12111
    //    var _E4 = $k[--$j]; //#12111                
    function pushfortmp(i) {
        let m0 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+0]);
        let m1 = m0 && /^ *for *\(var (_\w+) *.*;.*;.*\)/.exec(lines[i+1]);
        let m2 = m1 && /^ *(\$_.\w+) *= *(_\w+);/.exec(lines[i+2]);
        let m3 = m2 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+3]);
        let m4 = m3 && /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+4]);
        let m5 = m4 && /^ *} *(\/\/.*)?$/.exec(lines[i+5]);
        let m6 = m5 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+6]);
        if (!m6 || /\$j\b/.test(m1[1]) || m1[1] != m2[2]) {
            return false;
        }
        before?.(i, 7, 'pushfortmp');
        lines[i] = m0[1] + 'var ' + m6[1] + '=' + m0[2];
        lines[i+4] = m4[1] + m6[1] + '=' +
            m4[2].replace(/\$_\.\w+\b/g, ($0) => {
                        if ($0 === m2[1]) {
                            return m2[2];
                        }
                        return $0;
                    }).replace(/\b_\w+\b/g, ($0) => {
                        if ($0 === m3[1]) {
                            return m6[1];
                        }
                        return $0;
                    });
        lines.splice(i+6, 1);
        lines.splice(i+2, 2);
        after?.(i, 4);
        return true;
    }

    // push forall
    //   $k[$j++] = 0; //#12888
    //   $forall($get($_.encs, 0), function() { //#12888
    //       var _n = $k[--$j]; //#12888
    //       var _o = $k[--$j]; //#12888
    //       $k[$j++] = $f(_o + (_n - 48)); //#12888
    //   }); //#12888
    //   var _p = $k[--$j]; //#12888
    function pushforall(i) {
        let m0 = /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+0]);
        let m1 = m0 && /^ *\$forall\((.*), *function *\(\) *\{/.exec(lines[i+1]);
        let m2 = m1 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+2]);
        let m3 = m2 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+3]);
        let m4 = m3 && /^( *)\$k\[\$j\+\+] *= *(.*)/.exec(lines[i+4]);
        let m5 = m4 && /^ *\}\);/.exec(lines[i+5]);
        let m6 = m5 && /^ *var (_\w+) *= *\$k\[--\$j];/.exec(lines[i+6]);
        if (!m6 || /\$j\b/.test(m1[1])) {
            return false;
        }
        before?.(i, 7, 'pushforall');
        lines[i] = m0[1] + 'var ' + m6[1] + '=' + m0[2];
        lines[i+4] = m4[1] + m6[1] + '=' + m4[2].replace(/\b_\w+\b/g, ($0) => {
                if ($0 === m3[1]) {
                    return m6[1];
                }
                return $0;
            });
        lines.splice(i+6, 1);
        lines.splice(i+3, 1);
        after?.(i, 5);
        return true;
    }

    // $k[$j++] = Infinity; //#8560
    // var _FR = $_.sbs; //#8560
    // for (var _FS = 0, _FT = _FR.length; _FS < _FT; _FS++) { //#8560
    //     $k[$j++] = $get(_FR, _FS) - 48; //#8560
    // } //#8560
    // var _FV = $a(); //#8560
    function forarray(i) {
        var m0 = /^( *)\$k\[\$j\+\+] *= *Infinity;(.*)/.exec(lines[i]);
        if (!m0) {
            return false;
        }
        let m1 = until(i+1, /^ *for *\(var (_\w+) *= *0(?:,[^;]+)?;[^;]+; *(_\w+)(?:\+\+| *\+= *1)\)/, restack);
        if (!m1 || m1[1] !== m1[2]) {
            return false;
        }
        let j = m1.lineIndex;
        let m2 = until(j+1, /^( *)\$k\[\$j\+\+] *= *(.*)/, restack);
        if (!m2) {
            return false;
        }
        let k = m2.lineIndex;
        let m3 = /^ *} *(\/\/.*)?$/.exec(lines[k+1]);
        let m4 = m3 && /^( *)var (_\w+) *= *\$a\(\);(.*)/.exec(lines[k+2]);
        if (!m4) {
            return false;
        }
        before?.(i, k-i+3, 'forarray');
        lines[i] = m0[1] + 'var ' + m4[2] + '=[];' + m0[2];
        lines[k] = m2[1] + m4[2] + '[' + m1[1] + ']=' + m2[2];
        lines[k+2] = m4[1] + m4[2] + '=$a(' + m4[2] + ');' + m4[3];
        after?.(i, k-i+3, 'forarray');
        return true;
    }
}
