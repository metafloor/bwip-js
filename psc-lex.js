// PostScript lexer
function PSLEX(str) {
    var idx = 0;
    var off = 0;
    var tks = [];
    var lnr = 0;
    var stack = [];

    this.lines = {};

    // Because PostScript syntax is very relaxed, this function tokenizes
    // an entire line of text so we can keep track of where we are.
    function _next() {
        while (true) {
            while (str.charAt(off) == '\n') {
                lnr++;
                off++;
            }
            var eol = str.indexOf('\n', off);
            if (eol == -1) {
                if (off >= str.length)
                    return false;
                eol = str.length;
            }
            lnr++;
            break;
        }

        var line = str.substring(off, eol);
        off = eol+1;
        tks = [];
        idx = 0;

        this.lines[lnr] = line.replace(/^\s+/,'');

        var re = /<<|>>|[ \t]+|[\r<>\[\](){}%\\"]/gm;
        var a  = re.exec(line);
        var l  = 0;
        while (a) {
            if (a.index > l)
                tks.push(line.substring(l, a.index));
            if (a[0] != '\r')
                tks.push(a[0]);

            l = re.lastIndex;
            a = re.exec(line);
        }
        if (l < line.length)
            tks.push(line.substr(l));

        return true;
    }

    // Push/pop an array of tokens onto the stream
    this.push = function(tokens) {
        stack.push(tokens);
    }
    this.pop = function() {
        stack.pop();
    }

    // We only allow peeking when there is an existing token stream i.e.
    // we are inside an executable block which is almost everywhere.
    this.peek = function(n) {
        if (!stack.length || !stack[stack.length-1].length) {
            return null;
        }
        // If an index is passed in, the caller wants the entire token.
        // O/w just the token value at the top of the stack.
        if (typeof n == 'number') {
            return stack[stack.length-1][n];
        } else {
            return stack[stack.length-1][0].token;
        }
    }

    // The main lexer function.  Returns the next token; null if no more
    // tokens in the current stream.
    this.next = function() {
        if (stack.length && !stack[stack.length-1].length) {
            return null;
        }
        if (stack.length) {
            var elt = stack[stack.length-1].shift();
            this.token = elt.token;
            this.lnbr  = elt.lnbr;
            return elt.token;
        }

        // remove whitespace
        while (idx < tks.length && /^[ \t]/.test(tks[idx]))
            idx++;

        while (idx >= tks.length || tks[idx] == '%') {
            if (!_next.call(this)) {
                this.token = null;
                return null;    // EOF
            }
            // remove whitespace
            while (idx < tks.length && /^[ \t]/.test(tks[idx]))
                idx++;
        }

        // Already processed token stream?
        if (tks[idx] instanceof Array) {
            this.token = tks[idx][0];
            this.lnbr  = tks[idx][1];
            idx++;
            return this.token;
        }

        // track the line number where the token begins
        this.lnbr = lnr;

        // () string
        if (tks[idx] == '(') {
            var s = '';
            var l = 1;
            idx++;
            done: while (true) {
                while (idx < tks.length) {
                    if (tks[idx] == '\\') {
                        if (++idx >= tks.length && !_next.call(this))
                            throw 'Unexpected end of string';
                        s += '\\';
                    } else if (tks[idx] == '"') {
                        tks[idx] = '\\"';
                    } else if (tks[idx] == '(') {
                        l++;
                    } else if (tks[idx] == ')' && --l == 0) {
                        break done;
                    }
                    s += tks[idx++];
                }
                if (!_next.call(this)())
                    throw 'Unexpected end of string';
            }
            idx++;

            // Watch for (@id@ ... @@)= pragmas
            //if (tks[idx] == '=' && /^(@\w+@) (.*) @@$/.test(s)) {
            //    idx++;
            //}
            this.token = '(' + s + ')';
        }

        // <> string
        else if (tks[idx] == '<') {
            var s = '';
            idx++;
            done: while (true) {
                while (idx < tks.length) {
                    if (tks[idx] == '>')
                        break done;
                    var t = tks[idx].replace(/\s/g, '');
                    if (t && !/^[a-zA-Z0-9]+$/.test(t))
                        throw 'Invalid hex string: "' + t + '"';
                    s += t;
                    idx++;
                }
                if (!_next.call(this))
                    throw 'Unexpected end of string';
            }
            if (s.length % 2)
                s += '0';

            var t = '';
            for (var i = 0; i < s.length; i += 2)
                t += '\\x' + s.substr(i, 2);

            idx++;
            this.token = '(' + t + ')';
        }
        else
            this.token = tks[idx++];

        return this.token;
    }
}

if (typeof module === 'object' && module.exports) {
    module.exports = PSLEX;
}
