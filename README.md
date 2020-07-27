# // Barcode Writer in Pure JavaScript


<a href="http://metafloor.github.io/bwip-js"><img alt="bwip-js" align="right" src="http://metafloor.github.io/bwip-js/images/bwip-js.png"></a>
bwip-js is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode).  The translated code can run on any modern browser or JavaScript-based server framework.

The software has encoding modules for over 100 different barcode types and standards.
All linear and two-dimensional barcodes in common use (and many uncommon
ones) are available.  An exhaustive list of supported barcode types can be
found at the end of this document.

> Version 2.0 introduces a new font rendering module based on the code at
> [stb_truetype.h](https://github.com/nothings/stb/blob/master/stb_truetype.h).
> This port was manually converted from the original C source and is both small and fast.
> It implements scalable, anti-aliased fonts and has been tuned to produce nearly identical
> character metrics as FreeType.  The new library is usable in both Node.js and modern browsers.
>
> The emscripten compiled freetype.js and the bitmapped fonts used in prior versions have
> been removed from this project.  Likewise, the extra steps needed to get the bitmapped
> fonts to work in the browser have been eliminated.
>
> To upgrade your code to the 2.0 release, you *must* make some minor changes.
> See [Upgrading to 2.0](https://github.com/metafloor/bwip-js/wiki/Upgrading-to-2.0).

## Status 

* Current bwip-js version is 2.0.10 (2020-07-27)
* Current BWIPP version is 2019-11-08
* Node.js compatibility: 0.12+
* Browser compatibility: Edge, Firefox, Chrome

## Supported Platforms

* [Browser](#browser-usage)
* [React App](#react-usage)
* [Node.js](#nodejs-request-handler)
* [Electron](#electron-example)
* [Command Line](#command-line-interface)

## JavaScript Requirements

Emulating PostScript is non-trivial but most of the needed functionality is available
in relatively modern JavaScript.  The basic features required are:

  - Uint8Array
  - Map (*for-of* iteration not used so older JS works)

If your JavaScript environment does not support those, there is no way to make this
code work.

## Links

* [Home Page](http://metafloor.github.io/bwip-js/)
* [github Repository](https://github.com/metafloor/bwip-js)
* [`bwipjs` Methods Reference](https://github.com/metafloor/bwip-js/wiki/Methods-Reference)
* [Online Barcode Generator](http://metafloor.github.io/bwip-js/demo/demo.html)
* [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/Online-Barcode-API)
* [npm Page](https://www.npmjs.com/package/bwip-js)
* [BWIPP Documentation](https://github.com/bwipp/postscriptbarcode/wiki)
* [Differences From BWIPP](https://github.com/metafloor/bwip-js/wiki/Differences-From-BWIPP)
* [Supported Barcode Types](https://github.com/metafloor/bwip-js/wiki/BWIPP-Barcode-Types)
* [Using Your Own Fonts](https://github.com/metafloor/bwip-js/wiki/Using-Your-Own-Fonts)
* [Annotated Example Drawing Object](https://github.com/metafloor/bwip-js/wiki/Annotated-Example-Drawing-Object)
* [Working with the Raw BWIPP Rendering Data](https://github.com/metafloor/bwip-js/wiki/Notes-on-the-Raw-BWIPP-Data)

## Installation

You can download the latest npm module using:

```
npm install bwip-js
```

Or the latest code from github:

    https://github.com/metafloor/bwip-js

(The bwip-js master branch and the npm version are kept sync'd.)

## Online Barcode Generator

An [online barcode generator](http://metafloor.github.io/bwip-js/demo/demo.html)
demonstrates all of the features of bwip-js.  The app is also available 
in the root bwip-js directory.  See [Demo Apps](#demo-apps).

## Online Barcode API

A bwip-js barcode service is available online, ready to serve up barcode images
on demand.

You can generate barcodes from anywhere on the web.  Embed the URLs in your
HTML documents or retrieve the barcode images directly from your non-JavaScript
server.  (JavaScript-based servers should use the bwip-js code directly - it will
be a lot more performant.)

For details on how to use this service, see [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/Online-Barcode-API).

## Working With bwip-js Methods

Most of the public methods of the bwip-js export use an options object.  Only two values are required:

- `bcid` : The name of the barcode type/symbol.
- `text` : The text to encode.

All remaining options are optional, though you may find some quite useful.

The options values can be divided into two parts, bwip-js specific options and BWIPP options.

The bwip-js options are:

- `scaleX` : The x-axis scaling factor.  Must be an integer > 0.  Default is 2.
- `scaleY` : The y-axis scaling factor.  Must be an integer > 0.  Default is `scaleX`.
- `scale` : Sets both the x-axis and y-axis scaling factors.  Must be an integer > 0.

- `rotate` : Allows rotating the image to one of the four orthogonal orientations.  A string value.  Must be one of:

    - `'N'` : Normal (not rotated).  The default.
    - `'R'` : Clockwise (right) 90 degree rotation.
    - `'L'` : Counter-clockwise (left) 90 degree rotation.
    - `'I'` : Inverted 180 degree rotation.

- `padding` : Shorthand for setting `paddingtop`, `paddingleft`, `paddingright`, and `paddingbottom`.
- `paddingwidth` : Shorthand for setting `paddingleft` and `paddingright`.
- `paddingheight` : Shorthand for setting `paddingtop` and `paddingbottom`.
- `paddingtop` : Sets the height of the padding area, in points, on the top of the barcode image. Rotates and scales with the image.
- `paddingleft` : Sets the width of the padding area, in points, on the left side of the barcode image. Rotates and scales with the image.
- `paddingright` : Sets the width of the padding area, in points, on the right side of the barcode image. Rotates and scales with the image.
- `paddingbottom` : Sets the height of the padding area, in points, on the bottom of the barcode image. Rotates and scales with the image.
- `backgroundcolor` : This is actually a BWIPP option but is better handled by the bwip-js drawing code.  Takes either a hex RRGGBB or hex CCMMYYKK string value. 

For the BWIPP specific options, you will need to consult the
[BWIPP documentation](https://github.com/bwipp/postscriptbarcode/wiki)
to determine what options are available for each barcode type.

Note that bwip-js normalizes the BWIPP `width` and `height` options to always be in millimeters.
The resulting images are rendered at 72 dpi.  To convert to pixels, use a factor of 2.835 px/mm
(72 dpi / 25.4 mm/in).  The bwip-js scale options multiply the `width`, `height`, and `padding`.

| :warning: An important note about the BWIPP `width` and `height` parameters. |
|---------------|

Barcodes have the concept of module width (and height if a two-dimensional barcode).  For
linear barcodes, the module width is the width of the narrowest bar, and all other bar widths are
a multiple of it.  For 2D symbols, module width and height are the dimensions of the square
or rectangle that defines the symbol's layout grid.

For a barcode to be "in spec", the individual module dimensions must be consistent throughout the
symbol.  With high resolution printing, you can add/subtract a dot to adjust the size of individual
modules so the overall image meets the requested width or height, while still keeping the module
size within spec.  This is the intention behind BWIPP's `width` and `height` parameters.

bwip-js is designed for web usage, with a target display resolution of 72dpi.  (All of BWIPP's
internals are calculated in points and bwip-js just maps 1pt to 1px.)  At that low
resolution, it is not possible to add or subtract pixels without causing the symbol to go
out of spec.  Imagine a fairly common module width of 2px.  If you add or subtract a pixel,
you have changed the size by 50%.  Typical barcode specs require module sizes to be within 
5-10 pecent of nominal.

For this reason, bwip-js uses a constant module size so the resulting image is as 
large as possible, without exceeding the requested `width` or `height`.
The design causes the rendered barcodes to grow in "quantums".  An image will be
X-pixels wide with a module with of 2px, and Y-pixels wide with a module width of 3px,
and can not vary between those two sizes.

With bwip-js, the `scale` parameters can be thought of as requesting a particular module
width.  `scale=1` maps to a 1px module.  `scale=2` is a 2px module.  Etc.

When you specify `width`, you are effectively changing the scale of the final image.
Internally, bwip-js calcuates the requested `width x scale`, then divides
by the number of modules the symbol requires.  The floor of that value is the
module width (scale) of the rendered barcode.


## Browser Usage

To use within a browser, add the following to the head of your page:

```
<script type="text/javascript" src="file-or-url-path-to/bwip-js/dist/bwip-js-min.js"></script>
```

When developing your code, you may want to use `dist/bwip-js.js` to get better stack
traces.

If you are using `RequireJS` or another module/packaging utility, the bwip-js script is
structured as a UMD and should work with your environment.

The script adds a single `bwipjs` global object.  To draw a barcode to a canvas:

```javascript
try {
    // The return value is the canvas element
    let canvas = bwipjs.toCanvas('mycanvas', {
            bcid:        'code128',       // Barcode type
            text:        '0123456789',    // Text to encode
            scale:       3,               // 3x scaling factor
            height:      10,              // Bar height, in millimeters
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
        });
} catch (e) {
    // `e` may be a string or Error object
}
```

The `bwipjs.toCanvas()` method takes two parameters:

* The canvas on which to render the barcode.  This can by an `id` string or the actual
  canvas element.  The rendering will automatically resize the canvas to match the
  barcode image.
* A bwip-js/BWIPP options object.
 
On return from `toCanvas()`, the barcode image will have been fully rendered to the canvas.

If you would prefer to display the barcode using an `<img>` tag or with CSS `background-image`,
pass in a detached or hidden canvas, and use the canvas method
[HTMLCanvasElement.toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
to get a data URL. For example:

```javascript
let canvas = document.createElement('canvas');
try {
    bwipjs.toCanvas(canvas, options);
    document.getElementById(myimg).src = canvas.toDataURL('image/png');
} catch (e) {
    // `e` may be a string or Error object
}
```

## React Usage

The following is a minimal example of using bwip-js in a React app.
It is based on the default `App.js` file generated by `create-react-app`.

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bwipjs from 'bwip-js';

class App extends Component {
  componentDidMount() {
    try {
      // The return value is the canvas element
      let canvas = bwipjs.toCanvas('mycanvas', {
                bcid:        'code128',       // Barcode type
                text:        '0123456789',    // Text to encode
                scale:       3,               // 3x scaling factor
                height:      10,              // Bar height, in millimeters
                includetext: true,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });
    } catch (e) {
        // `e` may be a string or Error object
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <canvas id="mycanvas"></canvas>
      </div>
    );
  }
}
export default App;
```

See the Browser Usage section for details on the `toCanvas()` method. 

## Node.js Request Handler

The online barcode API is implemented as a Node.js application.
See the [Online Barcode API](https://github.com/metafloor/bwip-js/wiki/Online-Barcode-API) for details on how the URL query parameters must be structured.

A working, minimal example of how to use the request handler can be found in
`server.js`:

```javascript
// Simple HTTP server that renders barcode images using bwip-js.
const http   = require('http');
const bwipjs = require('bwip-js');

// This shows how to load the Inconsolata font, supplied with the bwip-js distribution.
// The path to your fonts will be different.
//bwipjs.loadFont('Inconsolata', 100,
//      require('fs').readFileSync('./fonts/Inconsolata.otf', 'binary'));

http.createServer(function(req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIPJS: Unknown request format.', 'utf8');
    } else {
        bwipjs.request(req, res); // Executes asynchronously
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

You can use bwip-js to generate PNG images directly.

```javascript
const bwipjs = require('bwip-js');

bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type
        text:        '0123456789',    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
    }, function (err, png) {
        if (err) {
            // `err` may be a string or Error object
        } else {
            // `png` is a Buffer
            // png.length           : PNG file length
            // png.readUInt32BE(16) : PNG image width
            // png.readUInt32BE(20) : PNG image height
        }
    });
```

If you would prefer to work with Promises, omit the callback function and
`toBuffer()` will return a Promise:

```javascript
bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type
        text:        '0123456789',    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
    })
    .then(png => {
        // `png` is a Buffer as in the example above
    })
    .catch(err => {
        // `err` may be a string or Error object
    });
```

## Electron Example

There has been some changes to the Electron bundler, and it may pull in either the
nodejs or browser module, depending on your version of Electron.  The example below
shows using the nodejs module.

If you try this example and get the error `bwipjs.toBuffer is not a function`, the
Electron bundler grabbed the browser module.  See the [Browser Usage](#browser-usage)
section above and draw to a canvas instead.

If you happen to know how the Electron bundler changed its behavior and how to
fix it in a project's `package.json`, please raise an issue at [github issues page](https://github.com/metafloor/bwip-js/issues).  

This is an example `index.html` file for a basic, single window app:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
  </head>
  <body>
    Node.js <script>document.write(process.versions.node)</script>,
    Chromium <script>document.write(process.versions.chrome)</script>,
    Electron <script>document.write(process.versions.electron)</script>,
    bwip-js <script>document.write(bwipjs.VERSION)</script>,
    and BWIPP <script>document.write(bwipjs.BWIPP.VERSION)</script>.
    <br><br><img id="myimg">
    <pre id="output"></pre>
  </body>

  <script>
    var bwipjs = require('bwip-js');
    bwipjs.toBuffer({ bcid:'qrcode', text:'0123456789' }, function (err, png) {
        if (err) {
          document.getElementById('output').textContent = err;
        } else {
          document.getElementById('myimg').src = 'data:image/png;base64,' +
                                                 png.toString('base64');
        }
      });
  </script>
</html>
```

## Command Line Interface

bwip-js can be used as a command line tool.

```
$ npm install -g bwip-js
$ bwip-js
Usage: bwip-js symbol-name text [options...] png-file
       bwip-js --bcid=symbol-name --text=text [options...] png-file

Example:
       bwip-js code128 012345678 includetext textcolor=ff0000 my-code128.png

Try 'bwip-js --help' for more information.
Try 'bwip-js --symbols' for a list of supported barcode symbols.
```

To use a custom font with the command line utility, use the `--loadfont` option.  It
takes one of three formats:

`--loadfont=`_font-name_`,`_y-mult_`,`_x-mult_`,`_path-to-font-file_ <br>
`--loadfont=`_font-name_`,`_size-mult_`,`_path-to-font-file_ <br>
`--loadfont=`_font-name_`,`_path-to-font-file_ <br>

For example:

```
$ bwip-js code128 12345678 includetext textfont=CONS textxalign=center \
  loadfont=CONS,250,100,../fonts/Inconsolata.otf /tmp/code128.png
```

The above demonstrates how to maniplulate the font metrics so the characters appear
tall and narrow.


## Demo HTML App

`demo.html` located in the root bwip-js directory is a full featured demonstation
of bwip-js barcode rendering.  It uses bwip-js' built-in graphics to draw to a canvas.
The images produced will match pixel-for-pixel with the images produced by the same
nodejs usage.


## Examples

There are example html and node apps provided with the project including
how to write your own drawing interface, generating SVG barcode images, 
and adding scalable barcodes to a [pdfkit](https://pdfkit.org/) document.

See the examples [README](https://github.com/metafloor/bwip-js/tree/master/examples) 
for more details.

## Supported Barcode Types

&#x2022; auspost : AusPost 4 State Customer Code &#x2022; azteccode : Aztec Code &#x2022; azteccodecompact : Compact Aztec Code &#x2022; aztecrune : Aztec Runes &#x2022; bc412 : BC412 &#x2022; channelcode : Channel Code &#x2022; codablockf : Codablock F &#x2022; code11 : Code 11 &#x2022; code128 : Code 128 &#x2022; code16k : Code 16K &#x2022; code2of5 : Code 25 &#x2022; code32 : Italian Pharmacode &#x2022; code39 : Code 39 &#x2022; code39ext : Code 39 Extended &#x2022; code49 : Code 49 &#x2022; code93 : Code 93 &#x2022; code93ext : Code 93 Extended &#x2022; codeone : Code One &#x2022; coop2of5 : COOP 2 of 5 &#x2022; daft : Custom 4 state symbology &#x2022; databarexpanded : GS1 DataBar Expanded &#x2022; databarexpandedcomposite : GS1 DataBar Expanded Composite &#x2022; databarexpandedstacked : GS1 DataBar Expanded Stacked &#x2022; databarexpandedstackedcomposite : GS1 DataBar Expanded Stacked Composite &#x2022; databarlimited : GS1 DataBar Limited &#x2022; databarlimitedcomposite : GS1 DataBar Limited Composite &#x2022; databaromni : GS1 DataBar Omnidirectional &#x2022; databaromnicomposite : GS1 DataBar Omnidirectional Composite &#x2022; databarstacked : GS1 DataBar Stacked &#x2022; databarstackedcomposite : GS1 DataBar Stacked Composite &#x2022; databarstackedomni : GS1 DataBar Stacked Omnidirectional &#x2022; databarstackedomnicomposite : GS1 DataBar Stacked Omnidirectional Composite &#x2022; databartruncated : GS1 DataBar Truncated &#x2022; databartruncatedcomposite : GS1 DataBar Truncated Composite &#x2022; datalogic2of5 : Datalogic 2 of 5 &#x2022; datamatrix : Data Matrix &#x2022; datamatrixrectangular : Data Matrix Rectangular &#x2022; datamatrixrectangularextension : Data Matrix Rectangular Extension &#x2022; dotcode : DotCode &#x2022; ean13 : EAN-13 &#x2022; ean13composite : EAN-13 Composite &#x2022; ean14 : GS1-14 &#x2022; ean2 : EAN-2 (2 digit addon) &#x2022; ean5 : EAN-5 (5 digit addon) &#x2022; ean8 : EAN-8 &#x2022; ean8composite : EAN-8 Composite &#x2022; flattermarken : Flattermarken &#x2022; gs1-128 : GS1-128 &#x2022; gs1-128composite : GS1-128 Composite &#x2022; gs1-cc : GS1 Composite 2D Component &#x2022; gs1datamatrix : GS1 Data Matrix &#x2022; gs1datamatrixrectangular : GS1 Data Matrix Rectangular &#x2022; gs1northamericancoupon : GS1 North American Coupon &#x2022; gs1qrcode : GS1 QR Code &#x2022; hanxin : Han Xin Code &#x2022; hibcazteccode : HIBC Aztec Code &#x2022; hibccodablockf : HIBC Codablock F &#x2022; hibccode128 : HIBC Code 128 &#x2022; hibccode39 : HIBC Code 39 &#x2022; hibcdatamatrix : HIBC Data Matrix &#x2022; hibcdatamatrixrectangular : HIBC Data Matrix Rectangular &#x2022; hibcmicropdf417 : HIBC MicroPDF417 &#x2022; hibcpdf417 : HIBC PDF417 &#x2022; hibcqrcode : HIBC QR Code &#x2022; iata2of5 : IATA 2 of 5 &#x2022; identcode : Deutsche Post Identcode &#x2022; industrial2of5 : Industrial 2 of 5 &#x2022; interleaved2of5 : Interleaved 2 of 5 (ITF) &#x2022; isbn : ISBN &#x2022; ismn : ISMN &#x2022; issn : ISSN &#x2022; itf14 : ITF-14 &#x2022; japanpost : Japan Post 4 State Customer Code &#x2022; kix : Royal Dutch TPG Post KIX &#x2022; leitcode : Deutsche Post Leitcode &#x2022; mailmark : Royal Mail Mailmark &#x2022; matrix2of5 : Matrix 2 of 5 &#x2022; maxicode : MaxiCode &#x2022; micropdf417 : MicroPDF417 &#x2022; microqrcode : Micro QR Code &#x2022; msi : MSI Modified Plessey &#x2022; onecode : USPS Intelligent Mail &#x2022; pdf417 : PDF417 &#x2022; pdf417compact : Compact PDF417 &#x2022; pharmacode : Pharmaceutical Binary Code &#x2022; pharmacode2 : Two-track Pharmacode &#x2022; planet : USPS PLANET &#x2022; plessey : Plessey UK &#x2022; posicode : PosiCode &#x2022; postnet : USPS POSTNET &#x2022; pzn : Pharmazentralnummer (PZN) &#x2022; qrcode : QR Code &#x2022; rationalizedCodabar : Codabar &#x2022; raw : Custom 1D symbology &#x2022; royalmail : Royal Mail 4 State Customer Code &#x2022; sscc18 : SSCC-18 &#x2022; symbol : Miscellaneous symbols &#x2022; telepen : Telepen &#x2022; telepennumeric : Telepen Numeric &#x2022; ultracode : Ultracode &#x2022; upca : UPC-A &#x2022; upcacomposite : UPC-A Composite &#x2022; upce : UPC-E &#x2022; upcecomposite : UPC-E Composite 