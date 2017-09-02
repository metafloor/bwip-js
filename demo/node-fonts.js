// bwip-js/node-fontlib.js
//
"use strict";

var fs = require('fs');
var monochr = false;

// Load the font description files
var fontmap = {
	names:{},
	fontsets:[],
};

(function() {
	try {
		for (var i = 0; i < 10; i++) {
			var font = require('./fonts/fnt' + i + '-desc');
			fontmap.names[font.name.toUpperCase()] = i;	// font-name to font-id
			fontmap.fontsets[i] = font;					// font-id to font-descriptor
		}
	} catch (e) {
		if (!e.code || e.code != 'MODULE_NOT_FOUND') {
			console.log(e);
		}
	}
})();

// bwipjs needs the following interfaces:
//  lookup(fontname)    returns fontid
//  monochrome(bool)    set the fonts to monochrome or anti-aliased
//  getglyph(fontid, charcode, width, height)
module.exports = {
	lookup:lookup,
	monochrome:monochrome,
	getglyph:getglyph,
}

function lookup(name) {
	var fontid = fontmap.names[name.toUpperCase()];
	return fontid === undefined ? 1 : fontid;		// OCR B default
}

function monochrome(mono) {
	monochr = mono;
}

// `width` and `height` are the same size, scaled respectively by the
// x,y factors.  Because bar code width is what we care about, font
// width is the only metric we use to match the font.
function getglyph(fontid, charcode, width, height) {
	if (fontid < 0 || fontid >= fontmap.fontsets.length) {
		fontid = 1;		// OCR B default
	}
	var fontset = fontmap.fontsets[fontid];
	if (width < fontset.minsize) {
		width = fontset.minsize;
	} else if (width > fontset.maxsize) {
		width = fontset.maxsize;
	}

	// Find the largest size not exceeding
	var size = width;
	while (size > 5 && !fontset.sizes[size]) {
		size--;
	}
	if (size == 5) {
		throw 'font-size too small (' + width + ')';
	}

	var fkey = (monochr ? 'm' : 'a') + size;
	var font = fontset.fonts[fkey];

	// demand-load the font file
	if (!font) {
		// We can avoid this Sync() interface (the browser version does), but
		// requires more work for the user.
		var bytes = fs.readFileSync(__dirname + '/fonts/fnt' + fontid +
									(monochr ? 'm-' : 'a-') + size + '.bin');
		fontset.fonts[fkey] = font = { bytes:bytes, glyphs:[] };
	} 

	// Convert the charcode to a glyph index
	if (charcode < fontset.minchar || charcode > fontset.maxchar) {
		charcode = fontset.minchar;		// default, space
	}
	charcode -= fontset.minchar;

	var glyph = font.glyphs[charcode];
	if (!glyph) {
		var bytes  = font.bytes;
		var offset = bytes.readUInt32LE(charcode * 4);
		font.glyphs[charcode] = glyph = {
			advance: bytes.readUInt16LE(offset),
			top:	 bytes.readInt16LE(offset + 2),
			left:	 bytes.readInt16LE(offset + 4),
			width:	 bytes.readUInt16LE(offset + 6),
			height:	 bytes.readUInt16LE(offset + 8),
			offset:  offset + 10,
			bytes:	 bytes,
		};
	}

	return glyph;
}

