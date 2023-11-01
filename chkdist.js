// Mocks up the necessary browser environment to run the browser modules
const _import = require('esm')(module);

// Just enough canvas element for our built-in drawing.
function HTMLCanvasElement() {
    this.getContext = function() {
        return {
            setTransform() {},
            clearRect() {},
            fillRect() {},
            getImageData(x,y,w,h) {
                return { data:new Uint8Array(w*h) };
            },
            putImageData() {},
        };
    }
}

global.window = {};
global.HTMLCanvasElement = HTMLCanvasElement;
global.atob = function(str) {
    return Buffer.from(str, 'base64').toString('binary');
}

let canvas = new HTMLCanvasElement();

function checkcvs(cvs) {
    if (!(cvs instanceof HTMLCanvasElement)) {
        console.log('cvs', cvs);
        throw new Error('not a canvas');
    }
}
function checkbuf(buf) {
    if (!Buffer.isBuffer(buf)) {
        throw new Error('not a buffer');
    }
}
function checksvg(svg) {
    if (typeof svg != 'string' || !/^<svg /.test(svg) || !/<\/svg>\s*$/.test(svg)) {
        throw new Error('not an svg string');
    }
}
function checkurl(res) {
    if (!res || typeof res != 'object' ||
            typeof res.width != 'number' || typeof res.height != 'number' ||
            !/^data:image\/png;base64,/.test(res.uri)) {
        throw new Error('not an url object');
    }
}


{
let bcjs = require('./dist/bwip-js.js');
checkcvs(bcjs.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true }));
console.log('browser-cjs toCanvas(cvs,opts) ok');
checkcvs(bcjs.toCanvas({ bcid:'code128', text:'01234566789', includetext:true }, canvas));
console.log('browser-cjs toCanvas(opts,cvs) ok');
checksvg(bcjs.toSVG({ bcid:'code128', text:'01234566789', includetext:true }));
console.log('browser-cjs toSVG ok');
}

/* {
let min = require('./dist/bwip-js-min.js');
checkcvs(min.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true }));
console.log('browser-min toCanvas ok');
checksvg(min.toSVG({ bcid:'code128', text:'01234566789', includetext:true }));
console.log('browser-min toSVG ok');
} */

{
let besm = _import('./dist/bwip-js.mjs');
checkcvs(besm.default.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true }));
console.log('browser-esm toCanvas(cvs,opts) ok');
checkcvs(besm.default.toCanvas({ bcid:'code128', text:'01234566789', includetext:true }, canvas));
console.log('browser-esm toCanvas(opts,cvs) ok');
checksvg(besm.default.toSVG({ bcid:'code128', text:'01234566789', includetext:true }));
console.log('browser-esm toSVG ok');
checkcvs(besm.gs1_128(canvas, { text:'(01)95012345678903', includetext:true }));
console.log('browser-esm toCanvas(cvs,opts) named export ok');
checkcvs(besm.gs1_128({ text:'(01)95012345678903', includetext:true }, canvas));
console.log('browser-esm toCanvas(opts,cvs) named export ok');
checksvg(besm.gs1_128({ text:'(01)95012345678903', includetext:true }, besm.drawingSVG()));
console.log('browser-esm toSVG named export ok');
}

{
let ncjs = require('./dist/bwip-js-node.js');
ncjs.toBuffer({ bcid:'code128', text:'01234566789', includetext:true })
    .then((png) => {
        checkbuf(png);
        console.log('nodejs-cjs toBuffer ok');
    });
checksvg(ncjs.toSVG({ bcid:'code128', text:'01234566789', includetext:true }, ncjs.drawingSVG()))
console.log('nodejs-cjs toSVG ok');
}

{
let nesm = _import('./dist/bwip-js-node.mjs');
nesm.default.toBuffer({ bcid:'code128', text:'01234566789', includetext:true })
    .then((png) => {
        checkbuf(png);
        console.log('nodejs-esm toBuffer ok');
    });
nesm.gs1_128({ text:'(01)95012345678903', includetext:true })
    .then((png) => {
        checkbuf(png);
        console.log('nodejs-esm toBuffer named export ok');
    });
checksvg(nesm.default.toSVG({ bcid:'code128', text:'01234566789', includetext:true }));
console.log('nodejs-esm toSVG ok');
checksvg(nesm.gs1_128({ text:'(01)95012345678903', includetext:true }, nesm.drawingSVG()));
console.log('nodejs-esm toSVG named export ok');
}

{
let rnesm = _import('./dist/bwip-js-rn.mjs');
rnesm.default.toDataURL({ bcid:'code128', text:'01234566789', includetext:true })
    .then((res) => {
        checkurl(res);
        console.log('react-native-esm toDataURL ok');
    });
rnesm.gs1_128({ text:'(01)95012345678903', includetext:true })
    .then((res) => {
        checkurl(res);
        console.log('react-native-esm toDataURL named export ok');
    });
checksvg(rnesm.default.toSVG({ bcid:'code128', text:'01234566789', includetext:true }));
console.log('react-native-esm toSVG ok');
checksvg(rnesm.gs1_128({ text:'(01)95012345678903', includetext:true }, rnesm.drawingSVG()));
console.log('react-native-esm toSVG named export ok');
}

{
let gesm = _import('./dist/bwip-js-gen.mjs');
checksvg(gesm.default.toSVG({ bcid:'code128', text:'01234566789', includetext:true }));
console.log('generic-esm toSVG ok');
checksvg(gesm.gs1_128({ text:'(01)95012345678903', includetext:true }, gesm.drawingSVG()));
console.log('generic-esm toSVG named export ok');
}

