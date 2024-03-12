// bwip-js/benchmark.js
//
// bwipjs benchmarker
//
// Usage: node [--expose-gc] benchmark [--verbose] [--use-v#.#]
var fs = require('fs');

// Keep output to a minimum
var verbose = process.argv.indexOf('--verbose') > 0;

var version = process.argv.reduce((acc, val) => {
        let m = /^--use-v(\d+\.\d+)/.exec(val);
        if (m) {
            return m[1];
        }
        return acc;
    }, null);

var bwipjs = version ? require('bwipjs-' + version) : require('.');

// Use a seedable PRNG so we generate the same random strings for each
// run.
var PRNG = require('./bench-rng');
var prng = new PRNG();

// return a numeric string x chars long
function numeric(x) {
    var s = '';
    for (var i = 0; i < x; i++) {
        s += String.fromCharCode(~~(prng.uniform() * 10) + 48);
    }
    return s;
}

// return an uppercase string x chars long
function alpha(x) {
    var s = '';
    for (var i = 0; i < x; i++) {
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
    var s = '';
    for (var i = 0; i < x; i++) {
        var n = ~~(prng.uniform() * 36);        // 10 + 26
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
    var s = '';
    for (var i = 0; i < x; i++) {
        var n = ~~(prng.uniform() * 62);        // 10 + 26 + 26
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
    var s = '';
    for (var i = 0; i < x; i++) {
        var n = ~~(prng.uniform() * 95);
        s += String.fromCharCode(n + 32);
    }
    return s;
}

// Return an extended ASCII (iso-8859-15) string x bytes long
// There are 95 7-bit characters starting at 32 and
// 96 8-bit characters starting at 160.
function extended(x) {
    var s = '';
    for (var i = 0; i < x; i++) {
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
    var a = [];

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
    a.push({ bcid:'ean8',   text:numeric(7) + ' ' + numeric(2),     _t:1 });
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

/*async*/function runround(times) {
    times.msecs = times.msecs || 0;
    times.count = times.count || 0;

    var round = genround();
    return new Promise((resolve, reject) => {
        run(0);

        function run(i) {
            if (verbose) {
                console.log(round[i]);
            }
            var id = round[i].bcid;
            var t0 = process.hrtime();
            bwipjs.toBuffer(round[i], (err, png) => {
                var t1 = process.hrtime(t0);
                if (err) {
                    if (!/bwipp.unknownEncoder/.test(err)) {
                        reject(err);
                    }
                } else {
                    if (!times[id]) {
                        times[id] = { id:id, count:0, msecs:0 };
                    }
                    var rec = times[id];
                    rec.count++;
                    rec.msecs += t1[0] * 1000 + t1[1] / 1000000;
                    times.msecs += t1[0] * 1000 + t1[1] / 1000000;
                    times.count++;
                }
                global.gc && global.gc();
                if (++i == round.length) {
                    resolve(true);
                } else{
                    run(i);
                }
            });
        }
    });
}

(async () => {
    try {
        // Warm up the js engine
        console.log('Warming up....');
        for (var i = 0; i < 10; i++) {
            var t0 = Date.now();
            await runround({});
            var t1 = Date.now();
            console.log('warmup round ' + i + ' in ' + (t1-t0) + ' msecs');
        }

        // Now the actual benchmark
        var times = {};
        for (var i = 0; i < 25; i++) {
            var t0 = Date.now();
            await runround(times);
            var t1 = Date.now();
            console.log('round ' + i + ' in ' + (t1-t0) + ' msecs');
        }
    } catch (e) {
        console.log(e);
        process.exit(1);
    }

        // Display the results
        console.log('Total accrued time: ' + (times.msecs/1000).toFixed(3) +
                    ' seconds');

        fs.writeFileSync('bench-stats.json', JSON.stringify(times, null, ' '), 'binary');
})();
