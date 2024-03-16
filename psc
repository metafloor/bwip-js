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
##      currentglobal
##      true setglobal
##      /Generic /Category findresource dup length 1 add dict copy dup
##      /InstanceType /setpacking where {pop /packedarraytype} {/arraytype}...
##      /uk.co.terryburton.bwipp exch /Category defineresource pop
##      setglobal
##
##   The code that instantiates all of the rendering and encoding
##   functions.
##
##   The prolog code looks like:
##      /setpacking where {pop currentpacking true setpacking} if
##      1 dict
##      dup /<ident> dup /uk.co.terryburton.bwipp findresource put
##      dup ...
##      dup ...
##      begin
##
##   And the epilog code looks like:
##      /<ident> dup load /uk.co.terryburton.bwipp defineresource pop
##      end
##      /setpacking where {pop setpacking} if
##
## * Fixup renlinear and renmatrix.  Replace renmaximatrix.
##
## * Replace the isbn/ismn/issn Courier with OCR-A
##   Change the isbn/ismn/issn textsize from 9 to 8
##   Change the standard text y-offset from 7pt to 8.5pt (OCR fonts are taller
##   than Courier at the same point-size).
##
## * There are problems with floating-point rounding in the datamatrix encoders
##   due to differences between single- and double-precision arithmetic.  Perform
##   explicit constant folding for the following expressions:
##      13 3 div -> 4.3333334
##      10 3 div -> 3.3333334
##       8 3 div -> 2.6666667
##       4 3 div -> 1.3333334
##       2 3 div -> 0.6666667

##
## Create the lookup function
##
(
echo 'function bwipp_lookup(symbol) {'
echo '  if (!symbol) { throw new Error("bwipp.undefinedEncoder: bcid is not defined"); }'
echo '  switch (symbol.replace(/-/g, "_")) {'
grep -E '% --BEGIN ENCODER .*--' barcode.ps | sort -u |\
    sed -e 's/^.*BEGIN ENCODER \(.*\)--.*/    case "\1":return bwipp_\1;/' -e 's/-/_/g'
echo '  }'
echo '  throw new Error("bwipp.unknownEncoder: unknown encoder name: " + symbol);'
echo '}'
) > barcode-lookup.js


cp barcode.ps barcode.tmp
for name in $(cd custom; ls *.ps | sed -e 's/\.ps//') ; do
    echo replacing $name...
    sed -e "/^[/]$name [{]/,/^[/]setpacking where .* if/s/^/%psc /" barcode.tmp > barcode.psc
    mv -f barcode.psc barcode.tmp
done

## Append the customs and fixup the code
cat barcode.tmp custom/*.ps | sed \
    -e 's,/\(is..textfont\) /Courier,/\1 /OCR-A,' \
    -e 's,/Helvetica,(OCR-B),' \
    -e 's,/Courier,(OCR-B),' \
    -e 's,(Courier),(OCR-B),' \
    -e 's,/\(is..textsize\) 9,/\1 8,' \
    -e 's,/textyoffset -7,/textyoffset -8,' \
    -e 's,/textyoffset -4,/textyoffset -4,' \
    -e 's/txt 11 \[barcode 11 1 getinterval textxoffset 103 add/txt 11 [barcode 11 1 getinterval textxoffset 104 add/' \
    -e 's,^\s*backgroundcolor (unset) ne.* if,%psc &,' \
    -e 's,^\[.*\] {null def} forall,%psc &,'\
    -e 's,/inkspread 0\.[0-9]* def,/inkspread 0 def,'\
    -e 's,/bordertop -0.2 def,/bordertop -0.55 def,'\
    -e 's,/borderbottom -0.2 def,/borderbottom -0.55 def,'\
    -e '/^\s*\/setanycolor {/,/^\s*}\s*def/s/^/%psc /' \
    -e '/^currentglobal/,/^setglobal/s/^/%psc /' \
    -e '/^\/setpacking where {pop currentpacking/,/^begin/s/^/%psc /'\
    -e '/^\/[^ \t][^ \t]* dup load \/uk.co.terryburton/,/^\/setpacking where {pop setpacking} if/s/^/%psc /'\
    -e '/^\s*options type \/stringtype eq {/,/^\s*} if/s/^/%psc &/'\
    -e '/^\s*currentfont \/PaintType .* ifelse/,/^\s*} if/s/^/%psc &/'\
    -e '/^\s*{.*} stopped {/,/^\s*} ifelse\s*$/s/^/%psc &/'\
    -e '/^\/ren[a-z][a-z]* {/a     bwipjs_dontdraw { return } if'\
    -e 's,/ctx null def,%psc &,'\
    -e 's,//processoptions,currentdict //processoptions,'\
    -e 's/{\s*13 3 div /{ 4.3333334 /g'\
    -e 's/{\s*10 3 div /{ 3.3333334 /g'\
    -e 's/{\s*8 3 div /{ 2.6666667 /g'\
    -e 's/{\s*4 3 div /{ 1.3333334 /g'\
    -e 's/{\s*2 3 div /{ 0.6666667 /g'\
    > barcode.psc

    ## -e 's,/\S\S* //loadctx exec,%psc &,'\
    ## -e 's,//unloadctx exec,%psc &,'\
##
## Update pscdbg.html
##
(
sed -e '/^<pre/q' pscdbg.html
##nl -s '| ' -b a barcode.psc
cat barcode.psc | sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' -e 's/>/\&gt;/g' | sed -e 's,.*,<code>&</code>,'
tac pscdbg.html | sed -e '/^<\/pre>/q' | tac
) > pscdbg.tmp
mv pscdbg.tmp pscdbg.html

##
## Cross-compile barcode.psc into barcode.js.
##
node <<@EOF
var fs  = require('fs');
var psc = require('./psc.js');// Not to be confused with this like-named script
var pstext = fs.readFileSync('barcode.psc', 'binary');
var flags  = "$*".split(' ');
fs.writeFileSync('barcode.js', psc(pstext, flags), 'binary');
@EOF

if [ ! -f barcode.js ] ; then
    echo "psc.js exited with error."
    exit 1
fi

##
## Peephole optimize
##

## MRW 19-Mar-2021 Way too buggy...
##node optimize

##
## Get the BWIPP version (date)
##
BWIPP_VERSION=$(grep '% Barcode Writer in Pure PostScript - Version' barcode.ps | sed -e 's/.*Version\s*//')
if [ "x$BWIPP_VERSION" = x ] ; then
    echo "Unable to find the version string in barcode.ps" 1>&2
    exit 1
fi

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
## Build the raw (unformatted, unminified) version of bwipp.js.
##
cat <<@EOF > bwipp.js
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
$(cat barcode-hdr.js barcode.js barcode-ftr.js barcode-lookup.js)
var BWIPP_VERSION = '$BWIPP_VERSION';

@EOF

js-beautify --preserve-newlines bwipp.js > src/bwipp.js

## js-beautify does not put a ending newline on the file
echo "" >> src/bwipp.js

##
## Clean up.  Separate commands so they can be commented out when debugging.
##
rm -f barcode.psc
rm -f barcode.tmp
rm -f barcode-lookup.js
rm -f barcode.js
rm -f bwipp.js
