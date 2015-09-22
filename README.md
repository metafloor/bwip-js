# // Barcode Writer in Pure JavaScript



<a href="http://metafloor.github.io/bwip-js"><img alt="bwip-js" align="right" src="http://metafloor.github.io/bwip-js/images/bwip-js.png"></a>
bwip-js is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode).  The translated code can run on any modern browser or JavaScript-based server framework.

The software has encoding modules for over 90 different barcode types and standards.
All linear and two-dimensional barcodes in common use (and many uncommon
ones) are available.  An exhaustive list of supported barcode types can be found at
the end of this document.

## Note to DataMatrix Bar Code Users

If you are using bwip-js version 14.0.0 or 14.0.1, please upgrade immediately.
There was a PostScript emulation bug that was exercised by new code added to
BWIPP version 2015-08-10.  bwip-js version 14.0.2 fixes the issue.

## Status 

* Current bwip-js version is 0.14.2 (22-Sep-2015)
* Current BWIPP version is 2015-08-10
* Node.js compatibility >= v0.10 (reported to work with v0.8 but not tested).
* npm dependencies: none

## Links

* [Home Page](http://metafloor.github.io/bwip-js/)
* [Repository](https://github.com/metafloor/bwip-js)
* [Online Barcode Generator](http://metafloor.github.io/bwip-js/demo/demo.html)
* [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/bwip-js-Online-Barcode-Generator-API)
* [Node.js npm Page](https://www.npmjs.com/package/bwip-js)
* [BWIPP Documentation](https://github.com/bwipp/postscriptbarcode/wiki)
* [Symbologies Supported by BWIPP/bwip-js](https://github.com/metafloor/bwip-js/wiki/Supported-Barcode-Symbologies)

## Online Barcode Generator

An [online barcode generator](http://metafloor.github.io/bwip-js/demo/demo.html)
demonstrates all of the features of bwip-js.
It showcases the new font rendering provided by the FreeType library,
and allows using your own fonts.  All fonts are stored locally on your computer;
the generator is 100% client-side JavaScript.

The demo is tested on the latest versions of Firefox and Chrome, along with IE10.
IE11 should work, and so should the latest versions of Opera and Safari,
but they are untested.

## Online Barcode API

A bwip-js barcode service is available online, ready to serve up barcode images
on demand.

You can generate barcodes from anywhere on the web.  Embed the URLs in your
HTML documents or retrieve the barcode images directly from your non-JavaScript
server.  (JavaScript-based servers should use the bwip-js code directly - it will
be a lot more performant.)

For details on how to use this service, see 
[Online Barcode Generator API](https://github.com/metafloor/bwip-js/wiki/bwip-js-Online-Barcode-Generator-API).

## Node.js Request Handler

The online barcode service is implemented as a Node.js application.  The code used
for the service is available as part of the bwip-js source code.
See the
[Barcode API](https://github.com/metafloor/bwip-js/wiki/bwip-js-Online-Barcode-Generator-API) for details on how the URL query parameters must be structured.

The following is a minimal example of how to use the request handler:

```javascript
// Simple HTTP server that renders bar code images using bwip-js.
var http   = require('http');
var bwipjs = require('bwip-js');

// Example of how to load a font into bwipjs. 
//	bwipjs.loadFont(fontname, sizemult, fontdata)
//
// To unload a font (and free up space for another):
//	bwipjs.unloadFont(fontname)
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
```

If you run the above code on your local machine, you can test with the following URL:

```
http://localhost:3030/?bcid=isbn&text=978-1-56581-231-4+52250&includetext&guardwhitespace
```

The bwip-js request handler only operates on the URL query parameters and
ignores all path information.  Your application is free to structure the URL
path as needed to implement the desired HTTP request routing.

## Node.js Image Generator

You can also use bwip-js to generate PNG images directly.

```javascript
var bwipjs = require('bwip-js');

// Optionally load some custom fonts.  Maximum 8.
// OpenType and TrueType are supported.
bwipjs.loadFont('Inconsolata', 108,
            require('fs').readFileSync('Inconsolata.otf', 'binary'));

bwipjs.toBuffer({
		bcid:			'code128',		// Barcode type
		text:			'0123456789',	// Text to encode
		scale:			3,				// 3x scaling factor
		height:			10,				// Bar height, in millimeters
		includetext:	true,			// Show human-readable text
		textxalign:		'center',		// Always good to set this
		textfont:		'Inconsolata',	// Use your custom font
		textsize:		13				// Font size, in points
	}, function (err, png) {
		if (err) {
			// Decide how to handle the error
			// `err` may be a string or Error object
		} else {
			// `png` is a Buffer
			// png.length 			: PNG file length
			// png.readUInt32BE(16)	: PNG image width
			// png.readUInt32BE(20)	: PNG image height
		}
	});
```

Only the first two options `bcid` and `text` are required.  The other bwip-js
specific options are:

- `scaleX` : The x-axis scaling factor.  Must be an integer > 0.  Default is 2.
- `scaleY` : The y-axis scaling factor.  Must be an integer > 0.  Default is `scaleX`.
- `scale` : Sets both the x-axis and y-axis scaling factors.  Must be an integer > 0.

- `rotate` : Allows rotating the image to one of the four orthogonal orientations.  A string value.  Must be one of:

    * `"N"` : Normal (not rotated).  The default.
    * `"R"` : Clockwise (right) 90 degree rotation.
    * `"L"` : Counter-clockwise (left) 90 degree rotation.
    * `"I"` : Inverted 180 degree rotation.

- `monochrome` : Sets the human-readable text to render in monochrome.  Boolean `true` or `false`.  Default is `false` which renders 256-level gray-scale anti-aliased text.

You will need to consult the
[BWIPP documentation](https://github.com/bwipp/postscriptbarcode/wiki)
to determine what options are available for each barcode type.


## Features

An
[Emscripten compiled](http://kripken.github.io/emscripten-site/index.html)
version of the [FreeType library](http://freetype.org/) is integrated into bwip-js.

Embedded in the FreeType library are open-source versions of the OCR-A and OCR-B
fonts provided by the
[Tsukurimashou Font Family](http://en.sourceforge.jp/projects/tsukurimashou/releases/)
project.

A description of how FreeType was compiled for use with bwip-js can be found at:
[Compiling FreeType with Emscripten](https://github.com/metafloor/bwip-js/wiki/Compiling-FreeType).

### OCR Fonts

The barcode images generated by bwip-js are essentially identical to using BWIPP with 
[Ghostscript](http://www.ghostscript.com/).  The most significant
difference is the use of the OCR-A and OCR-B fonts.
Barcodes and the OCR fonts are like
chocolate and hazelnut; they were meant to go together.  Unfortunately, most
PostScript environments do not provide the OCR fonts and must fallback to Courier,
Helvetica, and other less-than-ideal typefaces.

The following two images show the differences in typeface.
The image below was rendered by bwip-js:

![bwip-js ISBN](http://metafloor.github.io/bwip-js/images/bwip-js-isbn.png?raw=true)

And the next image was rendered using BWIPP with Ghostscript:

![BWIPP/Ghostscript ISBN](http://metafloor.github.io/bwip-js/images/bwipp-isbn.png?raw=true)


The new font functionality is implemented with the following logic:

 * OCR-B is used as the default font for all barcodes.
 * OCR-A is used for the extra text on the ISBN, ISMN and ISSN symbols.

These defaults can be overridden using BWIPP options.
The fonts are known to the PostScript emulation as `OCR-A` and `OCR-B`.
For example, to switch the font to OCR-A, you would specify the option:

```
textfont=OCR-A
```

For the text above the barcode on the ISBN, ISMN, and ISSN symbols, the font
can be changed using ``isbntextfont``, ``ismntextfont``, and ``issntextfont``,
respectively.

The code in `demo.html` shows how to load your own fonts into bwip-js.  See 
[Preloading Fonts Into FreeType](https://github.com/metafloor/bwip-js/wiki/Preloading-Fonts-Into-FreeType)
and [Loading Fonts During Runtime](https://github.com/metafloor/bwip-js/wiki/Loading-Fonts-During-Runtime)
for descriptions of the two techniques.

The online barcode generator pre-loads the
[Inconsolata font](http://www.levien.com/type/myfonts/inconsolata.html),
which can be seen using the option:

```
textfont=Inconsolata
```

For example, we can render an alternate version of the ISBN barcodes shown above
with the Inconsolata font using the BWIPP options:

```
includetext guardwhitespace textfont=Inconsolata isbntextfont=Inconsolata isbntextsize=11
```

![ISBN Using Inconsolata](http://metafloor.github.io/bwip-js/images/isbn-inconsolata.png?raw=true)

### Background Color

A second difference between BWIPP and bwip-js rendering occurs with the
`backgroundcolor` option.  The BWIPP implementation of background color is a bit
inconsistent.  For some bar code types, the background color extends into the
human readable text, and for others, it does not.  The bwip-js PostScript emulation
implements BWIPP's background color handling but the front-end interfaces
in the demo and in the node module explicitly override the option.  They extend
the background color to cover the entire image, including all human readable text.

The first/left image in each pair is from BWIPP using ghostscript, the second from
bwip-js.

![BWIPP EAN-13](http://metafloor.github.io/bwip-js/images/bwipp-ean13-bg.png?raw=true)
![bwip-js EAN-13](http://metafloor.github.io/bwip-js/images/bwip-js-ean13-bg.png?raw=true)

![BWIPP Code128](http://metafloor.github.io/bwip-js/images/bwipp-code128-bg.png?raw=true)
![bwip-js Code128](http://metafloor.github.io/bwip-js/images/bwip-js-code128-bg.png?raw=true)

![BWIPP ISBN](http://metafloor.github.io/bwip-js/images/bwipp-isbn-bg.png?raw=true)
![bwip-js ISBN](http://metafloor.github.io/bwip-js/images/bwip-js-isbn-bg.png?raw=true)

If you want to use BWIPP's original background color handling, look for the
following lines in `node-bwipjs` (or `lib/canvas.js` if using the browser code):

```
// Feature or bug, BWIPP does not extend the background color into
// the human readable text.  Fix that in the bitmap interface.
if (opts.backgroundcolor) {
	bw.bitmap(new Bitmap(parseInt(''+opts.backgroundcolor, 16)));
	delete opts.backgroundcolor;
} else {
	bw.bitmap(new Bitmap);
}
```

Comment out or remove the `if` part of the logic, leaving only `bw.bitmap(new Bitmap);`.

By default, if the `backgroundcolor` option is not specified, bwip-js renders the
image with a transparent background.


## Installation

You can download the latest npm module using:

```
npm install bwip-js
```

Or the latest code from github:

	https://github.com/metafloor/bwip-js

The software is organized in the following directory structure:

	bwip-js/
		bwip.js			# Main bwip-js code.
		demo.html		# The bwip-js demo
		freetype.js		# The Emscripten-compiled FreeType library
		freetype.js.mem	# Demand loaded memory image
		node-bwipjs		# Node.js module
		node-zlibPNG	# Node.js module that implements a PNG encoder
		package.json	# Node.js/npm configuration
		bwipp/			# The cross-compiled BWIPP encoders and renderers
		lib/			# Utilities required by the demo


## Usage

> **Version 0.8 was an API-breaking release.**  If you have implemented code based on 
> previous versions, you must update your code in three areas.  This 
> [wiki page](https://github.com/metafloor/bwip-js/wiki/v0.8-API-Changes) describes
> the changes.

> **Using the demo with a file:// URL is no longer supported.**
>
> Emscripten optimizes the FreeType library by separating the memory intialization
> image and using XHR (when running in a browser) to demand load it.  Because of
> this, you can no longer reliably use the demo via the `file://` scheme in a
> browser's URL bar.  Firefox supports XHR with `file://`, Chrome and IE do not.

To run the demo from your HTTP server, you should install the bwip-js directory
under the server's root document directory and modify the server's configuration
files, if necessary.  Then navigate your browser to the `bwip-js/demo.html` file.

If you would like to implement your own interface to bwip-js, see [Integrating bwip.js Into Your Code](https://github.com/metafloor/bwip-js/wiki/Integrating-bwip.js-Into-Your-Code).  I would also recommend looking at the `node-bwipjs` module to see how it
was done for Node.js.  Getting the FreeType module to cooperate with the
BWIPP cross-compiled code was not straightforward.

## Supported Barcode Types

&#x2022; AusPost 4 State Customer Code &#x2022; Aztec Code &#x2022; Aztec Runes &#x2022; BC412 &#x2022; Channel Code &#x2022; Codabar &#x2022; Codablock F &#x2022; Code 11 &#x2022; Code 128 &#x2022; Code 16K &#x2022; Code 25 &#x2022; Code 39 &#x2022; Code 39 Extended &#x2022; Code 49 &#x2022; Code 93 &#x2022; Code 93 Extended &#x2022; Code One &#x2022; Compact Aztec Code &#x2022; Compact PDF417 &#x2022; COOP 2 of 5 &#x2022; Custom 1D symbology &#x2022; Custom 4 state symbology &#x2022; Data Matrix &#x2022; Datalogic 2 of 5 &#x2022; Deutsche Post Identcode &#x2022; Deutsche Post Leitcode &#x2022; EAN-13 &#x2022; EAN-13 Composite &#x2022; EAN-2 (2 digit addon) &#x2022; EAN-5 (5 digit addon) &#x2022; EAN-8 &#x2022; EAN-8 Composite &#x2022; Flattermarken &#x2022; GS1 Composite 2D Component &#x2022; GS1 Data Matrix &#x2022; GS1 DataBar Expanded &#x2022; GS1 DataBar Expanded Composite &#x2022; GS1 DataBar Expanded Stacked &#x2022; GS1 DataBar Expanded Stacked Composite &#x2022; GS1 DataBar Limited &#x2022; GS1 DataBar Limited Composite &#x2022; GS1 DataBar Omnidirectional &#x2022; GS1 DataBar Omnidirectional Composite &#x2022; GS1 DataBar Stacked &#x2022; GS1 DataBar Stacked Composite &#x2022; GS1 DataBar Stacked Omnidirectional &#x2022; GS1 DataBar Stacked Omnidirectional Composite &#x2022; GS1 DataBar Truncated &#x2022; GS1 DataBar Truncated Composite &#x2022; GS1 QR Code &#x2022; GS1-128 &#x2022; GS1-128 Composite &#x2022; GS1-14 &#x2022; HIBC Codablock F &#x2022; HIBC Code 128 &#x2022; HIBC Code 39 &#x2022; HIBC Data Matrix &#x2022; HIBC MicroPDF417 &#x2022; HIBC PDF417 &#x2022; HIBC QR Code &#x2022; IATA 2 of 5 &#x2022; Industrial 2 of 5 &#x2022; Interleaved 2 of 5 (ITF) &#x2022; ISBN &#x2022; ISMN &#x2022; ISSN &#x2022; Italian Pharmacode &#x2022; ITF-14 &#x2022; Japan Post 4 State Customer Code &#x2022; Matrix 2 of 5 &#x2022; MaxiCode &#x2022; Micro QR Code &#x2022; MicroPDF417 &#x2022; Miscellaneous symbols &#x2022; MSI Modified Plessey &#x2022; PDF417 &#x2022; Pharmaceutical Binary Code &#x2022; Pharmazentralnummer (PZN) &#x2022; Plessey UK &#x2022; PosiCode &#x2022; QR Code &#x2022; Royal Dutch TPG Post KIX &#x2022; Royal Mail 4 State Customer Code &#x2022; SSCC-18 &#x2022; Telepen &#x2022; Telepen Numeric &#x2022; Two-track Pharmacode &#x2022; UPC-A &#x2022; UPC-A Composite &#x2022; UPC-E &#x2022; UPC-E Composite &#x2022; USPS Intelligent Mail &#x2022; USPS PLANET &#x2022; USPS POSTNET &#x2022;

