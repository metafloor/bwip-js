// bwip-js/examples/threaded.js
//
// Threaded node.js HTTP server that renders bar code images using bwip-js.
//
// Node 10.5+ only.
//
// Node 10.5 Usage:
//   node --experimental-worker threaded [address:port] ...
//
// Node 11+
//   node threaded [address:port] ...
//
// To specify all interfaces, use * as the address
//
// If no address:port are specified, the default is: *:3030
"use strict";

const Worker = require('worker_threads').Worker;
const http   = require('http');
const ncpus  = require('os').cpus().length;

// Use arrays for simplicity.  They shouldn't get so big as to make O(n) perf matter.
const workers = [];
const queue   = [];

// Create the worker threads
for (let i = 0, n = ncpus-1 || 1; i < n; i++) {
    createWorker();
}

const server = http.createServer(function(req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIP-JS: Unknown request format.', 'utf8');
    } else {
        // Some arbitrary limit...
        if (queue.length > 16) {
            st.res.writeHead(503, { 'Content-Type':'text/plain' });
            st.res.end('HTTP ERROR 503 - Service Unavailable');
        } else if (!workers.length) {
            queue.push({ res:res, req:req });
        } else {
            let worker = workers.pop();
            worker.workerState = { res:res, req:req };
            worker.postMessage(req.url);
        }
    }
})

let binds = 0;
for (let i = 2; i < process.argv.length; i++) {
    let a = /^([^:]+):(\d+)$/.exec(process.argv[i]);
    if (a) {
        if (a[1] == '*') {
            server.listen(+a[2]);
        } else {
            server.listen(+a[2], a[1]);
        }
    } else {
        console.log(process.argv[i] + ': option ignored...');
    }
    console.log('listening on ' + process.argv[i]);
    binds++;
}
if (!binds) {
    server.listen(process.env.PORT || 3030);
    console.log('listening on *:' + (process.env.PORT || 3030));
}

function createWorker() {
    let worker = new Worker(workerCode(), { eval:true });
    worker.on('error', (err) => { console.log(err); setTimeout(createWorker, 500) });
    worker.on('close', () => setTimeout(createWorker, 500));
    worker.on('online', () => workers.push(worker));
    worker.on('message', (msg) => {
        let st = worker.workerState;

        if (msg.err) {
            st.res.writeHead(400, { 'Content-Type':'text/plain' });
            st.res.end('' + msg.err, 'utf-8');
        } else if (msg.png) {
            st.res.writeHead(200, { 'Content-Type':'image/png' });
            st.res.end(Buffer.from(msg.png), 'binary');
        } else {
            // ???
        }

        worker.workerState = null;
        if (queue.length) {
            worker.workerState = queue.shift();
            worker.postMessage(worker.workerState.req.url);
        }
    });
}

function workerCode() {
    return `
const worker = require('worker_threads');
const url    = require('url');
const bwipjs = (function() {
    try {
        return require('bwip-js');   // for installed usage
    } catch (e) {
        return require('..');        // for development use only
    }
})();

worker.parentPort.on('message', (requestUrl) => {
    let opts = url.parse(requestUrl, true).query;

    // Convert empty parameters to true.
    // Convert empty !parameters to false.
    for (let id in opts) {
        if (opts[id] === '') {
            if (id[0] == '!') {
                opts[id.substr(1)] = false;
            } else {
                opts[id] = true;
            }
        }
    }

    bwipjs.toBuffer(opts, function(err, png) {
        if (err) {
            worker.parentPort.postMessage({ err:'' + (err.stack || err) });
        } else {
            worker.parentPort.postMessage({ png:png.buffer }, [ png.buffer ]);
        }
    });
});
`;

}
