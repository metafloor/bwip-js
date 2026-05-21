#!/usr/bin/env node

const fs    = require('fs');
const STBTT = require('./stb_truetype');
const PNG   = require('./zlibPNG');

const argv = process.argv;
if (argv.length != 6) {
	console.log('Usage:   stbtt.js font-path font-size text png-path');
	console.log('Example: stbtt.js ../fonts/ocrb7.otf 15 0123456789 js-digits.png');
	process.exit(1);
}

let font = STBTT.InitFont(fs.readFileSync(argv[2]));
let size = +argv[3];
let text = argv[4];

let width  = 0;
let ascent = 0;
let descent = 0;
for (let i = 0; i < text.length; i++) {
	let g = STBTT.GetGlyph(font, text.charCodeAt(i), size, size);
	let a = g.top;
	let d = g.height - g.top;
	if (ascent < a) {
		ascent = a;
	}
	if (descent < d) {
		descent = d;
	}
	width += g.advance;
}

const png = new PNG(width, ascent + descent, 0xffffff);

let offset = 0;
for (let i = 0; i < text.length; i++) {
	let g = STBTT.GetGlyph(font, text.charCodeAt(i), size, size);
	let pix = g.pixels;
	let left = g.left + offset;
	let top  = ascent - g.top;

	for (let y = 0; y < g.height; y++) {
		for (let x = 0; x < g.width; x++) {
			let a = pix[y*g.width + x];
			if (a) {
				png.set(left + x, top + y, a<<24);
				//console.log(left + x, top + y, a);
			}
		}
	}
	offset += g.advance;
}

png.render(function(err, png) {
	if (err) {
		console.log(err.stack||err);
	} else {
		fs.writeFileSync(argv[5], png);
	}
});
