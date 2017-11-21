// file : bwip-js/browser-fonts.js
//
// Defines a browser-based font manager.
//
// Copyright (c) 2011-2017 Mark Warren
//
// Licensed MIT.  See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
"use strict";

// bwipjs needs the following interfaces:
//  lookup(fontname)    returns fontid
//  monochrome(bool)    set the fonts to monochrome or anti-aliased
//  getglyph(fontid, charcode, width, height)
//
// And the user-level code needs an onready event to notify when it is safe
// to start making bar codes.  And a loadfonts() to demand-load font bitmaps.
module.exports = {
	lookup:lookup,
	monochrome:monochrome,
	getglyph:getglyph,
	loadfonts:loadfonts,
	onready:onready,
};

// Module globals, wrapped.  The name bwipjs_fonts is known to the font-descriptions.
var bwipjs_fonts = {
	monocolor: false,	// aka monochrome
	fontsets: [],
	names: {},
	toload:	{},
	onready: null,
};

// Load the font metrics
(function() {
	// Begin loading the font metrics
	metrics(0);

	function metrics(id) {
		var xhr = new XMLHttpRequest;
		var root = (typeof process == 'object' && typeof process.env == 'object' &&
					process.env.PUBLIC_URL) || '';
		xhr.open('GET', root + '/bwipjs-fonts/fnt' + id + '-desc.js', true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				// The description files always start with //
				if (/^\s*\/\//.test(xhr.responseText)) {
					eval(xhr.responseText);
					metrics(id+1);
				} else if (bwipjs_fonts.onready) {
					bwipjs_fonts.onready.call(null);
				}
			}
		}
		xhr.onerror = function (e) {
			if (bwipjs_fonts.onready) {
				bwipjs_fonts.onready.call(e);
			} else {
				throw e;
			}
		}
		xhr.send(null);
	}
})();

function onready(callback) {
	bwipjs_fonts.onready = callback;
}

function lookup(name) {
	var fontid = bwipjs_fonts.names[name.toUpperCase()];
	return fontid === undefined ? 1 : fontid;		// OCR B default
}

function monochrome(mono) {
	bwipjs_fonts.monocolor = mono;
}

function loadfonts(callback) {
	var count = 0;
	for (var temp in bwipjs_fonts.toload) {
		(function(fontpath, font) {
			var xhr = new XMLHttpRequest;
			var root = (typeof process == 'object' && typeof process.env == 'object' &&
						process.env.PUBLIC_URL) || '';
			xhr.open('GET', root + '/bwipjs-fonts/' + fontpath, true);
			xhr.responseType = 'arraybuffer';
			xhr.onload = function(e) {
				if (xhr.status == 200) {
					font.bytes = new Uint8Array(xhr.response);
					font.view  = new DataView(xhr.response);
				}
				if (--count == 0) {
					callback();
				}
			}

			count++;
			xhr.send(null);
		})(temp, bwipjs_fonts.toload[temp]);
	}
	bwipjs_fonts.toload = {};

	if (!count) {
		callback();
	}
}


// `width` and `height` are the same size, scaled respectively by the
// x,y factors.  Because bar code width is what we care about, font
// width is the only metric we use to match the font.
function getglyph(fontid, charcode, width, height) {
	if (fontid < 0 || fontid >= bwipjs_fonts.fontsets.length) {
		if (bwipjs_fonts.fontsets.length < 2) {
			throw 'bwipjs: fonts are not loaded';
		}
		fontid = 1;		// OCR B default
	}
	var fontset = bwipjs_fonts.fontsets[fontid];
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
		throw 'font-size not supported (' + width + ')';
	}

	var key  = (bwipjs_fonts.monocolor ? 'm' : 'a') + size;
	var font = fontset.fonts[key];

	// Need to demand-load the font bitmap?
	if (!font) {
		fontset.fonts[key] = font = { glyphs:[] };
		bwipjs_fonts.toload['fnt' + fontid + (bwipjs_fonts.monocolor ? 'm-' : 'a-') + size + '.bin'] = font;
	}

	// Convert the charcode to a glyph index.  Simple 7-bit printable ascii.
	// No special mapping supported.
	if (charcode < fontset.minchar || charcode > fontset.maxchar) {
		charcode = fontset.minchar;
	}
	charcode -= fontset.minchar;

	var glyph = font.glyphs[charcode];
	if (!glyph) {
		var glidx = charcode * 5;
		var metrics = fontset.metrics[key];
		font.glyphs[charcode] = glyph = {
				advance: metrics[glidx + 0],
				top:	 metrics[glidx + 1],
				left:	 metrics[glidx + 2],
				width:	 metrics[glidx + 3],
				height:	 metrics[glidx + 4],
			};
	}

	// Once the glyph bitmaps have been loaded, we can initialize the remainder of each glyph
	if (!glyph.offset && font.bytes) {
		glyph.offset = font.view.getUint32(charcode * 4, true) + 10;
		glyph.bytes  = font.bytes;
	}

	return glyph;
}

