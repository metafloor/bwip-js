// file : server.js
//
// Simple node HTTP server that renders bar code images using bwip-js.
// 
// Usage:  node server [address:port] ...
//
// To specify all interfaces, use * as the address
//
// If no address:port are specified, the default is: *:3030
const http	 = require('http');
const bwipjs = require('./node-bwipjs');	// ./ required for local use

// Example of how to load a font into bwipjs. 
//  bwipjs.loadFont(fontname, sizemult, fontdata)
//
// To unload a font (and free up space for another):
//  bwipjs.unloadFont(fontname)
//
//bwipjs.loadFont('Inconsolata', 108,
//			require('fs').readFileSync('fonts/Inconsolata.otf', 'binary'));

const server = http.createServer(function(req, res) {
	// If the url does not begin /?bcid= then 404.  Otherwise, we end up
	// returning 400 on requests like favicon.ico.
	if (req.url.indexOf('/?bcid=') != 0) {
		res.writeHead(404, { 'Content-Type':'text/plain' });
		res.end('BWIP-JS: Unknown request format.', 'utf8');
	} else {
		// Do not allow images to grow too large (1 mega-pixel limit)
		bwipjs(req, res, { sizelimit:1024*1024 });
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
	server.listen(3030);
	console.log('listening on *:3030');
}

