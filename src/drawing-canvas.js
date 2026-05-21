// drawing-canvas.js
//
// `maybe` maybe the canvas, pre v4.0.
function DrawingCanvas(canvas, maybe) {
    // Pre setops() backward compatibility
    if (IsCanvas(maybe)) {    // IsCanvas() defined in exports.js
        canvas = maybe;
    }

    var img;
    var ctx = canvas.getContext('2d', { willReadFrequently:true });
    var drawing = DrawingBuiltin();

    // Provide our specializations for the builtin drawing
    drawing.image = image;
    drawing.end = end;

    // Reflect setopts() into the super
    var opts;
    var _setopts = drawing.setopts;
    drawing.setopts = function (options) {
        opts = options;
        _setopts && _setopts.call(drawing, options);
    };

    return drawing;


    // Called by DrawingBuiltin.init() to get the ARGB bitmap for rendering.
    function image(width, height) {
        canvas.width  = width;
        canvas.height = height;

        // Set background
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (/^[0-9a-fA-F]{6}$/.test(''+opts.backgroundcolor)) {
            ctx.fillStyle = '#' + opts.backgroundcolor;
            ctx.fillRect(0, 0, width, height);
        } else {
            ctx.clearRect(0, 0, width, height);
        }

        // Prepare the bitmap
        img = ctx.getImageData(0, 0, width, height);

        // The return value is designed for both canvas pure-RGBA and PNG RGBA
        return { buffer:img.data, ispng:false };
    }

    function end() {
        ctx.putImageData(img, 0, 0);
        return canvas;
    }
}
