#!/bin/bash
##
## file : bwipjs/psc
##
## The master script for cross-compiling barcode.ps into bwipp.js.
##

##
## Modify barcode.ps to work better with the cross-compiler and the 
## emulation interface.
##
## * There is a bunch of boilerplate in barcode.ps that would add code
##   bloat and is not needed by the emulation.
##
##   The preamble that occurs at the top of the file:
##		currentglobal
##		true setglobal
##		/Generic /Category findresource dup length 1 add dict copy dup
##		/InstanceType /setpacking where {pop /packedarraytype} {/arraytype}...
##		/uk.co.terryburton.bwipp exch /Category defineresource pop
##		setglobal
##
##   The code that instantiates all of the rendering and encoding
##   functions.
##
##   The prolog code looks like:
##		/setpacking where {pop currentpacking true setpacking} if
##		1 dict
##		dup /<ident> dup /uk.co.terryburton.bwipp findresource put
##		dup ...
##		dup ...
##		begin
##
##   And the epilog code looks like:
##		/<ident> dup load /uk.co.terryburton.bwipp defineresource pop
##		end
##		/setpacking where {pop setpacking} if
##
## * Every encoder has the following bit of code to convert an options
##   string to an options object:
##
##		% Parse the input options, either a string or a dict
##		options type /stringtype eq {
##			1 dict begin
##			options {
##				token false eq {exit} if dup length string cvs (=) search
##				true eq {cvlit exch pop exch def} {cvlit true def} ifelse
##			} loop
##			currentdict end /options exch def
##		} if
##
##   Remove that code and require an options object to be passed in.
##   No loss in functionality as the bwipp.js interface automatically
##   converts an options string to an options object.
##
## * The `parse` option conflicts with the `parsefnc` option, causing
##	 invalid char-codes to be generated.  Replace BWIPP's parse logic
##	 with our own (in bwipp-ftr.js) and comment it out here.
##   It looks like:
##		% Parse ordinals of the form ^NNN to ASCII
##		parse {
##			<blah>
##		} if
##
## * We use customized renderers that are a better match to the emulation and
##   our OCR fonts.  Comment out the renderers in barcode.ps and we will 
##   append our custom versions below.
##
## * Replace the isbn/ismn/issn Courier with OCR-A
##   Change the isbn/ismn/issn textsize from 9 to 8.5
##   Change the standard text y-offset from 7pt to 8.5pt (OCR fonts are taller
##   than Courier at the same point-size).
##
sed -e 's,/\(is..textfont\) /Courier,/\1 /OCR-A,' \
    -e 's,/\(is..textsize\) 9,/\1 8.5,' \
	-e 's,/textyoffset -7,/textyoffset -8.5,' \
	-e 's,/textyoffset -4,/textyoffset -4.5,' \
	-e '/^    parse {\s*$/,/^    } if\s*$/s/^/%psc /'\
	-e '/--BEGIN RENDERER/,/--END RENDERER/s/^/%psc /'\
	-e '/^currentglobal/,/^setglobal/s/^/%psc /'\
	-e '/^\/setpacking where {pop currentpacking/,/^begin/s/^/%psc /'\
	-e '/^\/[^ ]* dup load \/uk.co.terryburton/,/^\/setpacking where {pop setpacking} if/s/^/%psc /'\
	-e '/^\s*options type \/stringtype eq {/,/^\s*} if/s/^\s*/%psc &/'\
	barcode.ps > barcode.tmp

##
## Append our custom renderers.
##
cat custom/*.ps >> barcode.tmp

##
## Cross-compile barcode.tmp into barcode.js.
##
node <<@EOF
var fs  = require('fs');
var psc = require('./psc.js');// Not to be confused with this like-named script
var pstext = fs.readFileSync('barcode.tmp', 'binary');
var flags  = "$*".split(' ');
fs.writeFileSync('barcode.js', psc(pstext, flags), 'binary');
@EOF

if [ ! -f barcode.js ] ; then
	echo "psc.js exited with error."
	exit 1
fi

##
## Build the raw (unformatted, unminified) version of bwipp.js.
##
cat <<@EOF > bwipp-raw.js
function BWIPP() {
$(cat barcode-hdr.js barcode.js barcode-ftr.js)
}
if (typeof module === 'object' && module.exports) {
	module.exports = BWIPP;
}
@EOF

##
## Verify we can find the BWIPP copyright notice
##
COPYR=$(grep '% Copyright (c)' barcode.ps | sed -e 's,%,//,')
if [ "x$COPYR" = x ] ; then
	echo "Unable to find the copyright notice in barcode.ps" 1>&2
	exit 1
fi

##
## Verify we can find the BWIPP file version
##
FILEV=$(grep '% Barcode Writer in Pure PostScript - Version' barcode.ps | sed -e 's,%,//,')
if [ "x$FILEV" = x ] ; then
	echo "Unable to find the version string in barcode.ps" 1>&2
	exit 1
fi

## What year is it?
YEAR="2011-$(date +%Y)"

##
## Emit the copyright header for pscify to use.
##
cat <<@EOF > bwipp-copyr.js
// bwip-js // Barcode Writer in Pure JavaScript
// https://github.com/metafloor/bwip-js
//
// This code was automatically generated from:
$FILEV
//
// Copyright (c) $YEAR Mark Warren
$COPYR
//
// Licensed MIT. See the LICENSE file in the bwip-js root directory.
@EOF

##
## Build the full/debug version (bwipp.js) and the minified version
## (bwipp.min.js).
##
node pscify

##
## Clean up.  Separate commands so they can be commented out when debugging.
##
rm -f barcode.tmp
rm -f barcode.js
rm -f bwipp-raw.js
rm -f bwipp-copyr.js
