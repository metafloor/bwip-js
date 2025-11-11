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
                if (tmp[i][0] == '!') {
                    // boolean !name
                    opts[tmp[i].substr(1)] = false;
                } else {
                    // boolean name
                    opts[tmp[i]] = true;
                }
            } else {
                opts[tmp[i].substr(0, eq)] = tmp[i].substr(eq+1);
            }
        }
    } else if (typeof opts !== 'object' || opts.constructor !== Object) {
        throw new Error('bwipp.typeError: options not an object');
    }

    // Convert utf-16 to utf-8 unless caller has pre-encoded the text.
    if (opts.binarytext) {
        // No 16-bit chars allowed.
        if (/[\u0100-\uffff]/.test(text)) {
            throw new Error('bwip-js: 16-bit chars not allowed with binarytext');
        }
    } else if (/[\u0080-\uffff]/.test(text)) {
        text = unescape(encodeURIComponent(text));
    }

    // Convert opts to a Map
    var map = new Map;
    for (var id in opts) {
        if (opts.hasOwnProperty(id)) {
            map.set(id, opts[id]);
        }
    }

    // Set up the initial postscript state and invoke the encoder
    $$ = bwipjs;
    $k = [ text, map ];
    $j = 2;
    $_ = { bwipjs_rawstack : opts.dontdraw || dontdraw ? [] : false };
    encoder();

    if ($_.bwipjs_rawstack) {
        return $_.bwipjs_rawstack;
    }

    return true;
}
