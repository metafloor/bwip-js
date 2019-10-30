#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var argv = require('argv');
var bwipjs = require('./node-bwipjs');


// bwipjs options
argv.option({ name: 'bcid', type: 'string', description: 'Barcode type.' });
argv.option({ name: 'text', type: 'string', description: 'Text to encode.' });
argv.option({ name: 'scaleX', type: 'int', description: 'The x-axis scaling factor. Must be an integer > 0. Default is 2.' });
argv.option({ name: 'scaleY', type: 'int', description: 'The y-axis scaling factor. Must be an integer > 0. Default is scaleX.' });
argv.option({ name: 'scale', type: 'int', description: 'Sets both the x-axis and y-axis scaling factors. Must be an integer > 0.' });
argv.option({ name: 'rotate', type: 'int', description: 'Allows rotating the image to one of the four orthogonal orientations. A string value. Must be one of: N, R, L, I.' });
argv.option({ name: 'paddingwidth', type: 'int', description: 'Sets the left and right padding (in points/pixels) around the rendered barcode. Rotates and scales with the image.' });
argv.option({ name: 'paddingheight', type: 'int', description: 'Sets the top and bottom padding (in points/pixels) around the rendered barcode. Rotates and scales with the image.' });
argv.option({ name: 'monochrome', type: 'boolean', description: 'Sets the human-readable text to render in monochrome. Boolean true or false. Default is false which renders 256-level gray-scale anti-aliased text.' });

// bwipp options
argv.option({ name: 'includecheck', type: 'boolean', description: 'Generate check digit(s) for symbologies where the use of check digits is optional.' });
argv.option({ name: 'includecheckintext', type: 'boolean', description: 'Show the calculated check digit in the human readable text.' });
argv.option({ name: 'parse', type: 'boolean', description: 'In supporting barcode symbologies, when the parse option is specified, any instances of ^NNN in the data field are replaced with their equivalent ASCII value, useful for specifying unprintable characters.' });
argv.option({ name: 'parsefnc', type: 'boolean', description: 'In supporting barcode symbologies, when the parsefnc option is specified, non-data function characters can be specified by escaped combinations such as ^FNC1, ^FNC4 and ^SFT/.' });
argv.option({ name: 'height', type: 'float', description: 'Height of longest bar, in inches.' });
argv.option({ name: 'width', type: 'float', description: 'Stretch the symbol to precisely this width, in inches.' });
argv.option({ name: 'inkspread', type: 'float', description: 'Amount by which to reduce the bar widths to compensate for inkspread, in points.' });
argv.option({ name: 'includetext', type: 'boolean', description: 'Show human readable text for data in symbol.' });
argv.option({ name: 'textfont', type: 'string', description: 'The font name for text.' });
argv.option({ name: 'textsize', type: 'int', description: 'The font size of the text in points.' });
argv.option({ name: 'textgaps', type: 'int', description: 'The inter-character spacing of the text.' });
argv.option({ name: 'textxalign', type: 'string', description: 'The textxalign option is used to specify where to horizontally position the text.' });
argv.option({ name: 'textyalign', type: 'string', description: 'The textyalign option is used to specify where to vertically position the text.' });
argv.option({ name: 'textxoffset', type: 'int', description: 'The horizontal position of the text in points relative to the default position.' });
argv.option({ name: 'textyoffset', type: 'int', description: 'The vertical position of the text in points relative to the default position.' });
argv.option({ name: 'showborder', type: 'boolean', description: 'Display a border around the symbol.' });
argv.option({ name: 'borderwidth', type: 'int', description: 'Width of a border in points.' });
argv.option({ name: 'borderleft', type: 'int', description: 'Left margin gap of a border in points.' });
argv.option({ name: 'borderright', type: 'int', description: 'Right margin gap of a border in points.' });
argv.option({ name: 'bordertop', type: 'int', description: 'Top margin gap of a border in points.' });
argv.option({ name: 'borderbottom', type: 'int', description: 'Bottom margin gap of a border in points.' });
argv.option({ name: 'barcolor', type: 'string', description: 'Color of bars, either as a hex RRGGBB value or a hex CCMMYYKK value.' });
argv.option({ name: 'backgroundcolor', type: 'string', description: 'Color of a background, either as a hex RRGGBB value or a hex CCMMYYKK value.' });
argv.option({ name: 'bordercolor', type: 'string', description: 'Color of a border, either as a hex RRGGBB value or a hex CCMMYYKK value.' });
argv.option({ name: 'textcolor', type: 'string', description: 'Color of text, either as a hex RRGGBB value or a hex CCMMYYKK value.' });
argv.option({ name: 'addontextfont', type: 'string', description: 'The font name of the add on text.' });
argv.option({ name: 'addontextsize', type: 'int', description: 'The font size of the add on text in points.' });
argv.option({ name: 'addontextxoffset', type: 'int', description: 'Overrides the default positioning algorithm for the add on text.' });
argv.option({ name: 'addontextyoffset', type: 'int', description: 'Overrides the default positioning algorithm for the add on text.' });
argv.option({ name: 'guardwhitespace', type: 'boolean', description: 'Display white space guards.' });
argv.option({ name: 'guardwidth', type: 'int', description: 'Width of white space guards, in points.' });
argv.option({ name: 'guardheight', type: 'int', description: 'Height of white space guards, in points.' });
argv.option({ name: 'guardleftpos', type: 'int', description: 'Amount of white space to guard to left of the symbol, in points.' });
argv.option({ name: 'guardrightpos', type: 'int', description: 'Amount of white space to guard to right of the symbol, in points.' });
argv.option({ name: 'guardleftypos', type: 'int', description: 'Vertical position of the guard symbols on the left, in points.' });
argv.option({ name: 'guardrightypos', type: 'int', description: 'Vertical position of the guard symbols on the right, in points.' });


var commandLine = argv.run();

if (commandLine.targets.length === 0) {
	console.error('You must specify an output path.');
	process.exit(1);
}


if (commandLine.options.hasOwnProperty('textfont')) {
	var font = fs.readFileSync(path.join('fonts', commandLine.options.textfont), 'binary'); 
	bwipjs.loadFont(commandLine.options.textfont, 1, font);
}

bwipjs.toBuffer(commandLine.options, function (err, png) {
	if (err) {
		console.error('Can\'t generate a barcode: ' + err);
		process.exit(1);
	}

	fs.writeFileSync(commandLine.targets[0], new Buffer(png));

	console.info('Barcode has been encoded into ' + commandLine.targets[0]);
});
