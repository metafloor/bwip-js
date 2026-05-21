// optmz-devar.mjs
//
// Perform simple code elimination.  need() generates code that is
// often of the form:
//      var X = $k[--$j];       // need()
//      blah X blah;
//
// And dictionary expressions are emitted as:
//      var X = $_.value;
//      var Y = $_.index;
//      var Z = $get($X, $Y);
//
// We look or the 'var X' declaration followed by a single usage of X,
// and when found, elminate the declaration, substituting the expression
// directly.  This strategy reduces LOC by about a third.  Future
// work can get even more aggressive.
//
// With the need() case, we must watch for references to the stack ($k, $j)
// or stack modifiers ($a(), $d(), $aload(), $astore()).  If one is seen
// between the var declaration and usage, we abort the optimization.
//
// Likewise, with dictionary expressions, we must watch for re-assignment
// of the expression between the var declaration and usage.  Here is some
// sample code from the qrcode encoder:
//      var _X = $_.thispairs;
//      $_.thispairs = $_.lastpairs;
//      $_.lastpairs = _X;
//
// The code swaps the values of thispairs and lastpairs and will be
// rendered invalid if we eliminate the var declaration and
// substitute directly.
//
// But it is ok for the assignment to occur on the same line as the
// variable reference.  This pattern occurs all over:
//      var _X = $_.textfont;
//      $_.textfont = "" + _X;
//
// That is safe to substitute as it is self-referencing.

// RE that matches anything that might change the stack
const restack = /\$j\b|\$[ad]\(\)|\$r\(|\$aload\(|\$astore\(|\$(?:anchor)?search\(/;

// Walk down the lines, verifying the RE matches only once to end of block.
// `lines` is the "safe" lines array, with all string literals removed and no indenting.
// `term` is either $k[--$j] or $_.term or $a([ ... ]) or $get(..)
function once(lines, i, re, term) {
    // The line index where the term is referenced.
    let where = 0;

    // No stack references or stack manipulation?
    // No modification to the term?
    let nostack = restack.test(term);
    let getident = /^\$get\(([^,]+),/.exec(term);
    if (getident) {
        term = getident[1].trim();
    }
    let nomodify = /^(?:\$_\.|[a-zA-Z_])/.test(term);
    let renope = null;
    if (nostack) {
        renope = restack;
    } else if (nomodify) {
        renope = new RegExp('^(?:\\$puti?\\(' + term.replace(/[$.\[\]]/g, '\\$&') +
                       '\\b|' + term.replace(/[$.\[\]()]/g, '\\$&') + ' *=)')
    }

    let depth = 0;
    let curly = false;
    for (let l = lines.length; (!curly || depth > 0) && i < l; i++) {
        let s = lines[i];
        if (!where && renope?.test(s)) {
            // Allow this pattern
            //      var _J = $_.checksum; //#5502
            //      $_.checksum = $f(($_.barchar * 9) + _J); //#5502
            if (nostack || !re.test(s)) {
                return 0;
            }
        }
        re.lastIndex = 0;   // the re is global
        if (re.test(s)) {
            if (where) {
                return 0;
            }
            where = i;
        }
        // Variable references live only until end of enclosing block
        let m = s.match(/[\{\}]/g);
        if (m) {
            for (let j = 0; j < m.length; j++) {
                if (m[j] == '{') {
                    curly = true;
                    depth++;
                } else {
                    depth--;
                }
            }
        }
    }
    return where;
}

export function optmz(lines, before, after) {
    // Create RE safe lines for testing by removing:
    // - all string literals that might create false positives
    // - all indenting to simplify the REs
    let safe = [];
    for (let i = 0, l = lines.length; i < l; i++) {
        // Note the trim()
        safe.push(lines[i].trim().replace(/'(\\.|[^'])*'/g, '').replace(/"(\\.|[^"])*"/g, ''));
    }

    strict(lines, safe, before, after);
    loose(lines, safe, before, after);
}

// In strict mode, we only substitute var-decls that are unit terms
// (no operator precedence issues after substitution).  E.g.:
//      /*var _X = $k[--$j]; (not performed in this pass anymore) */
//      var _X = $_.ident;
//      var _X = $_.ident.ident;
//      var _X = $get(ident, ... );
//      var _X = $geti(ident, ... );
//      var _X = $a([ ... ])
//
// [1] == var-name
// [2] == term
// [3] == get ident
function strict(lines, safe, before, after) {
    // Do not move $k[--$j] terms.  Keep them on their own line (var id = $k[--$j])
    // so that other optmizing passes don't have to look inside expressions.
    //const redecl = /^\s*var (_\w+) *= *(\$k\[--\$j\]|\$_\.\w+(?:\.\w+)?|\$geti?\([^()]+\)|\$a\(\[.*\]\));/;
    const redecl = /^\s*var (_\w+) *= *(\$_\.\w+(?:\.\w+)?|\$geti?\([^()]+\)|\$a\(\[.*\]\));/;
    for (let i = 0; i < lines.length; i++) {
        let m = redecl.exec(lines[i]);
        if (m) {
            // Always pass the entire term to once() - it needs to see if there
            // are any stack ops.
            let re = new RegExp('\\b' + m[1] + '\\b', 'g');
            let where = once(safe, i+1, re, m[2]);
            if (where) {
                re.lastIndex = 0;
                let count = 0;
                let line = lines[where].replace(re, ($0) => {
                    count++;
                    return m[2];
                });
                if (count === 1) {
                    before?.(i, where-i+1);
                    lines[where] = line;
                    safe[where] = safe[where].replace(re, m[2]);
                    after?.(i+1, where-i);
                    lines.splice(i, 1);
                    safe.splice(i, 1);
                    i--;
                }
            }
        }
    }
}
// In loose mode, we allow any call expression for the var decl if it does not involve the
// stack and is immediately consumed on the next line e.g.:
//    var _S = $strcpy(_R, "     .   .   .    "); //#10059
//    $_.text = _S;
function loose(lines, safe, before, after) {
    const redecl = /^\s*var (_\w+) *= *(\$\w+\(.*\));/;
    outer: for (let i = 0; i < lines.length; i++) {
        let m = redecl.exec(lines[i]);
        if (m && !restack.test(safe[i])) {
            let re = new RegExp('\\b' + m[1] + '\\b', 'g');
            let where = once(safe, i+1, re, '');
            if (where == i+1) {
                let count = 0;
                let line = lines[i+1].replace(re, ($0) => {
                    count++;
                    return m[2];
                });
                if (count === 1) {
                    before?.(i, 2);
                    lines[i+1] = line;
                    safe[i+1] = safe[i+1].replace(re, m[2]);
                    after?.(i+1, 1);
                    lines.splice(i, 1);
                    safe.splice(i, 1);
                    i -= 2; // In case there is another var decl immediately above...
                }
            }
        }
    }
}
