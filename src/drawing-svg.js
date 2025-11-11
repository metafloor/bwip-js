// drawing-svg.js
//
// Converts the drawing primitives into the equivalent SVG.  Linear barcodes
// are rendered as a series of stroked paths.  2D barcodes are rendered as a 
// series of filled paths.
//
// Rotation is handled during drawing.  The resulting SVG will contain the 
// already-rotated barcode without an SVG transform.
//
// If the requested barcode image contains text, the glyph paths are 
// extracted from the font file (via the builtin FontLib and stb_truetype.js)
// and added as filled SVG paths.
//
function DrawingSVG() {
    // Unrolled x,y rotate/translate matrix
    var tx0 = 0, tx1 = 0, tx2 = 0, tx3 = 0;
    var ty0 = 0, ty1 = 0, ty2 = 0, ty3 = 0;

    var opts;
    var svg = '';
    var path;
    var clipid = '';
    var clips = [];
    var lines = {};

    // We adjust the drawing coordinates by 0.5px when stroke width is odd.
    // But this creates an odd effect with scale.  When scale is even, we
    // need to add 0.5; when scale is odd, subtract 0.5.
    var scalex, scaley;

    // Magic number to approximate an ellipse/circle using 4 cubic beziers.
    var ELLIPSE_MAGIC = 0.55228475 - 0.00045;

    // Global graphics state
    var gs_width, gs_height;    // image size, in pixels
    var gs_dx, gs_dy;           // x,y translate (padding)

    return {
        // setopts() is called after the options are fixed-up/normalized,
        // but before calling into BWIPP.
        // This allows omitting the options in the constructor call.
        // It is also your last chance to amend the options before usage.
        setopts(options) {
            opts = options;
        },

        // measure() and scale() are the only drawing primitives that are called before init().

        // Make no adjustments
        scale(sx, sy) {
            scalex = sx;
            scaley = sy;
        },
        // Measure text.
        // `font` is the font name typically OCR-A or OCR-B.
        // `fwidth` and `fheight` are the requested font cell size.  They will
        // usually be the same, except when the scaling is not symetric.
        measure(str, font, fwidth, fheight) {
            fwidth = fwidth|0;
            fheight = fheight|0;

            var fontid = FontLib.lookup(font);
            var width = 0;
            var ascent = 0;
            var descent = 0;
            for (var i = 0, l = str.length; i < l; i++) {
                var ch = str.charCodeAt(i);
                var glyph = FontLib.getglyph(fontid, ch, fwidth, fheight);
                if (!glyph) {
                    continue;
                }
                ascent  = Math.max(ascent, glyph.top);
                descent = Math.max(descent, glyph.height - glyph.top);
                if (i == l-1) {
                    width += glyph.left + glyph.width;
                } else {
                    width += glyph.advance;
                }
            }
            return { width, ascent, descent };
        },

        // `width` and `height` represent the maximum bounding box the graphics will
        // occupy.  The dimensions are for an unrotated rendering.  Adjust as necessary.
        init(width, height) {
            // Add in the effects of padding.  These are always set before the
            // drawing constructor is called.
            var padl = opts.paddingleft;
            var padr = opts.paddingright;
            var padt = opts.paddingtop;
            var padb = opts.paddingbottom;
            var rot  = opts.rotate || 'N';

            width  += padl + padr;
            height += padt + padb;

            // Transform indexes are: x, y, w, h
            switch (rot) {
            // tx = w-y, ty = x
            case 'R': tx1 = -1; tx2 = 1; ty0 = 1; break;
            // tx = w-x, ty = h-y
            case 'I': tx0 = -1; tx2 = 1; ty1 = -1; ty3 = 1; break;
            // tx = y, ty = h-x
            case 'L': tx1 = 1; ty0 = -1; ty3 = 1; break;
            // tx = x, ty = y
            default:  tx0 = ty1 = 1; break;
            }

            // Setup the graphics state
            var swap = rot == 'L' || rot == 'R';
            gs_width  = swap ? height : width;
            gs_height = swap ? width : height;
            gs_dx = padl;
            gs_dy = padt;
        },
        // Unconnected stroked lines are used to draw the bars in linear barcodes.
        // No line cap should be applied.  These lines are always orthogonal.
        line(x0, y0, x1, y1, lw, rgb) {
            x0 = x0|0;
            y0 = y0|0;
            x1 = x1|0;
            y1 = y1|0;
            lw = Math.round(lw) || 1;

            // Try to keep the lines "crisp" by using with the SVG line drawing spec to
            // our advantage and adjust the coordinates by half pixel when stroke width
            // is odd.  Work around an odd effect with scale.  When scale is even, we
            // need to add 0.5; when scale is odd, subtract 0.5.
            if (lw & 1) {
                if (x0 == x1) {
                    let dx = (scalex&1) ? -0.5 : 0.5;
                    x0 += dx;
                    x1 += dx;
                }
                if (y0 == y1) {
                    let dy = (scaley&1) ? -0.5 : 0.5;
                    y0 += dy;
                    y1 += dy;
                }
            }
            // The svg path does not include the start pixel, but the built-in drawing does.
            if (x0 == x1) {
                y0++;
            } else if (y0 == y1) {
                x0++;
            }

            // Group together all lines of the same width and emit as single paths.
            // Dramatically reduces the svg text size.
            var key = '' + lw + '#' + rgb;
            if (!lines[key]) {
                lines[key] = '<path stroke="#' + rgb + '" stroke-width="' + lw + '" d="';
            }
            lines[key] += 'M' + transform(x0, y0) + 'L' + transform(x1, y1);
        },
        // Polygons are used to draw the connected regions in a 2d barcode.
        // These will always be unstroked, filled, non-intersecting,
        // orthogonal shapes.
        // You will see a series of polygon() calls, followed by a fill().
        polygon(pts) {
            if (!path) {
                path = '<path d="';
            }
            path += 'M' + transform(pts[0][0], pts[0][1]);
            for (var i = 1, n = pts.length; i < n; i++) {
                var p = pts[i];
                path += 'L' + transform(p[0], p[1]);
            }
            path += 'Z';
        },
        // An unstroked, filled hexagon used by maxicode.  You can choose to fill
        // each individually, or wait for the final fill().
        //
        // The hexagon is drawn from the top, counter-clockwise.
        hexagon(pts, rgb) {
            this.polygon(pts); // A hexagon is just a polygon...
        },
        // An unstroked, filled ellipse.  Used by dotcode and maxicode at present.
        // maxicode issues pairs of ellipse calls (one cw, one ccw) followed by a fill()
        // to create the bullseye rings.  dotcode issues all of its ellipses then a
        // fill().
        ellipse(x, y, rx, ry, ccw) {
            if (!path) {
                path = '<path d="';
            }
            var dx = rx * ELLIPSE_MAGIC;
            var dy = ry * ELLIPSE_MAGIC;

            // Since there are never overlapping regions, we don't worry about cw/ccw.
            path += 'M' + transform(x - rx, y) +
                    'C' + transform(x - rx, y - dy) + ' ' +
                          transform(x - dx, y - ry) + ' ' +
                          transform(x,      y - ry) +
                    'C' + transform(x + dx, y - ry) + ' ' +
                          transform(x + rx, y - dy) + ' ' +
                          transform(x + rx, y) + 
                    'C' + transform(x + rx, y + dy) + ' ' +
                          transform(x + dx, y + ry) + ' ' +
                          transform(x,      y + ry) +  
                    'C' + transform(x - dx, y + ry) + ' ' +
                          transform(x - rx, y + dy) + ' ' +
                          transform(x - rx, y) + 
                    'Z';
        },
        // PostScript's default fill rule is non-zero but there are never intersecting
        // regions. The built-in drawing uses even-odd for simplicity - we match that
        // to be consistent.
        fill(rgb) {
            if (path) {
                svg += path + '" fill="#' + rgb + '" fill-rule="evenodd"' +
                       (clipid ? ' clip-path="url(#' + clipid + ')"' : '') +
                       ' />\n';
                path = null;
            }
        },
        // Currently only used by swissqrcode.  The `polys` area is an array of
        // arrays of points.  Each array of points is identical to the `pts`
        // parameter passed to polygon().  The clipping rule, like the fill rule,
        // defaults to non-zero winding.
        clip : function(polys) {
            var path = '<clipPath id="clip' + clips.length + '"><path d="';
            for (let j = 0; j < polys.length; j++) {
                let pts = polys[j];
                path += 'M' + transform(pts[0][0], pts[0][1]);
                for (var i = 1, n = pts.length; i < n; i++) {
                    var p = pts[i];
                    path += 'L' + transform(p[0], p[1]);
                }
                path += 'Z';
            }
            path += '" clip-rule="nonzero" /></clipPath>';
            clipid = "clip" + clips.length;
            clips.push(path);
        },
        unclip : function() {
            clipid = '';
        },
        // Draw text with optional inter-character spacing.  `y` is the baseline.
        // font is an object with properties { name, width, height, rotate, dx }
        // width and height are the font cell size.
        // rotate is one of 0, 90, 180, 270 (default 0).
        // dx is extra space requested between characters (usually zero).
        text(x, y, str, rgb, font) {
            x = x|0;
            y = y|0;
            var x0 = x, y0 = y;
            var fontid  = FontLib.lookup(font.name);
            var fwidth  = font.width|0;
            var fheight = font.height|0;
            var dx      = font.dx|0;
            var path = '';
            for (var k = 0; k < str.length; k++) {
                var ch = str.charCodeAt(k);
                var glyph = FontLib.getpaths(fontid, ch, fwidth, fheight);
                if (!glyph) {
                    continue;
                }
                if (glyph.length) {
                    // A glyph is composed of a sequence of curve and line segments.
                    // `type` is one of:
                    //   M is move-to
                    //   L is line-to
                    //   Q is quadratic bezier curve-to
                    //   C is cubic bezier curve-to
                    for (var i = 0, l = glyph.length; i < l; i++) {
                        let seg = glyph[i];
                        if (seg.type == 'M' || seg.type == 'L') {
                            path += seg.type + transform(seg.x + x, y - seg.y);
                        } else if (seg.type == 'Q') {
                            path += seg.type + transform(seg.cx + x, y - seg.cy) + ' ' +
                                               transform(seg.x + x,  y - seg.y);
                        } else if (seg.type == 'C') {
                            path += seg.type + transform(seg.cx1 + x, y - seg.cy1) + ' ' +
                                               transform(seg.cx2 + x, y - seg.cy2) + ' ' +
                                               transform(seg.x + x,   y - seg.y);
                        }
                    }
                    // Close the shape
                    path += 'Z';
                }
                // getglyph() provides slightly different metrics than getpaths().  Keep
                // it consistent with the built-in drawing.
                x += FontLib.getglyph(fontid, ch, fwidth, fheight).advance + dx;
            }
            if (path) {
                if (font.rotate) {
                    // Note the '-' on the rotate.
                    // Postscript rotates anti-clockwise for positive values.
                    // SVG rotates clockwise for positive values.
                    svg += '<path d="' + path + '" fill="#' + rgb + '" transform="rotate(-' +
                            font.rotate + ' ' + transform(x0, y0) + ')" />\n';
                } else {
                    svg += '<path d="' + path + '" fill="#' + rgb + '" />\n';
                }
            }
        },
        // Called after all drawing is complete.  The return value from this method
        // will be the return value from `bwipjs.render()`.
        end() {
            var linesvg = '';
            for (var key in lines) {
                linesvg += lines[key] + '" />\n';
            }
            var bg = opts.backgroundcolor;
            return '<svg viewBox="0 0 ' + gs_width + ' ' + gs_height + '" xmlns="http://www.w3.org/2000/svg">\n' +
                        (clips.length ? '<defs>' + clips.join('') + '</defs>' : '') +
                        (/^[0-9A-Fa-f]{6}$/.test(''+bg)
                            ? '<rect width="100%" height="100%" fill="#' + bg + '" />\n'
                            : '') +
                        linesvg + svg + '</svg>\n';
        },
    };

    // translate/rotate and return as an SVG coordinate pair
    function transform(x, y) {
        x += gs_dx;
        y += gs_dy;
        var tx = tx0 * x + tx1 * y + tx2 * (gs_width-1) + tx3 * (gs_height-1);
        var ty = ty0 * x + ty1 * y + ty2 * (gs_width-1) + ty3 * (gs_height-1);
        return '' + ((tx|0) == tx ? tx : tx.toFixed(2)) + ' ' +
                    ((ty|0) == ty ? ty : ty.toFixed(2));
    }
}
