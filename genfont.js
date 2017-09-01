// file : genfont
//
// Usage:
//		node genfont 0|1 [sizes...]
//		node genfont 2 10
//		node genfont font-name font-file font-id multipler [sizes...]
//
//
// If sizes are not specified, the defaults are:  8 9 10 12
//
// Example:
//		node genfont 0		## OCR-A
//		node genfont 1		## OCR-B
//		node genfont 2 10	## SYMBOL
//		node genfont Inconsolata fonts/Inconsolata.otf 3 108

var fs			= require('fs');
var freetype	= require('./freetype');
var zlibPNG		= require('./zlibPNG');

var ft_monochr	= freetype.cwrap("monochrome", 'number', ['number']);
var ft_lookup	= freetype.cwrap("find_font", 'number', ['string']);
var ft_bitmap	= freetype.cwrap("get_bitmap", 'number',
									['number','number','number','number']);
var ft_width	= freetype.cwrap("get_width", 'number', []);
var ft_height	= freetype.cwrap("get_height", 'number', []);
var ft_left		= freetype.cwrap("get_left", 'number', []);
var ft_top		= freetype.cwrap("get_top", 'number', []);
var ft_advance	= freetype.cwrap("get_advance", 'number', []);

//	Usage: node genfont font-id sizes...
if (/^[01]$/.test(process.argv[2])) {
	var fontid = +process.argv[2];
	var findex = fontid;
	var points = process.argv.slice(3);
	var fontname = fontid == 0 ? 'OCRA' : 'OCRB';
	if (!points || !points.length) {
		points = [ 8, 9, 10, 12 ]
	}
} else if (process.argv.length >= 6) {
	var fontname = process.argv[2];
	var fontfile = process.argv[3]
	var fontid = +process.argv[4];
	var sizemult = +process.argv[5];
	var points = process.argv.slice(6);
	if (!points || !points.length) {
		points = [ 8, 9, 10, 12 ]
	}

	freetype.FS_createDataFile('/', fontname, fs.readFileSync(fontfile), true, false);

	var load_font = freetype.cwrap("load_font", 'number',
			['string','string','number']);
	var rv = load_font('/' + fontname, fontname, sizemult);
	if (rv != 0) {
		console.log('font load failed [' + rv + ']');
		process.exit(1);
	}

	var findex = ft_lookup(fontname);
	if (findex != 2) {
		console.log(fontname + ': not index 2 [' + findex + ']');
		process.exit(1);
	}

	if (!/^[3-9]$/.test(fontid)) {
			console.log('arg[3]: expected font-id [3-9]');
			process.exit(1);
	}
} else {
	console.log(
			'Usage:\n' +
			'  node genfont 0|1 [sizes...]\n' +
			'  node genfont font-name font-file font-id multiplier [sizes...]');
	process.exit(1);
}

for (var i = 0; i < points.length; i++) {
	if (!/^\d+$/.test(points[i])) {
		console.log('"' + points[i] + '": expected font size');
		process.exit(1);
	}
}

var sizes = (function() {
	var sizes = [];
	var uniq  = {};
	var scale = 1;
	for ( ; scale < 10; scale++) {
		for (var j = 0; j < points.length; j++) {
			var pts = points[j] * scale;
			if (!uniq[pts]) {
				sizes.push(pts);
				uniq[pts] = pts;
			}
		}
	}
	sizes.sort(function (a,b) { return a - b; });
	return sizes;
})();

// With OCR B, ? @ A-Z are a tad small for some reason...
function fixhgt(cc, size) {
	if (fontid == 1 && cc >= 63 && cc <= 64) {
		return ~~(size * 1.15);
	}
	if (fontid == 1 && cc >= 65 && cc <= 90) {
		return ~~(size * 1.05);
	}
	return 0;		// default font size
}

// The font description must contain the following information to allow
// laying out the glyphs without actually having the bitmaps:
//		top, left, width, height, advance
var allmetrics = {};	// indexed by 'm' or 'a' plus the size.

// start the ball rolling.  0 is the index into params.
genfont(0, true);

function genfont(index, mono) {
	var size = sizes[index];

	ft_monochr(mono);

	// First a dry run to determine ascent and descent
	var maxtop = 0;
	var maxbot = 0;
	var maxadv = 0;
	var bytelen = 0;	// size of bitmap - actually a byte-map.
	for (let cc = 32; cc < 127; cc++) {
		var offset = ft_bitmap(findex, cc, size, fixhgt(cc, size));
		var top = ft_top();
		var hgt = ft_height();
		var wth = ft_width();
		var adv = ft_advance();

		if (maxtop < top) {
			maxtop = top;
		}
		if (maxbot < hgt - top) {
			maxbot = hgt - top;
		}
		if (maxadv < adv) {
			maxadv = adv;
		}
		bytelen += hgt * wth;
	}

	if (mono) {
		console.log({ size:size, maxtop:maxtop, maxbot:maxbot, maxadv:maxadv });
	}

	// Build the sample PNG image and byte-map
	var png = new zlibPNG(maxadv * 96, maxtop + maxbot + 1);

	// The bytemap is:
	// 	{
	//		uint32[]	offset to each glyph (maxchar - minchar + 1 length)
	//		<glyph data>
	//	}
	//	Each glyph layout is:
	//	{
	//		uint16		advance
	//		int16		top
	//		int16		left
	//		uint16		width
	//		uint16		height
	//		uint8[]		glyph data (width * height length)
	//	}
	//  All values little-endian.
	//
	//  The metrics are layed out as:
	//	ASCII is 95 characters (including space, excluding delete).
	var bytemap = Buffer.alloc(95*4 + 95 * 5 * 2 + bytelen);
	var offsidx = 0;	// index into glyph offsets
	var dataidx = 95*4;	// index into glyph data
	var fontmetrics = [];

	for (let cc = 32; cc < 127; cc++) {
		var offset = ft_bitmap(findex, cc, size, fixhgt(cc, size));
		var adv = ft_advance();
		var top = ft_top();
		var lft = ft_left();
		var hgt = ft_height();
		var wth = ft_width();
		var bits = freetype.HEAPU8.subarray(offset, offset + wth * hgt);
		var yoff = maxtop - top;
		var xoff = (cc - 32) * maxadv;

		offsidx = bytemap.writeUInt32LE(dataidx, offsidx);

		dataidx = bytemap.writeUInt16LE(adv, dataidx);
		dataidx = bytemap.writeInt16LE(top, dataidx);
		dataidx = bytemap.writeInt16LE(lft, dataidx);
		dataidx = bytemap.writeUInt16LE(wth, dataidx);
		dataidx = bytemap.writeUInt16LE(hgt, dataidx);

		fontmetrics.push(adv, top, lft, wth, hgt);

		for (var y = 0; y < hgt; y++) {
			for (var x = 0; x < wth; x++) {
                var a = bits[y * wth + x];
                if (a) {
                    png.set(xoff+x, yoff+y, a<<24);
				}
				bytemap[dataidx++] = a;
            }
        }
	}

	allmetrics[(mono ? 'm' : 'a') + size] = fontmetrics;

	if (dataidx != bytemap.length) {
		console.log('dataidx != bytemap.length (' + dataidx + ' != ' + bytemap.length + ')');
		process.exit(1);
	}

	var basename = 'fnt' + fontid + (mono ? 'm-' : 'a-') + size;
	var pngname = 'fnt' + fontid + (mono ? 'm-' : 'a-') + size + '.png';

	fs.writeFileSync('fonts/' + basename + '.bin', bytemap);

	png.render(function (err, png) {
		fs.writeFileSync('fonts/' + pngname, png);
		if (mono) {
			genfont(index, false);
		} else if (index < sizes.length-1) {
			genfont(index+1, true);
		} else {
			var desc = { name:fontname, minsize:sizes[0], maxsize:sizes[sizes.length-1],
					 	 minchar:32, maxchar:126, sizes:{},
						 // Both metrics and fonts are keyed by 'm' or 'a' plus the font size.
						 metrics:allmetrics, fonts:{} };
			for (var s = 0; s < sizes.length; s++) {
				desc.sizes[sizes[s]] = sizes[s];
			}
			fs.writeFileSync('fonts/fnt' + fontid + '-desc.js',
					'// fnt' + fontid + '-desc.js\n' +
					'// $ node genfont ' + process.argv.slice(2).join(' ') + '\n' +
					'(function() {\n' +
					'  var desc = ' + JSON.stringify(desc) + ';\n' +
					'  if (typeof bwipjs_fonts == "object") {\n' +
					'    bwipjs_fonts.fontsets[' + fontid + '] = desc;\n' +
					'    bwipjs_fonts.names[' + JSON.stringify(fontname.toUpperCase()) + 
							'] = ' + fontid + ';\n' +
					// Alias OCRA and OCRB to OCR-A and OCR-B
					(fontid > 1 ? '' : 
						'    bwipjs_fonts.names["' + fontname.replace(/\w$/, '-$&') +
								'"] = ' + fontid + ';\n') +
					'  } else {\n' +
					'    module.exports = desc;\n' +
					'  }\n' +
					'})();\n',
					'binary');
		}
	});
}

