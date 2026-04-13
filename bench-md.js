
const fs = require('fs');
const os = require('os');

var all = fs.readdirSync('bench-stats');
var stats = [];
for (let i = 0; i < all.length; i++) {
    let a = /^bench-v(\d+)\.(\d+)([a-z]*)\.json|(bench-latest.json)$/.exec(all[i]);
    if (a && a[4]) {
        let bwipp = fs.readFileSync('barcode.ps', 'ascii')
                        .match(/Barcode Writer in Pure PostScript - Version (\d+-\d\d-\d\d)/);
        stats.push({ vers:'latest', sort:Infinity, bwipp:bwipp[1],
                     syms:JSON.parse(fs.readFileSync('bench-stats/' + all[i]))
            });
    } else if (a) {
        let bwipp = fs.readFileSync('../bwip-js-vers/bwipjs-' + a[1] + '.' + a[2] + '/barcode.ps', 'ascii')
                        .match(/Barcode Writer in Pure PostScript - Version (\d+-\d\d-\d\d)/);
        stats.push({ vers:a[1] + '.' + a[2] + (a[3]||''), sort:a[1]*1000 + +a[2], bwipp:bwipp[1],
                     syms:JSON.parse(fs.readFileSync('bench-stats/' + all[i]))
            });
    }
}
if (!stats.length) {
    console.log('No bench-stats/ files');
    process.exit(1);
}

stats.sort(function(a, b) {
    return a.sort - b.sort;
});


// Sort using the most recent stats
var latest = stats[stats.length-1];
var arr = [];
for (var id in latest.syms) {
    if (typeof latest.syms[id] === 'object') {
        arr.push(id);
    }
}

// Sort descending in time per
arr.sort(function(a,b) { return latest.syms[b].msecs / latest.syms[b].count -
                                latest.syms[a].msecs / latest.syms[a].count });

let md =
    //'Total Time: ' + (times.msecs/1000).toFixed(3) + ' seconds\n\n' +
    '### Times by Encoder\n\n' +
    '  * Slowest to fastest (latest version)\n' +
    '  * All times in msecs\n' +
    '  * Benchmarked on ' + os.platform + '/' + os.arch + ' : ' + os.cpus()[0].model + '\n' +
    '\n'+
    '| Encoder |';
for (let i = 0; i < stats.length; i++) {
    if (stats[i].sort != Infinity) {
        md += ' v' + stats[i].vers + ' |';
    } else {
        md += ' ' + stats[i].vers + ' |';
    }
}
md += '\n| :--- |';
for (let i = 0; i < stats.length; i++) {
    md += ' ---: |';
}
md += '\n';

for (var j = 0; j < arr.length; j++) {
    var id = arr[j];
    md += '| ' + id + ' |';

    for (let i = 0; i < stats.length; i++) {
        var rec = stats[i].syms[id];
        if (rec && rec.count) {
            md += ' ' + Math.round(rec.msecs/rec.count) + ' |';
        } else {
            md += ' N/A |';
        }
    }
    md += '\n';
}
md += '\n';

md += '### Version Information\n\n';
for (let i = 0; i < stats.length; i++) {
    if (stats[i].sort != Infinity) {
        md += '* bwip-js v' + stats[i].vers + '&numsp;'.repeat(4-stats[i].vers.length);
    } else {
        md += '* bwip-js ' + stats[i].vers;
    }
    md += ' : BWIPP ' + stats[i].bwipp + ' : node-js ' + stats[i].syms.node + '\n';
}
/*
let dt = new Date();
md += '\* latest compiled on ' + dt.getDate() + '-' +
    'JanFebMarAprMayJunJulAugSepOctNovDec'.substr(dt.getMonth()*3, 3) + '-' +
    dt.getFullYear();
*/

fs.writeFileSync('benchmark.md', md, 'binary');
console.log('wrote: benchmark.md');
