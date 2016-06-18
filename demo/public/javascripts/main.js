/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Bitmap = __webpack_require__(/*! ./Bitmap */ 1);
	
	var _Bitmap2 = _interopRequireDefault(_Bitmap);
	
	var _symdesc = __webpack_require__(/*! ./symdesc */ 2);
	
	var _symdesc2 = _interopRequireDefault(_symdesc);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global $, BWIPJS, BWIPP, FileDrop, fontClick, fontRead, fontSelected, Module, saveAs */
	
	function saveCanvas(type, ext) {
	    var canvas = document.getElementById('canvas');
	    canvas.toBlob(function (blob) {
	        saveAs(blob, saveCanvas.basename + ext);
	    }, type, 1);
	}
	
	function setURL() {
	    var elt = _symdesc2.default[$('#symbol').val()];
	    var text = $('#symtext').val().replace(/^\s+/, '').replace(/\s+$/, '');
	    var altx = $('#symaltx').val().replace(/^\s+/, '').replace(/\s+$/, '');
	    var opts = $('#symopts').val().replace(/^\s+/, '').replace(/\s+$/, '');
	
	    /* eslint-disable prefer-template */
	    var url = 'http://api-bwipjs.rhcloud.com/?bcid=' + elt.sym + '&text=' + encodeURIComponent(text) + (altx ? '&alttext=' + encodeURIComponent(altx) : '') + (opts ? '&' + opts.replace(/ /g, '&') : '');
	    /* eslint-enable */
	
	    document.getElementById('apiurl').href = url;
	}
	
	function render() {
	    var elt = _symdesc2.default[$('#symbol').val()];
	    var text = $('#symtext').val().replace(/^\s+/, '').replace(/\s+$/, '');
	    var altx = $('#symaltx').val().replace(/^\s+/, '').replace(/\s+$/, '');
	    var opts = $('#symopts').val().replace(/^\s+/, '').replace(/\s+$/, '');
	
	    // Anti-aliased or monochrome fonts and scaling factors.
	    var monochrome = document.getElementById('fontMono').checked;
	    var scaleX = +document.getElementById('scaleX').value || 2;
	    var scaleY = +document.getElementById('scaleY').value || 2;
	
	    localStorage.setItem('bwipjsLastSymbol', elt.sym);
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
	    canvas.width = 1;
	
	    // Convert the options to a dictionary object, so we can pass alttext with
	    // spaces.
	    var tmp = opts.split(' ');
	    opts = {};
	    for (var i = 0; i < tmp.length; i++) {
	        if (!tmp[i]) {
	            continue;
	        }
	        var eq = tmp[i].indexOf('=');
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
	
	    var rot = 'N';
	    var rots = ['rotL', 'rotR', 'rotI'];
	    for (var _i = 0; _i < rots.length; _i++) {
	        if (document.getElementById(rots[_i]).selected) {
	            rot = rots[_i].charAt(3);
	            break;
	        }
	    }
	    localStorage.setItem('bwipjsLastRotation', rot);
	
	    // Feature or bug, BWIPP does not extend the background color into the
	    // human readable text.  Fix that in the bitmap interface.
	    if (opts.backgroundcolor) {
	        bw.bitmap(new _Bitmap2.default(opts.backgroundcolor));
	        delete opts.backgroundcolor;
	    } else {
	        bw.bitmap(new _Bitmap2.default());
	    }
	
	    // Set the scaling factors
	    bw.scale(scaleX, scaleY);
	
	    // Add optional padding to the image
	    bw.bitmap().pad(+opts.paddingwidth * scaleX || 0, +opts.paddingheight * scaleY || 0);
	
	    var ts0 = Date.now();
	
	    // Render the bar code
	    try {
	        // Create a new BWIPP instance for each
	        BWIPP()(bw, elt.sym, text, opts); // eslint-disable-line new-cap
	    } catch (e) {
	        // Watch for BWIPP generated raiseerror's.
	        var msg = '' + e;
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
	
	    var ts2 = Date.now();
	
	    setURL();
	    $('#stats').text('Rendered in ' + (ts2 - ts0) + ' msecs');
	    $('.saveas').css('visibility', 'visible');
	    saveCanvas.basename = elt.sym + '-' + text.replace(/[^a-zA-Z0-9._]+/g, '-'); // eslint-disable-line max-len, prefer-template
	
	    // Show proofs?
	    if (location.search.indexOf('proofs=1') !== -1) {
	        var img = document.getElementById('proof-img');
	        if (img) {
	            img.src = 'proofs/' + elt.sym + '.png';
	            img.style.visibility = 'visible';
	        }
	    }
	}
	
	$(document).ready(function () {
	    var lastSymbol = localStorage.getItem('bwipjsLastSymbol');
	    var lastBarText = localStorage.getItem('bwipjsLastBarText');
	    var lastAltText = localStorage.getItem('bwipjsLastAltText');
	    var lastOptions = localStorage.getItem('bwipjsLastOptions');
	    var lastRotate = localStorage.getItem('bwipjsLastRotation');
	    var lastScaleX = +localStorage.getItem('bwipjsLastScaleX');
	    var lastScaleY = +localStorage.getItem('bwipjsLastScaleY');
	    var lastFntMono = +localStorage.getItem('bwipjsLastFontMono');
	
	    var $sel = $('#symbol').change(function change() {
	        var desc = _symdesc2.default[$(this).val()];
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
	    $('#addfont').click(fontRead);
	    $('.saveas').css('visibility', 'hidden');
	
	    if (location.search.indexOf('proofs=1') !== -1) {
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
	
	    $('form').submit(function (event) {
	        event.preventDefault();
	        render();
	    });
	});

/***/ },
/* 1 */
/*!*******************!*\
  !*** ./Bitmap.js ***!
  \*******************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Bitmap;
	function Bitmap() {
	    var bgcolor = arguments.length <= 0 || arguments[0] === undefined ? 'fff' : arguments[0];
	
	    var clr = [0, 0, 0];
	    var pts = [];
	    var minx = 0; // min-x
	    var miny = 0; // min-y
	    var maxx = 0; // max-x
	    var maxy = 0; // max-y
	    var padx = 0; // padding-x
	    var pady = 0; // padding-y
	
	    this.pad = function pad(x, y) {
	        padx = x;
	        pady = y;
	    };
	
	    this.color = function color(r, g, b) {
	        clr = [r, g, b];
	    };
	
	    // Sets the minimim size for the drawing surface (can grow larger).
	    // BWIPP has logic for borders (padding) that without this custom call
	    // gets lost. See custom/ren*.ps.
	    this.extent = function extent(llx, lly, urx, ury) {
	        /* eslint-disable no-param-reassign */
	        llx = Math.floor(llx);
	        lly = Math.floor(lly);
	        urx = Math.floor(urx);
	        ury = Math.floor(ury);
	        /* eslint-enable */
	        if (minx > llx) minx = llx;
	        if (miny > lly) miny = lly;
	        if (maxx < urx) maxx = urx;
	        if (maxy < ury) maxy = ury;
	    };
	
	    // a is the alpha-level of the pixel [0 .. 255]
	    this.set = function set(x, y, a) {
	        /* eslint-disable no-param-reassign */
	        x = Math.floor(x);
	        y = Math.floor(y);
	        /* eslint-enable */
	        pts.push([x, y, clr, a]);
	        if (minx > x) minx = x;
	        if (miny > y) miny = y;
	        if (maxx < x) maxx = x;
	        if (maxy < y) maxy = y;
	    };
	
	    this.show = function show(cvsid, rot) {
	        var cvs = cvsid instanceof window.HTMLCanvasElement ? cvsid : document.getElementById(cvsid); // eslint-disable-line max-len
	        if (pts.length === 0) {
	            cvs.width = 32;
	            cvs.height = 32;
	            cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
	            cvs.style.visibility = 'visible';
	            return;
	        }
	
	        var h = void 0;
	        var w = void 0;
	        if (rot === 'R' || rot === 'L') {
	            h = maxx - minx + 1;
	            w = maxy - miny + 1;
	        } else {
	            w = maxx - minx + 1;
	            h = maxy - miny + 1;
	        }
	
	        cvs.width = w + 2 * padx;
	        cvs.height = h + 2 * pady;
	
	        // Convert from cmyk?
	        if (bgcolor && bgcolor.length === 8) {
	            var c = parseInt(bgcolor.substr(0, 2), 16) / 255;
	            var m = parseInt(bgcolor.substr(2, 2), 16) / 255;
	            var y = parseInt(bgcolor.substr(4, 2), 16) / 255;
	            var k = parseInt(bgcolor.substr(6, 2), 16) / 255;
	            var r = Math.floor((1 - c) * (1 - k) * 255);
	            var g = Math.floor((1 - m) * (1 - k) * 255);
	            var b = Math.floor((1 - y) * (1 - k) * 255);
	            bgcolor = 'rgb(' + r + ',' + g + ',' + b + ')'; // eslint-disable-line no-param-reassign
	        } else if (bgcolor) {
	                bgcolor = '#' + bgcolor; // eslint-disable-line no-param-reassign
	            }
	
	        var ctx = cvs.getContext('2d');
	        ctx.fillStyle = bgcolor;
	        ctx.fillRect(0, 0, cvs.width, cvs.height);
	        ctx.fillStyle = '#000';
	
	        var id = ctx.getImageData(0, 0, cvs.width, cvs.height);
	        var dat = id.data;
	
	        for (var i = 0; i < pts.length; i++) {
	            // PostScript builds bottom-up, we build top-down.
	            var x = pts[i][0] - minx;
	            var _y = pts[i][1] - miny;
	            var _c = pts[i][2];
	            var a = pts[i][3] / 255;
	
	            if (rot === 'N') {
	                _y = h - _y - 1; // Invert y
	            } else if (rot === 'I') {
	                    x = w - x - 1; // Invert x
	                } else {
	                        _y = w - _y; // Invert y
	                        if (rot === 'L') {
	                            var t = _y;
	                            _y = h - x - 1;
	                            x = t - 1;
	                        } else {
	                            var _t = x;
	                            x = w - _y;
	                            _y = _t;
	                        }
	                    }
	
	            var idx = (_y * id.width + x) * 4;
	            dat[idx + 0] = dat[idx + 0] * (1 - a) + _c[0] * a | 0;
	            dat[idx + 1] = dat[idx + 1] * (1 - a) + _c[1] * a | 0;
	            dat[idx + 2] = dat[idx + 2] * (1 - a) + _c[2] * a | 0;
	            dat[idx + 3] = 255;
	        }
	        ctx.putImageData(id, padx, pady);
	        cvs.style.visibility = 'visible';
	    };
	}

/***/ },
/* 2 */
/*!********************!*\
  !*** ./symdesc.js ***!
  \********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    auspost: {
	        desc: 'AusPost 4 State Customer Code',
	        opts: 'includetext custinfoenc=character',
	        sym: 'auspost',
	        text: '5956439111ABA 9'
	    },
	    azteccode: {
	        desc: 'Aztec Code',
	        opts: 'format=full',
	        sym: 'azteccode',
	        text: 'This is Aztec Code'
	    },
	    azteccodecompact: {
	        desc: 'Compact Aztec Code',
	        opts: '',
	        sym: 'azteccodecompact',
	        text: '1234'
	    },
	    aztecrune: {
	        desc: 'Aztec Runes',
	        opts: '',
	        sym: 'aztecrune',
	        text: '1'
	    },
	    bc412: {
	        desc: 'BC412',
	        opts: 'semi includetext includecheckintext',
	        sym: 'bc412',
	        text: 'BC412'
	    },
	    channelcode: {
	        desc: 'Channel Code',
	        opts: 'height=0.5 includetext ',
	        sym: 'channelcode',
	        text: '3493'
	    },
	    codablockf: {
	        desc: 'Codablock F',
	        opts: 'columns=8',
	        sym: 'codablockf',
	        text: 'CODABLOCK F 34567890123456789010040digit'
	    },
	    code11: {
	        desc: 'Code 11',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'code11',
	        text: '0123456789'
	    },
	    code128: {
	        desc: 'Code 128',
	        opts: 'includetext',
	        sym: 'code128',
	        text: 'Count01234567!'
	    },
	    code16k: {
	        desc: 'Code 16K',
	        opts: '',
	        sym: 'code16k',
	        text: 'Abcd-1234567890-wxyZ'
	    },
	    code2of5: {
	        desc: 'Code 25',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'code2of5',
	        text: '01234567'
	    },
	    code32: {
	        desc: 'Italian Pharmacode',
	        opts: 'includetext',
	        sym: 'code32',
	        text: '01234567'
	    },
	    code39: {
	        desc: 'Code 39',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'code39',
	        text: 'THIS IS CODE 39'
	    },
	    code39ext: {
	        desc: 'Code 39 Extended',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'code39ext',
	        text: 'Code39 Ext!'
	    },
	    code49: {
	        desc: 'Code 49',
	        opts: '',
	        sym: 'code49',
	        text: 'MULTIPLE ROWS IN CODE 49'
	    },
	    code93: {
	        desc: 'Code 93',
	        opts: 'includetext includecheck',
	        sym: 'code93',
	        text: 'THIS IS CODE 93'
	    },
	    code93ext: {
	        desc: 'Code 93 Extended',
	        opts: 'includetext includecheck',
	        sym: 'code93ext',
	        text: 'Code93 Ext!'
	    },
	    codeone: {
	        desc: 'Code One',
	        opts: '',
	        sym: 'codeone',
	        text: 'Code One'
	    },
	    coop2of5: {
	        desc: 'COOP 2 of 5',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'coop2of5',
	        text: '01234567'
	    },
	    daft: {
	        desc: 'Custom 4 state symbology',
	        opts: '',
	        sym: 'daft',
	        text: 'FATDAFTDAD'
	    },
	    databarexpanded: {
	        desc: 'GS1 DataBar Expanded',
	        opts: '',
	        sym: 'databarexpanded',
	        text: '(01)95012345678903(3103)000123'
	    },
	    databarexpandedcomposite: {
	        desc: 'GS1 DataBar Expanded Composite',
	        opts: '',
	        sym: 'databarexpandedcomposite',
	        text: '(01)93712345678904(3103)001234|(91)1A2B3C4D5E'
	    },
	    databarexpandedstacked: {
	        desc: 'GS1 DataBar Expanded Stacked',
	        opts: 'segments=4',
	        sym: 'databarexpandedstacked',
	        text: '(01)95012345678903(3103)000123'
	    },
	    databarexpandedstackedcomposite: {
	        desc: 'GS1 DataBar Expanded Stacked Composite',
	        opts: 'segments=4 ',
	        sym: 'databarexpandedstackedcomposite',
	        text: '(01)00012345678905(10)ABCDEF|(21)12345678'
	    },
	    databarlimited: {
	        desc: 'GS1 DataBar Limited',
	        opts: '',
	        sym: 'databarlimited',
	        text: '(01)15012345678907'
	    },
	    databarlimitedcomposite: {
	        desc: 'GS1 DataBar Limited Composite',
	        opts: '',
	        sym: 'databarlimitedcomposite',
	        text: '(01)03512345678907|(21)abcdefghijklmnopqrstuv'
	    },
	    databaromni: {
	        desc: 'GS1 DataBar Omnidirectional',
	        opts: '',
	        sym: 'databaromni',
	        text: '(01)24012345678905'
	    },
	    databaromnicomposite: {
	        desc: 'GS1 DataBar Omnidirectional Composite',
	        opts: '',
	        sym: 'databaromnicomposite',
	        text: '(01)03612345678904|(11)990102'
	    },
	    databarstacked: {
	        desc: 'GS1 DataBar Stacked',
	        opts: '',
	        sym: 'databarstacked',
	        text: '(01)24012345678905'
	    },
	    databarstackedcomposite: {
	        desc: 'GS1 DataBar Stacked Composite',
	        opts: '',
	        sym: 'databarstackedcomposite',
	        text: '(01)03412345678900|(17)010200'
	    },
	    databarstackedomni: {
	        desc: 'GS1 DataBar Stacked Omnidirectional',
	        opts: '',
	        sym: 'databarstackedomni',
	        text: '(01)24012345678905'
	    },
	    databarstackedomnicomposite: {
	        desc: 'GS1 DataBar Stacked Omnidirectional Composite',
	        opts: '',
	        sym: 'databarstackedomnicomposite',
	        text: '(01)03612345678904|(11)990102'
	    },
	    databartruncated: {
	        desc: 'GS1 DataBar Truncated',
	        opts: '',
	        sym: 'databartruncated',
	        text: '(01)24012345678905'
	    },
	    databartruncatedcomposite: {
	        desc: 'GS1 DataBar Truncated Composite',
	        opts: '',
	        sym: 'databartruncatedcomposite',
	        text: '(01)03612345678904|(11)990102'
	    },
	    datalogic2of5: {
	        desc: 'Datalogic 2 of 5',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'datalogic2of5',
	        text: '01234567'
	    },
	    datamatrix: {
	        desc: 'Data Matrix',
	        opts: '',
	        sym: 'datamatrix',
	        text: 'This is Data Matrix!'
	    },
	    datamatrixrectangular: {
	        desc: 'Data Matrix Rectangular',
	        opts: '',
	        sym: 'datamatrixrectangular',
	        text: '1234'
	    },
	    ean13: {
	        desc: 'EAN-13',
	        opts: 'includetext guardwhitespace',
	        sym: 'ean13',
	        text: '2112345678900'
	    },
	    ean13composite: {
	        desc: 'EAN-13 Composite',
	        opts: 'includetext',
	        sym: 'ean13composite',
	        text: '2112345678900|(99)1234-abcd'
	    },
	    ean14: {
	        desc: 'GS1-14',
	        opts: 'includetext',
	        sym: 'ean14',
	        text: '(01) 0 46 01234 56789 3'
	    },
	    ean2: {
	        desc: 'EAN-2 (2 digit addon)',
	        opts: 'includetext guardwhitespace',
	        sym: 'ean2',
	        text: '05'
	    },
	    ean5: {
	        desc: 'EAN-5 (5 digit addon)',
	        opts: 'includetext guardwhitespace',
	        sym: 'ean5',
	        text: '90200'
	    },
	    ean8: {
	        desc: 'EAN-8',
	        opts: 'includetext guardwhitespace',
	        sym: 'ean8',
	        text: '02345673'
	    },
	    ean8composite: {
	        desc: 'EAN-8 Composite',
	        opts: 'includetext',
	        sym: 'ean8composite',
	        text: '02345673|(21)A12345678'
	    },
	    flattermarken: {
	        desc: 'Flattermarken',
	        opts: 'inkspread=-0.25 showborder borderleft=0 borderright=0',
	        sym: 'flattermarken',
	        text: '11099'
	    },
	    'gs1-128': {
	        desc: 'GS1-128',
	        opts: 'includetext',
	        sym: 'gs1-128',
	        text: '(01)95012345678903(3103)000123'
	    },
	    'gs1-128composite': {
	        desc: 'GS1-128 Composite',
	        opts: 'ccversion=c',
	        sym: 'gs1-128composite',
	        text: '(00)030123456789012340|(02)13012345678909(37)24(10)1234567ABCDEFG'
	    },
	    'gs1-cc': {
	        desc: 'GS1 Composite 2D Component',
	        opts: 'ccversion=b cccolumns=4',
	        sym: 'gs1-cc',
	        text: '(01)95012345678903(3103)000123'
	    },
	    gs1datamatrix: {
	        desc: 'GS1 Data Matrix',
	        opts: '',
	        sym: 'gs1datamatrix',
	        text: '(01)03453120000011(17)120508(10)ABCD1234(410)9501101020917'
	    },
	    gs1datamatrixrectangular: {
	        desc: 'GS1 Data Matrix Rectangular',
	        opts: '',
	        sym: 'gs1datamatrixrectangular',
	        text: '(01)03453120000011(17)120508(10)ABCD1234(410)9501101020917'
	    },
	    gs1qrcode: {
	        desc: 'GS1 QR Code',
	        opts: '',
	        sym: 'gs1qrcode',
	        text: '(01)03453120000011(8200)http://www.abc.net(10)ABCD1234(410)9501101020917'
	    },
	    hanxin: {
	        desc: 'Han Xin Code',
	        opts: '',
	        sym: 'hanxin',
	        text: 'This is Han Xin'
	    },
	    hibcazteccode: {
	        desc: 'HIBC Aztec Code',
	        opts: '',
	        sym: 'hibcazteccode',
	        text: 'A123BJC5D6E71'
	    },
	    hibccodablockf: {
	        desc: 'HIBC Codablock F',
	        opts: '',
	        sym: 'hibccodablockf',
	        text: 'A123BJC5D6E71'
	    },
	    hibccode128: {
	        desc: 'HIBC Code 128',
	        opts: 'includetext',
	        sym: 'hibccode128',
	        text: 'A123BJC5D6E71'
	    },
	    hibccode39: {
	        desc: 'HIBC Code 39',
	        opts: 'includetext',
	        sym: 'hibccode39',
	        text: 'A123BJC5D6E71'
	    },
	    hibcdatamatrix: {
	        desc: 'HIBC Data Matrix',
	        opts: '',
	        sym: 'hibcdatamatrix',
	        text: 'A123BJC5D6E71'
	    },
	    hibcdatamatrixrectangular: {
	        desc: 'HIBC Data Matrix Rectangular',
	        opts: '',
	        sym: 'hibcdatamatrixrectangular',
	        text: 'A123BJC5D6E71'
	    },
	    hibcmicropdf417: {
	        desc: 'HIBC MicroPDF417',
	        opts: '',
	        sym: 'hibcmicropdf417',
	        text: 'A123BJC5D6E71'
	    },
	    hibcpdf417: {
	        desc: 'HIBC PDF417',
	        opts: '',
	        sym: 'hibcpdf417',
	        text: 'A123BJC5D6E71'
	    },
	    hibcqrcode: {
	        desc: 'HIBC QR Code',
	        opts: '',
	        sym: 'hibcqrcode',
	        text: 'A123BJC5D6E71'
	    },
	    iata2of5: {
	        desc: 'IATA 2 of 5',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'iata2of5',
	        text: '01234567'
	    },
	    identcode: {
	        desc: 'Deutsche Post Identcode',
	        opts: 'includetext',
	        sym: 'identcode',
	        text: '563102430313'
	    },
	    industrial2of5: {
	        desc: 'Industrial 2 of 5',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'industrial2of5',
	        text: '01234567'
	    },
	    interleaved2of5: {
	        desc: 'Interleaved 2 of 5 (ITF)',
	        opts: 'height=0.5 includecheck includetext includecheckintext',
	        sym: 'interleaved2of5',
	        text: '2401234567'
	    },
	    isbn: {
	        desc: 'ISBN',
	        opts: 'includetext guardwhitespace',
	        sym: 'isbn',
	        text: '978-1-56581-231-4 52250'
	    },
	    ismn: {
	        desc: 'ISMN',
	        opts: 'includetext guardwhitespace',
	        sym: 'ismn',
	        text: '979-0-2605-3211-3'
	    },
	    issn: {
	        desc: 'ISSN',
	        opts: 'includetext guardwhitespace',
	        sym: 'issn',
	        text: '0311-175X 00 17'
	    },
	    itf14: {
	        desc: 'ITF-14',
	        opts: 'includetext',
	        sym: 'itf14',
	        text: '0 46 01234 56789 3'
	    },
	    japanpost: {
	        desc: 'Japan Post 4 State Customer Code',
	        opts: 'includetext includecheckintext',
	        sym: 'japanpost',
	        text: '6540123789-A-K-Z'
	    },
	    kix: {
	        desc: 'Royal Dutch TPG Post KIX',
	        opts: 'includetext',
	        sym: 'kix',
	        text: '1231FZ13XHS'
	    },
	    leitcode: {
	        desc: 'Deutsche Post Leitcode',
	        opts: 'includetext',
	        sym: 'leitcode',
	        text: '21348075016401'
	    },
	    matrix2of5: {
	        desc: 'Matrix 2 of 5',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'matrix2of5',
	        text: '01234567'
	    },
	    maxicode: {
	        desc: 'MaxiCode',
	        opts: 'mode=2 parse',
	        sym: 'maxicode',
	        text: '[)>^03001^02996152382802^029840^029001^0291Z00004951^029UPSN^02906X610^029159^0291234567^0291/1^029^029Y^029634 ALPHA DR^029PITTSBURGH^029PA^029^004'
	    },
	    micropdf417: {
	        desc: 'MicroPDF417',
	        opts: '',
	        sym: 'micropdf417',
	        text: 'MicroPDF417'
	    },
	    microqrcode: {
	        desc: 'Micro QR Code',
	        opts: '',
	        sym: 'microqrcode',
	        text: '1234'
	    },
	    msi: {
	        desc: 'MSI Modified Plessey',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'msi',
	        text: '0123456789'
	    },
	    onecode: {
	        desc: 'USPS Intelligent Mail',
	        opts: 'barcolor=FF0000',
	        sym: 'onecode',
	        text: '0123456709498765432101234567891'
	    },
	    pdf417: {
	        desc: 'PDF417',
	        opts: 'columns=2',
	        sym: 'pdf417',
	        text: 'This is PDF417'
	    },
	    pdf417compact: {
	        desc: 'Compact PDF417',
	        opts: 'columns=2',
	        sym: 'pdf417compact',
	        text: 'This is compact PDF417'
	    },
	    pharmacode: {
	        desc: 'Pharmaceutical Binary Code',
	        opts: 'showborder',
	        sym: 'pharmacode',
	        text: '117480'
	    },
	    pharmacode2: {
	        desc: 'Two-track Pharmacode',
	        opts: 'includetext showborder',
	        sym: 'pharmacode2',
	        text: '117480'
	    },
	    planet: {
	        desc: 'USPS PLANET',
	        opts: 'includetext includecheckintext',
	        sym: 'planet',
	        text: '01234567890'
	    },
	    plessey: {
	        desc: 'Plessey UK',
	        opts: 'includetext includecheckintext',
	        sym: 'plessey',
	        text: '01234ABCD'
	    },
	    posicode: {
	        desc: 'PosiCode',
	        opts: 'version=b inkspread=-0.5 parsefnc includetext',
	        sym: 'posicode',
	        text: 'ABC123'
	    },
	    postnet: {
	        desc: 'USPS POSTNET',
	        opts: 'includetext includecheckintext',
	        sym: 'postnet',
	        text: '01234'
	    },
	    pzn: {
	        desc: 'Pharmazentralnummer (PZN)',
	        opts: 'includetext',
	        sym: 'pzn',
	        text: '123456'
	    },
	    qrcode: {
	        desc: 'QR Code',
	        opts: 'eclevel=M',
	        sym: 'qrcode',
	        text: 'http://goo.gl/0bis'
	    },
	    rationalizedCodabar: {
	        desc: 'Codabar',
	        opts: 'includetext includecheck includecheckintext',
	        sym: 'rationalizedCodabar',
	        text: 'A0123456789B'
	    },
	    raw: {
	        desc: 'Custom 1D symbology',
	        opts: 'height=0.5',
	        sym: 'raw',
	        text: '331132131313411122131311333213114131131221323'
	    },
	    royalmail: {
	        desc: 'Royal Mail 4 State Customer Code',
	        opts: 'includetext barcolor=FF0000',
	        sym: 'royalmail',
	        text: 'LE28HS9Z'
	    },
	    sscc18: {
	        desc: 'SSCC-18',
	        opts: 'includetext',
	        sym: 'sscc18',
	        text: '(00) 0 0614141 123456789 0'
	    },
	    symbol: {
	        desc: 'Miscellaneous symbols',
	        opts: 'backgroundcolor=DD000011',
	        sym: 'symbol',
	        text: 'fima'
	    },
	    telepen: {
	        desc: 'Telepen',
	        opts: 'includetext',
	        sym: 'telepen',
	        text: 'ABCDEF'
	    },
	    telepennumeric: {
	        desc: 'Telepen Numeric',
	        opts: 'includetext',
	        sym: 'telepennumeric',
	        text: '01234567'
	    },
	    upca: {
	        desc: 'UPC-A',
	        opts: 'includetext',
	        sym: 'upca',
	        text: '416000336108'
	    },
	    upcacomposite: {
	        desc: 'UPC-A Composite',
	        opts: 'includetext',
	        sym: 'upcacomposite',
	        text: '416000336108|(99)1234-abcd'
	    },
	    upce: {
	        desc: 'UPC-E',
	        opts: 'includetext',
	        sym: 'upce',
	        text: '00123457'
	    },
	    upcecomposite: {
	        desc: 'UPC-E Composite',
	        opts: 'includetext',
	        sym: 'upcecomposite',
	        text: '00123457|(15)021231'
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map