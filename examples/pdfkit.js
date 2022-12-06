
const fs = require('fs');
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;

const bwipjs = require('..');
const drawing = require('./drawing-pdfkit');

doc.pipe(fs.createWriteStream('bwip-js.pdf'));

at(100, 100, {
        bcid: 'ean13composite',
        text: '2112345678900|(99)1234-abcd',
        includetext: true,
        padding: 8,
        backgroundcolor: 'dddddd',
        rotate:  'L',
    });
at(300, 100, {
        bcid: 'qrcode',
        text: 'bwip-js.metafloor.com',
    });
at(100, 250, {
        bcid: 'postnet',
        text: '123451234',
        includetext: true,
        rotate: 'R',
    });
// Use a different scale, just because...
at(250, 200, {
        bcid: 'azteccode',
        text: 'bwip-js.metafloor.com',
        scale: 3,
    });

// Maxicode requires a custom scale at the pdfdoc level
at(200, 300, {
        bcid: 'maxicode',
        text: '[)>^03001^02996152382802^029840^029001^0291Z00004951^029UPSN^02906X610^029159^0291234567^0291/1^029^029Y^029634 ALPHA DR^029PITTSBURGH^029PA^029^004',
        parse: true,
        mode:2,
        scale:2,    // matched set with the 0.36 below (72dpi / 200dpi)
    }, 0.36);

at(350, 300, {
        bcid: 'swissqrcode',
        text: 'SPC^CR^LF0200^CR^LF1^CR^LFCH5800791123000889012^CR^LFS^CR^LFRobert Schneider AG^CR^LFRue du Lac^CR^LF1268^CR^LF2501^CR^LFBiel^CR^LFCH^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF^CR^LF199.95^CR^LFCHF^CR^LFK^CR^LFPia-Maria Rutschmann-Schnyder^CR^LFGrosse Marktgasse 28^CR^LF9400 Rorschach^CR^LF^CR^LF^CR^LFCH^CR^LFSCOR^CR^LFRF18539007547034^CR^LF^CR^LFEPD',
        parse: true,
        scale:2,
    });


doc.end();
console.log('saved as bwip-js.pdf');

// We render at bwipjs.scale == 2 to get good detail on the drawing,
// then scale back down.  pdfkit, BWIPP and bwip-js all use the
// same scale factor of 72pt/inch.
function at(x, y, opts, scale) {
    doc.save();
    doc.translate(x, y);
    doc.scale(scale || .5);

    bwipjs.fixupOptions(opts);
    bwipjs.render(opts, drawing(doc, opts, bwipjs.FontLib));

    doc.restore();
}

