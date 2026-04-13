// optmz-peep.mjs
import { parse as aparse } from './acorn.mjs';

// RE that matches anything that might change the stack
const restack = /\$j\b|\$[ad]\(\)|\$r\(|\$aload\(|\$astore\(|\$(?:anchor)?search\(/;

export function optmz(lines, before, after) {
    while (peephole(lines, before, after)) {
        deadvars(lines, before, after);
    }
}

function peephole(lines, before, after) {
    let changed = false;
    restart: for (let i = 0, l = lines.length; i < l; i++) {
        // $j -= 2;
        // $k[$j++] = ...
        // But don't bother to optimize away the raiseerror handling.
        //if (/^ *\$j -= 2;/.test(lines[i]) && /^ *\$k\[\$j\+\+\] *= *(?!['"]bwipp\.)/.test(lines[i+1])) {
        //    before?.(i, 2);
        //    let m = /^( *)\$k\[\$j\+\+\] *= */.exec(lines[i+1]);
        //    lines.splice(i, 2,
        //            m[1] + '$k[--$j - 1] = ' + lines[i+1].substr(m[0].length));
        //    after?.(i, 1);
        //    changed = true;
        //    i++;
        
        // no-op
        // $k[$j++]=_R1;//#2633
        // $j--;//#2633
        if (/^ *\$k\[\$j\+\+\] *= *\w+;/.test(lines[i]) && /^ *\$j--;/.test(lines[i+1])) {
            before?.(i, 2);
            lines.splice(i, 2);
            after?.(i, 0);
            changed = true;
            i -= 2;

        // `3 1 roll` and `3 -1 roll` are common postscript idioms.
        // They often get emitted as:
        //
        //  $r(3,-1);//#2711
        //  var _Sm=$k[--$j];//#2711
        //  $puti($k[--$j],14-_Sm.length,_Sm);//#2711
        //
        //  $r(3,-1);//#2836
        //  var _Up=$k[--$j];//#2836
        //  var _Uq=$k[--$j];//#2836
        //  var _Ur=$k[--$j];//#2836
        //
        // We can eliminate the $r() call and manipulate the stack explicitly.  The rules:
        //  - 2 or 3 pops after the roll
        //  - Only put,get,puti,geti and var assignments allowed to interlace.
        //  - No references to $j otherwise.
        } else if (/^ *\$r\(3, *-?1\);/.test(lines[i])) {
            let m = /(-?1)\);(.*)/.exec(lines[i]);
            let c = 0;
            let end = 0;
            for (let j = i+1; j < i+9 && c < 3; j++) {
                if (/\$k\[--\$j\]/.test(lines[j])) {
                    c++;
                    end = j;
                } else if (/\$j/.test(lines[j])) {
                    break;
                }
                // We can have a $k[--$j] in a dangerous call, but it ends the search.
                if (!/^ *(?:\$geti?|\$puti?|var )/.test(lines[j])) {
                    break;
                }
            }
            if (c == 2) {
                changed = true;
                before?.(i, end-i+1);
                // a b c 3 1 roll -> c a b
                // a b c 3 -1 roll -> b c a
                for (let j = i+1; j <= end; j++) {
                    lines[j] = lines[j].replace(/\$k\[--\$j\]/, ($0) => {
                            c--;
                            if (c == 1) {
                                return m[1] == '-1' ? '$k[$j-3]' : '$k[$j-2]';
                            } else {
                                return m[1] == '-1' ? '$k[$j-1]' : '$k[$j-3]';
                            }
                        });
                }
                lines.splice(end+1, 0, 
                                    (m[1] == '-1' ? '$k[$j-3]=$k[$j-2];' : '$k[$j-3]=$k[$j-1];') + m[2],
                                    '$j-=2;' + m[2]);
                lines.splice(i, 1); // remove the $r() call
                after?.(i, end-i+2);
            } else if (c == 3) {
                changed = true;
                before?.(i, end-i+1);
                // a b c 3 1 roll -> c a b
                // a b c 3 -1 roll -> b c a
                for (let j = i+1; j <= end; j++) {
                    lines[j] = lines[j].replace(/\$k\[--\$j\]/, ($0) => {
                            c--;
                            if (c == 2) {
                                return m[1] == '-1' ? '$k[$j-3]' : '$k[$j-2]';
                            } else if (c == 1) {
                                return m[1] == '-1' ? '$k[$j-1]' : '$k[$j-3]';
                            } else {
                                return m[1] == '-1' ? '$k[$j-2]' : '$k[$j-1]';
                            }
                        });
                }
                lines.splice(end+1, 0, '$j-=3;' + m[2]);
                lines.splice(i, 1); // remove the $r() call
                after?.(i, end-i+1);
            }

        // PS swap idiom that looks like:
        //  $k[$j++]=$_.val;//#31327
        //  $k[$j++]=Infinity;//#31327
        //  var _X=$k[--$j];//#31327
        //  var _Y=$k[--$j];//#31327
        } else if (/^ *\$k\[\$j\+\+\] *=/.test(lines[i]) &&
                   /^ *\$k\[\$j\+\+\] *=/.test(lines[i+1]) &&
                   /^ *var _\w+ *= *\$k\[--\$j\];/.test(lines[i+2]) &&
                   /^ *var _\w+ *= *\$k\[--\$j\];/.test(lines[i+3])) {
            let m0 = /^ *\$k\[\$j\+\+\] *=(.*)/.exec(lines[i]);
            let m1 = /^ *\$k\[\$j\+\+\] *=(.*)/.exec(lines[i+1]);
            let m2 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[i+2]);
            let m3 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[i+3]);
            before?.(i, 4);
            lines.splice(i, 4, 'var ' + m2[1] + '=' + m1[1],
                               'var ' + m3[1] + '=' + m0[1]);
            after?.(i, 2);
            changed = true;

        // Pattern caused by the compiler's context flush.
        //
        //  var _GE=$k[--$j];//#7090
        //  $put(_GE,0,$get($_.start_code,$_.state));//#7090
        //  $k[$j++]=_GE;//#7090
        //
        //  var _XF=$k[--$j];//#3070
        //  var _XG=$k[--$j];//#3070
        //  $k[$j++]=_XG;//#3072
        //  $k[$j++]=_XF;//#3072
        //
        //  var _2t=$k[--$j];//#4227
        //  var _2u=$k[--$j];//#4227
        //  var _2v=$k[--$j];//#4227
        //  var _2w=$k[--$j];//#4227
        //  var _2x=$k[--$j];//#4227
        //  $k[$j++]=_2x;//#4228
        //  $k[$j++]=_2w;//#4228
        //  $k[$j++]=_2v;//#4228
        //  $k[$j++]=_2u;//#4228
        //  $k[$j++]=_2t;//#4228
        //
        //  - Only put,get,puti,geti and var assignments allowed to interlace.
        //  - No stack ops other than the pop/push ops that we are monitoring.
        } else if (/^ *var _\w+ *= *\$k\[--\$j\];/.test(lines[i])) {
            // Find the corresponding push
            let k = i+1;
            while (/^ *(?:\$geti?|\$puti?|var )/.test(lines[k]) && !restack.test(lines[k])) {
                k++;
            }
            let m0 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[i]);
            let m1 = /^ *\$k\[\$j\+\+\] *= *(_\w+);/.exec(lines[k]);
            if (m0 && m1 && m0[1] == m1[1]) {
                let j = i;
                let pairs = [ { j:j, k:k } ];
                while (true) {
                    // move up to find the next pop
                    j--;
                    while (/^ *(?:\$geti?|\$puti?|var )/.test(lines[j]) && !restack.test(lines[j])) {
                        j--;
                    }
                    m0 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[j]);
                    if (!m0) {
                        break;
                    }
                    // move down to find the next push
                    k++;
                    while (/^ *(?:\$geti?|\$puti?|var )/.test(lines[k]) && !restack.test(lines[k])) {
                        k++;
                    }
                    m1 = /^ *\$k\[\$j\+\+\] *= *(_\w+);/.exec(lines[k]);
                    if (!m1 || m0[1] != m1[1]) {
                        break;
                    }
                    pairs.unshift({ j:j, k:k });
                }
                j = pairs[0].j;
                k = pairs[0].k;
                before?.(j, k-j+1);
                for (let h = 0; h < pairs.length; h++) {
                    let pair = pairs[h];
                    lines[pair.j] = lines[pair.j].replace(/--\$j/, () => '$j-' + (h+1));
                    lines.splice(pair.k, 1);
                }
                after?.(j, k-j+1-pairs.length);
                changed = true;
            }
        // ctxflush() caused register spill
        //    var _6 = Infinity; //#3963
        //    var _7 = $_; //#3964
        //    $k[$j++] = _6; //#3964
        //    $k[$j++] = _7; //#3964
        } else if (/^\s*var _\w+ *=/.test(lines[i]) && !restack.test(lines[i])) {
            let vars = [];
            let exprs = [];
            let j = i;
            out: while (j < lines.length) {
                let m = /^\s*var (_\w+) *= *(.*)/.exec(lines[j]);
                if (!m || restack.test(lines[j])) {
                    break;
                }
                // Ensure the temp variables are not used in subsequent expressions
                for (let v = 0; v < vars.length; v++) {
                    let re = /\b_\w+\b/g;
                    let m = re.exec(lines[j]);
                    while (m) {
                        if (vars[v] === m[0]) {
                            continue restart;
                        }
                        m = re.exec(lines[j]);
                    }
                }
                // No expressions that modify $j e.g. $a( .. ) or $d( .. )
                if (restack.test(m[2])) {
                    continue restart;
                }
                vars.push(m[1]);
                exprs.push(m[2]);
                j++;
            }
            let count = 0;
            while (count < vars.length && j < lines.length) {
                let m = /^\s*\$k\[\$j\+\+\] *= *(_\w+);/.exec(lines[j]);
                if (!m || vars[count] != m[1]) {
                    break;
                }
                count++;
                j++;
            }
            if (count !== vars.length) {
                continue restart;
            }
            // Ensure the variables are not used below
            while (j < lines.length) {
                if (/^\s*\};?\s*(\/\/.*)?$/.test(lines[j])) {
                    break;
                }
                let re = /\b_\w+\b/g;
                let m = re.exec(lines[j]);
                while (m) {
                    for (let v = 0; v < vars.length; v++) {
                        if (vars[v] === m[0]) {
                            continue restart;
                        }
                    }
                    m = re.exec(lines[j]);
                }
                j++;
            }
            before?.(i, count*2);
            let code = [];
            for (let v = 0; v < vars.length; v++) {
                code[v] = '$k[$j++]=' + exprs[v];
            }
            lines.splice(i, count*2, ...code);
            after?.(i, count);
            changed = true;
        }
        
    }
    return changed;
}


function deadvars(lines, before, after) {
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // Assigned but never used:
        // var _XX = $k[--$j];
        // var _XX = $k[$j-2];
        if (/^ *var _\w+ *= *\$k\[-?-?\$j-?\d*];/.test(line)) {
            let m = /var (_\w+) *= *\$k\[(-?-?\$j-?\d*)];/.exec(line);
            let re = new RegExp('\\W' + m[1] + '\\W');
            // search to end of function
            let eof = false;
            for (let j = i+1; j < lines.length; j++) {
                if (re.test(lines[j])) {
                    break;
                }
                if (/^ *} *\/\/ *bwipp_/.test(lines[j])) {
                    eof = true;
                    break;
                }
            }
            if (eof) {
                before?.(i, 1, 'deadvar');
                if (m[2] == '--$j') {
                    lines[i] = '$j--;' + line.substr(m[0].length);
                    after?.(i, 1);
                } else {
                    lines.splice(i--, 1);
                    after?.(i, 0);
                }
            }
        }
    }
}
