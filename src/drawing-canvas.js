// drawing-canvas.js
//

// opts is the same options object passed into the bwipjs methods.
function DrawingCanvas(opts, canvas) {
	if (typeof window == null) {
		throw new Error('DrawingCanvas: not a browser');
	}

	var img;
	var ctx = canvas.getContext('2d', { willReadFrequently:true });
	var drawing = DrawingBuiltin(opts);

	// Provide our specializations for the builtin drawing
	drawing.image = image;
	drawing.end = end;

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
	}
}
