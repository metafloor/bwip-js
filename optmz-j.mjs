// opmtz-j.mjs
// $j manipultions

export function optmz(lines, before, after) {
    let changed = false;
    for (let i = 0, l = lines.length; i < l; i++) {
        // $j--;
        // $k[$j++] = ...
        if (/^ *\$j--;/.test(lines[i]) && /^ *\$k\[\$j\+\+\] *= */.test(lines[i+1])) {
            before?.(i, 2);
            let m = /^( *)\$k\[\$j\+\+\] *= */.exec(lines[i+1]);
            lines.splice(i, 2, m[1] + '$k[$j-1] = ' + lines[i+1].substr(m[0].length));
            after?.(i, 1);
            changed = true;
            i++;
        }
    }
    return changed;
}
