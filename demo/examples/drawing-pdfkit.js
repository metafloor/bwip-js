// bwip-js/examples/drawing-pdfkit.js
//
// Converts the drawing primitives into pdfkit graphics.  Linear barcodes
// are rendered as a series of stroked paths.  2D barcodes are rendered as a 
// series of filled paths.
//
// Rotation is handled during drawing.  The resulting graphic will contain the 
// already-rotated barcode without need for a transform.
//
// If the requested barcode image contains text, the glyph paths are 
// extracted from the font file (via the builtin FontLib and stb_truetype.js)
// and added as filled paths.
//
// This code can run in the browser and in nodejs.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.DrawingPDFKit = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
"use strict";

// `doc` is an instance of PDFKit.PDFDocument
function DrawingPDFKit(doc, opts, FontLib) {
    // Unrolled x,y rotate/translate matrix
    var tx0 = 0, tx1 = 0, tx2 = 0, tx3 = 0;
    var ty0 = 0, ty1 = 0, ty2 = 0, ty3 = 0;

    var path;
    var lines = {};

    // Magic number to approximate an ellipse/circle using 4 cubic beziers.
    var ELLIPSE_MAGIC = 0.55228475 - 0.00045;

    // Global graphics state
    var gs_width, gs_height;    // image size, in pixels
    var gs_dx, gs_dy;           // x,y translate (padding)

    return {
        // Make no adjustments
        scale(sx, sy) {
        },
        // Measure text.  This and scale() are the only drawing primitives that
        // are called before init().
        //
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
            for (var i = 0; i < str.length; i++) {
                var ch = str.charCodeAt(i);
                var glyph = FontLib.getpaths(fontid, ch, fwidth, fheight);
                if (!glyph) {
                    continue;
                }
                ascent  = Math.max(ascent, glyph.ascent);
                descent = Math.max(descent, -glyph.descent);
                width  += glyph.advance;
            }
            return { width, ascent, descent };
        },

        // width and height represent the maximum bounding box the graphics will occupy.
        // The dimensions are for an unrotated rendering.  Adjust as necessary.
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

            // Initialize defaults
            doc.save();
            doc.lineCap('butt');

            if (/^[0-9a-fA-F]{6}$/.test(''+opts.backgroundcolor)) {
                gs_dx = gs_dy = 0;
                moveTo(0, 0);
                lineTo(width, 0);
                lineTo(width, height);
                lineTo(0, height);
                lineTo(0, 0);
                doc.fillColor('#' + opts.backgroundcolor);
                doc.fill('non-zero');
            }

            // Now add in the effects of the padding
            gs_dx = padl;
            gs_dy = padt;
        },
        // Unconnected stroked lines are used to draw the bars in linear barcodes.
        // No line cap should be applied.  These lines are always orthogonal.
        line(x0, y0, x1, y1, lw, rgb) {
            moveTo(x0, y0);
            lineTo(x1, y1);

            doc.lineWidth(lw) .stroke();
        },
        // Polygons are used to draw the connected regions in a 2d barcode.
        // These will always be unstroked, filled, non-intersecting,
        // orthogonal shapes.
        // You will see a series of polygon() calls, followed by a fill().
        polygon(pts) {
            moveTo(pts[0][0], pts[0][1]);
            for (var i = 1, n = pts.length; i < n; i++) {
                lineTo(pts[i][0], pts[i][1]);
            }
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
            var dx = rx * ELLIPSE_MAGIC;
            var dy = ry * ELLIPSE_MAGIC;

            // Since we fill with even-odd, don't worry about cw/ccw
            moveTo(x - rx, y);
            cubicTo(x - rx, y - dy, x - dx, y - ry, x,      y - ry);
            cubicTo(x + dx, y - ry, x + rx, y - dy, x + rx, y);
            cubicTo(x + rx, y + dy, x + dx, y + ry, x,      y + ry);
            cubicTo(x - dx, y + ry, x - rx, y + dy, x - rx, y);
        },
        // PostScript's default fill rule is non-zero but there are never intersecting
        // regions, so we use even-odd as it is easier to work with.
        fill(rgb) {
            doc.fillColor('#' + rgb);
            doc.fill('even-odd');
        },
        // Currently only used by swissqrcode.  The `polys` area is an array of
        // arrays of points.  Each array of points is identical to the `pts`
        // parameter passed to polygon().  The postscript default clipping rule,
        // like the fill rule, is non-zero winding.
        clip : function(polys) {
            doc.save();
            for (let j = 0; j < polys.length; j++) {
                let pts = polys[j];
                moveTo(pts[0][0], pts[0][1]);
                for (let i = 1; i < pts.length; i++) {
                    lineTo(pts[i][0], pts[i][1]);
                }
            }
            doc.clip('non-zero');
        },
        unclip : function() {
			doc.restore();
		},
        // Draw text with optional inter-character spacing.  `y` is the baseline.
        // font is an object with properties { name, width, height, dx }
        // width and height are the font cell size.
        // dx is extra space requested between characters (usually zero).
        text(x, y, str, rgb, font) {
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
                    // A glyph is composed of sequence of curve and line segments.
                    // M is move-to
                    // L is line-to
                    // Q is quadratic bezier curve-to
                    // C is cubic bezier curve-to
                    for (var i = 0, l = glyph.length; i < l; i++) {
                        let seg = glyph[i];
                        if (seg.type == 'M') {
                            moveTo(seg.x + x, y - seg.y);
                        } else if (seg.type == 'L') {
                            lineTo(seg.x + x, y - seg.y);
                        } else if (seg.type == 'Q') {
                            quadTo(seg.cx + x, y - seg.cy, seg.x + x,  y - seg.y);
                        } else if (seg.type == 'C') {
                            cubicTo(seg.cx1 + x, y - seg.cy1,
                                    seg.cx2 + x, y - seg.cy2,
                                    seg.x + x,   y - seg.y);
                        }
                    }
                }
                x += glyph.advance + dx;
            }
            doc.fillColor('#' + rgb);
            doc.fill('non-zero');
        },
        // Called after all drawing is complete.  The return value from this method
        // is the return value from `bwipjs.render()`.
        end() {
            doc.restore();
            return doc;
        },
    };

    // translate/rotate and return as a coordinate pair
    function transform(x, y) {
        x += gs_dx;
        y += gs_dy;
        var tx = tx0 * x + tx1 * y + tx2 * (gs_width-1) + tx3 * (gs_height-1);
        var ty = ty0 * x + ty1 * y + ty2 * (gs_width-1) + ty3 * (gs_height-1);
        return [ tx, ty ];
    }
    function moveTo(x, y) {
        var p = transform(x, y);
        doc.moveTo(p[0], p[1]);
    }
    function lineTo(x, y) {
        var p = transform(x, y);
        doc.lineTo(p[0], p[1]);
    }
    function quadTo(cx, cy, x, y) {
        var p1 = transform(cx, cy);
        var p2 = transform(x, y);
        doc.quadraticCurveTo(p1[0], p1[1], p2[0], p2[1]);
    }
    function cubicTo(cx1, cy1, cx2, cy2, x, y) {
        var p1 = transform(cx1, cy1);
        var p2 = transform(cx2, cy2);
        var p3 = transform(x, y);
        doc.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
    }
}

return DrawingPDFKit;
}));
