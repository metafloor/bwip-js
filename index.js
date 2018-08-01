
if (typeof process == 'object' && typeof process.argv == 'object' &&
		/node(js)?/.test(process.argv[0])) {
	module.exports = require('./node-bwipjs');
} else {
	module.exports = require('./browser-bwipjs');
}
