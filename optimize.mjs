// optimize.mjs

import fs from 'node:fs';
import { parse as aparse } from 'acorn';
import { generate as astring } from 'astring';

const verbose = true;

const lines = fs.readFileSync('barcode.js', 'utf-8').split(/\r\n|[\r\n]/g);
while (optimize()) {
    deadvars();
}
de$f();
fs.writeFileSync('barcode.js', lines.join('\n'), 'utf-8');

function before(i, n) {
    console.log('<<<');
    for (let j = 0; j < n; j++) {
        console.log(lines[i+j]);
    }
}
function after(i, n) {
    console.log('>>>');
    for (let j = 0; j < n; j++) {
        console.log(lines[i+j]);
    }
    console.log('');
}

function optimize() {
    let changed = false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // $j--;
        // $k[$j++] = ...
        if (/^ *\$j--;/.test(line) &&
                /^ *\$k\[\$j\+\+\] *= *(?!'bwipp\.)/.test(lines[i+1])) {
            if (verbose) {
                before(i, 2);
            }
            let m = /^( *)\$k\[\$j\+\+\] *= */.exec(lines[i+1]);
            lines.splice(i, 2,
                    m[1] + '$k[$j-1] = ' + lines[i+1].substr(m[0].length));
            if (verbose) {
                after(i, 1);
            }
            changed = true;
            i++;
        // $j -= 2;
        // $k[$j++] = ...
        // But don't bother to optimize away the raiseerror handling.
        } else if (/^ *\$j -= 2;/.test(line) &&
                /^ *\$k\[\$j\+\+\] *= *(?!'bwipp\.)/.test(lines[i+1])) {
            if (verbose) {
                before(i, 2);
            }
            let m = /^( *)\$k\[\$j\+\+\] *= */.exec(lines[i+1]);
            lines.splice(i, 2,
                    m[1] + '$k[--$j - 1] = ' + lines[i+1].substr(m[0].length));
            if (verbose) {
                after(i, 1);
            }
            changed = true;
            i++;
        // $k[$j++]=_R1;//#2633
        // $j--;//#2633
        } else if (/^ *\$k\[\$j\+\+\] *= *\w+;/.test(line) &&
                /^ *\$j--;/.test(lines[i+1])) {
            if (verbose) {
                before(i, 2);
            }
            lines.splice(i, 2);
            if (verbose) {
                after(i, 0);
            }
            changed = true;
            i -= 2;
        // Convert obviously boolean operators to native
        } else if (/^ *if *\([^{}]*\$(?:an|or|nt)\([^{}]+\) *\{/.test(line)) {
            try {
                let m = /^( *if *\()([^{}]+)(\) *\{.*)/.exec(line);
                let expr = aparse(m[2], { ecmaVersion:'latest' }).body[0].expression;
                mkboolean(expr, true);
                let newline = m[1] + astring(expr) + m[3];
                if (line != newline) {
                    changed = true;
                    if (verbose) {
                        before(i, 1);
                    }
                    lines[i] = newline;
                    if (verbose) {
                        after(i, 1);
                    }
                }
            } catch (e) {
            }
        // `3 1 roll` and `3 -1 roll` are common postscript idioms.
        // They often get emmited as:
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
        } else if (/^ *\$r\(3, *-?1\);/.test(line)) {
            let m = /(-?1)\);(.*)/.exec(line);
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
                if (verbose) {
                    before(i, end-i+1);
                }
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
                if (verbose) {
                    after(i, end-i+2);
                }
            } else if (c == 3) {
                changed = true;
                if (verbose) {
                    before(i, end-i+1);
                }
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
                if (verbose) {
                    after(i, end-i+1);
                }
            }
        // PS swap idiom that looks like:
        //  $k[$j++]=$_.val;//#31327
        //  $k[$j++]=Infinity;//#31327
        //  var _X=$k[--$j];//#31327
        //  var _Y=$k[--$j];//#31327
        } else if (/^ *\$k\[\$j\+\+\] *=/.test(line) &&
                   /^ *\$k\[\$j\+\+\] *=/.test(lines[i+1]) &&
                   /^ *var _\w+ *= *\$k\[--\$j\];/.test(lines[i+2]) &&
                   /^ *var _\w+ *= *\$k\[--\$j\];/.test(lines[i+3])) {
            let m0 = /^ *\$k\[\$j\+\+\] *=(.*)/.exec(line);
            let m1 = /^ *\$k\[\$j\+\+\] *=(.*)/.exec(lines[i+1]);
            let m2 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[i+2]);
            let m3 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[i+3]);
            if (verbose) {
                before(i, 4);
            }
            lines.splice(i, 4, 'var ' + m2[1] + '=' + m1[1],
                               'var ' + m3[1] + '=' + m0[1]);
            if (verbose) {
                after(i, 2);
            }
            changed = true;

        // Pop/push pattern caused by the compiler's context flush.
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
        //  - No references to $j other than the pop/push ops.

        } else if (/^ *var _\w+ *= *\$k\[--\$j\];/.test(line)) {
            // Find the corresponding push
            let k = i+1;
            while (/^ *(?:\$geti?|\$puti?|var )/.test(lines[k]) && !/\$j/.test(lines[k])) {
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
                    while (/^ *(?:\$geti?|\$puti?|var )/.test(lines[j]) && !/\$j/.test(lines[j])) {
                        j--;
                    }
                    m0 = /^ *var (_\w+) *= *\$k\[--\$j\];/.exec(lines[j]);
                    if (!m0) {
                        break;
                    }
                    // move down to find the next push
                    k++;
                    while (/^ *(?:\$geti?|\$puti?|var )/.test(lines[k]) && !/\$j/.test(lines[k])) {
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
                if (verbose) {
                    before(j, k-j+1);
                }
                for (let h = 0; h < pairs.length; h++) {
                    let pair = pairs[h];
                    lines[pair.j] = lines[pair.j].replace(/--\$j/, () => '$j-' + (h+1));
                    lines.splice(pair.k, 1);
                }
                if (verbose) {
                    after(j, k-j+1-pairs.length);
                }
            }
        }
    }
    return changed;
}

function deadvars() {
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
                if (verbose) {
                    before(i, 1);
                }
                if (m[2] == '--$j') {
                    lines[i] = '$j--;' + line.substr(m[0].length);
                    if (verbose) {
                        after(i, 1);
                    }
                } else {
                    lines.splice(i--, 1);
                    if (verbose) {
                        after(i, 0);
                    }
                }
            }
        }
    }
}

function mkboolean(node, bool) {
    if (bool && node.type == 'CallExpression' && node.callee.type == 'Identifier') {
        if (node.callee.name == '$nt') {
            node.type = 'UnaryExpression';
            node.operator = '!';
            node.prefix = true;
            node.argument = node.arguments[0];
            delete node.arguments;
            delete node.callee;
        } else if (node.callee.name == '$an' || node.callee.name == '$or') {
            node.type = 'LogicalExpression';
            node.operator = node.callee.name == '$an' ? '&&' : '||';
            node.left = node.arguments[0];
            node.right = node.arguments[1];
            delete node.arguments;
            delete node.callee;
        }
    }

    switch (node.type) {
    case 'CallExpression':
            mkboolean(node.callee);
            for (let i = 0, args = node.arguments; i < args.length; i++) {
                mkboolean(args[i]);
            }
            break;
    case 'MemberExpression':
            mkboolean(node.object);
            mkboolean(node.property);
            break;
    case 'LogicalExpression':
            mkboolean(node.left, true);
            mkboolean(node.right, true);
            break;
    case 'BinaryExpression':
            mkboolean(node.left);
            mkboolean(node.right);
            break;
    case 'UnaryExpression':
            mkboolean(node.argument, node.operator == '!');
            break;
    case 'UpdateExpression':
            mkboolean(node.argument);
            break;
    case 'Identifier':
    case 'Literal':
            break;

    default:
        console.log(node);
        throw new Error('Unknown AST node "' + node.type + '"');
    }
}

function deget(node) {
    // We are looking for $get($a(...), x)
    if (node.type == 'CallExpression' &&
        node.callee.type == 'Identifier' && node.callee.name == '$get' &&
        node.arguments[0].type == 'CallExpression' &&
        node.arguments[0].callee.type == 'Identifier' && node.arguments[0].callee.name == '$a') {
        let arr = node.arguments[0].arguments[0];
        let idx = node.arguments[1];
        delete node.callee;
        delete node.arguments;
        node.type = 'MemberExpression';
        node.computed = true;
        node.object = arr;
        node.property = idx;
    }

    for (let id in node) {
        if (id != 'parent') {
            let v = node[id];
            if (v instanceof Array) {
                for (let i = 0; i < v.length; i++) {
                    deget(v[i]);
                }
            } else if (v instanceof Object && v.type) {
                deget(v);
            }
        }
    }
}

function de$f() {
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (/\$f\(.*\$f\(/.test(line)) {
            if (verbose) {
                before(i, 1);
            }
            if (/^ *if *\(/.test(line)) {
                let re = /^( *if *\()(.+)(\) *\{.*$)/;
                let m = re.exec(line);
                let expr = aparse(m[2], { ecmaVersion:'latest' }).body[0].expression;
                _de$f(expr, false);
                lines[i] = m[1] + astring(expr) + m[3];
            } else if (/^ *for *\(/.test(line)) {
                let re = /^( *for *\()(.+;)(.+;.+\).*)$/;
                let m = re.exec(line);
                let decl = aparse(m[2], { ecmaVersion:'latest' }).body[0];
                for (let d = 0, l = decl.declarations.length; d < l; d++) {
                    _de$f(decl.declarations[d], false);
                }
                lines[i] = m[1] + astring(decl) + m[3];
            } else if (/^ *var */.test(line)) {
                let re = /^(.*;)( *\/\/.*)?$/;
                let m = re.exec(line);
                let decl = aparse(m[1], { ecmaVersion:'latest' }).body[0];
                for (let d = 0, l = decl.declarations.length; d < l; d++) {
                    _de$f(decl.declarations[d], false);
                }
                lines[i] = astring(decl) + ';' + (m[2]||'');
            } else {
                let re = /^(.*;)( *\/\/.*)?$/;
                let m = re.exec(line);
                let expr = aparse(m[1], { ecmaVersion:'latest' }).body[0].expression;
                _de$f(expr, false);
                lines[i] = astring(expr) + ';' + (m[2]||'');
            }
            if (verbose) {
                after(i, 1);
            }
        }
    }

    function _de$f(node, done) {
        if (node.type == 'CallExpression' &&
                node.callee.type == 'Identifier' && node.callee.name == '$f') {
            if (!done) {
                return _de$f(node.arguments[0], true);
            }

            let arg = node.arguments[0];
            delete node.arguments;
            delete node.callee;
            delete node.optional;
            for (let id in arg) {
                node[id] = arg[id];
            }
        }
        for (let id in node) {
            if (id != 'parent') {
                let v = node[id];
                if (v instanceof Array) {
                    for (let i = 0; i < v.length; i++) {
                        _de$f(v[i], false);
                    }
                } else if (v instanceof Object && v.type) {
                    _de$f(v, done);
                }
            }
        }
    }
}

