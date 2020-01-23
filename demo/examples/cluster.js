// bwip-js/examples/cluster.js
//
// Simple HTTP server that renders bar code images using bwip-js.
//
// Usage: node cluster [address:port] ...
//
// To specify all interfaces, use * as the address
//
// If no address:port are specified, the default is: *:3030
//
"use strict";

var cluster = require('cluster');
var http    = require('http');
var numCPUs = require('os').cpus().length;
var bwipjs = (function() {
    try {
        return require('bwip-js');   // for installed usage
    } catch (e) {
        return require('..');        // for development use only
    }
})();

if (cluster.isMaster) {
    // Use a de-escalation scheme to prevent forking too quickly.
    var nworkers = 0;
    var nwaiting = 0;

    // Fork the initial workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
        nworkers++;
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        nworkers--;
        nwaiting++;
        setTimeout(function() { 
                cluster.fork();
                nwaiting--;
                nworkers++;
            }, 1000 * nwaiting); 
    });
} else {
    // All the workers will share the HTTP server
    var server = http.createServer(function (req, res) {
        // If the url does not begin /?bcid= then 404.  Otherwise, we end up
        // returning 400 on requests like favicon.ico.
        if (req.url.indexOf('/?bcid=') != 0) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('BWIP-JS: Unknown request format.', 'utf8');
        } else {
            bwipjs.request(req, res);
        }
    });

    var binds = 0;
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
        binds++;
    }
    if (!binds) {
        server.listen(process.env.PORT || 3030);
    }
}
