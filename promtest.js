// promtest.js
const bwipjs = require('.');

function callback(encoder) {
	bwipjs.toBuffer({
			bcid:        encoder,       // Barcode type
			text:        '0123456789',    // Text to encode
			scale:       3,               // 3x scaling factor
			height:      10,              // Bar height, in millimeters
			includetext: true,            // Show human-readable text
			textxalign:  'center',        // Always good to set this
		})
		.then(function(png) {
			console.log(png);
		})
		.catch(function(err) {
			console.log(err);
		});
}

async function waitForIt(encoder) {
	try {
		console.log(await bwipjs.toBuffer({
			bcid:        encoder,       // Barcode type
			text:        '0123456789',    // Text to encode
			scale:       3,               // 3x scaling factor
			height:      10,              // Bar height, in millimeters
			includetext: true,            // Show human-readable text
			textxalign:  'center',        // Always good to set this
		}));
	} catch (e) {
		console.log(e);
	}
}

callback('code128');
callback('notcode128');
waitForIt('code128');
waitForIt('notcode128');
console.log('script finished');
