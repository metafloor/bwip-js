

const fs = require('node:fs');
const PSLEX = require('./psc-lex.js');

const lines = fs.readFileSync('barcode.psc', 'ascii').split(/\r?\n/g);
let debug = false;

// Remove the modules that we don't want being referenced in the javascript.
modout('preamble');
modout('render');
modout('setuphooks');
modout('setanycolor');
strrep(/\/\/setanycolor/, 'setanycolor');

// Move each module's global code into its execution block.
moveglobalcode();

// rendertext has global values but does not push to the dictionary stack, breaking our
// initialization model.
//rendertext();
//strrep(/\/render\.rendertext/, '/rendertext');

// Remove BWIPP debugging code
lineout(/\/\/setuphooks *exec/);

// /apply //processoptions exec /options exch def
strrep(/\/apply \/\/processoptions exec/, '//processoptions exec');

//  (matrix.layout) //dotcode.after exec
//  (matrix.evaluate.normal) //dotcode.before exec
lineout(/^\s*\([\w-]+(?:\.[\w-]+)*\) \/\/[\w-]+\.\w+ exec\s*(?:%.*)?$/);

// This style of code is used by pstests to provide debug information.
// The code is harmless to include, we just need to simplify it.
//   options /debugcws known
//   /uk.co.terryburton.bwipp.global_ctx dup where {exch get /enabledebug known} {pop false} ifelse
//   and { /bwipp.debugcws codewords //raiseerror exec } if
// 
lineout(/^\s*\/uk.co.terryburton.bwipp.global_ctx dup where \{exch get .enabledebug known\} \{pop false\} ifelse/);
strrep(/^(\s*)and (\{ \/bwipp.debug.* \/\/raiseerror exec } if)/, '$1$2'); 

// Convert raiseerror /bwipp.errorIdentifier to (bwipp.errorIdentifier#lnbr)
strrep(/\/(bwipp\.\w+)/, '($1$#)');

// Remove BWIPP grid-fitting from render
//blockout(/^\/render\.gridfit {/, /^} bind def/);
//lineout(/\/gridfit +\/\/render\.gridfit/);

// This appears near the top of each encoder:
// /_render
//     dontdraw /uk.co.terryburton.bwipp.global_ctx dup where {exch get /enabledontdraw known} {pop false} ifelse and
//     /uk.co.terryburton.bwipp._dontdraw dup where {exch get} {pop false} ifelse or not
// def
//
// There are three flags involved with the above logic:
//  1.  opts.dontdraw - user supplied
//  2.  bwipp._dontdraw - set internally by BWIPP code
//  3.  enabledontdraw  - set externally by the BWIPP pstests framework
//
// These get mapped to javascript as:
//  1.  $_.dontdraw
//  2.  $_.bwipp_dontdraw
//  3.  bwipp_enabledontdraw (global defined in barcode-hdr.js/psc.js)
strrep(/^(\s*)\/_render/, '$1/_render dontdraw bwipp_dontdraw $enabledontdraw or or not def');
blockout(/^\s*dontdraw \/uk.co.terryburton.bwipp.global_ctx dup where .* ifelse and/, /^\s*def/);
strrep(/^(\s*)\/uk.co.terryburton.bwipp._dontdraw true def/, '$1/bwipp_dontdraw true def');

// Fix jabcode naming
strrep(/(jabcode\.\w+)\.(\w+)/g, '$1_$2');

// Remove the latevars function blocks
latevars();

// Remove the latevars call.
//    //code128.latevars /init get exec
lineout(/^\s*\/\/[\w-]+\.latevars \/init get exec/);

// Disable font sizing - we do it internally
blockout(/^\s*currentfont \/PaintType .* ifelse/,/^\s*\} if/);

// Disable jabcode large array support (not needed by javascript and breaks our tracing)
blockout(/^\s*{65536 array} stopped \{/, /^\s*\} ifelse\s*$/);

// EAN2/EAN5 move the text down 1 pixel
strrep(/\/text1yoffset height 72 mul 5.75 add def/, '/text1yoffset height 72 mul 4.75 add def');

// Remove BWIPP boilerplate
lineout(/^\s*currentglobal/);
lineout(/^\s*true setglobal/);
lineout(/^\s*setglobal/);
lineout(/^\d+ dict/);
lineout(/^begin/);
lineout(/^end/);
lineout(/^\/setpacking where /);
lineout(/^\[\/barcode\] \{null def\} forall/);
lineout(/\/[\w-]+ dup load \/uk.co.terryburton.bwipp defineresource pop/);
lineout(/^dup \/[\w-]+ dup \/uk.co.terryburton.bwipp findresource put/);

blockout(/^\s*\/uk.co.terryburton.bwipp.global_ctx dup where \{\s*$/, /^\s*\} \{ *pop *\} ifelse/);

// comment out the "catch/throw" blocks around each encoder - we don't need them
// for dictionary stack maintenance.
tworep(/^\s+\d+ dict begin/, /^\s+\{\s*$/, '$0', '%psc {');
lineout(/^\s+\} stopped \{end stop\} if/);

// We don't handle this correctly.  The bind causes an anonymous function
// to be emitted; we need the code array.
strrep(/}\s+bind\s+forall/, '} forall');
strrep(/}\s+bind\s+for/, '} for');

// This idiom breaks our tracing:
//  /pdf417.coeffscache pdf417.coeffscachemax pdf417.coeffscachelimit //fifocache exec def
//
// The call to fifocache() causes a context flush and the trace analysis
// loses the type of /pdf417.coeffscache.  def then emits
//      $[_v] = $k[--$j];
// instead of:
//      pdf417.coeffscache = $k[--$j];
strrep(/(\/\w[\w-]+\.\w+) (.* \/\/fifocache exec) def/, '$2 $1 exch def'); 

strrep(/\/(is..textfont) \/Courier/, '/$1 /OCR-A');
strrep(/\/(is..textsize) 9/, '/$1 8');

strrep(/\/Helvetica/, '(OCR-B)');
strrep(/\/Courier/, '(OCR-B)');

strrep(/\/text1yoffset -7/, '/textyoffset -8');

strrep(/\/inkspread 0\.[0-9]* def/, '/inkspread 0 def');
strrep(/\/bordertop -0.2 def/, '/bordertop -0.55 def');
strrep(/\/borderbottom -0.2 def/, '/borderbottom -0.55 def');

strrep(/suppresskanjimode false def/, 'suppresskanjimode true def');
strrep(/\{\s*13 3 div /, '{ 4.3333334 ');
strrep(/\{\s*10 3 div /, '{ 3.3333334 ');
strrep(/\{\s*8 3 div /, '{ 2.6666667 ');
strrep(/\{\s*4 3 div /, '{ 1.3333334 ');
strrep(/\{\s*2 3 div /, '{ 0.6666667 ');

fs.writeFileSync('barcode.psc', lines.join('\n'), 'ascii');

// Move global code into its corresponding main execution block,
// wrapped in 'def' flags so we can identify it later, and hoist
// it back to global scope.
//
// For example:
//   begin
//   ... global code ...
//   /parseinput {
//
// Changes to:
//   /parseinput { /bwipjs_parseinput (start-global) def  % begin
//   ... global code ...
//   /bwipjs_parseinput (end-global) def  % parseinput {
function moveglobalcode() {
    for (let i = 0; i < lines.length; i++) {
        if (/^begin\s*(%.*)?$/.test(lines[i])) {
            let empty = true;
            for (let j = i+1; j < lines.length; j++) {
                if (/^\/\w[\w-]+ \{/.test(lines[j])) {
                    if (!empty) {
                        let m = /^\/(\w[\w-]+) \{/.exec(lines[j]);
                        lines[i] = '/' + m[1] + ' { /bwipjs_' + m[1] + ' (start-global) def  % begin';
                        lines[j] = '/bwipjs_' + m[1] + ' (end-global) def  % ' + m[1] + ' {';
                    }
                    i = j;
                    break;
                } else if (/\S/.test(lines[j])) {
                    empty = false;
                }
            }
        }
    }
}

// string.replace() over the entire file
function strrep(re, sub) {
    debug && console.log(re, sub);
    let matches = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i][0] !== '%') {
            lines[i] = lines[i].replace(re, (...args) => {
                debug && console.log(args[0], sub.replace(/\$\d/g, (_) => args[_[1]])
                                                 .replace(/\$#/g, (_) => '#' + (i+1)));
                   matches++;
                   return sub.replace(/\$\d/g, (_) => args[_[1]])
                             .replace(/\$#/g, (_) => '#' + (i+1));
                });
        }
    }
    if (!matches) {
        console.log(re, sub);
        throw 'strrep: no matches';
    }
}

// two-line replace.
function tworep(re0, re1, sub0, sub1) {
    let matches = 0;
    for (let i = 0; i < lines.length-1; i++) {
        if (lines[i][0] !== '%' && lines[i+1][0] !== '%') {
            let m0 = re0.exec(lines[i]);
            let m1 = m0 && re1.exec(lines[i+1]);
            if (m0 && m1) {
                matches++;
                lines[i++] = sub0.replace(/\$\d/g, (_) => m0[_[1]]);
                lines[i++] = sub1.replace(/\$\d/g, (_) => m1[_[1]]);
                continue;
            }
        }
    }
    if (!matches) {
        console.log(re0, re1);
        console.log(sub0, sub1);
        throw 'tworep: no matches';
    }
}

// Comment out a line matching re.
function lineout(re) {
    debug && console.log(re);
    let matches = 0;
    for (let i = 0; i < lines.length; i++) {
        if (re.test(lines[i])) {
            debug && console.log('%psc ' + lines[i]);
            lines[i] = '%psc ' + lines[i];
            matches++;
        }
    }
    if (!matches) {
        console.log(re);
        throw 'lineout: no matches';
    }
}

// Comment out a block of text starting with the line matching re0,
// ending with the line matching re1.
function blockout(re0, re1) {
    let nesting = 0;
    let instr = 0;  // parsing a (string)
    let start = 0;
    let matches = 0;
    for (let i = 0; i < lines.length; i++) {
        if (re0.test(lines[i])) {
            count(lines[i]);
            lines[i] = '%psc ' + lines[i];
            start = i;
            matches++;
            for (i++; i < lines.length; i++) {
                count(lines[i]);
                if (!nesting && re1.test(lines[i])) {
                    lines[i] = '%psc ' + lines[i];
                    break;
                }
                lines[i] = '%psc ' + lines[i];
            }
            if (i === lines.length) {
                console.log(re0);
                console.log(re1);
                console.log('#' + (start+1) + ': ' + lines[start]);
                throw 'blockout: unexpected EOF';
            }
        }
    }
    if (!matches) {
        console.log(re0);
        console.log(re1);
        throw 'blockout: no matches';
    }

    function count(l) {
        // We don't track [ ] due to the `mark` command...
        let re = /\\.|<<|>>|[<>{}()%]/g;
        let m = re.exec(l);
        while (m) {
            switch (m[0]) {
            case '%':  if (!instr) return; break;

            case '<<':
            case '<':
            case '{':
            case '[':
                if (!instr) {
                    nesting++;
                }
                break;
            case '>>':
            case '>':
            case '}':
            case ']':
                if (!instr) {
                    nesting--;
                }
                break;
            case '(':
                nesting++;
                instr++;
                break;
            case ')':
                nesting--;
                instr--;
                break;
            }
            m = re.exec(l);
        }
    }
}

// Inside a block of code defined by re0 and re1, apply String.replace(re, sub)
// to each line.
// The lines matching re0 and re1 are excluded from the string replace.
function blockrep(re0, re1, re, sub) {
    let nesting = 0;
    let instr = 0;  // parsing a (string)
    let start = 0;
    let matches = 0;
    for (let i = 0; i < lines.length; i++) {
        if (re0.test(lines[i])) {
            count(lines[i]);
            start = i;
            for (i++; i < lines.length; i++) {
                count(lines[i]);
                if (!nesting && re1.test(lines[i])) {
                    break;
                }
                let s = lines[i].replace(re, sub);
                if (s !== lines[i]) {
                    lines[i] = s;
                    matches++;
                }
            }
            if (i === lines.length) {
                console.log(re0);
                console.log(re1);
                console.log(re, sub);
                console.log(lines[start]);
                throw 'blockrep: unexpected EOF';
            }
        }
    }
    if (!matches) {
        console.log(re0);
        console.log(re1);
        console.log(re, sub);
        throw 'blockrep: no matches';
    }

    function count(l) {
        // We don't track [ ] due to the `mark` command...
        let re = /\\.|<<|>>|[<>{}()%]/g;
        let m = re.exec(l);
        while (m) {
            switch (m[0]) {
            case '%':  if (!instr) return; break;

            case '<<':
            case '<':
            case '{':
            case '[':
                if (!instr) {
                    nesting++;
                }
                break;
            case '>>':
            case '>':
            case '}':
            case ']':
                if (!instr) {
                    nesting--;
                }
                break;
            case '(':
                nesting++;
                instr++;
                break;
            case ')':
                nesting--;
                instr--;
                break;
            }
            m = re.exec(l);
        }
    }
}

// Comment out a BWIPP module
function modout(name) {
    let re0 = new RegExp('^% --BEGIN [A-Z]+ ' + name + '--');
    let re1 = new RegExp('^% --END [A-Z]+ ' + name + '--');
    for (let i = 0; i < lines.length; i++) {
        if (re0.test(lines[i])) {
            lines[i] = '%psc ' + lines[i];
            for (i++; i < lines.length; i++) {
                if (re1.test(lines[i])) {
                    lines[i] = '%psc ' + lines[i];
                    return;
                }
                if (lines[i].substr(0, 5) != '%psc ') {
                    lines[i] = '%psc ' + lines[i];
                }
            }
            if (i === lines.length) {
                console.log(re0);
                console.log(re1);
                console.log('#' + (start+1) + ': ' + lines[start]);
                throw 'modout: unexpected EOF';
            }
        }
    }
    console.log(re0);
    console.log(re1);
    throw 'modout: did not match';
}
  
// Remove the latevars logic.  A purpose-built function is needed because of the `end`
// and bind put, which look exactly like so many other lines...
// 
//      /code128.latevars dup 8 dict def load /init {
//          //code128.latevars begin
//
//          ... latevar defs ...
//
//          /init { //code128.latevars {def} forall } def
//          end
//          //code128.latevars /init get exec
//      } bind put
function latevars() {
    let l = lines.length;
    for (let i = 0; i < l; i++) {
        let m = /^\/([\w-]+)\.latevars dup \d+ dict def load \/init {/.exec(lines[i]);
        if (m) {
            lines[i] = '%psc ' + lines[i];
            let id = m[1];
            let j = i+1;
            for (; j < l; j++) {
                // Comment out any line involving latevars logic
                if (/[\w-]+\.latevars/.test(lines[j]) || /^\s+end\s*(%.*)?$/.test(lines[j])) {
                    lines[j] = '%psc ' + lines[j];
                } else if (/^} bind put/.test(lines[j])) {
                    lines[j] = '%psc ' + lines[j];
                    break;
                }
            }
            if (j === l) {
                throw 'latevars: ' + id + ': unexpected end of file';
            }
            i = j;
        }
    }
}

// rendertext has global values but does not push to the dictionary stack, breaking our
// initialization model.  Add a dict begin/end.
function rendertext() {
    let l = lines.length;
    for (let i = 0; i < l; i++) {
        // This gets called after moveglobalcode(), so we are looking for the
        // end-global flag to add the dict begin.
        //   /bwipjs_rendertext (end-global) def  % rendertext {
        let m = /^( *\/bwipjs_rendertext \(end-global\) def)(.*)/.exec(lines[i]);
        if (m) {
            lines[i] = m[1] + ' 0 dict begin ' + m[2];
            for (i++; i < l; i++) {
                if (lines[i][0] == '}') {
                    // Indent end to hide it from the boilerplate commenting out.
                    lines[i] = '  end }' + lines[i].substr(1);
                    return;
                }
            }
            throw 'rendertext: did not find end of function';
        }
    }
    throw 'rendertext: did not find start of function';
}
