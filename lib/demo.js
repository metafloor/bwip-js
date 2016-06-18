$(document).ready(function() {
    var lastSymbol = localStorage.getItem('bwipjsLastSymbol');
    var lastBarText = localStorage.getItem('bwipjsLastBarText');
    var lastAltText = localStorage.getItem('bwipjsLastAltText');
    var lastOptions = localStorage.getItem('bwipjsLastOptions');
    var lastRotate = localStorage.getItem('bwipjsLastRotation');
    var lastScaleX = +localStorage.getItem('bwipjsLastScaleX');
    var lastScaleY = +localStorage.getItem('bwipjsLastScaleY');
    var lastFntMono = +localStorage.getItem('bwipjsLastFontMono');

    var $sel = $('#symbol')
        .change(function(ev) {
            var desc = symdesc[$(this).val()];
            if (desc) {
                $('#symtext').val(desc.text);
                $('#symopts').val(desc.opts);
            } else {
                $('#symtext').val('');
                $('#symopts').val('');
            }
            $('#symaltx').val('');
            $('.saveas').css('visibility', 'hidden');
            $('#proof-img').css('visibility', 'hidden');
            $('#stats').text('');
            var canvas = document.getElementById('canvas');
            canvas.width = canvas.width;
        });

    if (lastSymbol) {
        $sel.val(lastSymbol);
    } else {
        $sel.prop('selectedIndex', 0);
    }
    $sel.trigger('change');

    if (lastSymbol) {
        $('#symtext').val(lastBarText);
        $('#symaltx').val(lastAltText);
        $('#symopts').val(lastOptions);
    }
    if (lastScaleX && lastScaleY) {
        $('#scaleX').val(lastScaleX);
        $('#scaleY').val(lastScaleY);
    }
    if (lastRotate) {
        document.getElementById('rot' + lastRotate).selected = true;
    }
    if (lastFntMono) {
        document.getElementById('fontMono').checked = true;
    }

    $('#fonthdr').click(fontClick);
    $('#addfont').button().click(fontRead);
    $('.saveas').css('visibility', 'hidden');

    if (location.search.indexOf('proofs=1') != -1) {
        // Show the images from BWIPP with Ghostscript
        var img = document.createElement('img');
        img.id = 'proof-img';
        img.style.left = '0';
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.visibility = 'hidden';
        $('#proof').append(img);
    }

    // File picker
    var zone = new FileDrop('dropzone');
    zone.event('send', function (files) {
        var file = files.first();
        $('#dropzone div.droptext').css('display', 'none');
        $('#dropzone div.dropfile').css('display', 'block').text(file.name);
        $('#dropzone input.fd-file')[0].title = file.name;

        fontSelected(file.nativeFile); // Native browser File object
    });

    $('form').submit(function(e) {
        e.preventDefault();
        render();
    });
});

function render() {
    var elt = symdesc[$('#symbol').val()];
    var text = $('#symtext').val().replace(/^\s+/,'').replace(/\s+$/,'');
    var altx = $('#symaltx').val().replace(/^\s+/,'').replace(/\s+$/,'');
    var opts = $('#symopts').val().replace(/^\s+/,'').replace(/\s+$/,'');

    // Anti-aliased or monochrome fonts and scaling factors.
    var monochrome = document.getElementById('fontMono').checked;
    var scaleX = +document.getElementById('scaleX').value || 2;
    var scaleY = +document.getElementById('scaleY').value || 2;

    localStorage.setItem('bwipjsLastSymbol',  elt.sym);
    localStorage.setItem('bwipjsLastBarText', text);
    localStorage.setItem('bwipjsLastAltText', altx);
    localStorage.setItem('bwipjsLastOptions', opts);
    localStorage.setItem('bwipjsLastScaleX', scaleX);
    localStorage.setItem('bwipjsLastScaleY', scaleY);
    localStorage.setItem('bwipjsLastFontMono', monochrome ? 1 : 0);

    // Link in the freetype module and how to render fonts.
    var bw = new BWIPJS(Module, monochrome);

    // Clear the page
    $('#output').text('');
    $('#stats').text('');
    $('#proof-img').css('visibility', 'hidden');
    $('.saveas').css('visibility', 'hidden');

    var canvas = document.getElementById('canvas');
    canvas.height = 1;
    canvas.width  = 1;

    // Convert the options to a dictionary object, so we can pass alttext with
    // spaces.
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

    // Add the alternate text
    if (altx) {
        opts.alttext = altx;
    }

    var rot  = 'N';
    var rots = ['rotL', 'rotR', 'rotI'];
    for (var i = 0; i < rots.length; i++) {
        if (document.getElementById(rots[i]).selected) {
            rot = rots[i].charAt(3);
            break;
        }
    }
    localStorage.setItem('bwipjsLastRotation', rot);

    // Feature or bug, BWIPP does not extend the background color into the
    // human readable text.  Fix that in the bitmap interface.
    if (opts.backgroundcolor) {
        bw.bitmap(new Bitmap(opts.backgroundcolor));
        delete opts.backgroundcolor;
    } else {
        bw.bitmap(new Bitmap);
    }

    // Set the scaling factors
    bw.scale(scaleX, scaleY);

    // Add optional padding to the image
    bw.bitmap().pad(+opts.paddingwidth*scaleX || 0, +opts.paddingheight*scaleY || 0);

    var ts0 = Date.now();

    // Render the bar code
    try {
        // Create a new BWIPP instance for each
        BWIPP()(bw, elt.sym, text, opts);
    } catch (e) {
        // Watch for BWIPP generated raiseerror's.
        var msg = ''+e;
        if (msg.indexOf('bwipp.') >= 0) {
            $('#output').text(msg);
        } else if (e.stack) {
            $('#output').text(e.stack);
        } else {
            $('#output').text(e);
        }
        return;
    }

    var ts1 = Date.now();

    bw.bitmap().show(canvas, rot);

    var ts2 = Date.now();

    setURL();
    $('#stats').text('Rendered in ' + (ts2-ts0) + ' msecs');
    $('.saveas').css('visibility', 'visible');
    saveCanvas.basename = elt.sym + '-' + text.replace(/[^a-zA-Z0-9._]+/g, '-');

    // Show proofs?
    if (location.search.indexOf('proofs=1') != -1) {
        var img = document.getElementById('proof-img');
        if (img) {
            img.src = 'proofs/' + elt.sym + '.png';
            img.style.visibility = 'visible';
        }
    }
}

function saveCanvas(type, ext) {
    var canvas = document.getElementById('canvas');
    canvas.toBlob(function (blob) {
        saveAs(blob, saveCanvas.basename + ext);
    }, type, 1);
}

function setURL() {
    var elt  = symdesc[$('#symbol').val()];
    var text = $('#symtext').val().replace(/^\s+/,'').replace(/\s+$/,'');
    var altx = $('#symaltx').val().replace(/^\s+/,'').replace(/\s+$/,'');
    var opts = $('#symopts').val().replace(/^\s+/,'').replace(/\s+$/,'');

    var url = 'http://api-bwipjs.rhcloud.com/?bcid=' + elt.sym +
                    '&text=' + encodeURIComponent(text) +
                    (altx ? '&alttext=' + encodeURIComponent(altx) : '') +
                    (opts ? '&' + opts.replace(/ /g, '&') : '');

    document.getElementById('apiurl').href = url;
}
