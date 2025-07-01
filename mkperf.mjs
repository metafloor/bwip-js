// perfmake.mjs
import fs from 'node:fs';

const lines = fs.readFileSync('src/bwipp.js', 'utf-8').split(/\r\n|[\r\n]/g);
const verbose = true;

// Look for the following constructs
//  function bwipp_xyz() {
//  $_.ident = function() {
//
// Each is terminated by counting the number of open and closing curlies.
//
// Watch for 'return true;` that short-circuits execution.
//
// We don't worry about the 'stopped' construct - that is exceptional.
let depth = 0;  // curly depth
let funcs = [];
for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (/^function bwipp_\w+ *\(\) *\{/.test(line)) {
        let m = /^function (bwipp_\w+) *\(\) *\{/.exec(line);
        funcs = [{ name:m[1], depth:depth }];
        lines[i] = m[0] + 'let $now=__perf.now();';
        depth++;
    } else if (/^ *\$_\.\w+ *= *function *\(\) *\{/.test(line)) {
        let m = /^ *\$_\.(\w+) *= *function *\(\) *\{/.exec(line);
        funcs.push({ name:funcs[0].name + '$' + m[1], depth:depth });
        lines[i] = m[0] + 'let $now=__perf.now();';
        depth++;
    } else if (/\(.*function *\(\) *\{ *(?:\/\/.*)?$/.test(line)) {
        // ignore 
    } else if (/^ *\}.+\{ *(?:\/\/.*)?$/.test(line)) {
        // do nothing
    } else if (/\{ *(?:\/\/.*)?$/.test(line)) {
        depth++;
    } else if (/^ *\};? *(?:\/\/.*)?$/.test(line)) {
        depth--;
        if (funcs.length && funcs[funcs.length-1].depth == depth) {
            let func = funcs.pop();
            lines[i] = '$perf("' + func.name + '",__perf.now()-$now);}';
        }
    }
}

const header = `// perfmark.js
const __perf = require('perf_hooks').performance;
const $bwipjs_perf = {};
function $perf(id,ms) { let v = $bwipjs_perf[id]|0; $bwipjs_perf[id]=v+ms; }
`;

var footer = `
const fs = require('node:fs');

// Use a seedable PRNG so we generate the same random strings for each
// run.
const PRNG = require('./bench-rng');
const prng = new PRNG();

// return a numeric string x chars long
function numeric(x) {
    let s = '';
    for (let i = 0; i < x; i++) {
        s += String.fromCharCode(~~(prng.uniform() * 10) + 48);
    }
    return s;
}

// return an uppercase string x chars long
function alpha(x) {
    let s = '';
    for (let i = 0; i < x; i++) {
        s += String.fromCharCode(~~(prng.uniform() * 26) + 65);
    }
    return s;
}

// Return a GTIN check-digited string
function gtin(x) {
    let val = ('000000000000000' + '1' +  numeric(x-2)).slice(-17);
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += ((i&1) ? 1 : 3) * val[i];
    }
    sum = sum % 10;
    return val.slice(-x+1) + String.fromCharCode(48 + (10-sum)%10);
}

// return an alpha-numeric uppercase string x bytes long
function alnum(x) {
    let s = '';
    for (let i = 0; i < x; i++) {
        let n = ~~(prng.uniform() * 36);        // 10 + 26
        if (n < 10) {
            s += String.fromCharCode(n + 48);   // '0' == 48
        } else {
            s += String.fromCharCode(n + 55);   // 'A' == 65
        }
    }
    return s;
}

// return an alpha-numeric mixed-case string x bytes long
function mixed(x) {
    let s = '';
    for (let i = 0; i < x; i++) {
        let n = ~~(prng.uniform() * 62);        // 10 + 26 + 26
        if (n < 10) {
            s += String.fromCharCode(n + 48);   // '0' == 48
        } else if (n < 36) {
            s += String.fromCharCode(n + 55);   // 'A' == 65
        } else {
            s += String.fromCharCode(n + 61);   // 'a' == 97
        }
    }
    return s;
}

// Return an 7-bit ASCII string x bytes long.
// There are 95 7-bit characters starting at 32.
function ascii(x) {
    let s = '';
    for (let i = 0; i < x; i++) {
        let n = ~~(prng.uniform() * 95);
        s += String.fromCharCode(n + 32);
    }
    return s;
}

// Return an extended ASCII (iso-8859-15) string x bytes long
// There are 95 7-bit characters starting at 32 and
// 96 8-bit characters starting at 160.
function extended(x) {
    let s = '';
    for (let i = 0; i < x; i++) {
        // Pull 3/4 from 7-bit
        if (prng.uniform() < 0.75) {
            s += String.fromCharCode(32 + ~~(prng.uniform() * 95));
        } else {
            s += String.fromCharCode(160 + ~~(prng.uniform() * 96));
        }
    }
    return s;
}

// Generate the barcode text and options for one benchmark round
// For barcode types that can have human readable text, we set the internal
// _t flag so we can optionally enable/disable text benchmarking.
function genround() {
    let a = [];

    a.push({ bcid:'code128', text:numeric(24),  _t:1 });
    a.push({ bcid:'code128', text:ascii(13),    _t:1 });
    a.push({ bcid:'code128', text:extended(10), _t:1 });

    a.push({ bcid:'code39', text:numeric(12),   _t:1 });
    a.push({ bcid:'code39', text:alnum(12),     _t:1 });

    a.push({ bcid:'code93', text:numeric(12),   _t:1 });
    a.push({ bcid:'code93', text:alnum(12),     _t:1 });

    a.push({ bcid:'ean13',  text:numeric(12),   _t:1, guardwhitespace:true });
    a.push({ bcid:'ean8',   text:numeric(7),    _t:1, guardwhitespace:true });
    a.push({ bcid:'upca',   text:numeric(11),   _t:1 });
    a.push({ bcid:'upce',   text:'0' + numeric(6),  _t:1 });

    a.push({ bcid:'ean13',  text:numeric(12) + ' ' + numeric(5),    _t:1 });
    //a.push({ bcid:'ean8',   text:numeric(7) + ' ' + numeric(2),     _t:1 });
    a.push({ bcid:'ean8',   text:numeric(7),     _t:1 });
    a.push({ bcid:'upca',   text:numeric(11) + ' ' + numeric(5),    _t:1 });
    a.push({ bcid:'upce',   text:'0' + numeric(6) + ' ' + numeric(2),   _t:1 });

    a.push({ bcid:'ean13composite', _t:1,
             text:numeric(12) + '|(99)' + mixed(20) });
    a.push({ bcid:'ean8composite',  _t:1,
             text:numeric(7) + '|(99)' + mixed(20) });
    a.push({ bcid:'upcacomposite',  _t:1,
             text:numeric(11) + '|(99)' + mixed(20) });
    a.push({ bcid:'upcecomposite',  _t:1,
             text:'0' + numeric(6) + '|(99)' + mixed(20) });

    a.push({ bcid:'sscc18', text:'(00)' + numeric(17),  _t:1 });
    a.push({ bcid:'itf14',  text:numeric(13),           _t:1 });

    a.push({ bcid:'onecode',    text:numeric(31),   _t:1 });
    a.push({ bcid:'planet',     text:numeric(11),   _t:1 });
    a.push({ bcid:'postnet',    text:numeric(9),    _t:1 });
    a.push({ bcid:'royalmail',  text:alnum(10),     _t:1 });
    a.push({ bcid:'japanpost',  text:numeric(10) + '-' + alpha(3),      _t:1 });

    a.push({ bcid:'azteccode',  text:numeric(80),   format:"full" });
    a.push({ bcid:'azteccode',  text:alnum(64),     format:"full" });
    a.push({ bcid:'azteccode',  text:mixed(64),     format:"full" });
    a.push({ bcid:'azteccode',  text:ascii(64),     format:"full" });
    a.push({ bcid:'azteccode',  text:extended(48),  format:"full" });

    a.push({ bcid:'datamatrix', text:numeric(80)    });
    a.push({ bcid:'datamatrix', text:alnum(64)      });
    a.push({ bcid:'datamatrix', text:mixed(64)      });
    a.push({ bcid:'datamatrix', text:ascii(64)      });
    a.push({ bcid:'datamatrix', text:extended(48)   });

    a.push({ bcid:'pdf417',     text:numeric(80)    });
    a.push({ bcid:'pdf417',     text:alnum(64)      });
    a.push({ bcid:'pdf417',     text:mixed(64)      });
    a.push({ bcid:'pdf417',     text:ascii(64)      });
    a.push({ bcid:'pdf417',     text:extended(48)   });

    a.push({ bcid:'qrcode',     text:numeric(80),   eclevel:"M" });
    a.push({ bcid:'qrcode',     text:alnum(64),     eclevel:"M" });
    a.push({ bcid:'qrcode',     text:mixed(64),     eclevel:"M" });
    a.push({ bcid:'qrcode',     text:ascii(64),     eclevel:"M" });
    a.push({ bcid:'qrcode',     text:extended(48),  eclevel:"M" });

    a.push({ bcid:'hanxin',     text:numeric(80)    });
    a.push({ bcid:'hanxin',     text:alnum(64)      });
    a.push({ bcid:'hanxin',     text:mixed(64)      });
    a.push({ bcid:'hanxin',     text:ascii(64)      });
    a.push({ bcid:'hanxin',     text:extended(48)   });

    a.push({ bcid:'databarexpanded',
             text:'(01)' + gtin(14) + '(3103)' + numeric(6) });
    a.push({ bcid:'databarexpandedcomposite',
             text:'(01)' + gtin(14) + '(3103)' + numeric(6) +
                    '|(99)' + mixed(20) });
    a.push({ bcid:'databarexpandedstacked', segments:4,
             text:'(01)' + gtin(14) + '(3103)' + numeric(6) });
    a.push({ bcid:'databarexpandedstackedcomposite',
             text:'(01)' + gtin(14) + '(3103)' + numeric(6) +
                    '|(99)' + mixed(20) });
    a.push({ bcid:'databarlimited', text:'(01)' + gtin(13)  });
    a.push({ bcid:'databarlimitedcomposite',
             text:'(01)' + gtin(14) + '|(99)' + mixed(20) });
    a.push({ bcid:'databaromni', text:'(01)' + gtin(13)  });
    a.push({ bcid:'databaromnicomposite',
             text:'(01)' + gtin(14) + '|(99)' + mixed(20) });
    a.push({ bcid:'databarstacked', text:'(01)' + gtin(13)  });
    a.push({ bcid:'databarstackedcomposite',
             text:'(01)' + gtin(14) + '|(99)' + mixed(20) });
    a.push({ bcid:'databarstackedomni', text:'(01)' + gtin(13)  });
    a.push({ bcid:'databarstackedomnicomposite',
             text:'(01)' + gtin(14) + '|(99)' + mixed(20) });
    a.push({ bcid:'databartruncated', text:'(01)' + gtin(13)  });
    a.push({ bcid:'databartruncatedcomposite',
             text:'(01)' + gtin(14) + '|(99)' + mixed(20) });
    a.push({ bcid:'gs1-128composite',
             text:'(00)' + gtin(18) + '|(99)' + mixed(20) });

    a.push({ bcid:'maxicode', text:numeric(24) + mixed(36) });

    a.push({ bcid:'ultracode',  text:numeric(80),   eclevel:"EC2"   });
    a.push({ bcid:'ultracode',  text:alnum(64),     eclevel:"EC2"   });
    a.push({ bcid:'ultracode',  text:mixed(64),     eclevel:"EC2"   });
    a.push({ bcid:'ultracode',  text:ascii(64),     eclevel:"EC2"   });
    a.push({ bcid:'ultracode',  text:extended(48),  eclevel:"EC2"   });

    a.push({ bcid:'dotcode',    text:numeric(24)    });
    a.push({ bcid:'dotcode',    text:alnum(20)      });
    a.push({ bcid:'dotcode',    text:mixed(20)      });
    a.push({ bcid:'dotcode',    text:ascii(20)      });

    return a;
}

function runround() {
    let round = genround();
    for (let i = 0; i < round.length; i++) {
        let opts = round[i];
        let id = opts.bcid;
        let text = opts.text;
        delete opts.bcid;
        delete opts.text;
        opts.dontdraw = true;
        let encoder;
        try {
            encoder = bwipp_lookup(id);
        } catch (e) {
            continue;
        }
        bwipp_encode({}, encoder, text, opts, true);
    }
    global.gc && global.gc();
}

// Warm up the js engine
console.log('Warming up....');
for (let i = 0; i < 10; i++) {
    let t0 = Date.now();
    runround();
    let t1 = Date.now();
    console.log('warmup round ' + i + ' in ' + (t1-t0) + ' msecs');
}

// Now the actual benchmark
for (let i = 0; i < 25; i++) {
    let t0 = Date.now();
    runround();
    let t1 = Date.now();
    console.log('round ' + i + ' in ' + (t1-t0) + ' msecs');
}

(() => {
    let arr = [];
    let fpad = 20;
    let zpad = 6;
    for (let id in $bwipjs_perf) {
        let ms = $bwipjs_perf[id];
        if (ms > 99_999_999) {
            zpad = 9;
        } else if (ms > 9_999_999) {
            zpad = 8;
        } else if (ms > 999_999) {
            zpad = 7;
        }
        if (id.length > fpad) fpad = id.length;
        arr.push([ id, ms ]);
    }
    arr.sort((a,b) => a[1] - b[1]);
    for (let i = 0; i < arr.length; i++) {
        let id = arr[i][0];
        if (id.indexOf('$') != -1) {
            console.log(arr[i][0].padEnd(fpad+3, ' '), (''+arr[i][1]).padStart(zpad, ' '));
        }
    }
})();
`;


fs.writeFileSync('perfmark.js', header + lines.join('\n') + footer, 'utf-8');
console.log('wrote: perfmark.js');
