// optimize.mjs

import fs from 'node:fs';
import { optmz as devar } from './optmz-devar.mjs';
import { optmz as peepopts } from './optmz-peep.mjs';
import { optmz as ifopts } from './optmz-if.mjs';
import { optmz as foropts } from './optmz-for.mjs';
import { optmz as miscopts } from './optmz-misc.mjs';
import { optmz as jopts } from './optmz-j.mjs';
import { optmz as astopts } from './optmz-ast.mjs';

// pjs is the file emitted by psc
const lines = fs.readFileSync('barcode.pjs', 'utf-8').split(/\r\n|[\r\n]/g);

// console.log() is slow as molasses for logging... literally 150 seconds
// per run.
let output = '';
let outfd = fs.openSync('optimize.log', 'w');
function traceln(s) {
    output += s + '\n';
    if (output.length > 4000) {
        fs.writeSync(outfd, output, 'utf-8');
        output = '';
    }

}
function before(i, n, id) {
    traceln('<<<' + (id || ''));
    for (let j = 0; j < n; j++) {
        traceln(lines[i+j]);
    }
}
function after(i, n) {
    traceln('>>>');
    for (let j = 0; j < n; j++) {
        traceln(lines[i+j]);
    }
    traceln('');
}

const verbose = true;

devar(lines, verbose && before, verbose && after);
peepopts(lines, verbose && before, verbose && after);
ifopts(lines, verbose && before, verbose && after);
foropts(lines, verbose && before, verbose && after);
miscopts(lines, verbose && before, verbose && after);
jopts(lines, verbose && before, verbose && after);
astopts(lines, verbose && before, verbose && after);

fs.writeFileSync('barcode.js', lines.join('\n'), 'utf-8');
fs.writeSync(outfd, output, 'utf-8');
fs.closeSync(outfd);

process.exit(0);
