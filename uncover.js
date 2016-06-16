// bwipjs/uncover.js
//
// Usage:  node uncover.js json-file
//
// We want to emit the code coloring without the coverage boilerplate.
//
// The BWIPP functions look like:
//		bwipjs_functions.push("<ident>");
//		$0.<ident> = function() {
//			bwipjs_coverage = {
//				<max-branch-nbr>:1
//			};
//			try {
//
//			... actual bwipp function body goes here ...
//
//			} catch (e) {
//				throw e;
//			} finally {
//				typeof require === "function" <blah>
//			}
//		}
//
// Functions names that are not javascript idents are emitted as:
//		$0["<ident>"] = function() {
//
// Likewise, each branch looks like:
//			bwipjs_coverage[X] = 1;
//			<blah>
//		} <optional else>
//
var fs = require('fs');
var data = eval('('+fs.readFileSync(process.argv[2], 'binary')+')');
var lines = fs.readFileSync('bwipp.js', 'binary').split(/\r\n|[\r\n]/);
var stats = [];			// encoder stats
var html = '';
var tabs = [];
var taken = null;		// branches taken in the current func

// Make the line html-safe (this is only for function-body code that is
// indented an extra level due to the try-catch block
function emit(s) {
	return s.replace(/^\t/, '').replace(/\t/g, '   ')
			.replace(/&/g, '&amp;').replace(/</g, '&lt') + '\n';
}

// Count the number of branches, and the number covered.
var tbrs = 0;
var cbrs = 0;
var seen = 0;

// Total lines of code and lines covered.
var tloc = 0;
var cloc = 0;

// Are we in a taken/true or missed/false branch of code?
var state = [];

for (var i = 0; i < lines.length; i++) {
	if (!taken) {
		// Look for start of function definition
		var a = /^\t(\$0\.)(\w+)( = function.*)/.exec(lines[i]) ||
				/^\t(\$0\[")([^"]+)("\] = function.*)/.exec(lines[i]);
		if (a && data[a[2]]) {
			taken = data[a[2]];
			stats.push({ symbol:a[2], branches:1, taken:1 });
			html += '<div class="codeblock ' + a[2] + '">\n' + 
					'    ' + a[1] + '<b id="' + a[2] + '">' + a[2] + '</b>' +
						a[3] + '\n';
			i+= 4;	// skip the coverage boilerplate
			tbrs++;
			cbrs++;
			state.push(true);
		}
	} else {
		// End of function definition
		if (/\} catch \(e\) \{/.test(lines[i])) {
			// we won't ever see the closing brace
			taken = null;
			html += '   } // end ' + stats[stats.length-1].symbol + '\n' +
					'</div>';
			state.pop();
		} else  {
			var a = /^(\t+)\$bwipjs_coverage\[(\d+)\] = 1;/.exec(lines[i]);
			if (a) {
				tbrs++;
				tloc++;
				seen++;
				stats[stats.length-1].branches++;
				if (taken.indexOf(+a[2]) >= 0) {
					html += '<span class="taken">';
					cbrs++;
					cloc++;
					stats[stats.length-1].taken++;
					state.push(true);
				} else {
					html += '<span class="missed">';
					state.push(false);
				}
				// don't emit the bwipjs_coverage line
			} else if (/^\t+\}/.test(lines[i])) {
				html += '</span>' + emit(lines[i]);
				state.pop();
			} else {
				html += emit(lines[i]);
				tloc++;
				if (state[state.length-1]) {
					cloc++;
				}
			}
		}
	}
}
// If seen is zero, there was no coverage instrumentation in the code.
if (!seen) {
	console.error(process.argv[1] + ': No coverage stats.  Did you build --with-coverage?');
	process.exit(1);
}
// Build the left panel html
var links = '';
stats.sort(function(a,b) { return a.symbol.localeCompare(b.symbol); });
for (var i = 0; i < stats.length; i++) {
	var elt = stats[i];
	links += '<a class="codelink ' + elt.symbol + '" href="#' + elt.symbol +
				'">' + elt.symbol +
				'&nbsp;(' + elt.taken + '/' + elt.branches + '&nbsp;-&nbsp;' +
				(Math.round(elt.taken * 1000 / elt.branches) / 10) + '%)' +
				'</a><br>\n';
}

fs.writeFileSync('covermap.html',
`<!doctype html>
<html><head><title>bwipjs Code Coverage</title>
<style type="text/css">
html, body {
	padding:	0;
	margin:		0;
	overflow:	hidden;
}
div {
	box-sizing:		border-box;
	font-family: 	"Lucida Grande",Calibri,Helvetica,Arial,sans-serif;
}
#header {
	background-color:#040404;
	color:			#fff;
	font-weight:	bold;
	font-size:		125%;
	padding:		10px;
	text-align:		center;
}
#links {
	overflow:		visible;
	padding:		10px;
	padding-right:	24px;
}
.codeblock {
	display:		none;
}
.codeblock.show {
	display:		block;
	min-width:		100vw;	/* hack */
	white-space:	pre;
	font-family:	monospace;
}
.codeblock b {
	font-size:		115%;
	font-weight:	bold;
	color:			#6492ed;
}
a, a:visited, a:active {
	color:			#6492ed;
}
a.show {
	font-weight:	bold;
	color:			black;
	text-decoration:none;
}
.taken { color: #000; }
.missed { color: red; }
</style>
<script type="text/javascript">
function showcode(ev, ident) {
	// Undo the active codeblock and link
	var a = document.querySelectorAll('a.codelink.show');
	if (a && a.length) {
		for (var i = 0; i < a.length; i++) {
			a[i].className = 'codelink';
		}
	}
	var a = document.querySelectorAll('div.codeblock.show');
	if (a && a.length) {
		for (var i = 0; i < a.length; i++) {
			a[i].className = 'codeblock';
		}
	}
	// Activate the selected 
	ident = ident || ev.target.href.replace(/^.*#/, '');
	document.querySelectorAll('div.codeblock.' + ident)[0].className += ' show';
	document.querySelectorAll('a.codelink.' + ident)[0].className += ' show'; 

	if (history.replaceState) {
		history.replaceState(null, null, '#' + ident);
	} else {
		location.hash = '#' + ident;
	}
	var panel = document.getElementById('codepanel');
	panel.scrollTop = 0;
	panel.scrollLeft = 0;

	ev.stopPropagation();
	ev.preventDefault();
}
window.addEventListener('load', function(ev) {
		var a = document.querySelectorAll('a.codelink');
		for (var i = 0; i < a.length; i++) {
			a[i].addEventListener('click', showcode, false);
		}
		if (window.location.hash) {
			showcode(ev, window.location.hash.substr(1));
		}
	}, false);
</script>
</head><body>
<div style="display:flex;flex-direction:row;height:100vh;width:100vw">
<div style="position:relative;flex-shrink:0;height:100vh;padding:0px;overflow-y:auto;overflow-x:hidden">
<div id="header">bwipjs // Bar Code Writer in Pure JavaScript<br>Code Coverage</div>
<div id="links">
${links}
</div>
</div>
<div id="codepanel" style="flex-shrink:1;height:100vh;overflow:auto">
${html}
</div>
</div>
</body>
</html>\n`,
	'binary');

console.log('Total number of branches:    ' + tbrs);
console.log('Number of covered branches:  ' + cbrs);
console.log('Percent branch coverage:     ' + (Math.round(cbrs*1000/tbrs)/10) +
											'%');
console.log('Total lines of code:        ' + tloc);
console.log('Covered lines of code:      ' + cloc);
console.log('Percent LOC coverage:        ' + (Math.round(cloc*1000/tloc)/10) +
											'%');
process.exit(0);
