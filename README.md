# // Barcode Writer in Pure JavaScript


<a href="http://metafloor.github.io/bwip-js"><img alt="bwip-js" align="right" src="http://metafloor.github.io/bwip-js/images/bwip-js.png"></a>
bwip-js is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode).  The translated code can run on any modern browser or JavaScript-based server framework.

The software has encoding modules for over 90 different barcode types and standards.
All linear and two-dimensional barcodes in common use (and many uncommon
ones) are available.  An exhaustive list of supported barcode types can be
found at the end of this document.

bwip-js has finally hit the 1.0 release.  This release uses a newly developed
optimizing PostScript to JavaScript cross-compiler that reduces code size and
improves performance, in some cases an order-of-magnitude decrease in run time.
See the [Version 1.0 Release Announcement](https://github.com/metafloor/bwip-js/wiki/Version-1.0-Release-Announcement) for more details.

> Version 1.0 is an API breaking release.  If you are using the demo or
> the Node.js module without modification, there is no change.  If you have
> customized the node module or integrated bwip-js into your code directly,
> you will need to make some adjustments.
>
> The new JavaScript API is significantly simplified.  Asynchronous module
> loading has been eliminated.  You simply load or `require()` three modules
> (FreeType, BWIPP, and bwip-js) rather than having to create separate
> execution contexts and asynchronously load into them.
> 
> See [Integrating With Your Code](https://github.com/metafloor/bwip-js/wiki/Integrating-With-Your-Code) for more details.

## Status 

* Current bwip-js version is 1.1.1 (2016-09-19)
* Current BWIPP version is 2016-08-29
* Node.js compatibility >= v0.10

## Links

* [Home Page](http://metafloor.github.io/bwip-js/)
* [Repository](https://github.com/metafloor/bwip-js)
* [Online Barcode Generator](http://metafloor.github.io/bwip-js/demo/demo.html)
* [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/Online-Barcode-API)
* [Node.js npm Page](https://www.npmjs.com/package/bwip-js)
* [BWIPP Documentation](https://github.com/bwipp/postscriptbarcode/wiki)
* [Differences between BWIPP and bwipjs](https://github.com/metafloor/bwip-js/wiki/Differences-between-BWIPP-and-bwipjs)
* [Supported Barcode Types](https://github.com/metafloor/bwip-js/wiki/BWIPP-Barcode-Types)

## Online Barcode Generator

An [online barcode generator](http://metafloor.github.io/bwip-js/demo/demo.html)
demonstrates all of the features of bwip-js.  All features and options of BWIPP are available, along with the font rendering provided by the FreeType library.
It also allows using your own fonts.  The fonts are stored locally on your
computer; the demo is 100% client-side JavaScript.

The demo is tested on the latest versions of Firefox and Chrome, along with IE10 and IE11.
Microsoft Edge should work, and so should the latest versions of Opera and Safari,
but they are untested.

## Online Barcode API

A bwip-js barcode service is available online, ready to serve up barcode images
on demand.

You can generate barcodes from anywhere on the web.  Embed the URLs in your
HTML documents or retrieve the barcode images directly from your non-JavaScript
server.  (JavaScript-based servers should use the bwip-js code directly - it will
be a lot more performant.)

For details on how to use this service, see [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/Online-Barcode-API).

## Node.js Request Handler

The online barcode API is implemented as a Node.js application.  The code
used for the service is available as part of the bwip-js source code.
See the [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/Online-Barcode-API) for details on how the URL query parameters must be structured.

A working, minimal example of how to use the request handler can be found in
`server.js`:

```javascript
// Simple HTTP server that renders barcode images using bwip-js.
var http   = require('http');
var bwipjs = require('bwip-js');

// Example of how to load a font into bwipjs. 
//    bwipjs.loadFont(fontname, sizemult, fontdata)
//
// To unload a font (and free up space for another):
//    bwipjs.unloadFont(fontname)
//
bwipjs.loadFont('Inconsolata', 108,
            require('fs').readFileSync('fonts/Inconsolata.otf', 'binary'));

http.createServer(function(req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIPJS: Unknown request format.', 'utf8');
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
            require('fs').readFileSync('fonts/Inconsolata.otf', 'binary'));

bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type
        text:        '0123456789',    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
        textfont:    'Inconsolata',   // Use your custom font
        textsize:    13               // Font size, in points
    }, function (err, png) {
        if (err) {
            // Decide how to handle the error
            // `err` may be a string or Error object
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
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

- `paddingwidth` : Sets the left and right padding (in points/pixels) around the rendered barcode.  Rotates and scales with the image.
- `paddingheight` : Sets the top and bottom padding (in points/pixels) around the rendered barcode.  Rotates and scales with the image.
- `monochrome` : Sets the human-readable text to render in monochrome.  Boolean `true` or `false`.  Default is `false` which renders 256-level gray-scale anti-aliased text.

You will need to consult the
[BWIPP documentation](https://github.com/bwipp/postscriptbarcode/wiki)
to determine what options are available for each barcode type.

## Command Line Interface

bwip-js can be used as a command line tool.

```
npm install -g bwip-js
bwip-js --help
```

Usage example:

```
bwip-js --bcid=qrcode --text=123456789 ~/qrcode.png
```

## Installation

You can download the latest npm module using:

```
npm install bwip-js
```

Or the latest code from github:

	https://github.com/metafloor/bwip-js

(The bwip-js master branch and the npm version are kept sync'd.)

The software is organized as follows:

    bwip-js/
        barcode.ps       # The BWIPP PostScript barcode library
        bwipjs.js        # Main bwipjs code
        bwipp.js         # The cross-compiled BWIPP code
        demo.html        # The bwipjs demo
        freetype.js      # The Emscripten-compiled FreeType library
        node-bwipjs.js   # Node.js module
        node-zlibPNG.js  # Node.js module that implements a PNG encoder
        package.json     # Node.js/npm configuration
        server.js        # Node.js example server
        fonts/           # OCR and Inconsolata font files
        lib/             # Utilities required by the demo

The above files are part of the *master* branch.  If you wish to 
compile bwip-js on your own, you will need to clone the *develop* branch, 
which contains the cross-compiler, test framework, code-coverage files,
benchmark framework, image proofs, etc.  Everything used to create and
validate bwip-js.

For details on how to compile and test bwip-js, see [Compiling bwipjs](https://github.com/metafloor/bwip-js/wiki/Compiling-bwipjs).


## Demo Usage

To run the demo from your HTTP server, you should install the `bwip-js`
directory
under the server's root document directory and modify the server's configuration
files, if necessary.  Then navigate your browser to `bwip-js/demo.html`.

> You cannot run the demo using a `file://` URL.  The freetype library demand
> loads files using XHR, which must run over HTTP.

If you would like to implement your own interface to bwip-js, see [Integrating With Your Code](https://github.com/metafloor/bwip-js/wiki/Integrating-With-Your-Code).  You should also look at the `node-bwipjs.js` module to see
how it was done for Node.js.

## Supported Barcode Types

&#x2022; auspost : AusPost 4 State Customer Code &#x2022; azteccode : Aztec Code &#x2022; azteccodecompact : Compact Aztec Code &#x2022; aztecrune : Aztec Runes &#x2022; bc412 : BC412 &#x2022; channelcode : Channel Code &#x2022; codablockf : Codablock F &#x2022; code11 : Code 11 &#x2022; code128 : Code 128 &#x2022; code16k : Code 16K &#x2022; code2of5 : Code 25 &#x2022; code32 : Italian Pharmacode &#x2022; code39 : Code 39 &#x2022; code39ext : Code 39 Extended &#x2022; code49 : Code 49 &#x2022; code93 : Code 93 &#x2022; code93ext : Code 93 Extended &#x2022; codeone : Code One &#x2022; coop2of5 : COOP 2 of 5 &#x2022; daft : Custom 4 state symbology &#x2022; databarexpanded : GS1 DataBar Expanded &#x2022; databarexpandedcomposite : GS1 DataBar Expanded Composite &#x2022; databarexpandedstacked : GS1 DataBar Expanded Stacked &#x2022; databarexpandedstackedcomposite : GS1 DataBar Expanded Stacked Composite &#x2022; databarlimited : GS1 DataBar Limited &#x2022; databarlimitedcomposite : GS1 DataBar Limited Composite &#x2022; databaromni : GS1 DataBar Omnidirectional &#x2022; databaromnicomposite : GS1 DataBar Omnidirectional Composite &#x2022; databarstacked : GS1 DataBar Stacked &#x2022; databarstackedcomposite : GS1 DataBar Stacked Composite &#x2022; databarstackedomni : GS1 DataBar Stacked Omnidirectional &#x2022; databarstackedomnicomposite : GS1 DataBar Stacked Omnidirectional Composite &#x2022; databartruncated : GS1 DataBar Truncated &#x2022; databartruncatedcomposite : GS1 DataBar Truncated Composite &#x2022; datalogic2of5 : Datalogic 2 of 5 &#x2022; datamatrix : Data Matrix &#x2022; datamatrixrectangular : Data Matrix Rectangular &#x2022; ean13 : EAN-13 &#x2022; ean13composite : EAN-13 Composite &#x2022; ean14 : GS1-14 &#x2022; ean2 : EAN-2 (2 digit addon) &#x2022; ean5 : EAN-5 (5 digit addon) &#x2022; ean8 : EAN-8 &#x2022; ean8composite : EAN-8 Composite &#x2022; flattermarken : Flattermarken &#x2022; gs1-128 : GS1-128 &#x2022; gs1-128composite : GS1-128 Composite &#x2022; gs1-cc : GS1 Composite 2D Component &#x2022; gs1datamatrix : GS1 Data Matrix &#x2022; gs1datamatrixrectangular : GS1 Data Matrix Rectangular &#x2022; gs1qrcode : GS1 QR Code &#x2022; hanxin : Han Xin Code &#x2022; hibcazteccode : HIBC Aztec Code &#x2022; hibccodablockf : HIBC Codablock F &#x2022; hibccode128 : HIBC Code 128 &#x2022; hibccode39 : HIBC Code 39 &#x2022; hibcdatamatrix : HIBC Data Matrix &#x2022; hibcdatamatrixrectangular : HIBC Data Matrix Rectangular &#x2022; hibcmicropdf417 : HIBC MicroPDF417 &#x2022; hibcpdf417 : HIBC PDF417 &#x2022; hibcqrcode : HIBC QR Code &#x2022; iata2of5 : IATA 2 of 5 &#x2022; identcode : Deutsche Post Identcode &#x2022; industrial2of5 : Industrial 2 of 5 &#x2022; interleaved2of5 : Interleaved 2 of 5 (ITF) &#x2022; isbn : ISBN &#x2022; ismn : ISMN &#x2022; issn : ISSN &#x2022; itf14 : ITF-14 &#x2022; japanpost : Japan Post 4 State Customer Code &#x2022; kix : Royal Dutch TPG Post KIX &#x2022; leitcode : Deutsche Post Leitcode &#x2022; matrix2of5 : Matrix 2 of 5 &#x2022; maxicode : MaxiCode &#x2022; micropdf417 : MicroPDF417 &#x2022; microqrcode : Micro QR Code &#x2022; msi : MSI Modified Plessey &#x2022; onecode : USPS Intelligent Mail &#x2022; pdf417 : PDF417 &#x2022; pdf417compact : Compact PDF417 &#x2022; pharmacode : Pharmaceutical Binary Code &#x2022; pharmacode2 : Two-track Pharmacode &#x2022; planet : USPS PLANET &#x2022; plessey : Plessey UK &#x2022; posicode : PosiCode &#x2022; postnet : USPS POSTNET &#x2022; pzn : Pharmazentralnummer (PZN) &#x2022; qrcode : QR Code &#x2022; rationalizedCodabar : Codabar &#x2022; raw : Custom 1D symbology &#x2022; royalmail : Royal Mail 4 State Customer Code &#x2022; sscc18 : SSCC-18 &#x2022; symbol : Miscellaneous symbols &#x2022; telepen : Telepen &#x2022; telepennumeric : Telepen Numeric &#x2022; upca : UPC-A &#x2022; upcacomposite : UPC-A Composite &#x2022; upce : UPC-E &#x2022; upcecomposite : UPC-E Composite &#x2022;\n
