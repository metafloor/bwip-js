// file : bwipjs.js
//
// Graphics-context interface to the BWIPP cross-compiled code

var BWIPJS = (function() {

// Math.floor(), etc. are notoriously slow.  Caching seems to help.
var floor = Math.floor;
var round = Math.round;
var ceil  = Math.ceil;
var min   = Math.min;
var max   = Math.max;

function BWIPJS(drawing) {
    if (this.constructor !== BWIPJS) {
        return new BWIPJS(drawing);
    }
    this.gstk    = [];      // Graphics save/restore stack
    this.cmds    = [];      // Graphics primitives to replay when rendering
    this.drawing = drawing; // Drawing interface

    this.reset();

    // Drawing surface bounding box
    this.minx = this.miny = Infinity;
    this.maxx = this.maxy = -Infinity;
};

// All graphics state that must be saved/restored is given a prefix of g_
BWIPJS.prototype.reset = function() {
    // Current Transform Matrix - since we don't do rotation, we can fake
    // the matrix math
    this.g_tdx  = 0;        // CTM x-offset
    this.g_tdy  = 0;        // CTM y-offset
    this.g_tsx  = 1;        // CTM x-scale factor
    this.g_tsy  = 1;        // CTM y-scale factor

    this.g_posx = 0;        // current x position
    this.g_posy = 0;        // current y position
    this.g_penw = 1;        // current line/pen width
    this.g_path = [];       // current path
    this.g_font = null;     // current font object
    this.g_rgb  = [0,0,0];  // current color (black)
    this.g_clip = false;    // clip region active
};
BWIPJS.prototype.save = function() {
    // clone all g_ properties
    var ctx = {};
    for (var id in this) {
        if (id.indexOf('g_') == 0) {
            ctx[id] = clone(this[id]);
        }
    }
    this.gstk.push(ctx);

    // Perform a deep clone of the graphics state properties
    function clone(v) {
        if (v instanceof Array) {
            var t = [];
            for (var i = 0; i < v.length; i++)
                t[i] = clone(v[i]);
            return t;
        }
        if (v instanceof Object) {
            var t = {};
            for (var id in v)
                t[id] = clone(v[id]);
            return t;
        }
        return v;
    }
};
BWIPJS.prototype.restore = function() {
    if (!this.gstk.length) {
        throw new Error('grestore: stack underflow');
    }
    var ctx  = this.gstk.pop();
    var self = this;
    if (this.g_clip && !ctx.g_clip) {
        this.cmds.push(function() {
                self.drawing.unclip();
            });
    }
    for (var id in ctx) {
        this[id] = ctx[id];
    }
};
// Per the postscript spec:
//  As discussed in Section 4.4.1, Current Path, points entered into a path
//  are immediately converted to device coordinates by the current
//  transformation matrix (CTM); subsequent modifications to the CTM do not
//  affect existing points.  `currentpoint` computes the user space
//  coordinates corresponding to the current point according to the current
//  value of the CTM. Thus, if a current point is set and then the CTM is
//  changed, the coordinates returned by currentpoint will be different
//  from those that were originally specified for the point.
BWIPJS.prototype.currpos = function() {
    return { x:(this.g_posx-this.g_tdx)/this.g_tsx,
             y:(this.g_posy-this.g_tdy)/this.g_tsy
        };
};
BWIPJS.prototype.currfont = function() {
    return this.g_font;
};
BWIPJS.prototype.translate = function(x, y) {
    this.g_tdx = this.g_tsx * x;
    this.g_tdy = this.g_tsy * y;
};
BWIPJS.prototype.scale = function(x, y) {
    this.g_tsx *= x;
    this.g_tsy *= y;
    var sxy = this.drawing.scale(this.g_tsx, this.g_tsy);
    if (sxy && sxy[0] && sxy[1]) {
        this.g_tsx = sxy[0];
        this.g_tsy = sxy[1];
    }
};
BWIPJS.prototype.setlinewidth = function(w) {
    this.g_penw = w;
};
BWIPJS.prototype.selectfont = function(f, z) {
    this.g_font = { FontName:this.jsstring(f), FontSize:+z };
};
BWIPJS.prototype.getfont = function() {
    return this.g_font.FontName;
};
// Special function for converting a Uint8Array string to string.
BWIPJS.prototype.jsstring = function(s) {
    if (s instanceof Uint8Array) {
        // Postscript (like C) treats nul-char as end of string.
        //for (var i = 0, l = s.length; i < l && s[i]; i++);
        //if (i < l) {
        //  return String.fromCharCode.apply(null,s.subarray(0, i));
        //}
        return String.fromCharCode.apply(null,s)
    }
    return ''+s;
};
// Special function to replace setanycolor in BWIPP.
// Converts a string of hex digits either rgb, rrggbb or ccmmyykk.
// Or CSS-style #rgb and #rrggbb.
BWIPJS.prototype.setcolor = function(s) {
    if (s instanceof Uint8Array) {
        s = this.jsstring(s);
    }
    if (!s) {
        return;
    }
    if (!/^(?:#?[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?|[0-9a-fA-F]{8})$/.test(s)) {
        throw new Error('bwip-js: invalid color: ' + s);
    }
    if (s[0] == '#') {
        s = s.substr(1);
    }
    if (s.length == 3) {
        var r = parseInt(s[0], 16);
        var g = parseInt(s[1], 16);
        var b = parseInt(s[2], 16);
        this.g_rgb = [ r<<4|r, g<<4|g, b<<4|b ];
    } else if (s.length == 6) {
        var r = parseInt(s.substr(0,2), 16);
        var g = parseInt(s.substr(2,2), 16);
        var b = parseInt(s.substr(4,2), 16);
        this.g_rgb = [ r, g, b ];
    } else {
        var c = parseInt(s.substr(0,2), 16) / 255;
        var m = parseInt(s.substr(2,2), 16) / 255;
        var y = parseInt(s.substr(4,2), 16) / 255;
        var k = parseInt(s.substr(6,2), 16) / 255;
        var r = round((1-c) * (1-k) * 255);
        var g = round((1-m) * (1-k) * 255);
        var b = round((1-y) * (1-k) * 255);
        this.g_rgb = [ r, g, b ];
    }
};
// Used only by swissqrcode
BWIPJS.prototype.setrgbcolor = function(r,g,b) {
    this.g_rgb = [ r, g, b ];
};
// Returns the current rgb values as a 'RRGGBB'
BWIPJS.prototype.getRGB = function() {
    var r = this.g_rgb[0].toString(16);
    var g = this.g_rgb[1].toString(16);
    var b = this.g_rgb[2].toString(16);
    return '00'.substr(r.length) + r + '00'.substr(g.length) + g + '00'.substr(b.length) + b;
};
BWIPJS.prototype.newpath = function() {
    this.g_path = [];
};
BWIPJS.prototype.closepath = function() {
    var path = this.g_path;
    var plen = path.length;
    if (!plen) return;

    var f = plen-1;
    for ( ; f >= 0 && path[f].op == 'l'; f--);
    f++;
    if (f < plen-1) {
        var poly = [];
        var xmin = Infinity;
        var ymin = Infinity;
        var xmax = -Infinity;
        var ymax = -Infinity;
        for (var i = f; i < plen; i++) {
            var a = path[i];
            poly.push([ a.x0, a.y0 ]);
            if (xmin > a.x0) xmin = a.x0;
            if (xmax < a.x0) xmax = a.x0;
            if (ymin > a.y0) ymin = a.y0;
            if (ymax < a.y0) ymax = a.y0;
        }
        var a = path[plen-1];
        var b = path[f];
        if (a.x1 != b.x0 || a.y1 != b.y0) {
            poly.push([ a.x1, a.y1 ]);
            if (xmin > a.x1) xmin = a.x1;
            if (xmax < a.x1) xmax = a.x1;
            if (ymin > a.y1) ymin = a.y1;
            if (ymax < a.y1) ymax = a.y1;
        }
        path.splice(f, plen-f,
                    { op:'p', x0:xmin, y0:ymin, x1:xmax, y1:ymax, poly:poly });
    } else {
        path.push({ op:'c' });
    }
};
BWIPJS.prototype.moveto = function(x,y) {
    this.g_posx = this.g_tdx + this.g_tsx * x;
    this.g_posy = this.g_tdy + this.g_tsy * y;
};
BWIPJS.prototype.rmoveto = function(x,y) {
    this.g_posx += this.g_tsx * x;
    this.g_posy += this.g_tsy * y;
};
BWIPJS.prototype.lineto = function(x,y) {
    var x0 = round(this.g_posx);
    var y0 = round(this.g_posy);
    this.g_posx = this.g_tdx + this.g_tsx * x;
    this.g_posy = this.g_tdy + this.g_tsy * y;
    var x1 = round(this.g_posx);
    var y1 = round(this.g_posy);

    this.g_path.push({ op:'l', x0:x0, y0:y0, x1:x1, y1:y1 });
};
BWIPJS.prototype.rlineto = function(x,y) {
    var x0 = round(this.g_posx);
    var y0 = round(this.g_posy);
    this.g_posx += this.g_tsx * x;
    this.g_posy += this.g_tsy * y;
    var x1 = round(this.g_posx);
    var y1 = round(this.g_posy);

    this.g_path.push({ op:'l', x0:x0, y0:y0, x1:x1, y1:y1 });
};
// implements both arc and arcn
BWIPJS.prototype.arc = function(x,y,r,sa,ea,ccw) {
    if (sa == ea) {
        return;
    }
    // For now, we only implement full circles...
    if (sa != 0 && sa != 360 || ea != 0 && ea != 360) {
        throw new Error('arc: not a full circle (' + sa + ',' + ea + ')');
    }

    x = this.g_tdx + this.g_tsx * x;
    y = this.g_tdy + this.g_tsy * y;

    // e == ellipse
    var rx = r * this.g_tsx;
    var ry = r * this.g_tsy;
    this.g_path.push({ op:'e', x0:x-rx, y0:y-ry, x1:x+rx, y1:y+ry,
                                x:x, y:y, rx:rx, ry:ry, sa:sa, ea:ea, ccw:ccw });
};
BWIPJS.prototype.stringwidth = function(str) {
    var tsx  = this.g_tsx;
    var tsy  = this.g_tsy;
    var size = +this.g_font.FontSize || 10;

    // The string can be either a uint8-string or regular string
    str = this.toUCS2(this.jsstring(str));

    var bbox = this.drawing.measure(str, this.g_font.FontName, size*tsx, size*tsy);

    return { w:bbox.width/tsx, h:(bbox.ascent+bbox.descent)/tsy,
             a:bbox.ascent/tsy, d:bbox.descent/tsy };
};
BWIPJS.prototype.charpath = function(str, b) {
    var sw = this.stringwidth(str);

    // Emulate the char-path by placing a rectangle around it
    this.rlineto(0, sw.a);
    this.rlineto(sw.w, 0);
    this.rlineto(0, -sw.h);
};
BWIPJS.prototype.pathbbox = function() {
    if (!this.g_path.length)    throw new Error('pathbbox: --nocurrentpoint--');
    var path = this.g_path;
    var llx = Infinity;
    var lly = Infinity;
    var urx = -Infinity;
    var ury = -Infinity;
    for (var i = 0; i < path.length; i++) {
        var a = path[i];
        if (a.op == 'c') {
            continue;
        }
        if (a.x0 < a.x1) {
            if (llx > a.x0) llx = a.x0;
            if (urx < a.x1) urx = a.x1;
        } else {
            if (llx > a.x1) llx = a.x1;
            if (urx < a.x0) urx = a.x0;
        }
        if (a.y0 < a.y1) {
            if (lly > a.y0) lly = a.y0;
            if (ury < a.y1) ury = a.y1;
        } else {
            if (lly > a.y1) lly = a.y1;
            if (ury < a.y0) ury = a.y0;
        }
    }

    // Convert to user-space coordinates
    var rv = {  llx:(llx-this.g_tdx)/this.g_tsx,
                lly:(lly-this.g_tdy)/this.g_tsy,
                urx:(urx-this.g_tdx)/this.g_tsx,
                ury:(ury-this.g_tdy)/this.g_tsy };
    return rv;
};
// Tranforms the pts array to standard (not y-inverted), unscalled values.
BWIPJS.prototype.transform = function(pts) {
    var minx = this.minx;
    var maxy = this.maxy;

    for (var i = 0; i < pts.length; i++) {
        var pt = pts[i];
        pt[0] = pt[0] - minx;
        pt[1] = maxy - pt[1];
    }
};
BWIPJS.prototype.stroke = function() {
    var tsx  = this.g_tsx;
    var tsy  = this.g_tsy;
    var path = this.g_path;
    var rgb  = this.getRGB();
    this.g_path = [];

    // This is a "super majority" round i.e. if over .66 round up.
    var penw = floor(this.g_penw * tsx + 0.66);
    var penh = floor(this.g_penw * tsy + 0.66);

    // Calculate the bounding boxes
    var nlines = 0, npolys = 0;
    for (var i = 0; i < path.length; i++) {
        var a = path[i];
        if (a.op == 'l') {
            // We only stroke vertical and horizontal lines.  Complex shapes are
            // always filled.
            if (a.x0 != a.x1 && a.y0 != a.y1) {
                throw new Error('stroke: --not-orthogonal--');
            }
            var x0 = a.x0;
            var y0 = a.y0;
            var x1 = a.x1;
            var y1 = a.y1;

            // Half widths (may be factional)
            var penw2 = penw/2;
            var penh2 = penh/2;

            if (x0 > x1) { var t = x0; x0 = x1; x1 = t; }
            if (y0 > y1) { var t = y0; y0 = y1; y1 = t; }
            if (x0 == x1) {
                this.bbox(x0-penw2, y0, x0+penw-penw2-1, y1);   // vertical line
            } else {
                this.bbox(x0, y0-penh+penh2+1, x1, y1+penh2);   // horizontal line
            }
            nlines++;
        } else if (a.op == 'p') {
            // Closed (rectangular) poly (border around the barcode)
            var minx = Infinity;
            var miny = Infinity;
            var maxx = -Infinity;
            var maxy = -Infinity;
            var pts  = a.poly;
            if (pts.length != 4) {
                throw new Error('stroke: --not-a-rect--');
            }
            for (var i = 0, j = pts.length-1; i < pts.length; j = i++) {
                var xj = pts[j][0];
                var yj = pts[j][1];
                var xi = pts[i][0];
                var yi = pts[i][1];

                if (xi != xj && yi != yj) {
                    throw new Error('stroke: --not-orthogonal--');
                }

                if (xi < minx) minx = xi;
                if (xi > maxx) maxx = xi;
                if (yi < miny) miny = yi;
                if (yi > maxy) maxy = yi;
            }

            // Half widths (integer)
            var penw2 = ceil(penw/2);
            var penh2 = ceil(penh/2);

            // We render these as two polygons plus a fill.
            // When border width is odd, allocate the bigger half to the outside.
            this.bbox(minx-penw2, miny-penh2, maxx+penw2, maxy+penh2);
            npolys++;
        } else {
            throw new Error('stroke: --not-a-line--');
        }
    }

    // Draw the lines
    var self = this;
    this.cmds.push(function() {
        // Half widths (big half and remaining half)
        var bigw2 = ceil(penw/2);
        var bigh2 = ceil(penh/2);
        var remw2 = penw - bigw2;
        var remh2 = penh - bigh2;

        for (var i = 0; i < path.length; i++) {
            var a = path[i]
            if (a.op == 'l') {
                var pts = [ [ a.x0, a.y0 ], [ a.x1, a.y1 ] ];
                self.transform(pts);
                self.drawing.line(pts[0][0], pts[0][1], pts[1][0], pts[1][1],
                            a.x0 == a.x1 ? penw : penh, rgb);
                self.fill(rgb);
            } else {
                var pts = a.poly;
                self.transform(pts);
                var x0 = min(pts[0][0], pts[2][0]);
                var x1 = max(pts[0][0], pts[2][0]);
                var y0 = min(pts[0][1], pts[2][1]);
                var y1 = max(pts[0][1], pts[2][1]);

                // Top and left edges are "inside" the polygon.
                // Bottom and right edges are outside.
                self.drawing.polygon([
                        [ x0-bigw2, y0-bigh2 ],
                        [ x0-bigw2, y1+bigh2+1 ],
                        [ x1+bigw2+1, y1+bigh2+1 ],
                        [ x1+bigw2+1, y0-bigh2 ]
                    ]);
                self.drawing.polygon([
                        [ x0+remw2, y0+remh2 ],
                        [ x0+remw2, y1-remh2+1 ],
                        [ x1-remw2+1, y1-remh2+1 ],
                        [ x1-remw2+1, y0+remh2 ],
                    ]);
                self.drawing.fill(rgb);
            }
        }
    });
};
BWIPJS.prototype.fill = function() {
    var path = this.g_path;
    var rgb  = this.getRGB();
    this.g_path = [];

    // Calculate the bounding boxes
    for (var p = 0; p < path.length; p++) {
        var a = path[p];
        if (a.op == 'p') {  // polygon
            var minx = Infinity;
            var miny = Infinity;
            var maxx = -Infinity;
            var maxy = -Infinity;
            var pts  = a.poly;
            for (var i = 0; i < pts.length; i++) {
                var xi = pts[i][0];
                var yi = pts[i][1];

                if (xi < minx) minx = xi;
                if (xi > maxx) maxx = xi;
                if (yi < miny) miny = yi;
                if (yi > maxy) maxy = yi;
            }
            // With polygons, the right and bottom edges are "outside" and do not
            // contribute to the bounding box.  But we are in postscript inverted-y
            // mode.
            this.bbox(minx, miny+1, maxx-1, maxy);
        } else if (a.op == 'e') {   // ellipse
            this.bbox(a.x - a.rx, a.y - a.ry, a.x + a.rx, a.y + a.ry);
        } else {
            throw new Error('fill: --not-a-polygon--');
        }
    }

    // Render the poly
    var self = this;
    this.cmds.push(function() {
        for (var i = 0; i < path.length; i++) {
            var a = path[i];
            if (a.op == 'p') {
                var pts = a.poly
                self.transform(pts);
                self.drawing.polygon(pts);
            } else if (a.op == 'e') {
                var pts = [ [ a.x, a.y ] ];
                self.transform(pts);
                self.drawing.ellipse(pts[0][0], pts[0][1], a.rx, a.ry, a.ccw);
            }
        }
        self.drawing.fill(rgb);
    });
};
BWIPJS.prototype.clip = function() {
    var path = this.g_path;
    this.g_path = [];
    this.g_clip = true;

    var self = this;
    this.cmds.push(function() {
        var polys = [];
        for (var i = 0; i < path.length; i++) {
            var a = path[i];
            if (a.op == 'p') {
                var pts = a.poly
                self.transform(pts);
                polys.push(pts);
            } else {
                throw new Error('clip: only polygon regions supported');
            }
        }
        self.drawing.clip(polys);
    });
};

// The pix array is in standard (not y-inverted postscript) orientation.
BWIPJS.prototype.maxicode = function(pix) {
    var tsx = this.g_tsx;
    var tsy = this.g_tsy;
    var rgb = this.getRGB();

    // Module width.  Module height is an integer multiple of tsy.
    var twidth = 1.04 * tsx * 100;
    var mwidth = (twidth / 30)|0;
    if (twidth - (mwidth*30-1) > 9) {
        mwidth++;
    }

    // Dimensions needed for plotting the hexagons.  These must be integer values.
    var w, h, wgap, hgap;
    // if (opts.??? ) {
    //  // Create a one or two pixel gap
    //  wgap = (mwidth & 1) ? 1 : 2;
    //  hgap = 1;
    //  w = mwidth - gap;
    //  h = 4 * tsy;
    // } else {
        // Create a 1/8mm gap
        wgap = (tsx/2)|0;
        hgap = (tsy/2)|0;
        w = mwidth - wgap;
        if (w & 1) {
            w--;
        }
        h = ((4*tsy)|0) - hgap;
    //}

    // These must be integer values
    var w2 = w / 2 - 1;         // half width
    var qh = ((w2+1) / 2)|0;    // quarter height
    var vh = h - 2 - 2 * qh;    // side height

    // Bounding box
    this.bbox(0, 0, mwidth*30 - wgap, tsy * 3 * 32 + tsy * 4 - hgap);

    // Render the elements
    var self = this;
    this.cmds.push(function() {
        // Draw the hexagons
        for (var i = 0; i < pix.length; i++) {
            var c = pix[i];
            var x = c % 30;
            var y = (c / 30)|0;

            // Adjust x,y to the top of hexagon
            x *= mwidth;
            x += (y & 1) ? mwidth : mwidth/2;
            x = x|0;

            y = 33 - y; // invert for postscript notation
            y *= tsy * 3;
            y += tsy * 2 - h/2;
            y = y|0;

            // Build bottom up so the drawing is top-down.
            var pts = [ [ x-0.5, y-- ] ];
            y -= qh-1;
            pts.push([x-1-w2, y--]);
            y -= vh;
            pts.push([x-1-w2, y--]);
            y -= qh-1;
            pts.push([x-0.5, y++]);
            y += qh-1;
            pts.push([x+w2, y++]);
            y += vh;
            pts.push([x+w2, y++]);

            self.transform(pts);
            self.drawing.hexagon(pts, rgb);
        }
        self.drawing.fill(rgb);


        // Draw the rings
        var x = (14 * mwidth + mwidth/2 + 0.01)|0;
        var y = ((12 * 4 + 3) * tsy - qh/2 + 0.01)|0;
        self.drawing.ellipse(x, y, (0.5774*3.5*tsx+0.01)|0, (0.5774*3.5*tsy+0.01)|0, true);
        self.drawing.ellipse(x, y, (1.3359*3.5*tsx+0.01)|0, (1.3359*3.5*tsy+0.01)|0, false);
        self.drawing.fill(rgb);
        self.drawing.ellipse(x, y, (2.1058*3.5*tsx+0.01)|0, (2.1058*3.5*tsy+0.01)|0, true);
        self.drawing.ellipse(x, y, (2.8644*3.5*tsx+0.01)|0, (2.8644*3.5*tsy+0.01)|0, false);
        self.drawing.fill(rgb);
        self.drawing.ellipse(x, y, (3.6229*3.5*tsx+0.01)|0, (3.6229*3.5*tsy+0.01)|0, true);
        self.drawing.ellipse(x, y, (4.3814*3.5*tsx+0.01)|0, (4.3814*3.5*tsy+0.01)|0, false);
        self.drawing.fill(rgb);

    });
};
// UTF-8 to UCS-2 (no surrogates)
BWIPJS.prototype.toUCS2 = function(str) {
    return str.replace(/[\xc0-\xdf][\x80-\xbf]|[\xe0-\xff][\x80-\xbf]{2}/g,
                      function(s) {
                          var code;
                          if (s.length == 2) {
                              code = ((s.charCodeAt(0)&0x1f)<<6)|
                                     (s.charCodeAt(1)&0x3f);
                          } else {
                              code = ((s.charCodeAt(0)&0x0f)<<12)|
                                     ((s.charCodeAt(1)&0x3f)<<6)|
                                     (s.charCodeAt(2)&0x3f);
                          }
                          return String.fromCharCode(code);
                      });
};
// dx,dy are inter-character gaps
BWIPJS.prototype.show = function(str, dx, dy) {
    if (!str.length) {
        return;
    }

    // Capture current graphics state
    var tsx  = this.g_tsx;
    var tsy  = this.g_tsy;
    var name = this.g_font.FontName || 'OCR-B';
    var size = (this.g_font.FontSize || 10);
    var szx  = size * tsx;
    var szy  = size * tsy;
    var posx = this.g_posx;
    var posy = this.g_posy;
    var rgb  = this.getRGB();

    // The string can be either a uint8-string or regular string.
    str = this.toUCS2(this.jsstring(str));

    // Convert dx,dy to device space
    dx = tsx * dx || 0;
    dy = tsy * dy || 0;

    // Bounding box.
    var base = posy + dy;
    var bbox = this.drawing.measure(str, name, szx, szy);
    var width = bbox.width + (str.length-1) * dx;
    this.bbox(posx, base-bbox.descent+1, posx+width-1, base+bbox.ascent);
    this.g_posx += width;

    var self = this;
    self.cmds.push(function() {
        // self.transform()
        var x = posx - self.minx;
        var y = self.maxy - posy;
        self.drawing.text(x, y, str, rgb, { name:name, width:szx, height:szy, dx:dx });
    });
};
// drawing surface bounding box
BWIPJS.prototype.bbox = function(x0, y0, x1, y1) {
    if (x0 > x1) { var t = x0; x0 = x1; x1 = t; }
    if (y0 > y1) { var t = y0; y0 = y1; y1 = t; }

    x0 = floor(x0);
    y0 = floor(y0);
    x1 = ceil(x1);
    y1 = ceil(y1);

    if (this.minx > x0) this.minx = x0;
    if (this.maxx < x1) this.maxx = x1;
    if (this.miny > y0) this.miny = y0;
    if (this.maxy < y1) this.maxy = y1;
};
BWIPJS.prototype.render = function() {
    if (this.minx === Infinity) {
        // Most likely, `dontdraw` was set in the options
        return false;
    }
    // Draw the image
    this.drawing.init(this.maxx - this.minx + 1, this.maxy - this.miny + 1,
                      this.g_tsx, this.g_tsy);
    for (var i = 0, l = this.cmds.length; i < l; i++) {
        this.cmds[i]();
    }
    return this.drawing.end();
};

return BWIPJS;
})();   // BWIPJS closure
