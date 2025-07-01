
const fs = require('fs');
const os = require('os');

var all = fs.readdirSync('bench-stats');
var stats = [];
for (let i = 0; i < all.length; i++) {
    let a = /^bench-v(\d+)\.(\d+)([a-z]*)\.json|(bench-latest.json)$/.exec(all[i]);
    if (a && a[4]) {
        stats.push({ vers:'latest', sort:Infinity,
                     syms:JSON.parse(fs.readFileSync('bench-stats/' + all[i]))
            });
    } else if (a) {
        stats.push({ vers:a[1] + '.' + a[2] + (a[3]||''), sort:a[1]*1000 + +a[2],
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
    '  * Benchmarked using node.js ' + process.version + ' : ' + os.platform + '/' + os.arch + ' : ' + os.cpus()[0].model + '\n' +
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
        if (rec) {
            md += ' ' + Math.round(rec.msecs/rec.count) + ' |';
        } else {
            md += ' N/A |';
        }
    }
    md += '\n';
}
md += '\n';

let dt = new Date();
md += '\* latest compiled on ' + dt.getDate() + '-' +
    'JanFebMarAprMayJunJulAugSepOctNovDec'.substr(dt.getMonth()*3, 3) + '-' +
    dt.getFullYear();

fs.writeFileSync('benchmark.md', md, 'binary');
console.log('wrote: benchmark.md');
