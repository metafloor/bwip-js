// file : bwip-js/server.js
//
// Simple node HTTP server that renders bar code images using bwip-js.
// 
// Usage:  node server [address:port] ...
//
// To specify all interfaces, use * as the address
//
// If no address:port are specified, the default is: *:3030
"use strict";

const http   = require('http');
const bwipjs = require('.');

// Hide temp vars
(function() {
	for (let i = 0, argv = process.argv; i < argv.length; i++) {
		let val = argv[i];
		if (val.indexOf('--heapdump') == 0) {
			let msecs = +val.split('=')[1] || 5000;
			let heapdump = require('heapdump');
			console.log(`Creating heapdump in ${msecs} msecs`);
			setTimeout(function() { 
					heapdump.writeSnapshot();
					console.log('heapdump created');
				}, msecs);
			argv.splice(i--, 1);
		}
	}
})();

var server = http.createServer(function(req, res) {
	// If the url does not begin /?bcid= then 404.  Otherwise, we end up
	// returning 400 on requests like favicon.ico.
	if (req.url.indexOf('/?bcid=') != 0) {
		res.writeHead(404, { 'Content-Type':'text/plain' });
		res.end('BWIP-JS: Unknown request format.', 'utf8');
	} else {
		// Do not allow images to grow too large
		bwipjs(req, res, { sizelimit:2048*2048 });
	}

})

var binds = 0;
for (var i = 2; i < process.argv.length; i++) {
	var a = /^([^:]+):(\d+)$/.exec(process.argv[i]);
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
	server.listen(3030);
	console.log('listening on *:3030');
}

