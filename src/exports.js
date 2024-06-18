
// exports.js
const BWIPJS_VERSION = '__BWIPJS_VERS__';

//@@BEGIN-NODE-JS-EXPORTS@@
var url = require('url');
var PNG_ZLIB = require('zlib');
require('stream');  // fix for https://github.com/nodejs/node/issues/37021

// bwipjs.request(req, res [, overrides])
//
// Returns a PNG image from the query args of a node.js http request object.
//
// This function is asynchronous.
function Request(req, res, extra) {
    var opts = url.parse(req.url, true).query;

    // Convert empty !parameters to false.
    // Convert empty parameters to true.
    for (var id in opts) {
        if (opts[id] === '') {
            if (id[0] == '!') {
                opts[id.substr(1)] = false;
            } else {
                opts[id] = true;
            }
        }
    }

    // Add in server options/overrides
    if (extra) {
        for (var id in extra) {
            opts[id] = extra[id];
        }
    }

    ToBuffer(opts, function(err, png) {
        if (err) {
            res.writeHead(400, { 'Content-Type':'text/plain' });
            res.end('' + (err.stack || err), 'utf-8');
        } else {
            res.writeHead(200, { 'Content-Type':'image/png' });
            res.end(png, 'binary');
        }
    });
}

// bwipjs.toBuffer(options[, callback])
//
// Uses the built-in graphics drawing and zlib PNG encoding to return a
// barcode image in a node.js Buffer.
//
// `options` are a bwip-js/BWIPP options object.
// `callback` is an optional callback handler with prototype:
//
//      function callback(err, png)
//
//      `err` is an Error object or string.  If `err` is set, `png` is null.
//      `png` is a node Buffer containing the PNG image.
//
// If `callback` is not provided, a Promise is returned.
function ToBuffer(opts, callback) {
    return _ToAny(bwipp_lookup(opts.bcid), opts, callback);
}

// Entry point for the symbol-specific exports.
//
// Polymorphic internal interface
// _ToAny(encoder, opts) : Promise<Buffer>
// _ToAny(endoder, opts, drawing) : any !throws!
// _ToAny(encoder, opts, callback) : void
//
// If `drawing` is not provided or `callback` is, the built-in DrawingZlibPng will be used.
function _ToAny(encoder, opts, drawing) {
    var callback;
    if (typeof drawing == 'function') {
        callback = drawing;
        drawing = null
    }
    if (drawing) {
        return _Render(encoder, opts, drawing);
    } else if (callback) {
        try {
            _Render(encoder, opts, DrawingZlibPng(callback));
        } catch (e) {
            callback(e);
        }
    } else {
        return new Promise(function (resolve, reject) {
                _Render(encoder, opts, DrawingZlibPng(function (err, buf) {
                                err ? reject(err) : resolve(buf);
                            }));
            });
    }
}
//@@BEGIN-BROWSER-EXPORTS@@
// bwipjs.toCanvas(canvas, options)
// bwipjs.toCanvas(options, canvas)
//
// Uses the built-in canvas drawing.
//
// `canvas` can be an HTMLCanvasElement or an ID string or unique selector string.
// `options` are a bwip-js/BWIPP options object.
//
// This function is synchronous and throws on error.
//
// Returns the HTMLCanvasElement.
function ToCanvas(cvs, opts) {
    if (typeof opts == 'string' || opts instanceof HTMLCanvasElement) {
        let tmp = cvs;
        cvs = opts;
        opts = tmp;
    }
    return _ToAny(bwipp_lookup(opts.bcid), opts, cvs);
}
// Entry point for the symbol-specific exports
//
// Polymorphic internal interface
// _ToAny(encoder, string, opts) : HTMLCanvasElement
// _ToAny(encoder, HTMLCanvasElement, opts) : HTMLCanvasElement
// _ToAny(encoder, opts, string) : HTMLCanvasElement
// _ToAny(encoder, opts, HTMLCanvasElement) : HTMLCanvasElement
// _ToAny(encoder, opts, drawing) : any
//
// 'string` can be either an `id` or query selector returning a single canvas element.
function _ToAny(encoder, opts, drawing) {
    if (typeof opts == 'string') {
        var canvas = document.getElementById(opts) || document.querySelector(opts);
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('bwipjs: `' + opts + '`: not a canvas');
        }
        opts = drawing;
        drawing = DrawingCanvas(canvas);
    } else if (opts instanceof HTMLCanvasElement) {
        var canvas = opts;
        opts = drawing;
        drawing = DrawingCanvas(canvas);
    } else if (typeof drawing == 'string') {
        var canvas = document.getElementById(drawing) || document.querySelector(drawing);
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error('bwipjs: `' + drawing + '`: not a canvas');
        }
        drawing = DrawingCanvas(canvas);
    } else if (drawing instanceof HTMLCanvasElement) {
        drawing = DrawingCanvas(drawing);
    } else if (!drawing || typeof drawing != 'object' || !drawing.init) {
        throw new Error('bwipjs: not a canvas or drawing object');
    }
    return _Render(encoder, opts, drawing);
}
//@@BEGIN-REACT-NV-EXPORTS@@
import PNG_ZLIB from 'react-zlib-js';
import Buffer from 'react-zlib-js/buffer.js';

// bwipjs.toDataURL(options[, callback])
//
// Uses the built-in graphics drawing and zlib PNG encoding to generate a
// barcode image.
//
// `options` are a bwip-js/BWIPP options object.
// `callback` is an optional callback handler with prototype:
//
//      function callback(err, png)
//
//      `err` is an Error object or string.  If `err` is set, `png` is null.
//      `png` is an object with properties:
//          `width`  : The width of the image, in pixels.
//          `height` : The height of the image, in pixels.
//          `uri`    : A base64 encoded data URL.
//
// If `callback` is not provided, a Promise is returned.
function ToDataURL(opts, callback) {
    return _ToAny(bwipp_lookup(opts.bcid), opts, callback);
}

// Polymorphic internal interface
// _ToAny(encoder, opts) : Promise<ReactNVImage>
// _ToAny(encoder, opts, callback) : void
// _ToAny(endoder, opts, drawing) : any !throws!
//
// If `drawing` is not provided, the built-in DrawingZlibPng will be used.
function _ToAny(encoder, opts, drawing) {
    var callback;
    if (typeof drawing == 'function') {
        callback = drawing;
        drawing = null
    }
    if (drawing) {
        return _Render(encoder, opts, drawing);
    } else if (callback) {
        try {
            _Render(encoder, opts, DrawingZlibPng((err, buf) => {
                                if (err) {
                                    callback(err);
                                } else {
                                    callback(null, {
                                        width:buf.readUInt32BE(16),
                                        height:buf.readUInt32BE(20),
                                        uri:'data:image/png;base64,' + buf.toString('base64')
                                    });
                                }
                            }));
        } catch (e) {
            callback(e);
        }
    } else {
        return new Promise(function (resolve, reject) {
                _Render(encoder, opts, DrawingZlibPng((err, buf) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({
                                        width:buf.readUInt32BE(16),
                                        height:buf.readUInt32BE(20),
                                        uri:'data:image/png;base64,' + buf.toString('base64')
                                    });
                                }
                            }));
            });
    }
}
// Specialized DataURL version of DrawingZlibPng()
function DrawingDataURL(opts, callback) {
    if (callback) {
        return DrawingZlibPng((err, buf) => {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null, {
                                width:buf.readUInt32BE(16),
                                height:buf.readUInt32BE(20),
                                uri:'data:image/png;base64,' + buf.toString('base64')
                            });
                        }
                    });
    } else {
        return new Promise((resolve, reject) => {
                            DrawingZlibPng((err, buf) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({
                                        width:buf.readUInt32BE(16),
                                        height:buf.readUInt32BE(20),
                                        uri:'data:image/png;base64,' + buf.toString('base64')
                                    });
                                }
                            })
                        });
    }
}
//@@ENDOF-EXPORTS@@

// bwipjs.toSVG(options)
//
// Uses the built-in svg drawing interface.
//
// `options` are a bwip-js/BWIPP options object.
//
// This function is synchronous and throws on error.
//
// Returns a string containing a fully qualified SVG definition,
// including the natural width and height of the image, in pixels:
//
//  <svg viewBox="0 0 242 200" xmlns="http://www.w3.org/2000/svg">
//   ...
//  </svg>
//
// Available on all platforms.
function ToSVG(opts) {
    return _Render(bwipp_lookup(opts.bcid), opts, DrawingSVG());
}

function FixupOptions(opts) {
    var scale   = opts.scale || 2;
    var scaleX  = +opts.scaleX || scale;
    var scaleY  = +opts.scaleY || scaleX;

    // Fix up padding.
    opts.paddingleft = padding(opts.paddingleft, opts.paddingwidth, opts.padding, scaleX);
    opts.paddingright = padding(opts.paddingright, opts.paddingwidth, opts.padding, scaleX);
    opts.paddingtop = padding(opts.paddingtop, opts.paddingheight, opts.padding, scaleY);
    opts.paddingbottom = padding(opts.paddingbottom, opts.paddingheight, opts.padding, scaleY);

    // We override BWIPP's background color functionality.  If in CMYK, convert to RRGGBB so
    // the drawing interface is consistent.  Likewise, if in CSS-style #rgb or #rrggbb.
    if (opts.backgroundcolor) {
        var bgc = ''+opts.backgroundcolor;
        if (/^[0-9a-fA-F]{8}$/.test(bgc)) {
            var c = parseInt(bgc.substr(0,2), 16) / 255;
            var m = parseInt(bgc.substr(2,2), 16) / 255;
            var y = parseInt(bgc.substr(4,2), 16) / 255;
            var k = parseInt(bgc.substr(6,2), 16) / 255;
            var r = Math.floor((1-c) * (1-k) * 255).toString(16);
            var g = Math.floor((1-m) * (1-k) * 255).toString(16);
            var b = Math.floor((1-y) * (1-k) * 255).toString(16);
            opts.backgroundcolor = (r.length == 1 ? '0' : '') + r +
                                   (g.length == 1 ? '0' : '') + g +
                                   (b.length == 1 ? '0' : '') + b;
        } else {
            if (bgc[0] == '#') {
                bgc = bgc.substr(1);
            }
            if (/^[0-9a-fA-F]{6}$/.test(bgc)) {
                opts.backgroundcolor = bgc;
            } else if (/^[0-9a-fA-F]{3}$/.test(bgc)) {
                opts.backgroundcolor = bgc[0] + bgc[0] + bgc[1] + bgc[1] + bgc[2] + bgc[2];
            } else {
                throw new Error('bwip-js: invalid backgroundcolor: ' + opts.backgroundcolor);
            }
        }
    }

    return opts;

    // a is the most specific padding value, e.g. paddingleft
    // b is the next most specific value, e.g. paddingwidth
    // c is the general padding value.
    // s is the scale, either scalex or scaley
    function padding(a, b, c, s) {
        if (a != null) {
            a = a >>> 0;
            return a*s >>> 0;
        }
        if (b != null) {
            b = b >>> 0;
            return b*s >>> 0;
        }
        c = c >>> 0;
        return (c*s >>> 0) || 0;
    }
}

var BWIPJS_OPTIONS = {
    bcid:1,
    text:1,
    scale:1,
    scaleX:1,
    scaleY:1,
    rotate:1,
    padding:1,
    paddingwidth:1,
    paddingheight:1,
    paddingtop:1,
    paddingleft:1,
    paddingright:1,
    paddingbottom:1,
    backgroundcolor:1,
};

// bwipjs.render(options, drawing)
//
// Renders a barcode using the provided drawing object.
//
// This function is synchronous and throws on error.
//
// Browser and nodejs usage.
function Render(options, drawing) {
    return _Render(bwipp_lookup(options.bcid), options, drawing);
}

// Called by the public exports
function _Render(encoder, options, drawing) {
    var text = options.text;
    if (!text) {
        throw new ReferenceError('bwip-js: bar code text not specified.');
    }

    // setopts() is optional on the drawing object.
    FixupOptions(options);
    drawing.setopts && drawing.setopts(options);

    // Set the bwip-js defaults
    var scale   = options.scale || 2;
    var scaleX  = +options.scaleX || scale;
    var scaleY  = +options.scaleY || scaleX;
    var rotate  = options.rotate || 'N';

    // Create a barcode writer object.  This is the interface between
    // the low-level BWIPP code, the bwip-js graphics context, and the
    // drawing interface.
    var bw = new BWIPJS(drawing);

    // Set the BWIPP options
    var bwippopts = {};
    for (var id in options) {
        if (!BWIPJS_OPTIONS[id]) {
            bwippopts[id] = options[id];
        }
    }

    // Fix a disconnect in the BWIPP rendering logic
    if (bwippopts.alttext) {
        bwippopts.includetext = true;
    }
    // We use mm rather than inches for height - except pharmacode2 height
    // which is already in mm.
    if (+bwippopts.height && encoder != bwipp_pharmacode2) {
        bwippopts.height = bwippopts.height / 25.4 || 0.5;
    }
    // Likewise, width
    if (+bwippopts.width) {
        bwippopts.width = bwippopts.width / 25.4 || 0;
    }

    // Scale the image
    bw.scale(scaleX, scaleY);

    // Call into the BWIPP cross-compiled code and render the image.
    bwipp_encode(bw, encoder, text, bwippopts);

    // Returns whatever drawing.end() returns, or `false` if nothing rendered.
    return bw.render();
}

// bwipjs.raw(options)
// bwipjs.raw(bcid, text, opts-string)
//
// Invokes the low level BWIPP code and returns the raw encoding data.
//
// This function is synchronous and throws on error.
//
// Browser and nodejs usage.
function ToRaw(bcid, text, options) {
    if (arguments.length == 1) {
        options = bcid;
        bcid = options.bcid;
        text = options.text;
    }

    // The drawing interface is just needed for the pre-init() calls.
    // Don't need to fixup the drawing specific options.
    var drawing = DrawingBuiltin();
    drawing.setopts(options);

    var bw = new BWIPJS(drawing);
    var stack = bwipp_encode(bw, bwipp_lookup(bcid), text, options, true);

    // bwip-js uses Maps to emulate PostScript dictionary objects; but Maps
    // are not a typical/expected return value.  Convert to plain-old-objects.
    var ids = { pixs:1, pixx:1, pixy:1, sbs:1, bbs:1, bhs:1, width:1, height:1 };
    for (var i = 0; i < stack.length; i++) {
        var elt = stack[i];
        if (elt instanceof Map) {
            var obj = {};
            // Could they make Maps any harder to iterate over???
            for (var keys = elt.keys(), size = elt.size, k = 0; k < size; k++) {
                var id = keys.next().value;
                if (ids[id]) {
                    var val = elt.get(id);
                    if (val instanceof Array) {
                        // The postscript arrays have extra named properties
                        // to emulate array views.  Return cleaned up arrays.
                        obj[id] = val.b.slice(val.o, val.o + val.length);
                    } else {
                        obj[id] = val;
                    }
                }
            }
            stack[i] = obj;
        } else {
            // This should never exec...
            stack.splice(i--, 1);
        }
    }
    return stack;
}
