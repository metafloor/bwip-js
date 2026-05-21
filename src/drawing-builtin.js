// drawing-builtin.js
//
// The aliased (except the fonts) graphics used by drawing-canvas.js and
// drawing-zlibpng.js
//
// All x,y and lengths are integer values.
//
// For the methods that take a color `rgb` parameter, the value is always a
// string with format RRGGBB.
function DrawingBuiltin() {
    var floor = Math.floor;

    // Unrolled x,y rotate/translate matrix
    var tx0 = 0, tx1 = 0, tx2 = 0, tx3 = 0;
    var ty0 = 0, ty1 = 0, ty2 = 0, ty3 = 0;

    var opts;                   // see setopts()
    var gs_image, gs_rowbyte;   // rowbyte will be 1 for png's, 0 for canvas
    var gs_width, gs_height;    // image size, in pixels
    var gs_dx, gs_dy;           // x,y translate (padding)
    var gs_r, gs_g, gs_b;       // rgb
    var gs_xymap;               // edge map
    var gs_xyclip;              // clip region map (similar to xymap)

    return {
        // setopts() is called after the options are fixed-up/normalized,
        // but before calling into BWIPP.
        // This method allows omitting the options in the constructor call.
        // The method is optional.
        setopts(options) {
            opts = options;
        },

        // Ensure compliant bar codes by always using integer scaling factors.
        scale : function(sx, sy) {
            // swissqrcode requires clipping and drawing that are not scaled to the
            // the barcode module size.
            if (opts.bcid == 'swissqrcode') {
                return [ sx, sy ];
            } else {
                return [ (sx|0)||1, (sy|0)||1 ];
            }
        },

        // Measure text.  This and scale() are the only drawing primitives that
        // are called before init().
        //
        // `font` is the font name typically OCR-A or OCR-B.
        // `fwidth` and `fheight` are the requested font cell size.  They will
        // usually be the same, except when the scaling is not symetric.
        measure : function(str, font, fwidth, fheight) {
            fwidth = fwidth|0;
            fheight = fheight|0;

            var fontid = FontLib.lookup(font);
            var width = 0;
            var ascent = 0;
            var descent = 0;
            for (var i = 0, l = str.length; i < l; i++) {
                var ch = str.charCodeAt(i);
                var glyph = FontLib.getglyph(fontid, ch, fwidth, fheight);

                ascent  = Math.max(ascent, glyph.top);
                descent = Math.max(descent, glyph.height - glyph.top);

                if (i == l-1) {
                    width += glyph.left + glyph.width;
                } else {
                    width += glyph.advance;
                }
            }
            return { width:width, ascent:ascent, descent:descent };
        },

        // width and height represent the maximum bounding box the graphics will occupy.
        // The dimensions are for an unrotated rendering.  Adjust as necessary.
        init : function(width, height) {
            // Add in the effects of padding.  These are always set before the
            // drawing constructor is called.
            var padl = opts.paddingleft;
            var padr = opts.paddingright;
            var padt = opts.paddingtop;
            var padb = opts.paddingbottom;
            var rot  = opts.rotate || 'N';

            width  += padl + padr;
            height += padt + padb;

            if (+opts.sizelimit && +opts.sizelimit < width * height) {
                throw new Error('Image size over limit');
            }

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
            gs_xymap = [];
            gs_xymap.min = Infinity;
            gs_xyclip = null;
            gs_r = gs_g = gs_b = 0;

            // Get the rgba image from the constructor
            var res = this.image(gs_width, gs_height);
            gs_image   = res.buffer;
            gs_rowbyte = res.ispng ? 1 : 0;
        },
        // Unconnected stroked lines are used to draw the bars in linear barcodes;
        // and the border around a linear barcode (e.g. ITF-14)
        // No line cap should be applied.  These lines are always orthogonal.
        line : function(x0, y0, x1, y1, lw, rgb) {
            x0 = x0|0;
            y0 = y0|0;
            x1 = x1|0;
            y1 = y1|0;

            // Most linear barcodes, the line width will be integral.  The exceptions
            // are variable width barcodes (e.g. code39) and the postal 4-state codes.
            lw = Math.round(lw) || 1;

            if (y1 < y0) { var t = y0; y0 = y1; y1 = t; }
            if (x1 < x0) { var t = x0; x0 = x1; x1 = t; }

            gs_r = parseInt(rgb.substr(0,2), 16);
            gs_g = parseInt(rgb.substr(2,2), 16);
            gs_b = parseInt(rgb.substr(4,2), 16);

            // Horizontal or vertical line?
            var w2 = (lw/2)|0;
            if (x0 == x1) {
                // Vertical line
                x0 = x0 - lw + w2;  // big half
                x1 = x1 + w2 - 1;   // small half
            } else {
                // Horizontal line (inverted halves)
                y0 = y0 - w2;
                y1 = y1 + lw - w2 - 1;
            }
            for (var y = y0; y <= y1; y++) {
                for (var x = x0; x <= x1; x++) {
                    set(x, y, 255);
                }
            }
        },

        // Polygons are used to draw the connected regions in a 2d barcode.
        // These will always be unstroked, filled, orthogonal shapes.
        //
        // You will see a series of polygon() calls, followed by a fill().
        polygon : function(pts) {
            var npts = pts.length;
            for (var j = npts-1, i = 0; i < npts; j = i++) {
                if (pts[j][0] == pts[i][0]) {
                    // Vertical lines do not get their end points. End points
                    // are added by the horizontal line logic.
                    var xj = pts[j][0]|0;   // i or j, doesn't matter
                    var yj = pts[j][1]|0;
                    var yi = pts[i][1]|0;
                    if (yj > yi) {
                        for (var y = yi+1; y < yj; y++) {
                            addPoint(xj, y);
                        }
                    } else {
                        for (var y = yj+1; y < yi; y++) {
                            addPoint(xj, y);
                        }
                    }
                } else {
                    var xj = pts[j][0]|0;
                    var xi = pts[i][0]|0;
                    var yj = pts[j][1]|0;   // i or j, doesn't matter

                    // Horizontal lines are tricky.  As a rule, top lines get filled,
                    // bottom lines do not (similar to how left edges get filled and
                    // right edges do not).
                    //
                    // Where it gets complex is deciding whether the line actually
                    // adds edges.  There are cases where a horizontal line does
                    // not add anything to the scanline plotting.  And it doesn't
                    // actually matter whether the line is a top or bottom edge,
                    // the logic is the same.
                    //
                    // A left edge is added if the edge to its left is below.
                    // A right edge is added if the edge to its right is below.
                    if (xj < xi) {
                        var yl = pts[j == 0 ? npts-1 : j-1][1]; // left edge
                        var yr = pts[i == npts-1 ? 0 : i+1][1]; // right edge
                        if (yl > yj) {
                            addPoint(xj, yj);
                        }
                        if (yr > yj) {
                            addPoint(xi, yj);
                        }
                    } else {
                        var yl = pts[i == npts-1 ? 0 : i+1][1]; // left edge
                        var yr = pts[j == 0 ? npts-1 : j-1][1]; // right edge
                        if (yl > yj) {
                            addPoint(xi, yj);
                        }
                        if (yr > yj) {
                            addPoint(xj, yj);
                        }
                    }
                }
            }
        },
        // An unstroked, filled hexagon used by maxicode.  You can choose to fill
        // each individually, or wait for the final fill().
        //
        // The hexagon is drawn from the top, counter-clockwise.
        //
        // The X-coordinate for the top and bottom points on the hexagon is always
        // .5 pixels.  We draw our hexagons with a 2 pixel flat top.
        //
        // All other points of the polygon/hexagon are guaranteed to be integer values.
        hexagon : function(pts, rgb) {
            var x = pts[0][0]|0;
            var y = pts[0][1]|0;
            var qh = (pts[1][1] - pts[0][1])|0;     // height of triangle (quarter height)
            var vh = (pts[2][1] - pts[1][1] - 1)|0; // height of vertical side
            var xl = (pts[2][0])|0;                 // left side
            var xr = (pts[4][0])|0;                 // right side

            gs_r = parseInt(rgb.substr(0,2), 16);
            gs_g = parseInt(rgb.substr(2,2), 16);
            gs_b = parseInt(rgb.substr(4,2), 16);

            fillSegment(x, x+1, y++);
            for (var k = 1; k < qh; k++) {
                fillSegment(x-2*k, x+1+2*k, y++);
            }
            for (var k = 0; k <= vh; k++) {
                fillSegment(xl, xr, y++);
            }
            for (var k = qh-1; k >= 1; k--) {
                fillSegment(x-2*k, x+1+2*k, y++);
            }
            fillSegment(x, x+1, y);
        },
        // An unstroked, filled ellipse.  Used by dotcode and maxicode at present.
        // maxicode issues pairs of ellipse calls (one cw, one ccw) followed by a fill()
        // to create the bullseye rings.  dotcode issues all of its ellipses then a
        // fill().
        ellipse : function(x, y, rx, ry, ccw) {
            drawEllipse((x-rx)|0, (y-ry)|0, (x+rx)|0, (y+ry)|0, ccw);
        },
        // PostScript's default fill rule is non-zero but since there are never
        // intersecting regions, we use the easier to implement even-odd.
        fill : function(rgb) {
            gs_r = parseInt(rgb.substr(0,2), 16);
            gs_g = parseInt(rgb.substr(2,2), 16);
            gs_b = parseInt(rgb.substr(4,2), 16);

            evenodd();
            gs_xymap = [];
            gs_xymap.min = Infinity;
        },
        // Currently only used by swissqrcode.  The `polys` area is an array of
        // arrays of points.  Each array of points is identical to the `pts`
        // parameter passed to polygon().  The postscript default clipping rule,
        // like the fill rule, is even-odd winding.
        clip : function(polys) {
            if (!gs_xyclip) {
                gs_xyclip = [];
                gs_xyclip.min = Infinity;
            }
            // Swap out the xymap for the clip map so addPoint() works on it.
            var xymap = gs_xymap;
            gs_xymap = gs_xyclip;

            // Now just use the polygon() logic to fill in the clipping regions.
            for (var i = 0, l = polys.length; i < l; i++) {
                this.polygon(polys[i]);
            }

            // Restore
            gs_xymap = xymap;
        },
        unclip : function() {
            gs_xyclip = null;
        },
        // Draw text with optional inter-character spacing.  `y` is the baseline.
        // font is an object with properties { name, width, height, rotate, dx }
        // width and height are the font cell size.
        // rotate is one of 0, 90, 180, 270 (default is zero)
        // dx is extra space requested between characters (usually zero).
        text : function(x, y, str, rgb, font) {
            x = x|0;
            y = y|0;

            gs_r = parseInt(rgb.substr(0,2), 16);
            gs_g = parseInt(rgb.substr(2,2), 16);
            gs_b = parseInt(rgb.substr(4,2), 16);

            var fontid  = FontLib.lookup(font.name);
            var fwidth  = font.width|0;
            var fheight = font.height|0;
            var dx      = font.dx|0;

            // Since the SVG drawing must use a local rotation, we'll do it here as well.
            var tx0 = 0, tx1 = 0, ty0 = 0, ty1 = 0;
            switch (font.rotate) {
            case 90:  tx1 =  1; ty0 = -1; break;
            case 180: tx0 = -1; ty1 = -1; break;
            case 270: tx1 = -1; ty0 =  1; break;
            default:  tx0 =  1; ty1 =  1; break;
            }

            var gx = 0;
            for (var k = 0; k < str.length; k++) {
                var ch = str.charCodeAt(k);
                var glyph = FontLib.getglyph(fontid, ch, fwidth, fheight);

                var gt = -glyph.top;
                var gl = glyph.left;
                var gw = glyph.width;
                var gh = glyph.height;
                var gb = glyph.bytes;
                var go = glyph.offset;      // offset into bytes

                for (var i = 0; i < gw; i++) {
                    for (var j = 0; j < gh; j++) {
                        var a = gb[go + j * gw + i];
                        if (a) {
                            var xx = gx+gl+i;
                            var yy = gt+j;
                            var tx = tx0 * xx + tx1 * yy;
                            var ty = ty0 * xx + ty1 * yy;
                            set(x+tx, y+ty, a);
                        }
                    }
                }
                gx += glyph.advance + dx;
            }
        },
        // Called after all drawing is complete.
        end : function() {
        },
    };

    // This code is specialized to deal with two types of RGBA buffers:
    // - canvas style, which is true RGBA
    // - PNG style, which has a one-byte "filter code" prefixing each row.
    function set(x, y, a) {
        if (gs_xyclip && clipped(x, y)) {
            return;
        }
        // translate/rotate
        x += gs_dx;
        y += gs_dy;
        var tx = tx0 * x + tx1 * y + tx2 * (gs_width-1) + tx3 * (gs_height-1);
        var ty = ty0 * x + ty1 * y + ty2 * (gs_width-1) + ty3 * (gs_height-1);

        // https://en.wikipedia.org/wiki/Alpha_compositing
        var offs = (ty * gs_width + tx) * 4 + (ty+1) * gs_rowbyte;
        var dsta = gs_image[offs+3] / 255;
        var srca = a / 255;
        var inva = (1 - srca) * dsta;
        var outa = srca + inva;

        gs_image[offs+0] = ((gs_r * srca + gs_image[offs+0] * inva) / outa)|0;
        gs_image[offs+1] = ((gs_g * srca + gs_image[offs+1] * inva) / outa)|0;
        gs_image[offs+2] = ((gs_b * srca + gs_image[offs+2] * inva) / outa)|0;
        gs_image[offs+3] = (255 * outa)|0;
    }

    // Add a point on an edge to the scanline map.
    function addPoint(x, y) {
        if (gs_xymap.min > y) gs_xymap.min = y;
        if (!gs_xymap[y]) {
            gs_xymap[y] = [ x ];
        } else {
            gs_xymap[y].push(x);
        }
    }

    function fillSegment(x0, x1, y) {
        while (x0 <= x1) {
            set(x0++, y, 255);
        }
    }

    // even-odd fill
    //
    // This implementation is optimized for BWIPP's simple usage.
    // It is not a general purpose scanline fill.  It relies heavily on
    // polygon() creating the correct intersections.
    function evenodd() {
        var ymin = gs_xymap.min;
        var ymax = gs_xymap.length-1;

        for (var y = ymin; y <= ymax; y++) {
            var pts = gs_xymap[y];
            if (!pts) {
                continue
            }
            pts.sort(function(a, b) { return a - b; });

            var wn = false;
            var xl = 0;
            for (var n = 0, npts = pts.length; n < npts; n++) {
                var x = pts[n];
                if (wn) {
                    fillSegment(xl, x-1, y);
                } else {
                    xl = x;
                }
                wn = !wn;
            }
        }
    }

    function drawEllipse(x0, y0, x1, y1, dir) {
        x0 = x0|0;
        y0 = y0|0;
        x1 = x1|0;
        y1 = y1|0;

        var a = Math.abs(x1-x0);
        var b = Math.abs(y1-y0);
        var b1 = b & 1;
        var dx = 4*(1-a)*b*b;
        var dy = 4*(b1+1)*a*a;
        var err = dx + dy + b1*a*a;
        var e2;

        // Left and right edges
        var left = [], right = [];
        left.min = right.min = Infinity;

        if (x0 > x1) { x0 = x1; x1 += a; }
        if (y0 > y1) y0 = y1;
        y0 += ((b+1)/2)|0;
        y1 = y0 - b1;
        a *= 8*a; b1 = 8*b*b;

        do {
            maxedge(right, x1, y0); // 1st quadrant
            minedge(left, x0, y0);  // 2nd quadrant
            minedge(left, x0, y1);  // 3rd quadrant
            maxedge(right, x1, y1); // 4th quadrant
            e2 = 2*err;
            if (e2 >= dx) { x0++; x1--; dx += b1; err += dx; }
            if (e2 <= dy) { y0++; y1--; dy += a;  err += dy; }
        } while (x0 <= x1);

        while (y0-y1 < b) { // too early stop of flat ellipse
            maxedge(right, x1+1, y0);
            minedge(left, x0-1, y0++);
            minedge(left, x0-1, y1);
            maxedge(right, x1+1, y1--);
        }

        for (var y = left.min, max = left.length-1; y <= max; y++) {
            addPoint(left[y], y);
        }
        // The points we calculated are "inside".  The fill algorithm excludes
        // right edges, so +1 on each x.
        for (var y = right.min, max = right.length-1; y <= max; y++) {
            addPoint(right[y]+1, y);
        }

        function minedge(e, x, y) {
            if (e.min > y) e.min = y;
            var ey = e[y];
            if (ey == null || ey > x) {
                e[y] = x;
            }
        }

        function maxedge(e, x, y) {
            if (e.min > y) e.min = y;
            var ey = e[y];
            if (ey == null || ey < x) {
                e[y] = x;
            }
        }
    }

    // Returns true if outside the clipping region.
    function clipped(x, y) {
        var pts = gs_xyclip[y];
        if (!pts) {
            return true;
        }
        if (!pts.sorted) {
            pts.sort(function(a, b) { return a - b; });
            pts.sorted = true;
        }

        var wn = false;
        for (var n = 0, npts = pts.length; n < npts; n++) {
            var xn = pts[n];
            if (xn > x) {
                return !wn;
            } else if (xn == x) {
                return wn;
            }
            wn = !wn;
        }
        return true;
    }

    // Returns 1 if clockwise, -1 if ccw.
    function polydir(pts) {
        var xp = 0;
        for (var i = 0, l = pts.length, j = l-1; i < l; j = i++) {
            xp += pts[j][0] * pts[i][1] - pts[i][0] * pts[j][1];
        }
        return xp > 0 ? 1 : -1;
    }
}
