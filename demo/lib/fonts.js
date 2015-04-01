// bwip-js : lib/fonts.js

function fontClick() {
	var hdr = document.getElementById('fonthdr');
	var div = document.getElementById('fontdiv');
	if (div.style.visibility == 'visible') {
		hdr.innerHTML  = '&#x25bc' + hdr.innerHTML.substr(1);
		$(div).animate({ height:0 }, {
					complete:function() {
						div.style.visibility = 'hidden';
						div.style.height	 = 'auto';
					}
				});
	} else {
		var hgt = div.offsetHeight;
		div.style.height = '0px';
		div.style.visibility = 'visible';
		hdr.innerHTML  = '&#x25b2' + hdr.innerHTML.substr(1);
		$(div).animate({ height:hgt }, {
					complete:function() {
					}
				});
	}
}

function fontSelected(file) {
	// Rather than create yet-another-global-variable, hang it off fontRead()
	fontRead.file = file;		// This is the browser's native File object
}
function fontRead() {
	var name = document.getElementById('fontname').value.trim();
	var mult = +document.getElementById('fontmult').value.trim();
	var file = fontRead.file;
	if (!name || !mult || !file)
		return;
	if (/[^a-zA-Z0-9-]/.test(name))
		return alert('Only alphanumeric and dash allowed in font-name.');
	
	// Clear the file - on error the user must re-select it.
	fontRead.file = null;
	$('#dropzone div.droptext').css('display', 'block');
	$('#dropzone div.dropfile').css('display', 'none').text('');
	$('#dropzone input.fd-file')[0].title = '';

	var reader = new FileReader();

	// Emscripten only accepts Strings and standard Arrays, not ArrayBuffers.
	reader.onloadend = function() {
		// Strategy : break the arraybuffer into 16k segments and concat
		var $16k = 16 * 1024;
		var result = '';
		var length = reader.result.byteLength;
		for (var i = 0; i < length; i += $16k) {
			var seg = new Uint8Array(reader.result, i, Math.min(length-i, $16k));
			result += String.fromCharCode.apply(null, seg);
		}
		try {
			fontLoad(name, file.name, mult, result);
			fontSave(name, file.name, mult, result);
			fontShow(name, file.name, mult);
		} catch (e) {
			return alert(name + ': ' + file.name + ': ' + e);
		}

		document.getElementById('fontname').value = '';
		document.getElementById('fontmult').value = '100';
	}
	reader.readAsArrayBuffer(file);
}

// Loads a file into emscripten and freetype
function fontLoad(fontname, filename, sizemult, fontfile) {
	Module.FS_createDataFile('/', filename, fontfile, true, false);

	var load_font = Module.cwrap("load_font", 'number',
								['string','string','number']);
	var rv = load_font(filename, fontname, sizemult);
	if (rv != 0) {
		FS.unlink('/' + filename);
		throw 'Error: font load failed [' + rv + ']';
	}
}

// Saves the font to localStorage
function fontSave(fontname, filename, sizemult, fontfile) {
	// Find a free slot - first check for existing name
	for (var i = 0; i < 8; i++) {
		var name = localStorage.getItem('bwipjsFontName' + i);
		if (name && name.toLowerCase() == fontname.toLowerCase())
			break;
	}
	if (i == 8) {
		for (var i = 0; i < 8 && localStorage.getItem('bwipjsFontName' + i); i++)
			;
		if (i == 8)
			throw 'No more room in local-storage';
	}
	try {
		localStorage.setItem('bwipjsFontName' + i, fontname);
		localStorage.setItem('bwipjsFileName' + i, filename);
		localStorage.setItem('bwipjsSizeMult' + i, sizemult);
		localStorage.setItem('bwipjsFontFile' + i, btoa(fontfile));
	} catch (e) {
		localStorage.removeItem('bwipjsFontName' + i);
		localStorage.removeItem('bwipjsFileName' + i);
		localStorage.removeItem('bwipjsSizeMult' + i);
		localStorage.removeItem('bwipjsFontFile' + i);
		throw 'No more room in local-storage';
	}
}

// Adds the font to the list of existing
function fontShow(fontname, filename, sizemult) {
	var div = $('#fontlist');
	if (div.hasClass('empty')) {
		div.html(
			'<table border=0 cellpadding=0 cellspacing=0><tbody>' +
			'<tr><th>Font Name<th>File Name<th>Mult<th><br>' +
			'</table>')
			.removeClass('empty').addClass('visible');
	}

	var row = $('#fontlist tr.' + fontname);
	if (!row.length) {
		$('#fontlist tr:last')
			.after('<tr class="' + fontname + '"><td><td><td>' +
						'<td class="delete">' +
						'<span class="ui-icon ui-icon-trash"></span>');
		row = $('#fontlist tr.' + fontname);
		row.find('td.delete').click(function(ev) {
			fontRemove($(ev.target).closest('tr').find('td:first-child').text());
		});
	}
	$(row[0].children[0]).text(fontname);
	$(row[0].children[1]).text(filename);
	$(row[0].children[2]).text(sizemult);
}

function fontRemove(fontname) {
	for (var i = 0; i < 8; i++) {
		var name = localStorage.getItem('bwipjsFontName' + i);
		if (name && name.toLowerCase() == fontname.toLowerCase())
			break;
	}
	if (i == 8)
		return;

	// Unload from freetype
	var close_font = Module.cwrap("close_font", 'number', ['string']);
	var rv = close_font(fontname);

	// Delete from emscripten
	var filename = localStorage.getItem('bwipjsFileName' + i);
	if (filename) {
		FS.unlink(filename);
	}

	// Delete from persistent storage
	localStorage.removeItem('bwipjsFontName' + i);
	localStorage.removeItem('bwipjsFileName' + i);
	localStorage.removeItem('bwipjsSizeMult' + i);
	localStorage.removeItem('bwipjsFontFile' + i);

	$('#fontlist tr.' + fontname).remove();
	if ($('#fontlist tr').length == 1)
		$('#fontlist').html('').removeClass('visible').addClass('empty');
}
