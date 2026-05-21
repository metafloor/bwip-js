// file: bwip-js/psc.js
//
// The bwip-js cross-compiler.  See file psc for usage.

// PostScript Cross-Compiler
function PSC(pscode, flags) {
    var lex = new PSLEX(pscode);

    // Configure from command line flags
    var cfg = {
        coverage:   false,  // no branch coverage instrumentation
    };

    for (var i = 0; i < flags.length; i++) {
        switch (flags[i]) {
        case '--no-coverage':   cfg.coverage = false;   break;
        case '--with-coverage': cfg.coverage = true;    break;
        case '--no-perf':       cfg.perf = false;       break;
        case '--with-perf':     cfg.perf = true;        break;
        default:
            if (flags[i]) {
                console.log('Unknown flag "' + flags[i] + '" ignored.');
            }
        }
    }

    // Curly-braces and brackets embedded in strings cause vim to mis-match
    const LC = '\x7b';
    const RC = '\x7d';
    const LP = '\x5b';
    const RP = '\x5d';

    // browser-based debugging using psc.html/pscdbg.html
    let pscdbg = typeof window == 'object';
    let pscdbg_nlines = 0;
    let pscdbg_height = 0;
    let pscdbg_source = null;
    let pscdbg_lnbr = -1;
    if (pscdbg) {
        let re = /\r\n|[\r\n]/g;
        while (re.exec(pscode)) {
            pscdbg_nlines++;
        }
        pscdbg_nlines -= 2;     // inserting into an <xmp> adds 2 EOLs

        let bwipp = document.getElementById('bwipp');
        if (bwipp) {
            pscdbg_source = bwipp.children;
            pscdbg_height = bwipp.offsetHeight;
        } else {
            pscdbg = false;
        }
        debugger;
    }

    // The unknown-type must be zero i.e. falsy.
    const TYPE_UNKNOWN  = 0x0000;

    // N.B.: The VAL types are <<1 difference from their corresponding LIT
    //       types.
    const TYPE_INTLIT   = 0x0001;
    const TYPE_INTVAL   = 0x0002;
    const TYPE_INTMASK  = 0x0003;       // all ints
    const TYPE_NUMLIT   = 0x0004;
    const TYPE_NUMVAL   = 0x0008;
    const TYPE_NUMMASK  = 0x000f;       // all numbers and ints
    const TYPE_STRLIT   = 0x0010;
    const TYPE_STRVAL   = 0x0020;
    const TYPE_STRMASK  = 0x0030;       // all strings
    const TYPE_NULL     = 0x0040;
    const TYPE_BOOLEAN  = 0x0080;
    const TYPE_PODMASK  = 0x00ff;       // all plain old data types

    const TYPE_ARRAY    = 0x000100;
    const TYPE_DICTMAP  = 0x000200;       // Map dict object
    const TYPE_DICTOBJ  = 0x000400;       // {} dict object
    const TYPE_CONST    = 0x000800;       // global constant (number, string, bool, null)
    const TYPE_IDENT    = 0x001000;       // /ident
    const TYPE_TOKENS   = 0x002000;
    const TYPE_FUNCTION = 0x004000;       // a js-string containing a function definition
    const TYPE_FUNCREF  = 0x008000;       // A named reference to a function
    const TYPE_PRECALC  = 0x010000;       // A precalculated value (code hoisting)

    const typemap = { 
        [TYPE_UNKNOWN]:"UNKNOWN",
        [TYPE_INTLIT]:"INTLIT",
        [TYPE_INTVAL]:"INTVAL",
        [TYPE_NUMLIT]:"NUMLIT",
        [TYPE_NUMVAL]:"NUMVAL",
        [TYPE_STRLIT]:"STRLIT",
        [TYPE_STRVAL]:"STRVAL",
        [TYPE_NULL]:"NULL",
        [TYPE_BOOLEAN]:"BOOLEAN",
        [TYPE_ARRAY]:"ARRAY",
        [TYPE_DICTMAP]:"DICTMAP",
        [TYPE_DICTOBJ]:"DICTOBJ",
        [TYPE_CONST]:"CONST",
        [TYPE_IDENT]:"IDENT",
        [TYPE_TOKENS]:"TOKENS",
        [TYPE_FUNCTION]:"FUNCTION",
        [TYPE_FUNCREF]:"FUNCREF",
        [TYPE_PRECALC]:"PRECALC",
    };

    // BWIPP unknowns
    const bwippunknowns = {
        opt         : TYPE_DICTMAP,
        tw          : TYPE_NUMVAL,
        th          : TYPE_NUMVAL,
        nudge       : TYPE_NUMVAL,
        pixx        : TYPE_INTVAL,
        pixy        : TYPE_INTVAL,
        pixs        : TYPE_ARRAY,
        dontlint    : TYPE_BOOLEAN,
        lintreqs    : TYPE_BOOLEAN,
    };

    // All global variables must be prefixed with $-sign in the PS code.
    // The $-sign gets converted to the bwipp_ prefix automatically.
    const bwippdefs = {
        $enabledontdraw : TYPE_BOOLEAN, // --> bwipp_enabledontdraw
        $error          : TYPE_DICTMAP, // --> bwipp_error
    };

    // These are modules that get replaced by bwip-js specific code.
    // Because they get replaced, their definitions appear at the end
    // of barcode.psc, so their types are unknown to the code above.
    for (let i = 0; i < PSFUNCS.length; i++) {
        bwippdefs[PSFUNCS[i]] = TYPE_FUNCREF;
    };

    // Home for all of the postscript operators
    var $ = {};

    // Knowledge of user-defined symbols
    var dict = { ...bwippdefs, ...bwippunknowns };

    // global vs function scoped.  The value is incremented/decremented on compile()
    var scopelvl = -1;

    // Execution context stack
    var context = [];

    // Compilation trace stack
    var st = [];
    var sp = 0;

    // Temporary variable number seed
    var tvarno = 0;

    // Branch coverage seed
    var branchno = -1;      // -1 == disabled

    // Performance codegen enable/disable
    var perfflag = false;

    // Current code block
    var block = [];
    var seq   = 0;
    var loopstate = [];

    // We do a two-pass compilation of each global function.  The first pass
    // is used to find all user-defined identifiers (allowunknown=true).
    // The second pass emits the code (allowunknown=false).
    var allowunknown = false;

    function clone(x) {
        return { ...x, seq:++seq };
    }

    function need(n) {
        for (var tmp = n - sp; tmp > 0; tmp--) {
            var tid = tvar();
            block.push({ code:'var ' + tid + '=$k[--$j];', lnbr:lex.lnbr,
                         seq:++seq });
            st.unshift({ type:TYPE_UNKNOWN, expr:tid, seq:++seq });
            sp++;
        }
    }

    // For debugging of the trace stack.
    function dump(id) {
        console.log('[[[' + id + '#' + lex.lnbr);
        for (var i = sp-1; i >= 0; i--) {
            console.log(i, typemap[st[i].type] || '<BADTYPE>', st[i]);
        }
        console.log(']]]');
    }

    // Decide if the expression needs parentheses
    function parens(x) {
        if (/^[A-Za-z_$][\w_$.]*$/.test(x) ||   // 'dot' expression
            /^-?[0-9.]+$/.test(x) ||            // number literal
            /^"([^"\\]|\\.)*"$/.test(x) ||      // string literal
            /^'([^'\\]|\\.)*'$/.test(x) ||      // string literal
            /^[\w_$.]+\([^;()]*\)$/.test(x)) {  // function call
            return x;
        }
        return '(' + x + ')';
    }

    // Emit a line of code.  May be multiple lines e.g. a function.
    function emit(code, lnbr) {
        if (typeof code == 'object') {
            lnbr = code.lnbr;
            code = code.code;
        }
        block.push({ code:code, lnbr:lnbr||lex.lnbr, seq:++seq });
    }

    // lines is the return value from ctxpop()
    function append(lines) {
        for (var i = 0; i < lines.length; i++) {
            block.push({ code:lines[i].code, lnbr:lines[i].lnbr, seq:++seq });
        }
    }

    // The preprocessing moved the global code into its corresponding execution
    // block so we can trace variable types correctly.  Wrap it in a conditional
    // so it only executes once.
    //
    // This is what we are looking for:
    //  function bwipp_renlinear(){
    //  $_.bwipjs_renlinear="start-global";
    //     ... global code ...
    //  $_.bwipjs_renlinear="end-global";
    // 
    // And how it is transformed:
    //  function bwipp_renlinear(){
    //  if (!bwipp_renlinear.globals){
    //     ... global code ...
    //  }
    function fixglobals() {
        let declared = {};
        for (let i = 0; i < block.length; i++) {
            let m = /\$_\.bwipjs_(\w+)="start-global";([\s\S]+)\$_\.bwipjs_(\1)="end-global";/.exec(block[i].code);
            if (m) {
                try {
                block[i].code = block[i].code.substr(0, m.index) +
                                'if (!bwipp_' + m[1] + '.globals){\n' +
                                'var $__ = $_;\n' +
                                '$_ = bwipp_' + m[1] + '.globals = {};\n' +
                                m[2] +
                                '$_ = $__;\n' +
                                '}\n' +
                                block[i].code.substr(m.index + m[0].length);
                } catch (e) {
                    console.log(block[i].code);
                    console.log(m);
                    throw e;
                }
            }
        }
    }

    // Flushes all trace state to the postscript stack.  Trace stack is
    // empty afterwards.  The more ctxflush()s we do, the safer but less
    // optimized the emitted code.
    function ctxflush() {
        for (var i = 0; i < sp; i++) {
            if (st[i].expr == null) {
                if (st[i].tokens) {
                    st[i] = { type:TYPE_FUNCTION, expr:codeblock(st[i].tokens), seq:++seq };
                } else {
                    console.log('st[' + i + '] =', st[i]);
                    dump('ctxflush');
                    throw new Error('ctxflush: missing expression');
                }
            }
            block.push({ code:'$k[$j++]=' + st[i].expr + ';', lnbr:lex.lnbr, seq:++seq });
        }
        sp = 0;
    }

    // Prepare to emit an executable object (usually an executable block of
    // tokens, but not always).
    function ctxprep(exec) {
        if (exec.type == TYPE_PRECALC) {
            // do-nothing
        } else if (exec.type == TYPE_FUNCREF) {
            // do-nothing
        } else if (exec.type == TYPE_TOKENS) {
            ctxpush(exec.tokens);
        } else {
            console.log(exec);
            dump('ctxprep');
            throw new Error('ctxprep: unknown exec-type');
        }
    }
    // Emit the executable object.
    function ctxexec(exec) {
        let t = exec.type;
        if (t == TYPE_FUNCREF) {
            return [{ code:exec.expr + '();', lnbr:lex.lnbr, seq:++seq }]
        } else if (t == TYPE_PRECALC || t == TYPE_FUNCTION) {
            return [{ code:exec.expr, lnbr:lex.lnbr, seq:++seq }];
        } else if (t == TYPE_TOKENS) {
            compile();
            return ctxpop();
        }
    }

    function ctxpush(tokens) {
        // Do not ctxflush() here - the array and dictionary literal code
        // does not want it.

        context.push({ st:st, sp:sp, block:block });
        lex.push(tokens);

        st      = [];
        sp      = 0;
        block   = [];
        seq     += 100;     // Make the gaps noticable
    }

    function ctxpop() {
        ctxflush();

        //block.sort(function(a,b) { return a.seq - b.seq });

        lex.pop();
        var ctx = context.pop();
        var tmp = block;

        st      = ctx.st;
        sp      = ctx.sp;
        block   = ctx.block;

        return tmp;
    }

    // Variable-name compatible base-62 character set
    _b62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Return the next temp-var
    function tvar() {
        return '_' + b62(tvarno++);

        function b62(n) {
            var v = '';
            while (n >= 62) {
                v = _b62[n % 62] + v;
                n = (n / 62)|0;
            }
            return _b62[n] + v;
        }
    }

    // Emits a code coverage branch tracker
    function newbranch() {
        if (branchno > -1) {
            emit('$bwipjs_coverage[' + (branchno++) + ']=1;');
        }
    }
    // Emits a performance metrics tracker
    function newperf(lnbr) {
        if (perfflag) {
            emit('$bwipjs_perf[' + lnbr + ']=0;');
        }
    }

    // Binary arithmetic operator
    function binarith(op) {
        need(2);
        var t1 = st[sp-1].type;
        var t2 = st[sp-2].type;

        // Don't constant fold.  Especially with division, smaller code
        // results when not folded.  Besides, every JS compiler out there
        // constant folds on the first pass anyway.
        if ((t1 & TYPE_INTMASK) && (t2 & TYPE_INTMASK) && op != '/') {
            st[sp-2].type = TYPE_INTVAL;
            st[sp-2].expr = parens(st[sp-2].expr) + op +
                            parens(st[sp-1].expr);
        } else if (op == '+' || op == '-') {
            st[sp-2].type = TYPE_NUMVAL;
            // If adding an integer, don't need f32 conversion
            if (/^\d+$/.test(st[sp-1].expr) || /^\d+$/.test(st[sp-2].expr)) {
                st[sp-2].expr = parens(st[sp-2].expr) + op + parens(st[sp-1].expr);
            } else {
                st[sp-2].expr = '$f(' + parens(st[sp-2].expr) + op + parens(st[sp-1].expr) + ')';
            }
        } else {
            st[sp-2].type = TYPE_NUMVAL;
            st[sp-2].expr = parens(st[sp-2].expr) + op + parens(st[sp-1].expr);
        }
        st[sp-2].seq = ++seq;
        sp--;
    }

    // Arithmetic or logical binary operator returning boolean
    // jsop is the javascript operator such as <=, &, etc. and works on
    //  numbers and booleans.  (Admittedly, the `<` operator doesn't work
    //  on booleans but that should not occur in practice).
    // funop is the name of  the function to call to get the same operator
    //  semantics on more complex types, primarily strings or unknowns
    //  e.g. $ne()
    //
    // FUTURE:  We need to track the difference between a js-string and a
    //          uint8-string.  There are lots of places where we can use
    //          ==/!= rather than $eq/$ne when both sides of the expression
    //          are js-strings.
    function binbool(jsop, funop) {
        need(2);

        var t1 = st[sp-1].type;
        var t2 = st[sp-2].type;

        // Javascript operator
        if ((jsop == '==' || jsop == '!=') &&
                (st[sp-1].expr == '""' || st[sp-1].expr == "''")) {
            st[sp-2].expr = st[sp-2].expr + '.length' + jsop + '0';
        } else if (((jsop == '==' || jsop == '!=') && (t2&TYPE_NULL)) ||
                (t1&TYPE_NUMMASK) || (t2&TYPE_NUMMASK) ||
                (t1&TYPE_BOOLEAN) || (t2&TYPE_BOOLEAN)) {
            st[sp-2].expr = parens(st[sp-2].expr) + jsop +
                            parens(st[sp-1].expr);
        } else {
            // Function operator e.g $ne(expr1, expr2)
            st[sp-2].expr = funop + '(' + st[sp-2].expr + ',' +
                            st[sp-1].expr + ')';
        }
        st[sp-2].type = TYPE_BOOLEAN;
        st[sp-2].seq = ++seq;
        sp--;
    }

    function mkid(id) {
        return id.replace(/\W/g, '_');
    }

    // Read to the end of the inline dictionary definition, inline array
    // definition, or executable code block.
    // end == '>>' or '}' or ']' or ...
    function readtokens(lex, end) {
        var count  = 0;
        var tokens = [];
        while (lex.next() !== null) {
            if (lex.token == '{' || lex.token == '<<' || lex.token == '[') {
                count++;
            } else if (lex.token=='}' || lex.token=='>>' || lex.token==']') {
                count--;
            }
            if (lex.token == end && count < 0) {
                return tokens;
            }
            tokens.push({ token:lex.token, lnbr:lex.lnbr });
        }
    }

    // The main compilation loop.
    function compile() {
        scopelvl++;

        while (lex.next() !== null) {
            var tkn  = lex.token;
            var lnbr = lex.lnbr;

            if (pscdbg && pscdbg_lnbr != lex.lnbr) {
                window.scrollTo(0, (lex.lnbr-10) * pscdbg_height / pscdbg_nlines);
                pscdbg_lnbr > 0 && (pscdbg_source[pscdbg_lnbr-1].className = '');
                pscdbg_source[lex.lnbr-1].className = 'selected';
                pscdbg_lnbr = lex.lnbr;
            }

            if (tkn == '{') {
                // Start of an exec block.
                var tokens = readtokens(lex, '}');
                st[sp++] = { type:TYPE_TOKENS, tokens:tokens, seq:++seq };
            } else if (tkn == '[') {
                // Array literal
                let lnbr = lex.lnbr;

                // emit the code to build the array at runtime
                ctxpush(readtokens(lex, ']'));
                compile();
                var lines = ctxpop();

                // Check if the array is static.  A static array contains only
                // code with lines:
                //      $k[$j++]=<blah>
                //          or
                //      var <var>=<blah>
                //
                // Where var <var>=<blah> cannot pull from the stack (inside a
                // forall loop e.g.)
                for (var i = 0; i < lines.length; i++) {
                    if (/^var [^=]+=.*\$k\[--\$j\]/.test(lines[i].code)) {
                        break;
                    }
                    if (!/^\$k\[\$j\+\+\]=/.test(lines[i].code) &&
                        !/^var [^=]+=/.test(lines[i].code)) {
                        break;
                    }
                }

                // Does the top of the stack contain an ident?  And is the
                // next token a def?
                // If so, we can inline the array creation with the assignment.
                var defsym = '';
                if (sp && st[sp-1].type == TYPE_IDENT && lex.peek() == 'def') {
                    defsym = st[--sp].expr;
                }

                // Static array?
                if (i == lines.length) {
                    var code = '';
                    for (var i = 0; i < lines.length; i++) {
                        // Hoist var declarations
                        if (lines[i].code.indexOf('var ') == 0) {
                            emit(lines[i]);
                        } else {
                            var a = /^\$k\[\$j\+\+\]=([\s\S]+);(\/\*[^;]*\*\/)?$/.exec(lines[i].code);
                            code += (code.length ? ',' : '') + a[1];
                        }
                    }
                    if (defsym) {
                        var id = mkid(defsym.slice(1,-1));
                        emit('$_.' + id + '=$a([' + code + ']);');
                        lex.next(); // consume the def
                        dict[id] = TYPE_ARRAY;
                    } else {
                        var tid = tvar();
                        emit('var ' + tid + '=$a([' + code + ']);');
                        st[sp++] = { type:TYPE_ARRAY, expr:tid, seq:++seq };
                    }
                } else {
                    // Build the array at runtime
                    if (sp && st[sp-1].type != TYPE_IDENT) {
                        ctxflush();
                    }
                    emit('$k[$j++]=Infinity;', lnbr);
                    for (var i = 0; i < lines.length; i++) {
                        emit(lines[i]);
                    }

                    if (defsym) {
                        var id = mkid(defsym.slice(1,-1));
                        emit('$_.' + id + '=$a();');
                        lex.next(); // consume the def
                        dict[id] = TYPE_ARRAY;
                    } else {
                        var tid = tvar();
                        emit('var ' + tid + '=$a();');
                        st[sp++] = { type:TYPE_ARRAY, expr:tid, seq:++seq };
                    }
                }
            } else if (tkn == '<<') {
                // Dictionary literal
                let lnbr = lex.lnbr;

                // emit the code to build the object at runtime
                ctxpush(readtokens(lex, '>>'));
                compile();
                var lines = ctxpop();

                // Check if the object is static.  A static object contains
                // sets of lines as:
                //  var <var>=<blah>;   (optional)
                //  $k[$j++]="string";
                //  var <var>=<blah>;   (optional)
                //  $k[$j++]=<blah>;
                //
                // No semi-colons allowed in <blah> except when it is a
                // function definition e.g.
                //      $k[$j++]=function() {
                //          <code here with semicolons>
                //      }
                for (var i = 0; i < lines.length; i++) {
                    // Optional var declarations
                    while (/^var [^=]+=/.test(lines[i].code)) {
                        i++;
                    }
                    // Must be a string or number
                    if (!/^\$k\[\$j\+\+\]=['"].*['"];/.test(lines[i].code) &&
                        !/^\$k\[\$j\+\+\]=-?(\d+(\.\d*)?|\.\d+);/.test(lines[i].code)) {
                        break;
                    }
                    i++
                    // More optional var declarations
                    while (/^var [^=]+=/.test(lines[i].code)) {
                        i++;
                    }
                    // Must be a stack push
                    if (!/^\$k\[\$j\+\+\]=/.test(lines[i].code)) {
                        break;
                    }
                }

                // Does the top of the stack contain an ident?  And is the
                // next token a def?
                // If so, we can inline the dict creation with the assignment.
                var defsym = '';
                if (sp && st[sp-1].type == TYPE_IDENT && lex.peek() == 'def') {
                    defsym = st[--sp].expr;
                }

                // Static?
                if (i == lines.length) {
                    var code = '';
                    for (var i = 0; i < lines.length; i++) {
                        code += i ? ',' : '';

                        // Hoist optional var declarations
                        while (lines[i].code.indexOf('var ') == 0) {
                            emit(lines[i]);
                            i++;
                        }

                        // Extract the property name (or number)
                        var id = /^\$k\[\$j\+\+\]=(['"]?)([^'"]*)\1?;/.exec(lines[i].code);
                        if (!id) {
                            throw 'unknown identifier in: ' + lines[i].code;
                        }
                        i++;

                        // Hoist optional var declarations
                        while (lines[i].code.indexOf('var ') == 0) {
                            emit(lines[i]);
                            i++;
                        }

                        // Extract the value expression
                        var a = /^\$k\[\$j\+\+\]=([\s\S]+);(\/\*[^;]*\*\/)?$/
                                                        .exec(lines[i].code);

                        if (!id[1]) {
                            code += LP + id[2] + ',' + a[1] + RP;
                        } else {
                            code += LP + '"' + id[2] + '",' + a[1] + RP;
                        }
                    }
                    if (defsym) {
                        var id = mkid(defsym.slice(1,-1));
                        emit('$_.' + id + '=new Map(' + LP + code + RP + ');');
                        lex.next(); // consume the def
                        dict[id] = TYPE_DICTMAP;
                    } else {
                        var tid = tvar();
                        emit('var ' + tid + '=new Map(' + LP + code + RP + ');');
                        st[sp++] = { type:TYPE_DICTMAP, expr:tid, seq:++seq };
                    }
                } else {
                    // Build the object at runtime
                    if (sp && st[sp-1].type != TYPE_IDENT) {
                        ctxflush();
                    }
                    emit('$k[$j++]=Infinity;', lnbr);
                    for (var i = 0; i < lines.length; i++) {
                        emit(lines[i]);
                    }
                    if (defsym) {
                        var id = mkid(defsym.slice(1,-1));
                        emit('$_.' + id + '=$d();');
                        lex.next(); // consume the def
                        dict[id] = TYPE_DICTMAP;
                    } else {
                        var tid = tvar();
                        emit('var ' + tid + '=$d();');
                        st[sp++] = { type:TYPE_DICTMAP, expr:tid, seq:++seq };
                    }
                }
            }
            else if (/^[-0-9.]/.test(tkn)) {
                // Numeric literal
                // watch for radix numbers:
                //  n#????
                //  nn#????
                if (tkn.charAt(1) == '#')
                    var val = parseInt(tkn.substr(2), parseFloat(tkn));
                else if (tkn.charAt(2) == '#')
                    var val = parseInt(tkn.substr(3), parseFloat(tkn));
                else
                    var val = parseFloat(tkn);

                if (val % 1) {
                    st[sp++] = { type:TYPE_NUMLIT, expr:'' +val, seq:++seq };
                } else {
                    st[sp++] = { type:TYPE_INTLIT, expr:'' +val, seq:++seq };
                }
            } else if (tkn[0] == '(') {
                // String literal (the lexer transforms all string literal types to this form)
                st[sp++] = { type:TYPE_STRLIT,
                             expr:'"' + tkn.substr(1, tkn.length-2) + '"',
                             seq:++seq
                        };
            } else if (tkn[0] == '/' && tkn[1] == '/') {
                // Immediately evaluated name (IEN).
                var id = mkid(tkn.substr(2));
                if (bwippdefs[id]) {
                    st[sp++] = { type:bwippdefs[id], expr:'bwipp_' + id, seq:++seq };
                } else if (id in dict) {
                    st[sp++] = { type:dict[id], expr:'$_.' + id, seq:++seq };
                } else {
                    throw 'Unknown IEN ' + tkn + ' #' + lnbr;
                }
            } else if (tkn[0] == '/') {
                // Identifier name - use single quotes so the emitted code shows
                // the difference between a string literal and identifier.
                // This is where static analysis of postscript breaks.  We can't
                // determine whether this usage is a string literal or identifier.
                var id = tkn.substr(1); // do not mkid() since it might be a string-lit
                st[sp++] = { type:TYPE_IDENT, expr:'\'' + id + '\'', seq:++seq };
            } else if ($[tkn]) {
                $[tkn]();
            } else if (!allowunknown && !(tkn in dict) && PSOPS[tkn]) {
                throw 'POSTSCRIPT OPERATOR NOT IMPLEMENTED: ' + tkn + ' #' + lnbr;
            } else {
                let id = mkid(tkn);
                let type = dict[id];
                if (type === TYPE_FUNCREF) {
                    ctxflush();
                    if (bwippdefs[id]) {
                        emit('bwipp_' + id + '();');
                    } else {
                        emit('$_.' + id + '();');
                    }
                    lex.peek() == 'exec' && lex.next();
                } else if (tkn[0] == '$') {
                    if (tkn in bwippdefs) {
                        st[sp++] = { type:bwippdefs[tkn], expr:'bwipp_' + tkn.substr(1), seq:++seq };
                    } else {
                        throw 'Unknown global ' + tkn + ' #' + lnbr;
                    }
                } else {
                    // We cannot directly use a dictionary reference as a
                    // trace expression.  Intermediate variables must be used to
                    // emulate the run-time stack.  Consider the following bit
                    // of code:
                    //      /lastpairs thispairs /thispairs lastpairs def def
                    // (see qrcode).
                    //
                    // PostScript swap idiom.  And a temp-variable must be emitted
                    // to hold that initial reference to thispairs.
                    //
                    // This de-optimization caused massive unnecessary var
                    // assignments.  The optimize.mjs pass attempts to recover from it.
                    //
                    // Do not change this code.  Took hours of debugging to find
                    // this issue.  Optimize using peephole techniques instead.
                    let tid = tvar();
                    emit('var ' + tid + '=$_.' + id + ';');
                    st[sp++] = { type:dict[id] || TYPE_UNKNOWN, expr:tid, seq:++seq };
                }
                /*
                } else {
                    console.log('UNKNOWN IDENT: (' + tkn + ') #' + lnbr);
                    console.log(dict);
                    //dump(tkn);
                    throw 'UNKNOWN IDENT: (' + tkn + ') #' + lnbr;
                }
                */
            }
        }

        scopelvl--;
    } // compile()

    function codeblock(tkns) {
        // If we are defining global code, reset our global state.
        if (scopelvl == 0) {
            // First pass to define all identifers (in dict)
            allowunknown = true;
            tvarno       = 0;
            seq          = 0;
            branchno     = -1;      // disable for first pass
            perfflag     = false;   // disable for first pass
            loopstate    = [];

            // bwipjs special symbols
            dict.bwipjs_dontdraw = TYPE_BOOLEAN;
            dict.bwipp_dontdraw = TYPE_BOOLEAN;

            ctxpush(tkns.slice(0));     // clone the tokens array
            compile();
            ctxpop();

            allowunknown = false;       // second pass, disallow unknowns
            tvarno       = 0;
            seq          = 0;
            loopstate    = [];

            if (cfg.coverage) {
                branchno = 0;           // enable for the 2nd pass
            }
            if (cfg.perf) {
                perfflag = true;
            }
        }

        // Capture the current branch-number so they stay consecutive down
        // the flow of code.
        var thisbranchno = scopelvl && cfg.coverage ? branchno++ : 0;

        ctxpush(tkns);
        compile();
        var lines = ctxpop();

        // The top of the trace stack contains the name of this function
        var fname = sp && st[sp-1].type == TYPE_IDENT ? st[sp-1].expr : '';

        if (scopelvl == 0 && cfg.coverage && fname) {
            emit('$bwipjs_functions.push(' + fname + ');');
        }
        var code = 'function()' + LC + '\n';

        if (scopelvl == 0 && cfg.coverage && fname) {
            // We always emit the maximum value so we know how many
            // And place the entire function in a try-catch block so
            // we can save our coverage even when an error throws.
            code += 'var $bwipjs_coverage={' + branchno + ':1};\n' +
                    'try {\n';
        } else if (scopelvl && cfg.coverage) {
            code += '$bwipjs_coverage[' + (thisbranchno) + ']=1;\n';
        }
        if (cfg.metrics) {
            code += '$metrics.@FUNCTION@_' + lines[0].lnbr + '=($metrics.@FUNCTION@_' + lines[0].lnbr +
                    '||0)+1;\n';
            //code += '$metrics.@FUNCTION@_' + lines[0].lnbr + '=($metrics.$FUNCTION@_' + lines[0].lnbr +
            //      '||0n)-process.hrtime.bigint();\n';
        }
        for (var i = 0; i < lines.length; i++) {
            code += lines[i].code + '//#' + lines[i].lnbr + '\n';
        }
        if (cfg.metrics) {
            //code += '$metrics.@FUNCTION@_' + lines[0].lnbr + '+=process.hrtime.bigint();\n';
        }
        if (scopelvl == 0 && cfg.coverage && fname) {
            code += '}finally{\n' +
                    'typeof require==="function"&&' +
                    'require("fs").appendFileSync("coverage/' +
                    fname.substr(1, fname.length-2) + '",' +
                    'Object.keys($bwipjs_coverage).join("\\n")+"\\n",' +
                    '"binary");\n' +
                    '}\n';
            // Disable outside of global functions.
            branchno = -1;
        }
        code += RC;

        return code;
    }

    //
    // The postscript operators.  To understand these, you need a copy of
    // the language reference manual (google postscript red book).
    //

    // PSC compile-time debugging.  Insert debug into the postscript text
    // to trigger this.
    $.debug = function() {
        dump('debug');
        debugger;
    }

    // Run-time debugging
    $.stack = function() {
        emit('$stack();');
    }
    $.pstack = function() {
        emit('$stack();');
    }

    // Postscript does not have a return-out-of-exec-block operator but
    // we need one to return immediately from our custom renderers when
    // running the test framework (leaving the rendering information on
    // the stack for inspection).
    $.return = function() {
        emit('return;');
    }

    // BWIPP-specific operator
    $.ctxdef = function() {
        need(1);
        var exec = st[--sp];
        if (exec.type != TYPE_TOKENS) {
            throw 'ctxdef: expected exec block';
        }
        var lnbr = lex.lnbr;
        //ctxdef emit('if (!@FUNCTION@.__' + lnbr + '__) ' + LC);
        //ctxdef emit('$_ = Object.create($_);');
        ctxprep(exec);
        var lines = ctxexec(exec);
        for (var i = 0; i < lines.length; i++) {
            block.push({ code:lines[i].code, lnbr:lines[i].lnbr, seq:++seq });
        }
        var t = tvar();
    };

    // Create n dictionary on the stack.  Used only for user dict objects.
    $.dict = function() {
        // Ignore the size parameter.
        st[sp-1] = { type:TYPE_DICTMAP, expr:'new Map', seq:++seq };
    }
    /*
    $.dictobj = function() {
        // Ignore the size parameter.
        st[sp-1] = { type:TYPE_DICTOBJ, expr:'{}', seq:++seq };
    }
    */

    // Push the current dictionary.  We use this operator to create the
    // function-scoped $_ dictionary.
    $.begin = function() {
        need(1);
        emit('var $__ = $_;');
        emit('$_=Object.assign({},$_,@FUNCTION@.globals);');
        sp--;
    }
    // This is bwip-js specific and applies a Map of values to the currentdict
    $.splay = function() {
        emit('$splay();');
    }

    // Pop the current dictionary
    $.end = function() {
        ctxflush();
        //ctxdef emit('$_ = Object.getPrototypeOf($_);');
        emit('$_ = $__;');
    }

    // Push the current dictionary
    $.currentdict = function() {
        st[sp++] = { type:TYPE_DICTOBJ, expr:'$_', seq:++seq };
    };
    $.systemdict = function() {
        st[sp++] = { type:TYPE_DICTOBJ, expr:'$_', seq:++seq };
    }

    $.known = function() {
        need(2);
        var tid = tvar();
        var key = st[sp-1].expr;
        var ty = st[sp-2].type;
        emit('var ' + tid + '=$has(' + st[sp-2].expr + ',' + key + ');');
        st[sp-2] = { type:TYPE_BOOLEAN, expr:tid, seq:++seq };
        sp--;
    }

    // $error is defined in bwipp-hdr.js.
    $.handleerror = function() {
        emit('throw new Error($z($_.$error.get("errorname"))+": "+$z($_.$error.get("errorinfo")));');
    }
    $.quit = function() {
        // no-op : handlerror throws
    }
    // Newest versions of barcode.ps are using stop rather than handleerror.
    $.stop = function() {
        emit('throw Infinity;');
    }

    $.exec = function() {
        need(1);
        var exec = st[--sp];
        var type = exec.type;
        var expr = exec.expr;
        if (type == TYPE_FUNCREF) {
            ctxflush();
            if (expr in bwippdefs) {
                emit('bwipp_' + expr + '();');
            } else {
                emit(expr + '();');
            }
        } else if (type & TYPE_STRMASK) {
            throw new Error('eval of string-type not supported');
            //var tid = tvar();
            //emit('var ' + tid + '=$eval(' + expr + ');');       // EM-BED
            //st[sp++] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
        } else if (type == TYPE_IDENT) {
            ctxflush();
            if (!loopstate.length || loopstate[loopstate.length-1] == 'function') {
                emit('if(' + expr.slice(1,-1) + '()===true){return true;}');
            } else {
                emit('if(' + expr.slice(1,-1) + '()===true){break;}');
            }
        } else {
            // Most likely a function call.  If we guess wrong, we will
            // get a runtime error...
            ctxflush();
            if (!loopstate.length || loopstate[loopstate.length-1] == 'function') {
                emit('if(' + parens(expr) + '()===true){return true;}');
            } else {
                emit('if(' + parens(expr) + '()===true){break;}');
            }
        }
    }

    $.exch = function() {
        need(2);
        var t = st[sp-1];
        st[sp-1] = st[sp-2];
        st[sp-2] = t;
        st[sp-2].seq = ++seq;
        st[sp-1].seq = ++seq;

        if (lex.peek() == 'pop') {
            ctxflush();
        }
    }
    $.dup = function() {
        need(1);
        // Duplicate as-is literals and simple expressions (temp variables).
        // More complex expressions are assigned a temp variable that
        // replaces both source and dest expressions.
        if (st[sp-1].type & (TYPE_INTLIT|TYPE_NUMLIT|TYPE_STRLIT)) {
            //st[sp] = clone(st[sp-1]);
        } else if (st[sp-1].type === TYPE_IDENT) {
            //st[sp] = clone(st[sp-1]);
        } else if (/^_[\w$_]+$/.test(st[sp-1].expr)) {
            //st[sp] = clone(st[sp-1]);
        } else if (st[sp-1].type === TYPE_TOKENS) {
            var tid = tvar();
            emit('var ' + tid + '=' + codeblock(st[sp-1].tokens) + ';');
            st[sp-1] = { type:TYPE_FUNCREF, expr:tid, seq:st[sp-1].seq };
        } else {
            // Convert the expression to a temp-var.
            var tid = tvar();
            emit('var ' + tid + '=' + st[sp-1].expr + ';');
            st[sp-1].expr = tid;
        }
        st[sp] = clone(st[sp-1]);
        sp++;
    }
    $.copy = function() {
        if (!sp) {
            throw 'copy: stack underflow #' + lex.lnbr;
        }
        var arg = st[sp-1];
        if (arg.type & TYPE_INTLIT) {   // Value known at compile time
            sp--;
            var num = +arg.expr;
            need(num);
            var idx = sp - num;
            while (num-- > 0) {
                st[sp++] = clone(st[idx++]);
            }
        } else if (arg.type & TYPE_STRVAL) {
            need(2);
            var src = st[sp-2].expr;
            var dst = st[sp-1].expr;
            var tid = tvar();
            // Use the internal strcpy operator
            emit('var ' + tid + '=$strcpy(' + dst + ',' + src + ');'); // EMBED
            st[sp-2] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
            sp--;
        } else if (arg.type & TYPE_ARRAY) {
            need(2);
            var src = st[sp-2].expr;
            var dst = st[sp-1].expr;
            var tid = tvar();
            // Use the internal array-copy operator
            emit('var ' + tid + '=$arrcpy(' + dst + ',' + src + ');'); // EMBED
            st[sp-2] = { type:TYPE_ARRAY, expr:tid, seq:++seq };
            sp--;
        } else {
            // Terry used copy in some new way...
            dump('copy');
            throw 'copy: UNKNOWN PARAMETERS';
        }
    }
    $.roll = function() {
        need(2);
        var d = st[--sp];   // direction and iters
        var n = st[--sp];   // how many elts roll
        if (n.type == TYPE_INTLIT && d.type == TYPE_INTLIT && +n.expr <= sp) {
            n = +n.expr;
            d = +d.expr;
            need(n)
            if (d < 0) {
                var t = st.splice(sp-n, -d);
            } else {
                var t = st.splice(sp-n, n-d);
            }
            st.splice.apply(st, [sp-t.length, 0].concat(t));
            for (var i = sp-n; i < sp-1; i++) {
                st[i].seq = ++seq;
            }
        } else {
            ctxflush();
            emit('$r(' + n.expr + ',' + d.expr + ');');
        }
    }
    // BWIPP uses index two ways:
    //  <const> index
    //  counttomark <const> add index
    // FUTURE:  We should be able to optimize the counttomark case since
    //          we can "see" what was pushed onto the stack X before the
    //          mark.  Eliminating the counttomark would be a significant
    //          runtime win.
    //          The only potential gotcha is if the code moves the mark on
    //          the stack, but all uses appear to leave the mark in situ.
    $.index = function() {
        need(1);
        var v = st[--sp];
        if (v.type == TYPE_INTLIT) {
            var index = +v.expr + 1;    // index is zero offset
            need(index);
            if (st[sp-index].type == TYPE_TOKENS) {
                var tid = tvar();
                emit('var ' + tid + '=' + codeblock(st[sp-index].tokens) + ';');
                st[sp-index] = { type:TYPE_FUNCREF, expr:tid, seq:st[sp-index].seq };
            }
            st[sp] = clone(st[sp - index]);
            sp++;
        } else {
            var tid = tvar();
            ctxflush();
            emit('var ' + tid + '=$k[$j-1-' + parens(v.expr) + '];');
            st[sp++] = { type:TYPE_UNKNOWN, expr:tid, seq:++seq };
        }
    }

    // Convert to integer
    $.cvi = function() {
        need(1);
        if (st[sp-1].type & TYPE_NUMMASK) {
            let expr = st[sp-1].expr;
            // Avoid emitting ~~$(ceil,flr,pow)( ... )
            if (!/^\$(?:ceil|flr|pow)/.test(expr)) {
                // Round towards zero
                st[sp-1] = { type:TYPE_INTVAL, expr:'~~' + parens(expr), seq:++seq };
            }
        } else {
            // javascript's string-to-number functionality does not perfectly
            // sync with postscript's.  Specifically, nul-chars on the end of
            // a string are ignored by postscript, but cause js to return a zero
            // result.
            st[sp-1] = { type:TYPE_INTVAL, expr:'$cvi(' + st[sp-1].expr + ')',
                         seq:++seq };
        }
    }

    // Convert to string
    $.cvlit = function() {
        need(1);
        if (/^[\w_$.\[\]]+$/.test(st[sp-1].expr)) {
            st[sp-1] = { type:TYPE_STRVAL, expr:'""+' + st[sp-1].expr,
                         seq:++seq };
        } else {
            st[sp-1] = { type:TYPE_STRVAL, expr:'""+' + parens(st[sp-1].expr),
                         seq:++seq };
        }
    }

    // Convert to name (no-op)
    $.cvn = function() {
    }

    // Convert to string
    //      any string cvs string-view
    $.cvs = function() {
        need(2);
        var str = st[--sp].expr;
        var any = st[--sp].expr;
        st[sp++] = { type:TYPE_STRVAL, expr:'$cvs('+str+','+any+')', seq:++seq }; // EMBED
    }

    // Convert to executable
    // This takes an array of ...args and last element of type function,
    // binds the function to the ...args, and returns the bound function.
    $.cvx = function() {
        need(1);
        if (st[sp-1].type != TYPE_ARRAY) {
            dump('cvx');
            throw 'cvx: expected array';
        }
        var arr = st[sp-1].expr;
        st[sp-1] = { type:TYPE_FUNCREF, expr:'$cvx(' + arr + ')', seq:++seq }; // EMBED
    }

    // Convert to real
    $.cvr = function() {
        need(1);
        var expr = st[sp-1].expr;
        st[sp-1] = { type:TYPE_NUMVAL, expr:'+' + parens(expr), seq:++seq };
    }

    // Convert with radix to string
    $.cvrs = function() {
        need(3);
        var val = st[sp-3].expr;
        var rdx = st[sp-2].expr;    // radix
        var dst = st[sp-1].expr;
        var tid = tvar();
        emit('var ' + tid +
                    '=$cvrs(' + dst + ',' + val + ',' + rdx + ');'); // EMBED
        st[sp-3] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
        sp-=2;
    }

    $.type = function() {
        need(1);
        var tid = tvar();
        emit('var ' + tid + '=$type(' + st[--sp].expr + ');');      // EMBED
        st[sp++] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
    }

    $.true = function() {
        st[sp++] = { type:TYPE_BOOLEAN, expr:'true', seq:++seq };
    }
    $.false = function() {
        st[sp++] = { type:TYPE_BOOLEAN, expr:'false', seq:++seq };
    }
    $.null = function() {
        st[sp++] = { type:TYPE_NULL, expr:'null', seq:++seq };
    }

    $.pop = function() {
        if (sp > 0) {
            sp--;
        } else if (block.length) {
            // We often emit consecutive $j--.  Merge them.
            if (block[block.length-1].code == '$j--;') {
                block[block.length-1].code = '$j-=2;';
            } else if (/^\$j-=\d+;/.test(block[block.length-1].code)) {
                var inc = +(/\d+/.exec(block[block.length-1].code)[0]) + 1;
                block[block.length-1].code = '$j-=' + inc + ';';
            } else {
                emit('$j--;');
            }
        } else {
            emit('$j--;');
        }
    }

    $.length = function() {
        need(1);
        st[sp-1].expr += '.length';
        st[sp-1].type  = TYPE_INTVAL;
        st[sp-1].seq   = ++seq;
    }

    $.bind = function() {
        var tkns = st[--sp].tokens;
        if (!tkns) {
            dump('bind');
            throw 'bind: exec not tokens';
        }
        //console.log('bind', tkns[0].lnbr, tkns[tkns.length-1].lnbr);

        st[sp++] = { type:TYPE_FUNCTION, expr:codeblock(tkns), seq:++seq };
    }

    $.readonly = function() {
        // no-op
    }

    $.def = function() {
        //dump('def');
        need(2);

        // Watch for executable blocks of tokens and auto-convert to function
        if (st[sp-1].type == TYPE_TOKENS) {
            //ctxflush();
            $.bind();
        }

        var t1 = st[sp-1].type;
        var t2 = st[sp-2].type;
        var id = mkid(st[sp-2].expr.replace(/^['"](.*)["']$/, '$1'));
        if (!id) {
            dump('def');
            throw 'def: empty ident';
        }

        // Convert literals to their value counter-parts
        if (t1 & (TYPE_STRLIT|TYPE_INTLIT|TYPE_NUMLIT)) {
            t1 <<= 1;
        }

        // And convert string value idents that are actually literals
        if (t2 != TYPE_IDENT && /^['"]([^\\"]|\\.)*['"]$/.test(id)) {
            t2 = TYPE_STRLIT;
        }

        if (t2 == TYPE_STRLIT || t2 == TYPE_IDENT) {
            if (scopelvl == 0) {
                if (t1 == TYPE_FUNCTION) {
                    var jsid = 'bwipp_' + id;
                    var code = st[sp-1].expr.replace(/^\s*function\s*\(\)/, '()')
                                            .replace(/@FUNCTION@/g, jsid) + '//' + jsid;
                    emit('function ' + jsid + code);
                    bwippdefs[id] = TYPE_FUNCREF;

                    // Each time we emit a global function, reset the dictionary
                    dict = { ...bwippdefs, ...bwippunknowns };
                } else {
                    emit('$_.' + id + '=' + st[sp-1].expr + ';');
                    dict[id] = t1;
                }
            } else {
                emit('$_.' + id + '=' + st[sp-1].expr + ';');
                if (t1 == TYPE_FUNCTION) {
                    t1 = TYPE_FUNCREF;
                }
                dict[id] = t1;
            }
        } else {
            if (/^_\w+$/.test(id)) {
                // We are dealing with a temporary variable
                emit('$_[' + id + ']=' + st[sp-1].expr + ';');
            } else if (/^bwipp_/.test(id)) {
                emit(id + '=' + st[sp-1].expr + ';');
            } else {
                throw '#' + lex.lnbr + ': def: unknown indirect reference';
            }
        }
        sp-=2;
    }
    $.undef = function() {
        need(2);
        var name = st[--sp];
        var dict = st[--sp];
        ctxflush();
        emit('$del(' + dict.expr + ',' + name.expr + ')');
        /*
        if (name.type === TYPE_STRLIT) {
            let id = name.expr.slice(1, -1);
            if (/^[a-zA-Z_]\w*$/.test(id)) {
                emit('delete ' + dict.expr + '.' + id + ';');
            } else {
                emit('delete ' + dict.expr + '[' + name.expr + '];');
            }
        } else if (name.type === TYPE_IDENT) {
            let id = name.expr.slice(1, -1);
            emit('delete ' + dict.expr + '.' + id + ';');
        } else {
            emit('delete ' + dict.expr + '[' + name.expr + '];');
        }
        */
    }

    // load looks up key the same way the interpreter looks up names that it
    // encounters during execution. However, load always pushes the associated
    // value on the operand stack; it never executes the value.
    $.load = function() {
        need(1);
        let type = st[sp-1].type;
        let expr = st[sp-1].expr;
        if (bwippdefs[expr] === TYPE_FUNCREF) {
            st[sp-1] = { type:type, expr:expr, seq:++seq };
        } else if (type === TYPE_IDENT) {
            let id = mkid(expr.slice(1,-1));
            st[sp-1] = { type:dict[id] || TYPE_UNKNOWN, expr:'$_.' + id, seq:++seq };
        } else {
            var tid = tvar();
            emit('var ' + tid + '=$_[' + expr + '];');
            st[sp-1] = { type:TYPE_UNKNOWN, expr:tid, seq:++seq };
        }
    }

    $.get = function() {
        need(2);
        var tid = tvar();
        var key = st[sp-1].expr;
        var ty = st[sp-2].type;
        // Arrays may be views of arrays.
        // Strings may by uint8-strings or strings.
        /*
        // If the key is a string literal, it must be a Map
        if (st[sp-1].type & TYPE_STRLIT) {
            emit('var ' + tid + '=' + st[sp-2].expr + '.get(' + key + ');');
            console.log(key);
            st[sp-2] = { type:TYPE_UNKNOWN, expr:tid, seq:++seq };
        } else {
        */
            emit('var ' + tid + '=$get(' + st[sp-2].expr + ',' + key + ');');
            if (st[sp-2].type & TYPE_STRMASK) {
                st[sp-2] = { type:TYPE_INTVAL, expr:tid, seq:++seq };
            } else {
                st[sp-2] = { type:TYPE_UNKNOWN, expr:tid, seq:++seq };
            }
        //}
        sp--;
    }

    $.put = function() {
        need(3);
        var val = st[sp-1].expr;
        var id = st[sp-2].expr;

        // Arrays may be views.
        // Strings may be uint8-strings or strings (the latter will throw).
        emit('$put(' + st[sp-3].expr + ',' + id + ',' + val + ');');
        sp-=3;
    }

    $.eq = function() {
        binbool('==', '$eq');
    }
    $.ne = function() {
        binbool('!=', '$ne');
    }
    $.lt = function() {
        binbool('<', '$lt');
    }
    $.le = function() {
        binbool('<=', '$le');
    }
    $.gt = function() {
        binbool('>', '$gt');
    }
    $.ge = function() {
        binbool('>=', '$ge');
    }

    $.and = function() {
        need(2);
        if ((st[sp-1].type & TYPE_NUMMASK) || (st[sp-2].type & TYPE_NUMMASK)) {
            binarith('&');
        } else if ((st[sp-1].type & TYPE_BOOLEAN) || (st[sp-2].type & TYPE_BOOLEAN)) {
            binbool('&&', '$an');
        } else {
            st[sp-2].expr = '$an(' + st[sp-2].expr + ',' + st[sp-1].expr + ')';
            st[sp-2].type = TYPE_UNKNOWN;   // boolean or number
            sp-=1;
        }
    }
    $.or = function() {
        need(2);
        if ((st[sp-1].type & TYPE_NUMMASK) || (st[sp-2].type & TYPE_NUMMASK)) {
            binarith('|');
        } else if ((st[sp-1].type & TYPE_BOOLEAN) || (st[sp-2].type & TYPE_BOOLEAN)) {
            binbool('||', '$or');
        } else {
            st[sp-2].expr = '$or(' + st[sp-2].expr + ',' + st[sp-1].expr + ')';
            st[sp-2].type = TYPE_UNKNOWN;   // boolean or number
            sp-=1;
        }
    }
    $.xor = function() {
        need(2);
        if ((st[sp-1].type & TYPE_NUMMASK) || (st[sp-2].type & TYPE_NUMMASK)) {
            binarith('^');
        } else if ((st[sp-1].type & TYPE_BOOLEAN) || (st[sp-2].type & TYPE_BOOLEAN)) {
            // logical xor is simply a != b
            binbool('!=', '$xo');
        } else {
            // JavaScript does not have logical xor
            st[sp-2].expr = '$xo(' + st[sp-2].expr + ',' + st[sp-1].expr + ')';
            st[sp-2].type = TYPE_UNKNOWN;   // boolean or number
            sp-=1;
        }
    }
    $.not = function() {
        need(1);

        // Parenthesize complicated expressions.
        var t = st[sp-1].type;

        // Numeric?
        if (t & TYPE_NUMMASK) {
            st[sp-1].expr = '~' + parens(st[sp-1].expr);
        // Boolean?
        } else if (t & TYPE_BOOLEAN) {
            st[sp-1].expr = '!' + parens(st[sp-1].expr);
        } else {
            st[sp-1].expr = '$nt(' + st[sp-1].expr + ')';
        }
        st[sp-1].seq = ++seq;
    }

    $.if = function() {
        need(2);
        var expr = st[sp-2].expr;
        var exec = st[sp-1];
        sp-=2;

        // odd-ball case
        //  blah {exch} if
        //
        // That needs to be rewritten so that we do not flush state o/w we
        // cannot trace properly.
        if (sp >= 2 && exec.tokens && exec.tokens.length == 1 &&
                exec.tokens[0].token == 'exch') {
            // Convert the top two expressions to var-refs
            if (!/^_\w+$/.test(st[sp-1].expr)) {
                var tid = tvar();
                emit('var ' + tid + '=' + st[sp-1].expr + ';');
                st[sp-1].expr = tid;
            }
            if (!/^_\w+$/.test(st[sp-2].expr)) {
                var tid = tvar();
                emit('var ' + tid + '=' + st[sp-2].expr + ';');
                st[sp-2].expr = tid;
            }
            emit('if(' + expr + ')' + LC);
            emit('var _=' + st[sp-1].expr + ';');
            emit(st[sp-1].expr + '=' + st[sp-2].expr + ';');
            emit(st[sp-2].expr + '=_;');
            emit(RC);
            return;
        }

        ctxflush();
        ctxprep(exec);
        emit('if(' + expr + ')' + LC);
        newbranch();
        append(ctxexec(exec));
        emit(RC);
    }

    $.ifelse = function() {
        need(3);
        var expr  = st[sp-3].expr;
        var texec = st[sp-2];   // true-branch exec
        var fexec = st[sp-1];   // false-branch exec
        sp-=3;

        // One odd-ball case in BWIPP (inside an array constructor):
        //
        //      blah {{0}} {{1}} ifelse repeat
        //
        // This completely breaks our trace model.  That code is pushing
        // an Immediately Executable object onto the stack at run-time,
        // which the model does not handle.  Since this is the only
        // use-case for this construct (it appears numerous times in the
        // code but is always the same), we will do a one-off fix for it.
        //
        // Future note: if this scheme appears in a different form, the
        // general solution is to create anonymous function objects for
        // the "inside" executable blocks and have `repeat` or whatever
        // target construct invoke the function similar to an Immediately
        // Executable Name.
        if (texec.tokens && texec.tokens.length == 3 &&
                fexec.tokens && fexec.tokens.length == 3 &&
                texec.tokens[0].token == LC && fexec.tokens[0].token == LC &&
                /^\d+$/.test(texec.tokens[1].token) &&
                /^\d+$/.test(fexec.tokens[1].token)) {
            var tid = tvar();
            emit('var ' + tid + '=' + parens(expr) +
                        '?' + texec.tokens[1].token +
                        ':' + fexec.tokens[1].token + ';');
            st[sp++] = { type:TYPE_PRECALC, expr:'$k[$j++]=' + tid, seq:++seq };
            // We've done enough damage here...
            return;
        }

        // Next edge case is similar to the above:
        //      blah {5} {1} ifelse
        //
        // That needs to be rewritten so that we do not flush state o/w we
        // cannot trace properly.
        if (texec.tokens && texec.tokens.length == 1 &&
                fexec.tokens && fexec.tokens.length == 1 &&
                /^\d+$/.test(texec.tokens[0].token) &&
                /^\d+$/.test(fexec.tokens[0].token)) {
            var tid = tvar();
            emit('var ' + tid + '=' + parens(expr) +
                        '?' + texec.tokens[0].token +
                        ':' + fexec.tokens[0].token + ';');
            st[sp++] = { type:TYPE_INTVAL, expr:tid, seq:++seq };
            return;
        }

        // Next edge case is similar to previous:
        //      blah {ident} {ident} ifelse
        if (texec.tokens && texec.tokens.length == 1 &&
                fexec.tokens && fexec.tokens.length == 1 &&
                /^\w+$/.test(texec.tokens[0].token) &&
                /^\w+$/.test(fexec.tokens[0].token)) {
            var ttype = dict[texec.tokens[0].token] || TYPE_IDENT;
            var ftype = dict[fexec.tokens[0].token] || TYPE_IDENT;
            if (ttype === ftype && (ttype & (TYPE_INTMASK|TYPE_NUMMASK|TYPE_STRMASK))) {
                var tid = tvar();
                emit('var ' + tid + '=' + parens(expr) +
                            '?$_.' + texec.tokens[0].token +
                            ':$_.' + fexec.tokens[0].token + ';');
                st[sp++] = { type:ttype/*==ftype*/, expr:tid, seq:++seq };
                return;
            }
        }

        ctxflush();
        ctxprep(texec);
        var tlines = ctxexec(texec);
        ctxprep(fexec);
        var flines = ctxexec(fexec);

        emit('if(' + expr + ')' + LC);
        newbranch();
        append(tlines);
        emit(RC + 'else' + LC);
        newbranch();
        append(flines);
        emit(RC);
    }
    $.forall = function() {
        need(2);
        var o    = st[sp-2];
        var exec = st[sp-1];
        sp-=2;

        // azteccode forall loop breaks this...  We need better handling of
        // if/ifelse loops where we do not flush context on exit from the
        // blocks.  It messes up the depth counts when the branch pushes
        // a value that is to be consumed after exit from the branch.
        //if (!(o.type & (TYPE_ARRAY|TYPE_STRMASK|TYPE_DICTMAP)) && exec.tokens) {
        //  // Trace execution to determine what the loop expects.
        //  // ctxpush() empties the array - pass a clone.
        //  ctxflush();
        //  ctxpush(exec.tokens.slice(0));
        //  compile();
        //  ctxpop();

        //  if (ndeep == 1) {
        //      // Safer than STRTYP since we don't know elt type.
        //      o.type = TYPE_ARRAY;
        //  } else if (ndeep == 2) {
        //      o.type = TYPE_DICTMAP;
        //  }
        //}
        if (o.type & (TYPE_ARRAY|TYPE_STRMASK)) {
            var tid = tvar();
            var len = tvar();
            var val = tvar();

            loopstate.push('loop');
            ctxflush();
            ctxprep(exec);
            emit('for(var ' + tid + '=0,' + len + '=' + o.expr + '.length;' +
                    tid + '<' + len + ';' + tid + '++)' + LC);
            newbranch();
            emit('var ' + val + '=$get(' + o.expr + ',' + tid + ');');
            st[sp++] = { type:(o.type&TYPE_ARRAY) ? TYPE_UNKNOWN : TYPE_INTVAL,
                         expr:val, seq:++seq };
            append(ctxexec(exec));
            emit(RC);
        } else if (o.type & (TYPE_DICTMAP|TYPE_DICTOBJ)) {
            var tid = tvar();
            var val = tvar();
            if (o.expr[0] == '_') {
                var obj = o.expr;
            } else {
                var obj = tvar();
            }

            loopstate.push('loop');
            ctxflush();
            ctxprep(exec);
            if (obj != o.expr) {
                emit('var ' + obj + '=' + o.expr + ';');
            }
            if (o.type == TYPE_DICTMAP) {
                var idx = tvar();
                var iter = tvar();
                var size = tvar();
                emit('for(var ' + size + '=' + obj + '.size,' + iter + '=' + obj + '.keys(),' +
                        idx + '=0;' + idx + '<' + size + ';' + idx + '++)' + LC);
                newbranch();
                emit('var ' + tid + '=' + iter + '.next().value;');
                emit('var ' + val + '=' + obj + '.get(' + tid + ');');
                st[sp++] = { type:TYPE_UNKNOWN, expr:tid, seq:++seq };
                st[sp++] = { type:TYPE_UNKNOWN, expr:val, seq:++seq };
            } else {
                emit('for(var ' + tid + ' in ' + obj + ')' + LC);
                newbranch();
                emit('var ' + val + '=' + obj + '[' + tid + '];');
                st[sp++] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
                st[sp++] = { type:TYPE_UNKNOWN, expr:val, seq:++seq };
            }
            append(ctxexec(exec));
            emit(RC);
        } else {
            loopstate.push('function');
            ctxflush();

            // Most forall's in BWIPP where we cannot determine object type
            // at compile time use empty exec blocks to push an array's
            // objects onto the stack.  Optimize for that case.
            if (exec.type == TYPE_TOKENS && exec.tokens.length == 0) {
                emit('$forall(' + o.expr + ');');
            } else {
                // Fallback to the slow path - which incurs a function call
                // per iteration.
                ctxprep(exec);

                emit('$forall(' + o.expr + ',function()' + LC);
                newbranch();
                append(ctxexec(exec));
                emit(RC + ');');
            }
        }
        loopstate.pop();
    }
    $.for = function() {
        if (sp < 1) {
            dump('for');
            throw '#' + lex.lnbr + ': for: insufficient stack';
        }

        if (sp < 4) {
            // Flush context to the stack
            var exec = st[--sp];
            ctxflush();

            var tinc = TYPE_UNKNOWN;
            var tlim = TYPE_UNKNOWN;
            var vini = tvar();
            var vinc = tvar();
            var vlim = tvar();
            var elim = '$k[$j+2]';
            var einc = '$k[$j+1]';
            var eini = '$k[$j]';
            emit('if ($j<3) throw "--stack-underflow--";');
            emit('$j-=3;');
        } else {
            var eini = st[sp-4].expr;
            var tinc = st[sp-3].type;
            var einc = st[sp-3].expr;
            var tlim = st[sp-2].type;
            var elim = st[sp-2].expr;
            var exec = st[sp-1];
            sp-=4;
            ctxflush();

            // If the limit is constant, we don't need an extra limit variable.
            var vlim = tlim != TYPE_INTLIT ? tvar() : elim;
        }

        // internal loop variable
        var tid = tvar();

        // If increment is not known at compile time, then emit the slow path
        if (tinc != TYPE_INTLIT) {
            var vinc = tvar();
            emit('for(var ' + tid + '=' + eini + ',' + vinc + '=' + einc +
                (tlim != TYPE_INTLIT ? ',' + vlim + '=' + elim : '') + ';' +
                vinc + '<0?' + tid + '>=' + vlim + ':' + tid + '<=' + vlim +
                ';' + tid + '+=' + vinc + ')' + LC);
        } else if (+einc < 0) {
            emit('for(var ' + tid + '=' + eini +
                (tlim != TYPE_INTLIT ? ',' + vlim + '=' + elim : '') + ';' +
                tid + '>=' + vlim + ';' + tid + '-=' + (-einc) + ')' + LC);
        } else {
            emit('for(var ' + tid + '=' + eini +
                (tlim != TYPE_INTLIT ? ',' + vlim + '=' + elim : '') + ';' +
                tid + '<=' + vlim + ';' + tid + '+=' + einc + ')' + LC);
        }

        loopstate.push('loop');
        ctxprep(exec);
        st[sp++] = { type:TYPE_INTVAL, expr:tid, seq:++seq };
        newbranch();
        append(ctxexec(exec));
        emit(RC);
        loopstate.pop();
    }
    $.repeat = function() {
        need(2);
        var tid = tvar();
        var expr = st[sp-2].expr;
        var tlim = st[sp-2].type;
        var exec = st[sp-1];
        sp-=2;

        loopstate.push('loop');
        ctxflush();
        if (tlim == TYPE_INTLIT) {
            emit('for(var ' + tid + '=0;' +
                        tid + '<' + expr + ';' + tid + '++)' + LC);
        } else {
            var lim = tvar();
            emit('for(var ' + tid + '=0,' + lim + '=' + expr + ';' +
                        tid + '<' + lim + ';' + tid + '++)' + LC);
        }
        ctxprep(exec);
        newbranch();
        append(ctxexec(exec));
        emit(RC);
        loopstate.pop();
    }
    $.loop = function() {
        need(1);
        var exec = st[sp-1];
        sp-=1;

        loopstate.push('loop');
        ctxflush();
        ctxprep(exec);
        emit('for(;;)' + LC);
        newbranch();
        append(ctxexec(exec));
        emit(RC);
        loopstate.pop();
    }
    $.exit = function() {
        ctxflush();
        if (!loopstate.length || loopstate[loopstate.length-1] == 'function') {
            emit('return true;');
        } else {
            emit('break;');
        }
    }

    // Behaves identically to exec, but with a try/catch wrapper
    $.stopped = function() {
        need(1);
        var exec = st[--sp];

        ctxflush();
        ctxprep(exec);
        emit('try{');
        append(ctxexec(exec));
        emit('$k[$j++]=false}catch(e){$k[$j++]=true}');
    }
    $.mark = function() {
        ctxflush();
        emit('$k[$j++]=Infinity;');
    }
    $.counttomark = function() {
        var tid = tvar();
        //ctxflush();
        if (sp) {
            emit('var ' + tid + '=$counttomark()+' + sp + ';');     // EMBED
        } else {
            emit('var ' + tid + '=$counttomark();');                // EMBED
        }
        st[sp++] = { type:TYPE_INTVAL, expr:tid, seq:++seq };
    }
    $.cleartomark = function() {
        ctxflush();
        emit('$cleartomark();');        // EMBED
    }
    $.clear = function() {
        ctxflush();
        emit('$j=0;');
    }

    $.mul = function() {
        binarith('*');
    }
    $.div = function() {
        binarith('/');
    }
    $.mod = function() {
        binarith('%');
    }
    $.add = function() {
        binarith('+');
    }
    $.sub = function() {
        binarith('-');
    }
    // integer division
    $.idiv = function() {
        need(2);
        var t1 = st[sp-1].type;
        var t2 = st[sp-2].type;

        // idiv takes the floor towards 0 which is the effect of ~~ in JavaScript.
        // Math.floor() takes the floor towards the smallest integer.
        //  ps> -5 2 idiv --> -2
        //  js> ~~(-5 / 2) --> -2
        //  js> Math.floor(-5 / 2) --> -3
        if ((t1 & (TYPE_INTLIT|TYPE_NUMLIT)) && (t2 & (TYPE_INTLIT|TYPE_NUMLIT))) {
            st[sp-2].expr = '' + ~~(+st[sp-2].expr / +st[sp-1].expr);
            st[sp-2].type = TYPE_INTLIT;
        } else {
            st[sp-2].expr = '~~(' + parens(st[sp-2].expr) + '/' +
                                    parens(st[sp-1].expr) + ')';
            st[sp-2].type = TYPE_INTVAL;
        }
        st[sp-2].seq = ++seq;
        sp--;
    }
    $.exp = function() {
        need(2);
        var expo = st[--sp].expr;
        var base = st[--sp].expr;
        st[sp++] = { type:TYPE_NUMVAL,
                     expr:'$pow(' + base + ',' + expo + ')',
                     seq:++seq };
    }
    $.ln = function() {
        need(1);
        st[sp-1] = { type:TYPE_NUMVAL,
                     expr:'$log(' + st[sp-1].expr + ')',
                     seq:++seq };
    }
    $.log = function() {
        need(1);
        st[sp-1] = { type:TYPE_NUMVAL,
                     expr:'$log(' + parens(st[sp-1].expr) + '/Math.LN10)',
                     seq:++seq };
    }
    $.neg = function() {
        need(1);

        // Simple expression?
        st[sp-1].expr = '-' + parens(st[sp-1].expr);
        st[sp-1].type = st[sp-1].type || TYPE_NUMVAL;
        st[sp-1].seq = ++seq;
    }
    $.abs = function() {
        need(1);
        st[sp-1].expr = '$abs(' + st[sp-1].expr + ')';
        st[sp-1].type = st[sp-1].type || TYPE_NUMVAL;
        st[sp-1].seq  = ++seq;
    }
    $.round = function() {
        need(1);
        st[sp-1] = { type:TYPE_INTVAL, expr:'$rnd(' +st[sp-1].expr+ ')',
                    seq:++seq };
    }
    $.floor = function() {
        need(1);
        st[sp-1] = { type:TYPE_INTVAL, expr:'$flr(' +st[sp-1].expr+ ')',
                    seq:++seq };
    }
    $.ceiling = function() {
        need(1);
        st[sp-1] = { type:TYPE_INTVAL, expr:'$ceil(' +st[sp-1].expr+ ')',
                    seq:++seq };
    }
    $.sqrt = function() {
        need(1);
        st[sp-1] = { type:TYPE_NUMVAL, expr:'$sqrt(' +st[sp-1].expr+ ')',
                    seq:++seq };
    }
    $.bitshift = function() {
        need(2);
        var sft = st[--sp];
        var val = st[--sp].expr;
        if (st[sp].type == TYPE_INTLIT && sft.type == TYPE_INTLIT) {
            var bits = +sft.expr;
            if (bits < 0) {
                st[sp++] = { type:TYPE_INTVAL, expr:Math.floor(+val / Math.pow(2, -bits)), seq:++seq };
            } else {
                st[sp++] = { type:TYPE_INTVAL, expr:+val * Math.pow(2, bits), seq:++seq };
            }
        } else if (sft.type == TYPE_INTLIT) {
            var bits = +sft.expr;
            // 64-bit shifts
            if (bits < 0) {
                st[sp++] = { type:TYPE_INTVAL, expr:'$flr(' + parens(val) + '/' + Math.pow(2, -bits) + ')',
                             seq:++seq };
            } else {
                st[sp++] = { type:TYPE_INTVAL, expr:parens(val) + '*' + Math.pow(2, bits),
                             seq:++seq };
            }
        } else {
            st[sp++] = { type:TYPE_INTVAL, expr:'$bs(' + val + ',' + sft.expr + ')', seq:++seq };
        }
    }


    $.array = function() {
        need(1);
        var tid = tvar();
        emit('var ' + tid + '=$a(' + st[sp-1].expr + ');');
        st[sp-1] = { type:TYPE_ARRAY, expr:tid, seq:++seq };
    }

    $.aload = function() {
        need(1);

        // All uses of aload by BWIPP discard the array left on the top
        // of the stack after aload completes.  Therefore, our implementation
        // of aload does not push the array.  And we must check that BWIPP
        // is indeed popping after aloading.
        if (lex.peek() != 'pop') {
            throw '#' + lnbr + ': aload without pop';
        }

        // aload works on packedarrays
        if (st[sp-1].type == TYPE_TOKENS) {
            $.bind();
            lex.next(); // discard pop
            return;     // leave the function on the stack
        }

        var lnbr = lex.lnbr;
        var expr = st[--sp].expr;
        if (!expr) {
            sp++;
            dump('aload');
            throw 'aload: invalid expression';
        }

        // We are about to modify stack in an unknown way, sync state
        ctxflush();
        emit('$aload(' + expr + ');');      // EMBED

        // Discard the pop
        lex.next();
    }
    $.astore = function() {
        need(1);    // just the array
        var expr = st[--sp].expr;

        // We are about to modify stack in an unknown way, sync state
        ctxflush();
        emit('$astore(' + expr + ');');     // EMBED
    }

    $.string = function() {
        need(1);
        var tid = tvar();
        emit('var ' + tid + '=$s(' + st[sp-1].expr + ');'); // EMBED
        st[sp-1] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
    }

    $.getinterval = function() {
        need(3);
        var typ = st[sp-1].type;
        var len = st[--sp].expr;
        var off = st[--sp].expr;
        var src = st[--sp].expr;
        var tid = tvar();
        emit(`var ${tid}=$geti(${src},${off},${len});`);    // EMBED
        if (typ & TYPE_STRMASK) {
            st[sp++] = { type:TYPE_STRVAL, expr:tid, seq:++seq };
        } else {
            st[sp++] = { type:TYPE_ARRAY, expr:tid, seq:++seq };
        }
    }
    $.putinterval = function() {
        need(3);
        var src = st[--sp].expr;
        var off = st[--sp].expr;
        var dst = st[--sp].expr;
        emit('$puti(' + dst + ',' + off + ',' + src + ');');    // EMBED
    }

    // string seek anchorsearch post seek true % if found
    //                          string false   % if not found
    $.anchorsearch = function() {
        need(2);
        var sub = st[--sp].expr;
        var src = st[--sp].expr;

        // The stack state is unknown after anchorsearch returns.
        ctxflush();
        emit(`$anchorsearch(${src},${sub});`);      // EMBED
    };

    // haystack needle search post match pre true
    //                        haystack false
    $.search = function() {
        need(2);
        var sub = st[--sp].expr;
        var src = st[--sp].expr;

        // The stack state is unknown after search returns.
        ctxflush();
        emit(`$search(${src},${sub});`);        // EMBED
    }

    $.gsave = function() {
        emit('$$.save();');                             // CANVAS
    }
    $.grestore = function() {
        emit('$$.restore();');                          // CANVAS
    }

    // Custom interfaces to round scale up/down to integer values so we
    // have no rounding error.
    $.floorscale = function() {
        emit('$$.floorscale();');
    }
    $.ceilscale = function() {
        emit('$$.ceilscale();');
    }
    $.roundscale = function() {
        emit('$$.roundscale();');
    }

    $.currentpoint = function() {
        var tid = tvar();
        emit('var ' + tid + '=$$.currpos();');          // CANVAS
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.x', seq:++seq };
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.y', seq:++seq };
    }

    $.rotate = function() {
        need(1);
        var a = st[sp-1].expr;
        sp-=1;
        emit('$$.rotate(' + a + ');');                  // CANVAS
    }
    $.scale = function() {
        need(2);
        var x = st[sp-2].expr;
        var y = st[sp-1].expr;
        sp-=2;
        emit('$$.scale(' + x + ',' + y + ');');         // CANVAS
    }

    $.translate = function() {
        need(2);
        var x = st[sp-2].expr;
        var y = st[sp-1].expr;
        sp-=2;
        emit('$$.translate(' + x + ',' + y + ');');     // CANVAS
    }

    // dtransform is a no-op but ... BWIPP uses the 3-operand form
    $.dtransform = function() {
        need(3);
        sp--;
    }

    $.selectfont = function() {
        need(2);
        var x = st[--sp].expr;
        var f = st[--sp].expr;
        emit('$$.selectfont(' + f + ',' + x + ');');    // CANVAS
    }
    /*
    $.currentfont = function() {
        var tid = tvar();
        emit('var ' + tid + '=$$.currentfont();');         // XCANVAS
        st[sp++] = { type:TYPE_DICTMAP, expr:tid, seq:++seq };
    }
    $.findfont = function() {
        need(1);
        var f = st[sp-1].expr;
        sp-=1;
        var tid = tvar();
        emit('var ' + tid + '=$$.findfont(' + f + ');');// XCANVAS
        st[sp++] = { type:TYPE_DICTMAP, expr:tid, seq:++seq };
    }
    $.scalefont = function() {
        need(2);
        var x = st[sp-1].expr;
        var f = st[sp-2].expr;
        sp-=2;
        emit(parens(f) + '.FontSize=' + x + ';');       // XCANVAS
        st[sp++] = { type:TYPE_DICTMAP, expr:f, seq:++seq };
    }
    $.setfont = function() {
        need(1);
        var f = st[sp-1].expr;
        sp-=1;
        emit('$$.setfont(' + f + ');');                 // XCANVAS
    }
    */
    $.ashow = function() {
        need(3);
        var dx = st[sp-3].expr;
        var dy = st[sp-2].expr;
        var s  = st[sp-1].expr;
        sp-=3;
        emit('$$.show('+s+','+dx+','+dy+');');          // CANVAS
    }
    $.show = function() {
        need(1);
        var s = st[sp-1].expr;
        sp-=1;
        emit('$$.show(' + s + ',0,0);');                // CANVAS
    }
    $.charpath = function() {
        need(2);
        var s = st[sp-2].expr;
        var b = st[sp-1].expr;
        sp-=2;
        emit('$$.charpath(' + s + ',' + b + ');');      // CANVAS
    }
    $.pathbbox = function() {
        var tid = tvar();
        emit('var ' + tid + '=$$.pathbbox();');         // CANVAS
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.llx', seq:++seq };
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.lly', seq:++seq };
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.urx', seq:++seq };
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.ury', seq:++seq };
    }
    $.stringwidth = function() {
        need(1);
        var s = st[sp-1].expr;
        sp-=1;
        var tid = tvar();
        emit('var ' + tid + '=$$.stringwidth(' + s + ');');     // CANVAS
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.w', seq:++seq };
        st[sp++] = { type:TYPE_NUMVAL, expr:tid + '.h', seq:++seq };
    }

    $.imagemask = function() {
        need(5);
        var datasrc  = st[--sp].expr;       // non-standard string
        var matrix   = st[--sp].expr;       // ignored/not-used
        var polarity = st[--sp].expr;       // always true
        var height   = st[--sp].expr;
        var width    = st[--sp].expr;
        emit('$$.imagemask(' + width + ',' + height + ',' + datasrc + ');');
    }

    $.setlinewidth = function() {
        need(1);
        var w = st[sp-1].expr;
        sp-=1;
        emit('$$.setlinewidth(' + w + ');');            // CANVAS
    }
    // bwipjs replacement function BWIPP's setanycolor
    $.setanycolor = function() {
        need(1);
        var expr = st[--sp].expr;
        emit('$$.setcolor(' + expr + ');');             // CANVAS
    }
    $.setrgbcolor = function() {
        need(3);
        var b = st[--sp].expr;
        var g = st[--sp].expr;
        var r = st[--sp].expr;
        emit('$$.setrgbcolor(' + r + ',' + g + ',' + b + ');');             // CANVAS
    }
    // no-op
    $.setlinecap = function() {
        need(1);
        //var c = st[sp-1].expr;
        sp-=1;
        //emit('$$.setlinecap('+c+');');                    // CANVAS
    }
    // no-op
    $.setlinejoin = function() {
        need(1);
        //var c = st[sp-1].expr;
        sp-=1;
        //emit('$$.setlinejoin('+c+');');                   // CANVAS
    }
    $.clip = function() {
        emit('$$.clip();');                             // CANVAS
    }
    $.stroke = function() {
        emit('$$.stroke();');                           // CANVAS
    }
    $.newpath = function() {
        emit('$$.newpath();');                          // CANVAS
    }
    $.closepath = function() {
        emit('$$.closepath();');                        // CANVAS
    }
    $.moveto = function() {
        need(2);
        var x = st[sp-2].expr;
        var y = st[sp-1].expr;
        sp-=2;
        emit('$$.moveto(' + x + ',' + y + ');');        // CANVAS
    }
    $.lineto = function() {
        need(2);
        var x = st[sp-2].expr;
        var y = st[sp-1].expr;
        sp-=2;
        emit('$$.lineto(' + x + ',' + y + ');');        // CANVAS
    }
    $.rlineto = function() {
        need(2);
        var x = st[sp-2].expr;
        var y = st[sp-1].expr;
        sp-=2;
        emit('$$.rlineto(' + x + ',' + y + ');');       // CANVAS
    }
    $.rmoveto = function() {
        need(2);
        var x = st[sp-2].expr;
        var y = st[sp-1].expr;
        sp-=2;
        emit('$$.rmoveto(' + x + ',' + y + ');');       // CANVAS
    }
    $.fill = function() {
        emit('$$.fill();');                             // CANVAS
    }
    $.arc = function() {
        need(5);
        var a2 = st[--sp].expr;
        var a1 = st[--sp].expr;
        var r  = st[--sp].expr;
        var y  = st[--sp].expr;
        var x  = st[--sp].expr;
        emit(`$$.arc(${x},${y},${r},${a1},${a2},1);`);  // CANVAS 1 == CCW
    }
    $.arcn = function() {
        need(5);
        var a2 = st[--sp].expr;
        var a1 = st[--sp].expr;
        var r  = st[--sp].expr;
        var y  = st[--sp].expr;
        var x  = st[--sp].expr;
        emit(`$$.arc(${x},${y},${r},${a1},${a2},0);`);  // CANVAS 0 == CW
    }
    // Don't make the function the same name as the symbol...
    $.showmaxicode = function() {
        need(1);
        var pix = st[--sp].expr;
        emit(`$$.showmaxicode(${pix});`);
    }
    // Replace the BWIPP contour tracing/rendering with our own
    $.drawlayer = function() {
        need(1);
        var pix = st[--sp].expr;
        emit(`$$.drawlayer(${pix},$_.pixx,$_.pixy,$_.inkspreadh,$_.inkspreadv);`);
    }
    // Used by jabcode - Terry's wide (gt 64k) versions
    $.arrayw = $.array;
    $.getw = $.get;
    $.putw = $.put;
    $.copyw = $.copy;

    // Used by pstest - not needed by BWIPP
    $.countdictstack = function() {
        st[sp++] = { type:TYPE_INTVAL, expr:3, seq:++seq };
    };
    $.currentglobal = function() {
        st[sp++] = { type:TYPE_BOOLEAN, expr:true, seq:++seq };
    };
    $.setglobal = function() {
        need(1);
        sp--;
    }
    $.count = function() {
        var tid = tvar();
        emit('var ' + tid + '=$j;');
        st[sp++] = { type:TYPE_INTVAL, expr:tid, seq:++seq };
    };
    $.print = function() {
        need(1);
        emit('$pstr();');
        --sp;
    };
    $.flush = function() {
        // no-op
    };
    $['='] = function() {
        need(1);
        emit('$pr();');
        --sp;
    };
    $['=='] = function() {
        need(1);
        emit('$prpr();');
        --sp;
    };
    $.stack = function() {
        emit('$pstack();');
    };
    $.pstack = function() {
        emit('$pstack();');
    };

    // Finally, do the actual compilation
    if (cfg.coverage) {
        emit('var $bwipjs_functions=[];');
    }
    compile();
    if (cfg.coverage) {
        emit('typeof require=="function"&&' +
             'require("fs").writeFileSync("coverage/functions",' +
             '$bwipjs_functions.join("\\n")+"\\n","binary");');
    }

    // Fixup the global initialization code
    fixglobals();

    var lines = '';
    for (var i = 0; i < block.length; i++) {
        lines += block[i].code + '\n';
    }
    return lines;
}

// Modularize for node.js
if (typeof module == 'object' && module.exports) {
    module.exports = PSC;
}
