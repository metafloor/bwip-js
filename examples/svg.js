// bwip-js/examples/svg.js
//
// Example usage of drawing-svg.js in nodejs.
//
// Usage: node svg encoder text [options ...]
//
// Example: node svg code128 0123456789 includetext
const bwipjs = (function() {
    try {
        return require('bwip-js');   // for installed usage
    } catch (e) {
        return require('..');        // for development use only
    }
})();
const drawsvg = require('./drawing-svg');

if (process.argv.length < 4) {
    console.log('Usage: node svg encoder text [options ...]');
    process.exit(1);
}

let opts = {
    bcid: process.argv[2],
    text: process.argv[3],
};
for (let i = 4; i < process.argv.length; i++) {
    let arg = process.argv[i];
    let eq  = arg.indexOf('=');
    if (eq > 0) {
        opts[arg.substr(0, eq)] = arg.substr(eq+1);
    } else {
        opts[arg] = true;
    }
}

// Always call fixupOptions() before passing to a drawing constructor.
bwipjs.fixupOptions(opts);

// The drawing needs FontLib to extract glyph paths.
let svg = bwipjs.render(opts, drawsvg(opts, bwipjs.FontLib));
console.log(svg);

