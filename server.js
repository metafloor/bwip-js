// file : server.js
//
// Simple node HTTP server that renders bar code images using bwip-js.
// 
// Usage:  node server
//
var http   = require('http');
var bwipjs = require('./node-bwipjs');	// ./ required for local use

// Example of how to load a font into bwipjs. 
//  bwipjs.loadFont(fontname, sizemult, fontdata)
//
// To unload a font (and free up space for another):
//  bwipjs.unloadFont(fontname)
//
bwipjs.loadFont('Inconsolata', 108,
			require('fs').readFileSync('Inconsolata.otf', 'binary'));

http.createServer(function(req, res) {
	// If the url does not begin /?bcid= then 404.  Otherwise, we end up
	// returning 400 on requests like favicon.ico.
	if (req.url.indexOf('/?bcid=') != 0) {
		res.writeHead(404, { 'Content-Type':'text/plain' });
		res.end('BWIP-JS: Unknown request format.', 'utf8');
	} else {
		bwipjs(req, res);
	}

}).listen(3030);

console.log('listening on 3030');
