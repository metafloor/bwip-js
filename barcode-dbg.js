
// DEBUG-BEGIN
function $stack() {
	console.log('[[[');
	for (var i = $j-1; i >= 0; i--) {
		console.log(tostring($k[i]));
	}
	console.log(']]]');
	
	function tostring(v) {
		// null can be mis-typed - get it out of the way
		if (v === null) {
			return 'null';
		} else if (v === undefined) {
			return '<undefined>';
		} else if (v instanceof Array) {
			var s = '<array,' + v.o + ',' + v.length + '>[';
			for (var j = v.o, a = v.b, l = v.length + v.o; j < l; j++) {
				s += (j == v.o ? '' : ',') + tostring(a[j]);
			}
			return s + ']';
		} else if (v instanceof Uint8Array) {
			return '(' + $z[v] + ')';
		} else if (v instanceof Map) {
			var s = '<<';
            for (var elt of v) {
				s += (s.length == 2 ? '' : ',') + elt[0] + ':' + tostring(elt[1]);
			}
			return s + '>>';
		} else if (typeof v === 'object') {
			var s = '<<';
			for (var id in v) {
				s += (s.length == 2 ? '' : ',') + id + ':' + tostring(v[id]);
			}
			return s + '>>';
		} else if (typeof v === 'string') {
			return '"' + v + '"';
		} else {
			return '' + v;
		}
	}
}
// DEBUG-END
