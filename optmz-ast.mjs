// optmz-ast.mjs
//
// acorn/astring based optimizations

import { parse as aparse } from './acorn.mjs';
import { generate as astring } from './astring.mjs';

export function optmz(lines, before, after) {
    defloat(lines, before, after);
    debool(lines, before, after);
}

function parseexpr(expr) {
    try {
        return aparse(expr, { ecmaVersion:'latest' });
    } catch (e) {
        console.log(expr);
        console.log(e.stack || e);
        process.exit(1);
    }
}

function defloat(lines, before, after) {
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (/\$f\(/.test(line)) {
            before?.(i, 1, 'de$f');
            if (/^ *if *\(/.test(line)) {
                let re = /^( *if *\()(.+)(\) *\{.*$)/;
                let m = re.exec(line);
                let expr = parseexpr(m[2]).body[0].expression;
                _defloat(expr, false);
                lines[i] = m[1] + astring(expr) + m[3];
            } else if (/^ *for *\(/.test(line)) {
                let re = /^( *for *\()(.+;)(.+;.+\).*)$/;
                let m = re.exec(line);
                let decl = parseexpr(m[2]).body[0];
                for (let d = 0, l = decl.declarations.length; d < l; d++) {
                    _defloat(decl.declarations[d], false);
                }
                lines[i] = m[1] + astring(decl) + m[3];
            } else if (/^ *var */.test(line)) {
                let re = /^(.*;)( *\/\/.*)?$/;
                let m = re.exec(line);
                let decl = parseexpr(m[1]).body[0];
                for (let d = 0, l = decl.declarations.length; d < l; d++) {
                    _defloat(decl.declarations[d], false);
                }
                lines[i] = astring(decl) + (m[2]||'');
            } else {
                let re = /^(.*;)( *\/\/.*)?$/;
                let m = re.exec(line);
                let expr = parseexpr(m[1]).body[0].expression;
                _defloat(expr, false);
                lines[i] = astring(expr) + (m[2]||'');
            }
            after?.(i, 1);
        }
    }

    function _defloat(node, done) {
        if (node.type == 'CallExpression' && node.callee.type == 'Identifier' && node.callee.name == '$f') {
            if (!done) {
                // Maybe keep this $f(), remove all interior ones
                let ismdm = _defloat(node.arguments[0], true);
                /*
                // Causes test failures...
                if (!ismdm) {
                    let arg = node.arguments[0];
                    delete node.arguments;
                    delete node.callee;
                    delete node.optional;
                    for (let id in arg) {
                        node[id] = arg[id];
                    }
                }
                */
                return ismdm;
            }

            let arg = node.arguments[0];
            delete node.arguments;
            delete node.callee;
            delete node.optional;
            for (let id in arg) {
                node[id] = arg[id];
            }
        }
        let ismdm = node.type == 'BinaryExpression' && /[*/%]/.test(node.operator);
        for (let id in node) {
            if (id != 'parent') {
                let v = node[id];
                if (v instanceof Array) {
                    for (let i = 0; i < v.length; i++) {
                        _defloat(v[i], false);
                    }
                } else if (v instanceof Object && v.type) {
                    if (_defloat(v, done)) {
                        ismdm = true;
                    }
                }
            }
        }
        return ismdm;
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

function debool(lines, before, after) {
    for (let i = 0; i < lines.length; i++) {
        if (/^ *if *\([^{}]*\$(?:an|or|nt)\([^{}]+\) *\{/.test(lines[i])) {
            let m = /^( *if *\()([^{}]+)(\) *\{.*)/.exec(lines[i]);
            let expr = parseexpr(m[2]).body[0].expression;
            mkboolean(expr, true);
            let newline = m[1] + astring(expr) + m[3];
            if (lines[i] != newline) {
                before?.(i, 1, 'debool');
                lines[i] = newline;
                after?.(i, 1);
            }
        }
    }
}
