# // Barcode Writer in Pure JavaScript

<a href="http://metafloor.github.io/bwip-js"><img alt="bwipjs" align="right" src="http://metafloor.github.io/bwip-js/images/bwip-js.png"></a>
bwipjs is a translation to native JavaScript of the amazing code provided in [Barcode Writer in Pure PostScript](https://github.com/bwipp/postscriptbarcode).  The translated code can run on any modern browser or JavaScript-based server framework.

bwip-js has finally hit the 1.0 release.  This release uses a newly developed
optimizing PostScript to JavaScript cross-compiler that reduces code size and
improves performance, in some cases an order-of-magnitude decrease in run time.
See the [Version 1.0 Release Announcement](https://github.com/metafloor/bwip-js/wiki/Version-1.0-Release-Announcement) for more details.

> This is the development branch for bwip-js.
>
> Clone this branch only if you want to compile bwip-js from source.
> If you just want to use the software, then clone the master branch or use
> `npm` to install as a node module:

    npm install bwip-js


## Development Requirements
  - On windows, you must install cygwin with minimum:

    - bash
    - sed
    - awk
    - grep

  - node-js

  - npm install -g uglifyjs

## Compile Steps

  - Download the *monolithic* version of BWIPP that you want to use at
    https://github.com/bwipp/postscriptbarcode/releases.

    For example: postscriptbarcode-monolithic-2019-11-08.zip

  - Copy barcode.ps to the bwip-js development directory.

  - Convert the postscript to javascript:

    `$ ./psc`

  - Create the dist files

    `$ ./mkdist`

  - Your newly minted code is in the dist/ directory.




