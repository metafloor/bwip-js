// fontlib.js
var FontLib = (function() {
    var fonts = [];
    var names = {};
    var glyphcache = {};
    var glyphmru = {};
    var glyphcount = 0;

    // Sentinel to simplify moving entries around in the list.
    glyphmru.next = glyphmru;
    glyphmru.prev = glyphmru;

    return {
        lookup:lookup,
        monochrome:monochrome,
        getglyph:getglyph,
        getpaths:getpaths,
        loadFont:loadFont,
    };

    // loadFont(name, data)
    // loadFont(name, mult, data)
    // loadFont(name, multy, multx, data)   // note order: y,x
    // data must be the font data, either a binary or base64 encoded string.
    function loadFont(name /*...args*/) {
        var multx = 100;
        var multy = 100;
        var data = null;

        if (arguments.length == 2) {
            data = arguments[1];
        } else if (arguments.length == 3) {
            multx = multy = +arguments[1] || 100;
            data = arguments[2];
        } else if (arguments.length == 4) {
            multy = +arguments[1] || 100;
            multx = +arguments[2] || 100;
            data = arguments[3];
        } else {
            throw new Error("loadFont(): invalid number of arguments");
        }

        var font = STBTT.InitFont(toUint8Array(data));
        font.bwipjs_name = name;
        font.bwipjs_multx = multx;
        font.bwipjs_multy = multy;

        var fontid = fonts.push(font)-1;
        names[name.toUpperCase()] = fontid;
        return fontid;
    }

    // Always returns a valid font-id (default OCR-B)
    function lookup(name) {
        var fontid = names[name.toUpperCase()];
        return fontid === undefined ? 1 : fontid;       // OCR B default
    }

    // Not supported by stbtt
    function monochrome(mono) {
        if (mono) {
            throw new Error('fontlib: monochrome not implemented');
        }
    }

    function getglyph(fontid, charcode, width, height) {
        fontid   = fontid|0;
        charcode = charcode|0;
        width    = +width;
        height   = +height;
        if (!width || width < 8) {
            width = 8;
        }
        if (!height || height < 8) {
            height = width;
        }
        if (fontid < 0 || fontid >= fonts.length) {
            fontid = 1;     // OCR B default
        }
        if (!charcode || charcode < 32) {
            charcode = 32;
        }

        // In the cache?
        var cachekey = '' + fontid + 'c' + charcode + 'w' + width + 'h' + height; 
        var glyph = glyphcache[cachekey];
        if (glyph) {
            // Unthread from the MRU
            glyph.prev.next = glyph.next;
            glyph.next.prev = glyph.prev;

            // Thread back onto the top
            var sntl = glyphmru;
            sntl.next.prev = glyph;
            glyph.next = sntl.next;
            glyph.prev = sntl;
            sntl.next = glyph;
            
            return glyph;
        }

        var font = fonts[fontid];
        var glyph = STBTT.GetGlyph(font, charcode, width * font.bwipjs_multx / 100,
                                                   height * font.bwipjs_multy / 100);
        
        if (!glyph) {
           glyph = STBTT.GetGlyph(font, 0, width * font.bwipjs_multx / 100,
                                                   height * font.bwipjs_multy / 100);
        }
        glyph.bytes = glyph.pixels;
        glyph.cachekey = cachekey;
        glyph.offset = 0;

        //glyph = {
        //      top:font.GlyphTop(),
        //      left:font.GlyphLeft(),
        //      width:font.GlyphWidth(),
        //      height:font.GlyphHeight(),
        //      advance:font.GlyphAdvance(),
        //      bitmap:font.GlyphBitmap(),
        //      offset:0,
        //      cachekey:cachekey,
        //  };

        // Purge old
        if (glyphcount > 250) {
            var sntl = glyphmru;
            var temp = sntl.prev;
            temp.prev.next = sntl;
            sntl.prev = temp.prev;
            temp.next = temp.prev = null;
            delete glyphcache[temp.cachekey];
        } else {
            glyphcount++;
        }

        // Add to cache and to the top of the MRU
        glyphcache[cachekey] = glyph;

        var sntl = glyphmru;
        sntl.next.prev = glyph;
        glyph.next = sntl.next;
        glyph.prev = sntl;
        sntl.next = glyph;

        return glyph;
    }

    function getpaths(fontid, charcode, width, height) {
        fontid   = fontid|0;
        charcode = charcode|0;
        width    = +width;
        height   = +height;
        if (!width || width < 8) {
            width = 8;
        }
        if (!height || height < 8) {
            height = width;
        }
        if (fontid < 0 || fontid >= fonts.length) {
            fontid = 1;     // OCR B default
        }
        if (!charcode || charcode < 32) {
            charcode = 32;
        }

        var font = fonts[fontid];
        return STBTT.GetPaths(font, charcode, width * font.bwipjs_multx / 100,
                                              height * font.bwipjs_multy / 100);
    }
})();

