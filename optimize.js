// optimize.js

const fs = require('fs');
const lines = fs.readFileSync('barcode.js', 'utf-8').split(/\r\n|[\r\n]/g);
const verbose = false;

let re01 = /^\s*\$k\[\$j\+\+\]\s*=\s*(.*)(;\s*\/\/.*)$/;
let re23 = /^\s*var (_\w+)\s*=\s*(\$k\[--\$j\];.*)$/;
for (let i = 0; i < lines.length; i++) {
	// Look for the exch pattern:
	//	$k[$j++] = _5u; //#19394
	//	$k[$j++] = Infinity; //#19394
	//	var _5v = $k[--$j]; //#19394
	//	var _5w = $k[--$j]; //#19394
	//	$k[$j++] = _5v; //#19394
	//	$k[$j++] = optional something
	//	$k[$j++] = _5w; //#19394
	if (re01.test(lines[i]) &&
		re01.test(lines[i+1]) &&
		re23.test(lines[i+2]) &&
		re23.test(lines[i+3]) &&
		re01.test(lines[i+4]) &&
		re01.test(lines[i+5])) {

		// Make sure we understand what is happening
		let m0 = re01.exec(lines[i]);
		let m1 = re01.exec(lines[i+1]);
		let m2 = re23.exec(lines[i+2]);
		let m3 = re23.exec(lines[i+3]);
		let m4 = re01.exec(lines[i+4]);
		let m5 = re01.exec(lines[i+5]);
		let m6 = re01.exec(lines[i+6]);
		if (m2[1] == m4[1] && m3[1] == m5[1]) {
            if (verbose) {
                console.log(lines[i]);
                console.log(lines[i+1]);
                console.log(lines[i+2]);
                console.log(lines[i+3]);
                console.log(lines[i+4]);
                console.log(lines[i+5]);
                console.log('');
            }
			lines.splice(i, 6, lines[i+1], lines[i]);
			i++;
		} else if (m6 && m2[1] == m4[1] && m3[1] == m6[1]) {
			// line 5 cannot contain any reference to m2[1] or m3[1]
			if ((new RegExp('\\W' + m2[1] + '\\W')).test(lines[i+5]) ||
				(new RegExp('\\W' + m3[1] + '\\W')).test(lines[i+5])) {
				//console.log('BAD LINE 5: ' + lines[i+5]);
				continue;
			} else {
                if (verbose) {
                    console.log(lines[i]);
                    console.log(lines[i+1]);
                    console.log(lines[i+2]);
                    console.log(lines[i+3]);
                    console.log(lines[i+4]);
                    console.log(lines[i+5]);
                    console.log(lines[i+6]);
                    console.log('');
                }
				lines.splice(i, 7, lines[i+1], lines[i+5], lines[i]);
				i += 2;
			}
		} else {
			continue;
		}

	// This patthern is fairly common
	//	$k[$j++] = _A8; //#19477
	//	$k[$j++] = Infinity; //#19477
	//	var _AC = $k[--$j]; //#19477
	//	var _AD = $k[--$j]; //#19477
	//	$k[$j++] = _AC; //#19477
	} else if (re01.test(lines[i]) &&
			re01.test(lines[i+1]) &&
			re23.test(lines[i+2]) &&
			re23.test(lines[i+3]) &&
			re01.test(lines[i+4])) {
		let m0 = re01.exec(lines[i]);
		let m1 = re01.exec(lines[i+1]);
		let m2 = re23.exec(lines[i+2]);
		let m3 = re23.exec(lines[i+3]);
		let m4 = re01.exec(lines[i+4]);
		if (m1[1] == 'Infinity' && m4[1] == m2[1]) {
            if (verbose) {
                console.log(lines[i]);
                console.log(lines[i+1]);
                console.log(lines[i+2]);
                console.log(lines[i+3]);
                console.log(lines[i+4]);
                console.log('');
            }
			lines.splice(i, 5, 
					lines[i+1],
					lines[i+3].substr(0, lines[i+3].length - m3[2].length) + m0[1] + m0[2]);
		}
	// $j--;
	// $k[$j++] = ...
	} else if (/^\s*\$j--;/.test(lines[i]) &&
			/^\s*\$k\[\$j\+\+\] = /.test(lines[i+1])) {
        if (verbose) {
            console.log(lines[i]);
            console.log(lines[i+1]);
            console.log('');
        }
		let m = /^(\s*)\$k\[\$j\+\+\] = /.exec(lines[i+1]);
		lines.splice(i, 2,
				m[1] + '$k[$j-1] = ' +
				lines[i+1].substr(m[0].length));
		i++;
	// $j -= 2;
	// $k[$j++] = ...
	} else if (/^\s*\$j -= 2;/.test(lines[i]) &&
			/^\s*\$k\[\$j\+\+\] = /.test(lines[i+1])) {
        if (verbose) {
            console.log(lines[i]);
            console.log(lines[i+1]);
            console.log('');
        }
		let m = /^(\s*)\$k\[\$j\+\+\] = /.exec(lines[i+1]);
		lines.splice(i, 2,
				m[1] + '$k[--$j - 1] = ' +
				lines[i+1].substr(m[0].length));
		i++;

	// $k[$j++] = 'ismntextxoffset'; //#2483
	//	...
	// var _25 = <blah>
	// $1[$k[--$j]] = _25; //#2483
	} else if (/^\s*\$1\[\$k\[--\$j]] = /.test(lines[i])) {
		// Search backwards upto 20 lines for the ident (in single quotes).
		// Bail if we hit a $forall().
		let reid = /^\s*\$k\[\$j\+\+] = '(.+)';/;
		let refa = /^\s*\$forall\(/;
		let j = 1;
		for ( ; j < 20 && !refa.test(lines[i-j]); j++) {
			let mj = reid.exec(lines[i-j]);
			if (mj) {
				let id = mj[1];
				let mi = /^(\s*)\$1\[\$k\[--\$j]] = (.+)(; \/\/.*)$/.exec(lines[i]);
				let m1 = /^\s*var (_\w+) = /.exec(lines[i-1]);
				if (m1 && m1[1] == mi[2]) {
                    if (verbose) {
                        console.log(lines[i-j]);
                        console.log(lines[i-1]);
                        console.log(lines[i]);
                        console.log('');
                    }
					let expr = lines[i-1].substr(m1[0].length);
					if (/^[A-Za-z_]\w*$/.test(id)) {
						lines.splice(i-1, 2, mi[1] + '$1.' + id + ' = ' + expr);
					} else {
						lines.splice(i-1, 2, mi[1] + '$1[\'' + id + '\'] = ' + expr);
					}
				} else {
                    if (verbose) {
                        console.log(lines[i-j]);
                        console.log(lines[i]);
                        console.log('');
                    }
					let expr = mi[2] + mi[3];
					if (/^[A-Za-z_]\w*$/.test(id)) {
						lines[i] = mi[1] + '$1.' + id + ' = ' + expr;
					} else {
						lines[i] = mi[1] + '$1[\'' + id + '\'] = ' + expr;
					}
				}
				lines.splice(i-j, 1);
				break;
			}
		}
		if (j == 20) {
			console.log('MISSING IDENT FOR : ' + lines[i]);
		}
	}
}

fs.writeFileSync('barcode.js', lines.join('\n'), 'utf-8');


