// file : rename.js
//
// Rename (minify) the postscript operators in the bwipp javascript.
//
// Output is ./bwipp-min.js
//
var fs = require('fs');
var bwipp_js = fs.readFileSync('src/bwipp.js', 'binary');

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
    cvi:'i',            // cvi operator
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
var renamed = bwipp_js.replace(/\$(\w+)\(/g, function ($0, id) {
							return '$' + (mins[id]||id) + '(';
						});

fs.writeFileSync('bwipp-min.js', renamed, 'binary');
