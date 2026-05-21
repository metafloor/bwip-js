// bwip-js/examples/drawing-example.js
//
// Example use of the drawing interface.  This code is for expository purposes only.
// Using the HTML5 canvas API creates "fuzzy" barcodes which are anathema
// to reliable scanning.
//
// For the methods that take a color `rgb` parameter, the value is always a
// string with format RRGGBB.  Internally, BWIPP accepts both RGB and CMYK values
// but bwip-js always converts CMYK to RGB before the drawing code sees it.

// The signature of this factory constructor is up to you.  It is your code that
// calls it and passes the returned drawing instance to `bwipjs.render()`.
// See example.html.
function DrawingExample(canvas, opts) {

    let ctx = canvas.getContext('2d', { willReadFrequently:true });

    // PostScript transparently creates compound path regions.
    // We must do it explicitly with canvas.
    let compound = null;

    return {
        // setopts() is called after the options are fixed-up/normalized,
        // but before calling into BWIPP.
        //
        // This method allows omitting the options object in the constructor call,
        // which simplifies the pattern:
        //
        //      bwipjs.render({ bcid:'code128', ... }, myDrawing());
        //
        // In the above, it is awkward to pass the options object to the drawing
        // constructor.
        //
        // The method is optional.  Implemented in v4.0.
        setopts(options) {
            opts = options;
        },
        // Adjust scale.  The return value is a two-element array with the
        // scale-x and scale-y values adjusted as desired.
        //
        // For this example, we want fractions of pixels, so do nothing.
        // The builtin drawing returns [ floor(sx), floor(sy) ] to ensure all
        // bars and spaces are sized uniformly.
        //
        // Composite symbols cause this method to be called multiple times; be
        // consistent if you adjust the values.
        scale(sx, sy) {
            return null;
        },
        // Measure text.  measure() and scale() are the only drawing primitives
        // called before init().
        //
        // `font` is the font name, typically Helvetica, Courier or OCR-A.
        // The bwip-js builtin drawing maps both Helvetica and Courier to OCR-B.
        //
        // The build tools pre-process the PostScript and change the text above
        // the ISBN, ISMN, ISSN barcodes to default to OCR-A.
        //
        // The user can explicitly change the font name via the BWIPP text options.
        //
        // `width` and `height` are the requested font cell size.  They will
        // usually be the same, except when the x/y scaling is not symmetric.
        measure(str, font, width, height) {
            // The canvas measure api is basically useless, especially when dealing
            // with asymmetric scaling.  The best we can hope for is a rough
            // approximation...
            ctx.font = height + 'px monospace';
            let bbox = ctx.measureText(str);

            // The return is an object with properties { width, ascent, descent }.
            // All values in pixels.
            let descent = /[Qgjpqy]/.test(str) ? 0.25 * height : 0;
            return { width:bbox.width * width / height, ascent:0.65 * height, descent:descent };
        },
        // Initialize the drawing surface.
        // `width` and `height` represent the maximum bounding box the graphics will occupy.
        // The dimensions are for an unrotated rendering.  Adjust as necessary.
        init(width, height) {
            // Add in the effects of padding
            let padl = opts.paddingleft;
            let padr = opts.paddingright;
            let padt = opts.paddingtop;
            let padb = opts.paddingbottom;

            width += padl + padr;
            height += padt + padb;

            // Set up the transform.  The values in the arrays are:
            //     [0]     : swap width/height dimensions flag
            //     [1],[2] : dx,dy translate needed with padding-left and padding-top
            //     [3]     : rotation (multiple of PI)
            let tx = {  R:[ 1, height-padt, padl, 0.5 ],
                        L:[ 1, padt, width-padl, 1.5 ],
                        I:[ 0, width-padl, height-padt, 1 ] }[opts.rotate] ||
                          [ 0, padl, padt, 0 ];

            canvas.width  = tx[0] ? height : width;
            canvas.height = tx[0] ? width : height;
            ctx.setTransform(1, 0, 0, 1, 0, 0);    // Reset to unity transform

            // Set background before the transform makes this tricky.
            if (/^[0-9a-fA-F]{6}$/.test(''+opts.backgroundcolor)) {
                ctx.fillStyle = '#' + opts.backgroundcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            // Apply the transform
            ctx.translate(tx[1], tx[2]);
            ctx.rotate(tx[3] * Math.PI);
        },
        // Unconnected stroked lines are used to draw the bars in linear barcodes.
        // No line cap should be applied.  These lines are always orthogonal.
        line(x0, y0, x1, y1, linew, rgb) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.lineWidth = linew;
            ctx.lineCap = 'butt';
            ctx.strokeStyle = '#' + rgb;
            ctx.stroke();
        },
        // Polygons are used to draw the connected regions in a 2d barcode.
        // These will always be unstroked, filled, non-intersecting,
        // orthogonal shapes.
        //
        // You will see a series of polygon() calls, followed by a fill().
        polygon(pts) {
            if (!compound) {
                compound = new Path2D;
            }
            let path = new Path2D();
            path.moveTo(pts[0][0], pts[0][1]);
            for (let i = 1; i < pts.length; i++) {
                path.lineTo(pts[i][0], pts[i][1]);
            }
            path.closePath();
            compound.addPath(path);
        },
        // An unstroked, filled hexagon used only by maxicode.  You can choose
        // to fill each individually, or wait for the final fill().
        //
        // The hexagon is drawn from the top, counter-clockwise.
        hexagon(pts, rgb) {
            // A hexagon is just a polygon...  bwip-js differentiates to allow the
            // built-in drawing to optimize.
            this.polygon(pts);
        },
        // An unstroked filled ellipse. Used by dotcode and maxicode at present.
        // Maxicode plots pairs of ellipse() calls (one cw, one ccw) followed by a
        // fill() to create the bullseye rings. Dotcode plots all of its ellipses
        // followed by a single a fill().
        ellipse(x, y, rx, ry, ccw) {
            if (!compound) {
                compound = new Path2D;
            }
            let path = new Path2D();
            path.ellipse(x, y, rx, ry, 0, 0, 2*Math.PI, ccw);
            compound.addPath(path);
        },
        // PostScript's default fill rule is non-zero.
        fill(rgb) {
            if (!compound) {
                return;
            }
            ctx.fillStyle = '#' + rgb;
            ctx.fill(compound, 'nonzero');
            compound = undefined;
        },
        // Currently only used by swissqrcode.  The `polys` area is an array of
        // arrays of points.  Each array of points is identical to the `pts`
        // parameter passed to polygon().  The clipping rule, like the fill rule,
        // defaults to non-zero winding.
        clip : function(polys) {
            ctx.save();

            let region = new Path2D();
            for (let j = 0; j < polys.length; j++) {
                let pts = polys[j];
                let path = new Path2D();
                path.moveTo(pts[0][0], pts[0][1]);
                for (let i = 1; i < pts.length; i++) {
                    path.lineTo(pts[i][0], pts[i][1]);
                }
                path.closePath();
                region.addPath(path);
            }
            ctx.clip(region, 'nonzero');
        },
        unclip : function() {
            ctx.restore();
        },
        // Draw text.
        // `y` is the baseline.
        // `font` is an object with properties { name, width, height, rotate, dx }
        //
        // `font.name` will be the same as the font name in `measure()`.
        // `font.width` and `font.height` are the font cell size, in px.
        // `font.rotate` is the angle to rotate the text about `x,y` and is set by
        //     the BWIPP `textdirection` and `extratextdirection` options.  One of:
        //           0 : direction `forward` (default)
        //          90 : direction `upward`
        //         180 : direction `backward`
        //         270 : direction `downward`
        //     Note that postscript rotates anti-clockwise for positive values whereas
        //     SVG and HTML canvas rotate clockwise.  This value uses the postscript
        //     convention.
        // `font.dx` is extra space requested between characters (usually zero).
        //
        // This code ignores the inter-character spacing to keep it simple.
        text(x, y, str, rgb, font) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-font.rotate * Math.PI / 180);
            ctx.scale(font.width / font.height, 1);
            ctx.font = font.height  + 'px monospace';
            ctx.fillStyle = '#' + rgb;
            ctx.textBaseline = 'alphabetic';
            ctx.textAlign = 'left';
            ctx.fillText(str, 0, 0);
            ctx.restore();
        },
        // Called after all drawing is complete.  The return value from this method
        // is the return value from `bwipjs.render()`.
        end() {
            // Nothing to do or return...
        },
    };
}
