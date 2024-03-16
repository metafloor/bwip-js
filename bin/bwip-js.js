#!/usr/bin/env node
'use strict';

var fs = require('fs');
var bwipjs = require('..');
var symdesc = require('../lib/symdesc');

function usage(exit) {
    console.log(
        "Usage: bwip-js symbol-name text [options...] file.{png,svg}\n" +
        "       bwip-js --bcid=symbol-name --text=text [options...] file.{png,svg}\n" +
        "\n" +
        "Examples:\n" +
        "       bwip-js code128 012345678 includetext textcolor=ff0000 my-code128.png\n" +
        "       bwip-js qrcode 'https://bwip-js.metafloor.com' qrcode.svg\n" +
        "\n" +
        "'bwip-js --help' for more information.\n" +
        "'bwip-js --symbols' for a list of supported barcode symbols.\n" +
        "'bwip-js --version' for version information.\n" +
        "");
    if (exit) {
        process.exit(1);
    }
}
function help() {
    usage();
    for (var i = 0; i < optlist.length; i++) {
        console.log('  --' + optlist[i].name)
        console.log(indent(optlist[i].desc));
    }
    console.log(
        "\nThe double-dashes '--' are not required before each option.\n" +
        "For example, you can specify '--includetext' or 'includetext'.");
}
// Indent the text 8 spaces
function indent(text) {
    return text.replace(/^/, '        ').replace(/\n/g, '\n        ');
}
// spec is one of: "font-name,y-mult,x-mult,path-to-font-file"
//                 "font-name,size-mult,path-to-font-file"
//                 "font-name,path-to-font-file"
function loadfont(spec) {
    var vals = spec.split(',');
    try {
        if (vals.length == 4) {
            bwipjs.loadFont(vals[0], +vals[1], +vals[2], fs.readFileSync(vals[3]));
        } else if (vals.length == 3) {
            bwipjs.loadFont(vals[0], +vals[1], fs.readFileSync(vals[2]));
        } else if (vals.length == 2) {
            bwipjs.loadFont(vals[0], fs.readFileSync(vals[1]));
        } else {
            console.log("Invalid --loadfont format.");
            console.log("Try 'bwip-js --help' for more information.");
            process.exit(1);
        }
    } catch(e) {
        console.log('bwip-js: ' + e);
        process.exit(1);
    }
}

var optlist = [
    { name: 'help', type: 'boolean',
      desc: 'Displays this help message.' },
    { name: 'version', type: 'boolean',
      desc: 'Displays the bwip-js and BWIPP version strings.' },
    { name: 'symbols', type: 'boolean',
      desc: 'Display a list of the supported barcode types.' },
    { name: 'loadfont', type: 'string',
      desc: 'Loads a truetype/opentype font.  Format of this option is one of:\n\n' +
            '  --loadfont=font-name,y-mult,x-mult,path-to-font-file\n' +
            '  --loadfont=font-name,size-mult,path-to-font-file\n' +
            '  --loadfont=font-name,path-to-font-file\n\n' +
            'For example:  --loadfont=Courier,100,120,c:\\windows\\fonts\\cour.ttf' },

    // bwipjs options
    { name: 'bcid', type: 'string',
      desc: 'Barcode symbol name/type. Required.' },
    { name: 'text', type: 'string',
      desc: 'The text to encode. Required.\n' +
            'Use single quotes around the text to protect from the shell.' },
    { name: 'scaleX', type: 'int',
      desc: 'The x-axis scaling factor. Must be an integer > 0. Default is 2.' },
    { name: 'scaleY', type: 'int',
      desc: 'The y-axis scaling factor. Must be an integer > 0. Default is scaleX.' },
    { name: 'scale', type: 'int',
      desc: 'Sets both the x-axis and y-axis scaling factors. Must be an integer > 0.' },
    { name: 'rotate', type: 'string',
      desc: 'Rotates the image to one of the four orthogonal orientations.\n' +
            'A string value. Must be one of:\n' +
            '    N : Normal orientation.\n' +
            '    R : Rotated right 90 degrees.\n' +
            '    L : Rotated left 90 degrees.\n' +
            '    I : Inverted, rotated 180 degrees.' },
    { name: 'padding', type: 'int',
      desc: 'Shorthand for setting paddingtop, paddingleft, paddingright, and paddingbottom.' },
    { name: 'paddingwidth', type: 'int',
      desc: 'Shorthand for setting paddingleft and paddingright.' },
    { name: 'paddingheight', type: 'int',
      desc: 'Shorthand for setting paddingtop and paddingbottom.' },
    { name: 'paddingtop', type: 'int',
      desc: 'Sets the height of the padding area, in points, on the top of\n' +
            'the barcode image. Rotates and scales with the image.' },
    { name: 'paddingleft', type: 'int',
      desc: 'Sets the width of the padding area, in points, on the left side\n' +
            'of the barcode image. Rotates and scales with the image.' },
    { name: 'paddingright', type: 'int',
      desc: 'Sets the width of the padding area, in points, on the right side\n' +
            'of the barcode image. Rotates and scales with the image.' },
    { name: 'paddingbottom', type: 'int',
      desc: 'Sets the height of the padding area, in points, on the bottom of\n' +
            'the barcode image. Rotates and scales with the image.' },
//  { name: 'monochrome', type: 'boolean',
//    desc: 'Sets the human-readable text to render in monochrome.\n'
//          'Default is false which renders 256-level gray-scale anti-aliased text.' },

    // bwipp options
    { name: 'alttext', type: 'string',
      desc: 'The human-readable text to use instead of the encoded text.' },
    { name: 'includecheck', type: 'boolean',
      desc: 'Generate check digit(s) for symbologies where the use of check digits is\n' +
            'optional.' },
    { name: 'includecheckintext', type: 'boolean',
      desc: 'Show the calculated check digit in the human readable text.' },
    { name: 'parse', type: 'boolean',
      desc: 'In supporting barcode symbologies, when the parse option is specified,\n' +
            'any instances of ^NNN in the data field are replaced with their equivalent\n' +
            'ASCII value, useful for specifying unprintable characters.' },
    { name: 'parsefnc', type: 'boolean',
      desc: 'In supporting barcode symbologies, when the parsefnc option is specified,\n' +
            'non-data function characters can be specified by escaped combinations such\n' +
            'as ^FNC1, ^FNC4 and ^SFT.' },
    { name: 'height', type: 'float',
      desc: 'Height of longest bar, in millimeters.' },
    { name: 'width', type: 'float',
      desc: 'Stretch the symbol to approximately this width, in millimeters.\n' +
            'Not recommended unless scale is at least 5.' },
    { name: 'inkspread', type: 'float',
      desc: 'Amount by which to reduce the bar widths to compensate for inkspread,\n' +
            'in points. Not recommended unless scale is at least 5.' },
    { name: 'inkspreadh', type: 'float',
      desc: 'For matrix barcodes, the amount by which to reduce the width of dark\n' +
            'modules to compensate for inkspread, in points.\n' +
            'Not recommended unless scale is at least 5.\n\n' +
            'Note: inkspreadh is most useful for stacked-linear type barcodes such as\n' +
            'PDF417 and Codablock F.' },
    { name: 'inkspreadv', type: 'float',
      desc: 'For matrix barcodes, the amount by which to reduce the height of dark\n' +
            'modules to compensate for inkspread, in points.\n' +
            'Not recommended unless scale is at least 5.' },
    { name: 'dotty', type: 'boolean',
      desc: 'For matrix barcodes, render the modules as dots rather than squares.\n' +
            'The dot radius can be adjusted using the inkspread option.' },
    { name: 'includetext', type: 'boolean',
      desc: 'Show human readable text for data in symbol.' },
    { name: 'textfont', type: 'string',
      desc: 'The font name to use for the text.' },
    { name: 'textsize', type: 'int',
      desc: 'The font size of the text, in points.' },
    { name: 'textgaps', type: 'int',
      desc: 'The inter-character spacing of the text.' },
    { name: 'textxalign', type: 'string',
      desc: 'Specifies where to horizontally position the text.' },
    { name: 'textyalign', type: 'string',
      desc: 'Specifies where to vertically position the text.' },
    { name: 'textxoffset', type: 'int',
      desc: 'The horizontal position of the text, in points, relative to the\n' +
            'default position.' },
    { name: 'textyoffset', type: 'int',
      desc: 'The vertical position of the text, in points, relative to the\n' +
            'default position.' },
    { name: 'showborder', type: 'boolean',
      desc: 'Display a border around the symbol.' },
    { name: 'borderwidth', type: 'int',
      desc: 'Width of a border, in points.' },
    { name: 'borderleft', type: 'int',
      desc: 'Left margin gap of the border, in points.' },
    { name: 'borderright', type: 'int',
      desc: 'Right margin gap of the border, in points.' },
    { name: 'bordertop', type: 'int',
      desc: 'Top margin gap of the border, in points.' },
    { name: 'borderbottom', type: 'int',
      desc: 'Bottom margin gap of the border, in points.' },
    { name: 'barcolor', type: 'string',
      desc: 'Color of the bars, either as a hex RGB or RRGGBB value or a hex CCMMYYKK value.' },
    { name: 'backgroundcolor', type: 'string',
      desc: 'Color of the image background, either as a hex RGB or RRGGBB value or a\n' +
            'hex CCMMYYKK value.  The default is a transparent background.' },
    { name: 'bordercolor', type: 'string',
      desc: 'Color of the border, either as a hex RGB or RRGGBB value or a hex CCMMYYKK value.\n' +
            'You must specify --showborder for this setting to take effect.' },
    { name: 'textcolor', type: 'string',
      desc: 'Color of the text, either as a hex RGB or RRGGBB value or a hex CCMMYYKK value.' },
    { name: 'addontextfont', type: 'string',
      desc: 'The font name to use for the add-on text in ISBN, ISMN, and ISSN barcodes.' },
    { name: 'addontextsize', type: 'int',
      desc: 'The font size of the add on text, in points.' },
    { name: 'addontextxoffset', type: 'int',
      desc: 'Overrides the default positioning for the add on text.' },
    { name: 'addontextyoffset', type: 'int',
      desc: 'Overrides the default positioning for the add on text.' },
    { name: 'guardwhitespace', type: 'boolean',
      desc: 'Display white space guards.' },
    { name: 'guardwidth', type: 'int',
      desc: 'Width of white space guards, in points.' },
    { name: 'guardheight', type: 'int',
      desc: 'Height of white space guards, in points.' },
    { name: 'guardleftpos', type: 'int',
      desc: 'Amount of white space to guard to left of the symbol, in points.' },
    { name: 'guardrightpos', type: 'int',
      desc: 'Amount of white space to guard to right of the symbol, in points.' },
    { name: 'guardleftypos', type: 'int',
      desc: 'Vertical position of the guard symbols on the left, in points.' },
    { name: 'guardrightypos', type: 'int',
      desc: 'Vertical position of the guard symbols on the right, in points.' },
];
var optmap = optlist.reduce(function(map, elt) { map[elt.name] = elt; return map; }, {});
var opts = {};
var argv = process.argv;
var outfile;

if (argv.length == 2) {
    usage(true);
}
if (argv.length > 2 && !/^(--|bcid=)/.test(argv[2])) {
    argv[2] = 'bcid=' + argv[2];
}
if (argv.length > 3 && !/^(--|text=)/.test(argv[3])) {
    argv[3] = 'text=' + argv[3];
}
if (argv.length > 4 && !/^(--|\w+=)/.test(argv[argv.length-1])) {
    outfile = argv.pop();
    if (!/\.(png|svg)$/.test(outfile)) {
        console.log(outfile + ": last argument must be a png or svg file name");
        usage(true);
    }
}
for (var i = 2, l = argv.length; i < l; i++) {
    var a = argv[i];
    if (/^--/.test(a)) {
        a = a.substr(2);
    }
    var eq = a.indexOf('=');
    if (eq > 0) {
        var name = a.substr(0, eq);
        var val = a.substr(eq+1);
        if (name == 'loadfont') {
            loadfont(val);
        } else {
            opts[name] = val;
        }
    } else if (optmap[a]) {
        if (optmap[a].type != 'boolean') {
            console.log('--' + a + ' : A value is expected.');
            help();
            process.exit(1);
        }
        opts[a] = true;
    } else {
        opts[a] = true;
    }
}

if (opts.help) {
    help();
} else if (opts.symbols) {
    var arr = [];
    for (var sym in symdesc) {
        arr.push(sym + ' : ' + symdesc[sym].desc);
    }
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        console.log('  ' + arr[i]);
    }
} else if (opts.version && !opts.bcid) {
    console.log('bwip-js: ' + bwipjs.BWIPJS_VERSION + '\nBWIPP: ' + bwipjs.BWIPP_VERSION);
} else {
    if (!opts.bcid) {
        console.log('bwip-js: missing bcid');
        usage(true);
    } else if (!opts.text) {
        console.log('bwip-js: missing text');
        usage(true);
    } else if (!outfile) {
        console.log('bwip-js: missing outfile');
        usage(true);
    } else if (outfile.slice(-3) == 'png') {
        bwipjs.toBuffer(opts, function (err, png) {
            if (err) {
                console.error(''+err);
                process.exit(1);
            }
            try {
                fs.writeFileSync(outfile, png);
            } catch (e) {
                console.log('bwip-js: ' + e);
            }
        });
    } else {
        fs.writeFileSync(outfile, bwipjs.toSVG(opts));
    }
}
