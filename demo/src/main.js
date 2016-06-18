/* global $, Bitmap, BWIPJS, BWIPP, FileDrop, fontClick, fontRead, fontSelected, Module, saveAs */

import symdesc from './symdesc';

function saveCanvas(type, ext) {
    const canvas = document.getElementById('canvas');
    canvas.toBlob(blob => {
        saveAs(blob, saveCanvas.basename + ext);
    }, type, 1);
}

function setURL() {
    const elt = symdesc[$('#symbol').val()];
    const text = $('#symtext')
        .val()
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');
    const altx = $('#symaltx')
        .val()
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');
    const opts = $('#symopts')
        .val()
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');

    /* eslint-disable prefer-template */
    const url = `http://api-bwipjs.rhcloud.com/?bcid=${elt.sym}&text=${encodeURIComponent(text)}` +
        (altx ? '&alttext=' + encodeURIComponent(altx) : '') +
        (opts ? '&' + opts.replace(/ /g, '&') : '');
    /* eslint-enable */

    document.getElementById('apiurl').href = url;
}

function render() {
    const elt = symdesc[$('#symbol').val()];
    const text = $('#symtext')
        .val()
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');
    const altx = $('#symaltx')
        .val()
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');
    let opts = $('#symopts')
        .val()
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');

    // Anti-aliased or monochrome fonts and scaling factors.
    const monochrome = document.getElementById('fontMono').checked;
    const scaleX = +document.getElementById('scaleX').value || 2;
    const scaleY = +document.getElementById('scaleY').value || 2;

    localStorage.setItem('bwipjsLastSymbol', elt.sym);
    localStorage.setItem('bwipjsLastBarText', text);
    localStorage.setItem('bwipjsLastAltText', altx);
    localStorage.setItem('bwipjsLastOptions', opts);
    localStorage.setItem('bwipjsLastScaleX', scaleX);
    localStorage.setItem('bwipjsLastScaleY', scaleY);
    localStorage.setItem('bwipjsLastFontMono', monochrome ? 1 : 0);

    // Link in the freetype module and how to render fonts.
    const bw = new BWIPJS(Module, monochrome);

    // Clear the page
    $('#output').text('');
    $('#stats').text('');
    $('#proof-img').css('visibility', 'hidden');
    $('.saveas').css('visibility', 'hidden');

    const canvas = document.getElementById('canvas');
    canvas.height = 1;
    canvas.width = 1;

    // Convert the options to a dictionary object, so we can pass alttext with
    // spaces.
    const tmp = opts.split(' ');
    opts = {};
    for (let i = 0; i < tmp.length; i++) {
        if (!tmp[i]) {
            continue;
        }
        const eq = tmp[i].indexOf('=');
        if (eq === -1) {
            opts[tmp[i]] = true;
        } else {
            opts[tmp[i].substr(0, eq)] = tmp[i].substr(eq + 1);
        }
    }

    // Add the alternate text
    if (altx) {
        opts.alttext = altx;
    }

    let rot = 'N';
    const rots = ['rotL', 'rotR', 'rotI'];
    for (let i = 0; i < rots.length; i++) {
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
    bw.bitmap().pad(+opts.paddingwidth * scaleX || 0, +opts.paddingheight * scaleY || 0);

    const ts0 = Date.now();

    // Render the bar code
    try {
        // Create a new BWIPP instance for each
        BWIPP()(bw, elt.sym, text, opts); // eslint-disable-line new-cap
    } catch (e) {
        // Watch for BWIPP generated raiseerror's.
        const msg = `${e}`;
        if (msg.indexOf('bwipp.') >= 0) {
            $('#output').text(msg);
        } else if (e.stack) {
            $('#output').text(e.stack);
        } else {
            $('#output').text(e);
        }
        return;
    }

    bw.bitmap().show(canvas, rot);

    const ts2 = Date.now();

    setURL();
    $('#stats').text(`Rendered in ${ts2 - ts0} msecs`);
    $('.saveas').css('visibility', 'visible');
    saveCanvas.basename = elt.sym + '-' + text.replace(/[^a-zA-Z0-9._]+/g, '-'); // eslint-disable-line max-len, prefer-template

    // Show proofs?
    if (location.search.indexOf('proofs=1') !== -1) {
        const img = document.getElementById('proof-img');
        if (img) {
            img.src = `proofs/${elt.sym}.png`;
            img.style.visibility = 'visible';
        }
    }
}

$(document).ready(() => {
    const lastSymbol = localStorage.getItem('bwipjsLastSymbol');
    const lastBarText = localStorage.getItem('bwipjsLastBarText');
    const lastAltText = localStorage.getItem('bwipjsLastAltText');
    const lastOptions = localStorage.getItem('bwipjsLastOptions');
    const lastRotate = localStorage.getItem('bwipjsLastRotation');
    const lastScaleX = +localStorage.getItem('bwipjsLastScaleX');
    const lastScaleY = +localStorage.getItem('bwipjsLastScaleY');
    const lastFntMono = +localStorage.getItem('bwipjsLastFontMono');

    const $sel = $('#symbol').change(() => {
        const desc = symdesc[$(this).val()];
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
        const canvas = document.getElementById('canvas');
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
        document.getElementById(`rot${lastRotate}`).selected = true;
    }
    if (lastFntMono) {
        document.getElementById('fontMono').checked = true;
    }

    $('#fonthdr').click(fontClick);
    $('#addfont').button().click(fontRead);
    $('.saveas').css('visibility', 'hidden');

    if (location.search.indexOf('proofs=1') !== -1) {
        // Show the images from BWIPP with Ghostscript
        const img = document.createElement('img');
        img.id = 'proof-img';
        img.style.left = '0';
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.visibility = 'hidden';
        $('#proof').append(img);
    }

    // File picker
    const zone = new FileDrop('dropzone');
    zone.event('send', files => {
        const file = files.first();
        $('#dropzone div.droptext').css('display', 'none');
        $('#dropzone div.dropfile').css('display', 'block').text(file.name);
        $('#dropzone input.fd-file')[0].title = file.name;

        fontSelected(file.nativeFile); // Native browser File object
    });

    $('form').submit(event => {
        event.preventDefault();
        render();
    });
});
