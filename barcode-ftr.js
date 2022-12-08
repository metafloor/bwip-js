// bwip-js/barcode-ftr.js
//
// This code is injected below the cross-compiled barcode.js.

// `encoder` is one of the bwipp_ functions
function bwipp_encode(bwipjs, encoder, text, opts, dontdraw) {
	if (typeof text !== 'string') {
		throw new Error('bwipp.typeError: barcode text not a string (' +
						text + ')');
	}
	opts = opts || {};
	if (typeof opts === 'string') {
		var tmp = opts.split(' ');
		opts = {};
		for (var i = 0; i < tmp.length; i++) {
			if (!tmp[i]) {
				continue;
			}
			var eq = tmp[i].indexOf('=');
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
		
	// Don't draw? (See file runtest)
	$0.bwipjs_dontdraw = opts.dontdraw || dontdraw || false;

	// Convert opts to a Map
	var map = new Map;
	for (var id in opts) {
		if (opts.hasOwnProperty(id)) {
			map.set(id, opts[id]);
		}
	}

	// Invoke the encoder
	$$ = bwipjs;
	$k = [ text, map ];
	$j = 2;
	encoder();

	// Return what is left on the stack.  This branch should only be taken
	// when running with the dontdraw option.
	if ($j) {
		return $k.splice(0, $j);
	}

	return true;
}
