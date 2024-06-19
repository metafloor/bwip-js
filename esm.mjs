
import bwipjs, { gs1_128 } from './dist/bwip-js-node.mjs';

bwipjs.toBuffer({ bcid:'code128', text:'01234566789', includetext:true })
    .then((png) => {
        console.log(png);
        console.log('code128 complete');
    });
gs1_128({ text:'(01)95012345678903', includetext:true })
    .then((png) => {
        console.log(png);
        console.log('gs1_128 complete');
    });
