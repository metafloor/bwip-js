// file : pscify.js
//
// Beautify and minify the bwipp javascript module.
//
var fs = require('fs');
var beautify = require('js-beautify').js_beautify;
var bwipp_js = fs.readFileSync('bwipp-raw.js', 'binary');
var copyr_js = fs.readFileSync('bwipp-copyr.js', 'binary');

// Beautified module --> bwipp.js
fs.writeFileSync('src/bwipp.js',
				  beautify(bwipp_js, { indent_with_tabs:true }) + '\n',
				 'binary');

// Minify map of full names to their $<letter> equivalents
var mins = {
	//a					// array constructor
	arrcpy:'A',			// array copy operator
	cvs:'c',			// cvs operator
	//d					// dict constructor
	//f,				// single-precision emulation
	forall:'F',			// forall operator
	get:'g',			// get operator
	geti:'G',			// getinterval operator
	// j				// stack pointer
	// k				// operand stack
	cleartomark:'l',	// cleartomark operator
	counttomark:'m',	// counttomark operator
	put:'p',			// put operator
	puti:'P',			// putinterval operator
	aload:'q',			// aload operator
	astore:'r',			// astore operator
	cvrs:'R',			// cvrs operator
	s:'s',				// string constructor
	type:'t',			// type operator
	search:'x',			// search operator
	//z					// toString operator (internal use only)
	strcpy:'Z',			// cvrs and copy operators helper (internal use only)
};

// Minify.  We do not take the usual minify route where variable names
// are re-written (randomly shortened).  That makes trying to debug
// a run-time error way too difficult.  Besides, the cross-compiler 
// already uses fairly terse variable naming.

// Map the long function names (postscript operators) to their abbreviations.
// Remove all comments.
var cleaned = bwipp_js.replace(/\$(\w+)\(/g, function ($0, id) {
							return '$' + (mins[id]||id) + '(';
						})
					.replace(/\/\/.*/g, '')
					.replace(/\/\*([^*]|\*[^\/])*\*\//g, '');

//fs.writeFileSync('bwipp-clean.js', cleaned, 'binary');

// Remove all extraneous whitespace.
// The code emitted by the cross-compiler is always semi-colon terminated,
// so new lines are never required.
var minified = '';
var restr = /(?:"(?:[^"\\]|\\.)*")|(?:'(?:[^'\\]|\\.)*')/g;
var match = restr.exec(cleaned);
var last  = 0;
while (match) {
	minified += cleaned.substring(last, match.index)
				.replace(/([^A-Za-z0-9_$])(var|let)\s/g, '$1$2@')
				.replace(/(function|throw|typeof|return)\s+([A-Za-z$_])/g,
																	'$1@$2')
				.replace(/([^A-Za-z0-9_$])else\s+([A-Za-z0-9_$])/g,
												'$1else@$2')
				.replace(/\s+instanceof\s+/g, '@instanceof@')
				.replace(/\s+in\s+/g, '@in@')
				.replace(/\s*new\s+/g, 'new@')
				.replace(/\s*delete\s+/g, 'delete@')
				.replace(/\s+/g, '')
				.replace(/@/g, ' ') + match[0];
	last = restr.lastIndex;
	match = restr.exec(cleaned);
}
minified += cleaned.substr(last)
				.replace(/([^A-Za-z0-9_$])(var|let)\s/g, '$1$2@')
				.replace(/(function|throw|typeof|return)\s+([A-Za-z$_])/g,
																	'$1@$2')
				.replace(/([^A-Za-z0-9_$])else\s+([A-Za-z0-9_$])/g,
												'$1else@$2')
				.replace(/\s+instanceof\s+/g, '@instanceof@')
				.replace(/\s+in\s+/g, '@in@')
				.replace(/\s*new\s+/g, 'new@')
				.replace(/\s*delete\s+/g, 'delete@')
				.replace(/\s+/g, '')
				.replace(/@/g, ' ')
				;

// Minified module --> bwipp-min.js
fs.writeFileSync('src/bwipp-min.js', minified, 'binary');
