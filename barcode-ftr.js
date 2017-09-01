// bwip-js/barcode-ftr.js
//
// This code is injected below the cross-compiled barcode.ps.

// The BWIPP symbol is a factory object.  When called, it returns this
// function, which is a re-usable postscript emulation for BWIPP.
return function(bwipjs, encoder, text, opts, dontdraw) {
	if (!$0[encoder]) {
		throw new Error('bwipp.unknownEncoder: ' + encoder);
	}
	if (typeof text !== 'string') {
		throw new Error('bwipp.typeError: barcode text not a string (' +
						text + ')');
	}
	opts = opts || {};
	if (typeof opts === 'string') {
		let tmp = opts.split(' ');
		opts = {};
		for (let i = 0; i < tmp.length; i++) {
			if (!tmp[i]) {
				continue;
			}
			let eq = tmp[i].indexOf('=');
			if (eq == -1) {
				opts[tmp[i]] = true;
			} else {
				opts[tmp[i].substr(0, eq)] = tmp[i].substr(eq+1);
			}
		}
	} else if (typeof opts !== 'object' || opts.constructor !== Object) {
		throw new Error('bwipp.typeError: options not an object');
	}

	// Convert utf-16 to utf-8 but leave binary (8-bit) strings untouched.
	if (/[\u0100-\uffff]/.test(text)) {
		text = unescape(encodeURIComponent(text));
	}
		
	// Handle the `parse` option here rather than in BWIPP - eliminates
	// conflict with the parsefnc option and allows removing the parsing
	// code from BWIPP.
	if (opts.parse) {
		text = text.replace(/\^(\d\d\d)/g, function ($0,$1) {
				let v = +$1;
				if (v > 255) {
					throw new Error('bwipp.rangeError:' +
							' ^NNN out-of-range (' + $0 + ')');
				}
				return String.fromCharCode(v);
			});
		delete opts.parse;
	}

	// Don't draw? (See file runtest)
	$0.bwipjs_dontdraw = dontdraw || false;

	// Invoke the encoder
	$$ = bwipjs;
	$k = [ text, opts ];
	$j = 2;
	$0[encoder]();

	// Return what is left on the stack.  This branch should only be taken
	// when running tests with the dontdraw option.
	if ($j) {
		return $k.splice(0, $j);
	}

	return true;
}
