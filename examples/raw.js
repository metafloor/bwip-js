// bwip-js/examples/raw.js
//
// For a detailed explanation of this utility, see:
//   https://github.com/metafloor/bwip-js/wiki/Notes-on-the-Raw-BWIPP-Data
//
const bwipjs = (function() {
    try {
        return require('bwip-js');   // for installed usage
    } catch (e) {
        return require('..');        // for development use only
    }
})();

if (process.argv.length < 4) {
    console.log('Usage: node raw encoder text [options ...]');
    process.exit(1);
}

let sym  = process.argv[2];
let text = process.argv[3];
let opts = process.argv[4] || '';
for (let i = 5; i < process.argv.length; i++) {
    opts += ' ' + process.argv[i];
}

let stack = bwipjs.raw(sym, text, opts);
for (let i = 0; i < stack.length; i++) {
    console.log('' + i + ':');
    let obj = stack[i];
    for (let id in obj) {
        let val = obj[id];
        if (val instanceof Array) {
            console.log('  ' + id + ': [ ' + val.join(',') + ' ]');
        } else {
            console.log('  ' + id + ': ' + val);
        }
    }
}
