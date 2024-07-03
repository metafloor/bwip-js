# // Barcode Writer in Pure JavaScript


<a href="http://metafloor.github.io/bwip-js"><img alt="bwip-js" align="right" src="http://metafloor.github.io/bwip-js/images/bwip-js.png"></a>
bwip-js is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode).  The translated code can run on any modern browser or JavaScript-based server framework.

The library has encoding modules for over 100 different barcode types and standards.
All linear and two-dimensional barcodes in common use (and many uncommon
ones) are available.  An exhaustive list of supported barcode types can be
found at the end of this document.  Barcodes are generated as PNG images (node-js and react-native)
or to a canvas (browser) or as SVG (all platforms).

> As of version 4.5, bwip-js has been partitioned into four platform-specific packages plus the cross-platform main package.  The sub-packages are currently experimental but are the solution to current build chains not properly supporting the `exports` map in `package.json`.  Please use them and report any issues you find.

## Status 

* Current bwip-js version is 4.5.0 (2024-07-03)
* Current BWIPP version is 2024-06-18
* Node.js compatibility: 6.0
* Browser compatibility: Edge, Firefox, Chrome

## Supported Platforms

* [Browser](#browser-usage)
* [Node.js](#nodejs-request-handler)
* [SVG (All Platforms)](#svg-all-platforms)
* [React App](#react-usage)
* [React Native](#react-native)
* [Electron](#electron-example)
* [Command Line](#command-line-interface)

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

The bwip-js package has been partitioned into four platform-specific packages plus the main cross-platform package.  If you install the main package and cannot get its exports to work with your build stack, try installing a platform-specific package. The platform-specific packages are ES modules only, so you will need a modern build environment.  The exception is the node package, which also contains a `require()` compatible export.


You can download the main package using:

```
npm install bwip-js
```

Or one of the platform-specific packages using:

```
npm install @bwip-js/node
npm install @bwip-js/browser
npm install @bwip-js/react-native
npm install @bwip-js/generic
```

The node, browser and react-native packages include both an image rending interface (`toCanvas()` on the browser, `toBuffer()` on node, `toDataURL()` on react-native), plus the SVG and custom drawing context interfaces.

The generic package contains only exports that run on any platform, namely the SVG and custom drawing context interfaces.

The latest code can be obtained from github:

    https://github.com/metafloor/bwip-js

The bwip-js branches and the npm versions are automatically sync'd with each release. The main package is located under the master branch; the platform-specific packages are maintained under their like-named branches.

## Online Barcode Generator

An [online barcode generator](http://metafloor.github.io/bwip-js/demo/demo.html)
demonstrates all of the features of bwip-js.  The app is also available 
in the root bwip-js directory.  See [Demo HTML App](#demo-html-app).

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

- `binarytext` : The default behavior is to encode the `text` string as UTF-8 binary bytes.  If the text is already 8-bit encoded, you can disable this behavior by setting the flag to `true`.
- `padding` : Shorthand for setting `paddingtop`, `paddingleft`, `paddingright`, and `paddingbottom`.
- `paddingwidth` : Shorthand for setting `paddingleft` and `paddingright`.
- `paddingheight` : Shorthand for setting `paddingtop` and `paddingbottom`.
- `paddingtop` : Sets the height of the padding area, in points, on the top of the barcode image. Must be an integer >= 0. Rotates and scales with the image.
- `paddingleft` : Sets the width of the padding area, in points, on the left side of the barcode image. Must be an integer >= 0. Rotates and scales with the image.
- `paddingright` : Sets the width of the padding area, in points, on the right side of the barcode image. Must be an integer >= 0. Rotates and scales with the image.
- `paddingbottom` : Sets the height of the padding area, in points, on the bottom of the barcode image. Must be an integer >= 0. Rotates and scales with the image.
- `backgroundcolor` : This is actually a BWIPP option but is better handled by the bwip-js drawing code.  Expects either a hex RGB, RRGGBB or CCMMYYKK string value or CSS-style #RGB or #RRGGBB string value.

For the BWIPP specific options, you will need to consult the
[BWIPP documentation](https://github.com/bwipp/postscriptbarcode/wiki)
to determine what options are available for each barcode type.

All of the BWIPP color options (e.g. `barcolor`, `textcolor`, `bordercolor`) can be specified using either RGB, RRGGBB or CCMMYYKK formats or the CSS-style #RGB and #RRGGBB formats.

Note that bwip-js normalizes the BWIPP `width` and `height` options to be in millimeters.
The resulting images are rendered at 72 dpi.  To convert to pixels, use a factor of 2.835 px/mm
(72 dpi / 25.4 mm/in).  The bwip-js scale options multiply the `width`, `height`, and `padding`.

>  An important note about the BWIPP `width` and `height` parameters.

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


<a name="browser-usage"></a>
## Browser Usage

To use in a browser without a bundler, add the following to the head of your page:

```
<script type="text/javascript" src="url-path-to/bwip-js/dist/bwip-js-min.js"></script>
```

While developing your project, you may want to use `dist/bwip-js.js` to get better stack
traces.

If you are using `RequireJS` or a common-js bundling utility, the bwip-js scripts are
structured as UMDs and should work with your environment.

The scripts adds a single `bwipjs` global object.  To draw a barcode to a canvas:

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
 
On return from `toCanvas()`, the barcode image will be fully rendered to the canvas.

If you would prefer to display the barcode using an `<img>` tag or with CSS `background-image`,
pass in a detached or hidden canvas, and use the canvas method
[HTMLCanvasElement.toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
to get a data URL. For example:

```javascript
let canvas = document.createElement('canvas');
try {
    bwipjs.toCanvas(canvas, options);
    document.getElementById('my-img').src = canvas.toDataURL('image/png');
} catch (e) {
    // `e` may be a string or Error object
}
```

<a name="browser-es6-module-usage"></a>
## Browser ES6 Module Usage

The ESM provides the same API as the standard browser module using:

```javascript
import bwipjs from 'bwip-js';           // If using the main package import
  // or
import bwipjs from '@bwip-js/browser';  // Platform-specific package import

// ... identical bwipjs.toCanvas() interface as above ...
```

The ESM also facilitates bundler tree shaking by providing the individual encoders as named exports.
Each exported encoder functions identically to `bwipjs.toCanvas()`.

The exported names are the same as the `bcid` names, with the caveat that dashes `-` are replaced with
underscores `_`.  For example, to import the `gs1-128` encoder, you would use:

```javascript
import { gs1_128 } from 'bwip-js';
  // or
import { gs1_128 } from '@bwipjs/browser';

try {
    gs1_128('my-canvas', options);
} catch (e) {
    // `e` may be a string or Error object
}
```

<a name="nodejs-request-handler"></a>
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

<a name="nodejs-image-generator"></a>
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

<a name="nodejs-es6-module-usage"></a>
## Node.js ES6 Module Usage

The ESM provides the same API as `require('bwip-js')` using:

```javascript
import bwipjs from 'bwip-js';           // If using the main package import
  // or
import bwipjs from '@bwip-js/node';     // Platform-specific package import

// ... identical to the examples above ...
```

The ESM also facilitates bundler tree-shaking by providing the individual encoders as named exports.  Each exported encoder functions identically to `bwipjs.toBuffer()`.

The exported names are the same as the `bcid` names, with the caveat that dashes `-` are replaced with underscores `_`.  For example, to import the `gs1-128` encoder, you would use:

```javascript
import { gs1_128 } from 'bwip-js';
  // or
import { gs1_128 } from '@bwip-js/node';

try {
    let buf = await gs1_128(options);
} catch (e) {
    // `e` may be a string or Error object
}
```

When named encoders are called, the `bcid` value in the options object is ignored.

<a name="svg-all-platforms"></a>
## SVG (All Platforms) 

The easiest way to generate an SVG barcode image is with the `toSVG()` method.  It takes
the same options object as the other rendering methods.

The method is synchronous.

```javascript
let svg = bwipjs.toSVG({
        bcid:        'code128',       // Barcode type
        text:        '0123456789',    // Text to encode
        height:      12,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
        textcolor:   'ff0000',        // Red text
    });
```

The return value from `toSVG()` is a string containing a fully qualified SVG definition,
including a `viewBox` attribute that defines the natural width and height of the image, in pixels.

```
<svg viewBox="0 0 242 200" xmlns="http://www.w3.org/2000/svg">
   ...
</svg>
```

The `viewBox` will always have origin `0 0`.

To display in an HTML page, the following should provide a good start:

```javascript
let [ , width, height ] = /viewBox="0 0 (\d+) (\d+)"/.exec(svg);
let span = document.createElement('span');
span.style.display = 'inline-block';
span.style.width = width + 'px';
span.style.height = height + 'px';
span.innerHTML = svg;
document.body.appendChild(span);
```

The `toSVG()` method links to all BWIPP encoders, so it cannot be used with
tree-shaking.  To reduce bundled size, you can import only the barcode types
you need, along with the built-in SVG drawing interface.

```javascript
import { qrcode, drawingSVG } from 'bwip-js';
  // or <platform> one of : browser, node, react-native, generic
import { qrcode, drawingSVG } from '@bwip-js/<platform>'; 

// drawingSVG() returns a bwip-js drawing object.
let svg = qrcode(options, drawingSVG());
```

<a name="react-usage"></a>
## React Usage

The following is a minimal example of bwip-js in a React app.
It is based on the default `App.js` file generated by `create-react-app`.

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bwipjs from 'bwip-js';           // If using the main package import
  // or
import bwipjs from '@bwip-js/browser';  // Plaform-specific package import

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

See the ES6 Browser Module Usage section for details on importing encoders directly.

<a name="react-native"></a>
## React Native

React-native has considerable legacy build environments that are not compatible with the modern `exports` map in `package.json`.  For this reason, it is recommended to install the react-native package `@bwip-js/react-native`. 

The react-native module provides a specialized version of the `toBuffer()` method, 
called `toDataURL()`.  The return value is an object with the following properties:

- `height` : The height of the image, in pixels.
- `width` : The width of the image, in pixels.
- `uri` : A string containing the data URL for the image.

The returned object is designed to be used with the `<Image>` component:

```javascript
import React from 'react';
import bwipjs from '@bwip-js/react-native';

const BarCode = (options) => {
    let img = null;
    try {
        img = await bwipjs.toDataURL(options);
    } catch (e) {
        // `e` may be a string or Error object
    }
    return (
        <Image
            style={{ height:img.height, width:img.width }}
            source={{ uri:img.uri }}
        />
    );
};
```

The bwip-js exports also facilitate bundler tree-shaking by providing the individual encoders as named exports.  Each exported encoder functions identically to `bwipjs.toDataURL()`.

The exported names are the same as the `bcid` names, with the caveat that dashes `-` are replaced with underscores `_`.  For example, to import the `gs1-128` encoder, you would use:

```javascript
import { gs1_128 } from '@bwip-js/react-native';

try {
    let buf = await gs1_128(options);
} catch (e) {
    // `e` may be a string or Error object
}
```

When named encoders are called, the `bcid` value in the options object is ignored.

<a name="electron-example"></a>
## Electron Example

With electron, you have the choice to use either the node-specific or browser-specific package.  It is not recommended to use the main bwip-js package as developers have reported issues with how the bundler interacts with the package exports.

This is an example `index.html` file for a basic, single window app, using the node-js package:

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
    bwip-js <script>document.write(bwipjs.BWIPJS_VERSION)</script>,
    and BWIPP <script>document.write(bwipjs.BWIPP_VERSION)</script>.
    <br><br><img id="myimg">
    <pre id="output"></pre>
  </body>

  <script>
    var bwipjs = require('@bwip-js/node');
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

<a name="command-line-interface"></a>
## Command Line Interface

bwip-js can be used as a command line tool when installed globally:

```
$ npm install -g bwip-js
$ bwip-js
Usage: bwip-js symbol-name text [options...] file-name
       bwip-js --bcid=symbol-name --text=text [options...] file-name

Example:
       bwip-js code128 012345678 includetext textcolor=ff0000 my-code128.png

file-name must be type: .png or .svg

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


<a name="demo-html-app"></a>
## Demo HTML App

`demo.html` located in the root bwip-js directory is a full featured demonstation
of bwip-js barcode rendering.  It uses bwip-js' built-in graphics to draw to a canvas.
The images produced will match pixel-for-pixel with the images produced by the same
nodejs usage.


<a name="examples"></a>
## Examples

There are example html and node apps provided with the project including
how to write your own drawing interface, generating SVG barcode images, 
and adding scalable barcodes to a [pdfkit](https://pdfkit.org/) document.

See the examples [README](https://github.com/metafloor/bwip-js/tree/master/examples) 
for more details.


## Supported Barcode Types

 * auspost &#x2022; AusPost 4 State Customer Code
 * azteccode &#x2022; Aztec Code
 * azteccodecompact &#x2022; Compact Aztec Code
 * aztecrune &#x2022; Aztec Runes
 * bc412 &#x2022; BC412
 * channelcode &#x2022; Channel Code
 * codablockf &#x2022; Codablock F
 * code11 &#x2022; Code 11
 * code128 &#x2022; Code 128
 * code16k &#x2022; Code 16K
 * code2of5 &#x2022; Code 25
 * code32 &#x2022; Italian Pharmacode
 * code39 &#x2022; Code 39
 * code39ext &#x2022; Code 39 Extended
 * code49 &#x2022; Code 49
 * code93 &#x2022; Code 93
 * code93ext &#x2022; Code 93 Extended
 * codeone &#x2022; Code One
 * coop2of5 &#x2022; COOP 2 of 5
 * daft &#x2022; Custom 4 state symbology
 * databarexpanded &#x2022; GS1 DataBar Expanded
 * databarexpandedcomposite &#x2022; GS1 DataBar Expanded Composite
 * databarexpandedstacked &#x2022; GS1 DataBar Expanded Stacked
 * databarexpandedstackedcomposite &#x2022; GS1 DataBar Expanded Stacked Composite
 * databarlimited &#x2022; GS1 DataBar Limited
 * databarlimitedcomposite &#x2022; GS1 DataBar Limited Composite
 * databaromni &#x2022; GS1 DataBar Omnidirectional
 * databaromnicomposite &#x2022; GS1 DataBar Omnidirectional Composite
 * databarstacked &#x2022; GS1 DataBar Stacked
 * databarstackedcomposite &#x2022; GS1 DataBar Stacked Composite
 * databarstackedomni &#x2022; GS1 DataBar Stacked Omnidirectional
 * databarstackedomnicomposite &#x2022; GS1 DataBar Stacked Omnidirectional Composite
 * databartruncated &#x2022; GS1 DataBar Truncated
 * databartruncatedcomposite &#x2022; GS1 DataBar Truncated Composite
 * datalogic2of5 &#x2022; Datalogic 2 of 5
 * datamatrix &#x2022; Data Matrix
 * datamatrixrectangular &#x2022; Data Matrix Rectangular
 * datamatrixrectangularextension &#x2022; Data Matrix Rectangular Extension
 * dotcode &#x2022; DotCode
 * ean13 &#x2022; EAN-13
 * ean13composite &#x2022; EAN-13 Composite
 * ean14 &#x2022; GS1-14
 * ean2 &#x2022; EAN-2 (2 digit addon)
 * ean5 &#x2022; EAN-5 (5 digit addon)
 * ean8 &#x2022; EAN-8
 * ean8composite &#x2022; EAN-8 Composite
 * flattermarken &#x2022; Flattermarken
 * gs1-128 &#x2022; GS1-128
 * gs1-128composite &#x2022; GS1-128 Composite
 * gs1-cc &#x2022; GS1 Composite 2D Component
 * gs1datamatrix &#x2022; GS1 Data Matrix
 * gs1datamatrixrectangular &#x2022; GS1 Data Matrix Rectangular
 * gs1dldatamatrix &#x2022; GS1 Digital Link Data Matrix
 * gs1dlqrcode &#x2022; GS1 Digital Link QR Code
 * gs1dotcode &#x2022; GS1 DotCode
 * gs1northamericancoupon &#x2022; GS1 North American Coupon
 * gs1qrcode &#x2022; GS1 QR Code
 * hanxin &#x2022; Han Xin Code
 * hibcazteccode &#x2022; HIBC Aztec Code
 * hibccodablockf &#x2022; HIBC Codablock F
 * hibccode128 &#x2022; HIBC Code 128
 * hibccode39 &#x2022; HIBC Code 39
 * hibcdatamatrix &#x2022; HIBC Data Matrix
 * hibcdatamatrixrectangular &#x2022; HIBC Data Matrix Rectangular
 * hibcmicropdf417 &#x2022; HIBC MicroPDF417
 * hibcpdf417 &#x2022; HIBC PDF417
 * hibcqrcode &#x2022; HIBC QR Code
 * iata2of5 &#x2022; IATA 2 of 5
 * identcode &#x2022; Deutsche Post Identcode
 * industrial2of5 &#x2022; Industrial 2 of 5
 * interleaved2of5 &#x2022; Interleaved 2 of 5 (ITF)
 * isbn &#x2022; ISBN
 * ismn &#x2022; ISMN
 * issn &#x2022; ISSN
 * itf14 &#x2022; ITF-14
 * japanpost &#x2022; Japan Post 4 State Customer Code
 * kix &#x2022; Royal Dutch TPG Post KIX
 * leitcode &#x2022; Deutsche Post Leitcode
 * mailmark &#x2022; Royal Mail Mailmark
 * mands &#x2022; Marks & Spencer
 * matrix2of5 &#x2022; Matrix 2 of 5
 * maxicode &#x2022; MaxiCode
 * micropdf417 &#x2022; MicroPDF417
 * microqrcode &#x2022; Micro QR Code
 * msi &#x2022; MSI Modified Plessey
 * onecode &#x2022; USPS Intelligent Mail
 * pdf417 &#x2022; PDF417
 * pdf417compact &#x2022; Compact PDF417
 * pharmacode &#x2022; Pharmaceutical Binary Code
 * pharmacode2 &#x2022; Two-track Pharmacode
 * planet &#x2022; USPS PLANET
 * plessey &#x2022; Plessey UK
 * posicode &#x2022; PosiCode
 * postnet &#x2022; USPS POSTNET
 * pzn &#x2022; Pharmazentralnummer (PZN)
 * qrcode &#x2022; QR Code
 * rationalizedCodabar &#x2022; Codabar
 * raw &#x2022; Custom 1D symbology
 * rectangularmicroqrcode &#x2022; Rectangular Micro QR Code
 * royalmail &#x2022; Royal Mail 4 State Customer Code
 * sscc18 &#x2022; SSCC-18
 * swissqrcode &#x2022; Swiss QR Code
 * symbol &#x2022; Miscellaneous symbols
 * telepen &#x2022; Telepen
 * telepennumeric &#x2022; Telepen Numeric
 * ultracode &#x2022; Ultracode
 * upca &#x2022; UPC-A
 * upcacomposite &#x2022; UPC-A Composite
 * upce &#x2022; UPC-E
 * upcecomposite &#x2022; UPC-E Composite
