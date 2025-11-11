// Mocks up the necessary browser environment to run the browser modules

import './atob.mjs';
import browser, { gs1_128 as browser_128, loadFont as browser_lf } from './dist/bwip-js.mjs';
import nodejs,  { gs1_128 as nodejs_128, loadFont as nodejs_lf }  from './dist/bwip-js-node.mjs';
import reactnv, { gs1_128 as reactnv_128, loadFont as reactnv_lf } from './dist/bwip-js-rn.mjs';

// Just enough canvas element for our built-in drawing.
class HTMLCanvasElement {
    getContext() {
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

let canvas = new HTMLCanvasElement();

browser.toCanvas(canvas, { bcid:'code128', text:'01234566789', includetext:true });
console.log('browser-esm toCanvas ok');
browser_128(canvas, { text:'(01)95012345678903', includetext:true });
console.log('browser-esm named export ok');

nodejs.toBuffer({ bcid:'code128', text:'01234566789', includetext:true })
    .then((png) => {
        console.log('nodejs-esm toBuffer ok');
    });
nodejs_128({ text:'(01)95012345678903', includetext:true })
    .then((png) => {
        console.log('nodejs-esm named export ok');
    });

reactnv.toDataURL({ bcid:'code128', text:'01234566789', includetext:true })
    .then((res) => {
        console.log('react-native-esm toDataURL ok');
    });
reactnv_128({ text:'(01)95012345678903', includetext:true })
    .then((png) => {
        console.log('react-native-esm named export ok');
    });
