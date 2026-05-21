
import * as acorn from './acorn.mjs';

const mainargs = {
};
const encoderargs = [ 'string', 'map' ];

export default function xformjs(source) {

    const ast = acorn.parse(source,
        { ecmaVersion:2022,
          locations:true,
          //sourceType:'module',
        });

    // ast.body is the array of bwipp_ functions (and possibly global decls in the future).
    const body = ast.body;
    for (let i = 0, l = body.length; i < l; i++) {
        if (body[i].type == 'FunctionDeclaration') {
            mainfunction(body[i]);
        }
    }

    function textof(node) {
        if (node && node.start && node.end) {
            return source.substring(node.start, node.end);
        }
        return false;
    }

    function makeident(node) {
        return node.name;
    }

    // Called for each top-level bwipp_ function
    // `decl` : FunctionDeclaration
    function mainfunction(decl) {
        const fname = makeident(decl.id);
        const body = decl.body.body;
        const l = body.length;
        const k = [];
        let i = 0;
        let j = 0;

        // Determine the life-time of all _temps
        const alive = scopevars(body);

        const args = mainargs[fname] || encoderargs;
        for (let i = 0; i < args.length; i++) {
            k[j++] = { type:args[i], expr:'' };
        }

        // Optional global initialization block
        //  if (!bwipp_function.globals) {
        //      var $__ = $_;
        //      $_ = bwipp_function.globals = {};
        //      ...
        //      $_ = $__;
        //  }
        if (body[i].type === 'IfStatement' && textof(body[i].test) === '!' + fname + '.globals') {
            // globals init strategy:
            // - Determine which variables are global and which are local
            // - Remove local vars from $_.
            //parseglobals(body[i].consequent.body)
        }

        for (i = 0; i < l; i++) {
            let stmt = body[i];
            if (stmt.type === 'VariableDeclaration') {
                if (stmt.declarations.length == 1 && stmt.declarations[0].id.name === '$__') {
                    // ignore
                }
            }
        }

    }

}

function scopevars(body) {
    // Walk the code and find all _temps and their lifetimes
    const alive = {};
    go(body);
    return alive;

    function go(node) {
        if (!node) {
            return;
        }
        if (node instanceof Array) {
            for (let i = 0, l = node.length; i < l; i++) {
                go(node[i]);
            }
        } else if (node.type == 'VariableDeclaration') {
            for (var i = 0, l = node.declarations.length; i < l; i++) {
                const d = node.declarations[i];
                const id = d.id.name;
                alive[id] = { start:node.declarations[i].start };
                d.init && go(d.init);
            }
        } else if (node.type == 'Identifier') {
            if (alive[node.name]) {
                alive[node.name].end = node.end;
            }
        } else if (node.type == 'MemberExpression') {
            node.computed && go(node.property);
        } else if (node.type) {
            for (let id in node) {
                typeof node[id] == 'object' && go(node[id]);
            }
        }
    }
}
function assigntypes(body) {
    // Walk the code and watch how the $_.idents change type
    const types = {};
    go(body);
    return types;

    function go(node) {
        if (!node) {
            return;
        }
        if (node instanceof Array) {
            for (let i = 0, l = node.length; i < l; i++) {
                go(node[i]);
            }
        } else if (node.type == 'VariableDeclaration') {
            for (var i = 0, l = node.declarations.length; i < l; i++) {
                const d = node.declarations[i];
                const id = d.id.name;
                alive[id] = { start:node.declarations[i].start };
                d.init && go(d.init);
            }
        } else if (node.type == 'Identifier') {
            if (alive[node.name]) {
                alive[node.name].end = node.end;
            }
        } else if (node.type == 'MemberExpression') {
            node.computed && go(node.property);
        } else if (node.type) {
            for (let id in node) {
                typeof node[id] == 'object' && go(node[id]);
            }
        }
    }
}
