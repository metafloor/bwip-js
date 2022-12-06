// Mocks up the necessary browser environment to run the browser modules

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

let bcjs = require('./dist/bwip-js.js');
bcjs.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true });
console.log('browser-cjs ok');

let min = require('./dist/bwip-js-min.js');
min.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true });
console.log('browser-min ok');

let _import = require('esm')(module);
let besm = _import('./dist/bwip-js.mjs');
besm.default.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true });
console.log('browser-esm toCanvas ok');
besm.gs1_128(canvas, { text:'(01)95012345678903', includetext:true });
console.log('browser-esm named export ok');

let ncjs = require('./dist/bwip-js-node.js');
ncjs.toBuffer({ bcid:'code128', text:'01234566789', includetext:true })
    .then((png) => {
        console.log('nodejs-cjs ok');
    });

let nesm = _import('./dist/bwip-js-node.mjs');
nesm.default.toBuffer({ bcid:'code128', text:'01234566789', includetext:true })
    .then((png) => {
        console.log('nodejs-esm toBuffer ok');
    });
nesm.gs1_128({ text:'(01)95012345678903', includetext:true })
    .then((png) => {
        console.log('nodejs-esm named export ok');
    });

let rnesm = _import('./dist/bwip-js-rn.mjs');
rnesm.default.toDataURL({ bcid:'code128', text:'01234566789', includetext:true })
    .then((res) => {
        console.log('react-native-esm toDataURL ok');
    });
rnesm.gs1_128({ text:'(01)95012345678903', includetext:true })
    .then((png) => {
        console.log('react-native-esm named export ok');
    });

