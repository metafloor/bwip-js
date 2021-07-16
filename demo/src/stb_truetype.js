// bwip-js/stb_trutype.js
//
// JavaScript implementation of stb_truetype.h @ https://github.com/nothings/stb.
//
// This file is part of the bwip-js project available at:
//
// 		http://metafloor.github.io/bwip-js
//
// Copyright (c) 2019 Mark Warren : MIT LICENSE

// Copyright notice from stb_truetype.h:
//
// MIT License
//
// Copyright (c) 2017 Sean Barrett
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is furnished to do
// so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

var STBTT = (function () {

var	STBTT_vmove	 = 1,
	STBTT_vline	 = 2,
	STBTT_vcurve = 3,
	STBTT_vcubic = 4,

	STBTT_PLATFORM_ID_UNICODE	= 0,
	STBTT_PLATFORM_ID_MAC		= 1,
	STBTT_PLATFORM_ID_ISO		= 2,
	STBTT_PLATFORM_ID_MICROSOFT = 3,

	STBTT_UNICODE_EID_UNICODE_1_0		= 0,
	STBTT_UNICODE_EID_UNICODE_1_1		= 1,
	STBTT_UNICODE_EID_ISO_10646			= 2,
	STBTT_UNICODE_EID_UNICODE_2_0_BMP	= 3,
	STBTT_UNICODE_EID_UNICODE_2_0_FULL	= 4,

	STBTT_MS_EID_SYMBOL			= 0,
	STBTT_MS_EID_UNICODE_BMP	= 1,
	STBTT_MS_EID_SHIFTJIS		= 2,
	STBTT_MS_EID_UNICODE_FULL	= 10;

var floor = Math.floor;
var ceil  = Math.ceil;
var sqrt  = Math.sqrt;
var abs   = Math.abs;

// Allocate an array of objects - replaces malloc(sizeof struct * n)
function oalloc(n) {
	var o = [];
	for (var i = 0; i < n; i++) {
		o.push({});
	}
	return o;
}

//static unsigned char stbtt__buf_get8(stbtt__buf * b)
function stbtt__buf_get8(b) {
    return b[b.cursor++]||0;
}

//static unsigned char stbtt__buf_peek8(stbtt__buf * b)
function stbtt__buf_peek8(b) {
    return b[b.cursor];
}

//static void stbtt__buf_seek(stbtt__buf * b, int o)
function stbtt__buf_seek(b, o) {
    b.cursor = (o > b.length || o < 0) ? b.length : o;
}

//static void stbtt__buf_skip(stbtt__buf * b, int o)
function stbtt__buf_skip(b, o) {
    stbtt__buf_seek(b, b.cursor + o);
}

//static unsigned int stbtt__buf_get(stbtt__buf * b, int n)
function stbtt__buf_get(b, n) {
    var v = 0;
    for (var i = 0; i < n; i++) {
        v = (v << 8) | stbtt__buf_get8(b);
    }
    return v;
}

// This function is only called once with a real 'p', all other uses are
// for a NULL buffer.  The for real usage, the code is inlined.
//static stbtt__buf stbtt__new_buf(const void *p, int size)
function stbtt__null_buf() {
	return { length:0 };
}

//static stbtt__buf stbtt__buf_range(const stbtt__buf * b, int o, int s)
function stbtt__buf_range(b, o, s) {
    if (o < 0 || s < 0 || o > b.length || s > b.length - o) {
        return stbtt__null_buf();
    }
	var r = b.subarray(o, o + s);
	r.cursor = 0;
	return r;
}

//static stbtt__buf stbtt__cff_get_index(stbtt__buf * b)
function stbtt__cff_get_index(b) {
    var start = b.cursor;
    var count = stbtt__buf_get(b, 2);
    if (count) {
        var offsize = stbtt__buf_get8(b);
        stbtt__buf_skip(b, offsize * count);
        stbtt__buf_skip(b, stbtt__buf_get(b, offsize) - 1);
    }
    return stbtt__buf_range(b, start, b.cursor - start);
}

//static unsigned int stbtt__cff_int(stbtt__buf * b)
function stbtt__cff_int(b) {
    var b0 = stbtt__buf_get8(b);
    if (b0 >= 32 && b0 <= 246) {
        return b0 - 139;
    } else if (b0 >= 247 && b0 <= 250) {
        return (b0 - 247) * 256 + stbtt__buf_get8(b) + 108;
    } else if (b0 >= 251 && b0 <= 254) {
        return -(b0 - 251) * 256 - stbtt__buf_get8(b) - 108;
    } else if (b0 == 28) {
        return stbtt__buf_get(b, 2);
    } else if (b0 == 29) {
        return stbtt__buf_get(b, 4);
    }
    return 0;
}

//static void stbtt__cff_skip_operand(stbtt__buf * b)
function stbtt__cff_skip_operand(b) {
    var b0 = stbtt__buf_peek8(b);
    if (b0 == 30) {
        stbtt__buf_skip(b, 1);
        while (b.cursor < b.length) {
            var v = stbtt__buf_get8(b);
            if ((v & 0xF) == 0xF || (v >> 4) == 0xF) {
                break;
            }
        }
    } else {
        stbtt__cff_int(b);
    }
}

//static stbtt__buf stbtt__dict_get(stbtt__buf * b, int key)
function stbtt__dict_get(b, key) {
    stbtt__buf_seek(b, 0);
    while (b.cursor < b.length) {
        var start = b.cursor, end, op;
        while (stbtt__buf_peek8(b) >= 28) {
            stbtt__cff_skip_operand(b);
        }
        end = b.cursor;
        op = stbtt__buf_get8(b);
        if (op == 12) {
            op = stbtt__buf_get8(b) | 0x100;
        }
        if (op == key) {
            return stbtt__buf_range(b, start, end - start);
        }
    }
    return stbtt__buf_range(b, 0, 0);
}

//static void stbtt__dict_get_ints(stbtt__buf * b, int key, int outcount, unsigned int *out)
function stbtt__dict_get_ints(b, key, outcount, out) {
    var operands = stbtt__dict_get(b, key);
    for (var i = 0; i < outcount && operands.cursor < operands.length; i++) {
        out[i] = stbtt__cff_int(operands);
    }
}
// single-integer format of above since javascript doesn't have address-of
function stbtt__dict_get_int(b, key, out) {
    var operands = stbtt__dict_get(b, key);
    if (operands.cursor < operands.length) {
        out = stbtt__cff_int(operands);
    }
	return out;
}

//static int stbtt__cff_index_count(stbtt__buf * b)
function stbtt__cff_index_count(b) {
    stbtt__buf_seek(b, 0);
    return stbtt__buf_get(b, 2);
}

//static stbtt__buf stbtt__cff_index_get(stbtt__buf b, int i)
function stbtt__cff_index_get(b, i) {
    var count, offsize, start, end;
    stbtt__buf_seek(b, 0);
    count = stbtt__buf_get(b, 2);
    offsize = stbtt__buf_get8(b);
    stbtt__buf_skip(b, i * offsize);
    start = stbtt__buf_get(b, offsize);
    end = stbtt__buf_get(b, offsize);
    return stbtt__buf_range(b, 2 + (count + 1) * offsize + start, end - start);
}

// Convert sign-extend a 16-bit integer to JS number
function INT16(n) {
	return n & 0x8000 ? (0xffff0000|n)>>0 : n;
}

//static unsigned short ttUSHORT(unsigned char *p)
function ttUSHORT(b, o) {
    return b[o] * 256 + b[o+1];
}

//static short ttSHORT(unsigned char *p)
function ttSHORT(b, o) {
    var n = b[o] * 256 + b[o+1];
	return n & 0x8000 ? (0xffff0000|n)>>0 : n;
}

//static unsigned int ttULONG(unsigned char *p)
function ttULONG(b, o) {
    return (b[o] << 24) + (b[o+1] << 16) + (b[o+2] << 8) + b[o+3];
}

//static unsigned int stbtt__find_table(unsigned char *data, unsigned int fontstart, const char *tag)
function stbtt__find_table(data, fontstart, tag) {
    var num_tables = ttUSHORT(data, fontstart + 4);
    var tabledir = fontstart + 12;
    for (var i = 0; i < num_tables; ++i) {
        var loc = tabledir + 16 * i;
        if (data[loc] == tag[0] && data[loc+1] == tag[1] && data[loc+2] == tag[2] && data[loc+3] == tag[3]) {
            return ttULONG(data, loc + 8);
        }
    }
    return 0;
}

//static stbtt__buf stbtt__get_subrs(stbtt__buf cff, stbtt__buf fontdict)
function stbtt__get_subrs(cff, fontdict) {
    var private_loc = [ 0, 0 ];
    stbtt__dict_get_ints(fontdict, 18, 2, private_loc);
    if (!private_loc[1] || !private_loc[0]) {
        return stbtt__null_buf();
    }
    var pdict = stbtt__buf_range(cff, private_loc[1], private_loc[0]);
    var subrsoff = stbtt__dict_get_int(pdict, 19, 0);
    if (!subrsoff) {
        return stbtt__null_buf();
    }
    stbtt__buf_seek(cff, private_loc[1] + subrsoff);
    return stbtt__cff_get_index(cff);
}

//static int stbtt_InitFont_internal(stbtt_fontinfo * info, unsigned char *data, int fontstart)
function stbtt_InitFont_internal(info, data, fontstart) {
    var cmap, t, i, numTables;

    info.data = data;
    info.fontstart = fontstart;
    info.cff = stbtt__null_buf();

    cmap = stbtt__find_table(data, fontstart, [ 99, 109, 97, 112 ]);		//"cmap"
    info.loca = stbtt__find_table(data, fontstart, [ 108, 111, 99, 97 ]);	//"loca"
    info.head = stbtt__find_table(data, fontstart, [ 104, 101, 97, 100 ]);	//"head"
    info.glyf = stbtt__find_table(data, fontstart, [ 103, 108, 121, 102 ]);	//"glyf"
    info.hhea = stbtt__find_table(data, fontstart, [ 104, 104, 101, 97 ]);	//"hhea"
    info.hmtx = stbtt__find_table(data, fontstart, [ 104, 109, 116, 120 ]);	//"hmtx"
    info.kern = stbtt__find_table(data, fontstart, [ 107, 101, 114, 110 ]);	//"kern"

    if (!cmap || !info.head || !info.hhea || !info.hmtx) {
        return 0;
    }
    if (info.glyf) {
        if (!info.loca) {
            return 0;
        }
    } else {
        var b, topdict, topdictidx, cff,
			cstype = 2, charstrings = 0, fdarrayoff = 0, fdselectoff = 0;

        cff = stbtt__find_table(data, fontstart, [ 67, 70, 70, 32 ]);	//"CFF "
        if (!cff) {
            return 0;
        }

        info.fontdicts = stbtt__null_buf();
        info.fdselect = stbtt__null_buf();

        info.cff = data.subarray(cff); //stbtt__new_buf(data + cff, 512 * 1024 * 1024);
		info.cff.cursor = 0;
        b = info.cff;

        stbtt__buf_skip(b, 2);
        stbtt__buf_seek(b, stbtt__buf_get8(b));

        stbtt__cff_get_index(b);
        topdictidx = stbtt__cff_get_index(b);
        topdict = stbtt__cff_index_get(topdictidx, 0);
        stbtt__cff_get_index(b);
        info.gsubrs = stbtt__cff_get_index(b);

        charstrings = stbtt__dict_get_int(topdict, 17, charstrings);
        cstype = stbtt__dict_get_int(topdict, 0x100 | 6, cstype);
        fdarrayoff = stbtt__dict_get_int(topdict, 0x100 | 36, fdarrayoff);
        fdselectoff = stbtt__dict_get_int(topdict, 0x100 | 37, fdselectoff);
        info.subrs = stbtt__get_subrs(b, topdict);

        if (cstype != 2) {
            return 0;
        }
        if (charstrings == 0) {
            return 0;
        }

        if (fdarrayoff) {
            if (!fdselectoff) {
                return 0;
            }
            stbtt__buf_seek(b, fdarrayoff);
            info.fontdicts = stbtt__cff_get_index(b);
            info.fdselect = stbtt__buf_range(b, fdselectoff, b.length - fdselectoff);
        }

        stbtt__buf_seek(b, charstrings);
        info.charstrings = stbtt__cff_get_index(b);
    }

    t = stbtt__find_table(data, fontstart, [ 109, 97, 120, 112 ]);	//"maxp"
    if (t) {
        info.numGlyphs = ttUSHORT(data, t + 4);
    }
    else {
        info.numGlyphs = 0xffff;
    }

    numTables = ttUSHORT(data, cmap + 2);
    info.index_map = 0;
    for (i = 0; i < numTables; ++i) {
        var encoding_record = cmap + 4 + 8 * i;

        switch (ttUSHORT(data, encoding_record)) {
        case STBTT_PLATFORM_ID_MICROSOFT:
            switch (ttUSHORT(data, encoding_record + 2)) {
            case STBTT_MS_EID_UNICODE_BMP:
            case STBTT_MS_EID_UNICODE_FULL:
                info.index_map = cmap + ttULONG(data, encoding_record + 4);
                break;
            }
            break;
        case STBTT_PLATFORM_ID_UNICODE:
            info.index_map = cmap + ttULONG(data, encoding_record + 4);
            break;
        }
    }
    if (info.index_map == 0) {
        return 0;
    }

    info.indexToLocFormat = ttUSHORT(data, info.head + 50);
    return 1;
}

//extern int stbtt_FindGlyphIndex(const stbtt_fontinfo * info, int unicode_codepoint)
function stbtt_FindGlyphIndex(info, unicode_codepoint) {
    var data = info.data, index_map = info.index_map;

    var format = ttUSHORT(data, index_map + 0);
    if (format == 0) {
        var bytes = ttUSHORT(data, index_map + 2);
        if (unicode_codepoint < bytes - 6) {
            return data[index_map + 6 + unicode_codepoint];
		}
        return 0;
    } else if (format == 6) {
        var first = ttUSHORT(data, index_map + 6),
            count = ttUSHORT(data, index_map + 8);
        if (unicode_codepoint >= first && unicode_codepoint < first + count) {
            return ttUSHORT(data, index_map + 10 + (unicode_codepoint - first) * 2);
		}
        return 0;
    } else if (format == 2) {
        return 0;
    } else if (format == 4) {
        var segcount = ttUSHORT(data, index_map + 6) >> 1,
            searchRange = ttUSHORT(data, index_map + 8) >> 1,
            entrySelector = ttUSHORT(data, index_map + 10),
            rangeShift = ttUSHORT(data, index_map + 12) >> 1,
			endCount = index_map + 14,
            search = endCount;

        if (unicode_codepoint > 0xffff) {
            return 0;
        }

        if (unicode_codepoint >= ttUSHORT(data, search + rangeShift * 2)) {
            search += rangeShift * 2;
        }

        search -= 2;
        while (entrySelector) {
            searchRange >>= 1;
            var end = ttUSHORT(data, search + searchRange * 2);
            if (unicode_codepoint > end) {
                search += searchRange * 2;
            }
            --entrySelector;
        }
        search += 2;

		var offset, start, item = (search - endCount) >>> 1;

		start = ttUSHORT(data, index_map + 14 + segcount * 2 + 2 + 2 * item);
		if (unicode_codepoint < start) {
			return 0;
		}

		offset = ttUSHORT(data, index_map + 14 + segcount * 6 + 2 + 2 * item);
		if (offset == 0) {
			return unicode_codepoint + ttSHORT(data, index_map + 14 + segcount * 4 + 2 + 2 * item);
		}
		return ttUSHORT(data, offset + (unicode_codepoint - start) * 2 +
								index_map + 14 + segcount * 6 + 2 +	2 * item);
    } else if (format == 12 || format == 13) {
        var ngroups = ttULONG(data, index_map + 12),
			low = 0, high = ngroups;
         while (low < high) {
            var mid = low + ((high - low) >> 1);
            var start_char = ttULONG(data, index_map + 16 + mid * 12);
            var end_char = ttULONG(data, index_map + 16 + mid * 12 + 4);
            if (unicode_codepoint < start_char) {
                high = mid;
            } else if (unicode_codepoint > end_char) {
                low = mid + 1;
            } else {
                var start_glyph = ttULONG(data, index_map + 16 + mid * 12 + 8);
                if (format == 12) {
                    return start_glyph + unicode_codepoint - start_char;
				} else {
                    return start_glyph;
                }
            }
        }
        return 0;
    }
    return 0;
}

//static void stbtt_setvertex(stbtt_vertex * v, unsigned char type, int x, int y, int cx, int cy)
function stbtt_setvertex(v, type, x, y, cx, cy) {
    v.type = type;
    v.x = x;
    v.y = y;
    v.cx = cx;
    v.cy = cy;
}

//static int stbtt__GetGlyfOffset(const stbtt_fontinfo * info, int glyph_index)
function stbtt__GetGlyfOffset(info, glyph_index) {
    var  g1, g2;
    if (glyph_index >= info.numGlyphs) {
        return -1;
    }
    if (info.indexToLocFormat >= 2) {
        return -1;
    }

    if (info.indexToLocFormat == 0) {
        g1 = info.glyf + ttUSHORT(info.data, info.loca + glyph_index * 2) * 2;
        g2 = info.glyf + ttUSHORT(info.data, info.loca + glyph_index * 2 + 2) * 2;
    } else {
        g1 = info.glyf + ttULONG(info.data, info.loca + glyph_index * 4);
        g2 = info.glyf + ttULONG(info.data, info.loca + glyph_index * 4 + 4);
    }

    return g1 == g2 ? -1 : g1;
}

//extern int stbtt_GetGlyphBox(const stbtt_fontinfo * info, int glyph_index, int *x0, int *y0, int *x1, int *y1)
function stbtt_GetGlyphBox(info, glyph_index, out) {
    if (info.cff.length) {
        stbtt__GetGlyphInfoT2(info, glyph_index, out);
    } else {
        var g = stbtt__GetGlyfOffset(info, glyph_index);
        if (g < 0) {
            return 0;
        }
	    out.x0 = ttSHORT(info.data, g + 2);
		out.y0 = ttSHORT(info.data, g + 4);
		out.x1 = ttSHORT(info.data, g + 6);
		out.y1 = ttSHORT(info.data, g + 8);
    }
    return 1;
}

//static int stbtt__close_shape(stbtt_vertex * vertices, int num_vertices, int was_off,
//                   int start_off, int sx, int sy, int scx, int scy, int cx, int cy)
function stbtt__close_shape(vertices, num_vertices, was_off, start_off, sx, sy, scx, scy, cx, cy) {
    if (start_off) {
        if (was_off) {
            stbtt_setvertex(vertices[num_vertices++], STBTT_vcurve,
                            (cx + scx) >> 1, (cy + scy) >> 1, cx, cy);
		}
        stbtt_setvertex(vertices[num_vertices++], STBTT_vcurve, sx, sy, scx, scy);
    } else {
        if (was_off) {
            stbtt_setvertex(vertices[num_vertices++], STBTT_vcurve, sx, sy, cx, cy);
		} else {
            stbtt_setvertex(vertices[num_vertices++], STBTT_vline, sx, sy, 0, 0);
		}
    }
    return num_vertices;
}

//static int stbtt__GetGlyphShapeTT(const stbtt_fontinfo * info, int glyph_index, stbtt_vertex ** pvertices)
function stbtt__GetGlyphShapeTT(info, glyph_index) {
    var data = info.data,
		g = stbtt__GetGlyfOffset(info, glyph_index);

	if (g < 0) {
        return null;
    }

	var vertices = [];
    var numberOfContours = ttSHORT(data, g);
    if (numberOfContours > 0) {
        var flags = 0, flagcount,
			i, j = 0, m, n, next_move, was_off = 0, off, start_off = 0,
			x, y, cx, cy, sx, sy, scx, scy;
        var endPtsOfContours = g + 10;
        var ins = ttUSHORT(data, g + 10 + numberOfContours * 2);
        var points = data.subarray(g + 10 + numberOfContours * 2 + 2 + ins);
		var ptsoff = 0;

        n = 1 + ttUSHORT(data, endPtsOfContours + numberOfContours * 2 - 2);
        m = n + 2 * numberOfContours;

        vertices = oalloc(m);
        next_move = 0;
        flagcount = 0;
        off = m - n;

        for (i = 0; i < n; ++i) {
            if (flagcount == 0) {
                flags = points[ptsoff++];
                if (flags & 8) {
                    flagcount = points[ptsoff++];
                }
            } else {
                --flagcount;
            }
            vertices[off + i].type = flags;
        }

        x = 0;
        for (i = 0; i < n; ++i) {
            flags = vertices[off + i].type;
            if (flags & 2) {
                var dx = points[ptsoff++];
                x += (flags & 16) ? dx : -dx;
            } else {
                if (!(flags & 16)) {
                    x = x + INT16(points[ptsoff] * 256 + points[ptsoff+1]);
                    ptsoff += 2;
                }
            }
            vertices[off + i].x = x;
        }

        y = 0;
        for (i = 0; i < n; ++i) {
            flags = vertices[off + i].type;
            if (flags & 4) {
                var dy = points[ptsoff++];
                y += (flags & 32) ? dy : -dy;
            } else {
                if (!(flags & 32)) {
                    y = y + INT16(points[ptsoff] * 256 + points[ptsoff+1]);
                    ptsoff += 2;
                }
            }
            vertices[off + i].y = y;
        }

        var num_vertices = 0;
        sx = sy = cx = cy = scx = scy = 0;
        for (i = 0; i < n; ++i) {
            flags = vertices[off + i].type;
            x = vertices[off + i].x;
            y = vertices[off + i].y;

            if (next_move == i) {
                if (i != 0) {
                    num_vertices = stbtt__close_shape(vertices, num_vertices, was_off, start_off,
											sx, sy, scx, scy, cx, cy);
				}
                start_off = !(flags & 1);
                if (start_off) {
                    scx = x;
                    scy = y;
                    if (!(vertices[off + i + 1].type & 1)) {
                        sx = (x + vertices[off + i + 1].x) >> 1;
                        sy = (y + vertices[off + i + 1].y) >> 1;
                    } else {
                        sx = vertices[off + i + 1].x;
                        sy = vertices[off + i + 1].y;
                        ++i;
                    }
                } else {
                    sx = x;
                    sy = y;
                }
                stbtt_setvertex(vertices[num_vertices++], STBTT_vmove, sx, sy, 0, 0);
                was_off = 0;
                next_move = 1 + ttUSHORT(data, endPtsOfContours + j * 2);
                ++j;
            } else {
                if (!(flags & 1)) {
                    if (was_off) {
                        stbtt_setvertex(vertices[num_vertices++], STBTT_vcurve,
                                        (cx + x) >> 1, (cy + y) >> 1, cx, cy);
					}
                    cx = x;
                    cy = y;
                    was_off = 1;
                } else {
                    if (was_off) {
                        stbtt_setvertex(vertices[num_vertices++], STBTT_vcurve, x, y, cx, cy);
                    } else {
                        stbtt_setvertex(vertices[num_vertices++], STBTT_vline, x, y, 0, 0);
					}
                    was_off = 0;
                }
            }
        }
        vertices.length = stbtt__close_shape(vertices, num_vertices, was_off, start_off,
												sx, sy, scx, scy, cx, cy);
    } else if (numberOfContours == -1) {
        var more = 1;
        var comp = g + 10;
         while (more) {
            var flags, gidx, mtx = [ 1, 0, 0, 1, 0, 0 ];

            flags = ttSHORT(data, comp);
            comp += 2;
            gidx = ttSHORT(data, comp);
            comp += 2;

            if (flags & 2) {
                if (flags & 1) {
                    mtx[4] = ttSHORT(data, comp);
                    comp += 2;
                    mtx[5] = ttSHORT(data, comp);
                    comp += 2;
                } else {
                    mtx[4] = stbtt__buf_get8(data, comp);
                    comp += 1;
                    mtx[5] = stbtt__buf_get8(data, comp);
                    comp += 1;
                }
            }
            if (flags & (1 << 3)) {
                mtx[0] = mtx[3] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
                mtx[1] = mtx[2] = 0;
            } else if (flags & (1 << 6)) {
                mtx[0] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
                mtx[1] = mtx[2] = 0;
                mtx[3] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
            } else if (flags & (1 << 7)) {
                mtx[0] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
                mtx[1] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
                mtx[2] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
                mtx[3] = ttSHORT(data, comp) / 16384.0;
                comp += 2;
            }

            var m = sqrt(mtx[0] * mtx[0] + mtx[1] * mtx[1]);
            var n = sqrt(mtx[2] * mtx[2] + mtx[3] * mtx[3]);
            var comp_verts = stbtt_GetGlyphShape(info, gidx);
            if (comp_verts.length > 0) {
                for (var i = 0, l = comp_verts.length; i < l; ++i) {
                    var v = comp_verts[i], x, y;
					x = v.x;
					y = v.y;
                    v.x = floor(m * (mtx[0] * x + mtx[2] * y + mtx[4]));
                    v.y = floor(n * (mtx[1] * x + mtx[3] * y + mtx[5]));
                    x = v.cx;
                    y = v.cy;
                    v.cx = floor(m * (mtx[0] * x + mtx[2] * y + mtx[4]));
                    v.cy = floor(n * (mtx[1] * x + mtx[3] * y + mtx[5]));
                }

				vertices = vertices.concat(comp_verts);
            }
            more = flags & (1 << 5);
        }
    }
	//console.log('vertices(' + vertices.length + ')');
	//for (var i = 0; i < vertices.length; i++) {
	//	var pt = vertices[i];
	//	console.log(`${i}: ${pt.x},${pt.y} / ${pt.cx},${pt.cy} / ${pt.type}`);
	//}

    return vertices;
}

//static void stbtt__track_vertex(stbtt__csctx * c, int x, int y)
function stbtt__track_vertex(c, x, y) {
    if (x > c.max_x || !c.started) {
        c.max_x = x;
    }
    if (y > c.max_y || !c.started) {
        c.max_y = y;
    }
    if (x < c.min_x || !c.started) {
        c.min_x = x;
    }
    if (y < c.min_y || !c.started) {
        c.min_y = y;
    }
    c.started = 1;
}

//static void stbtt__csctx_v(stbtt__csctx * c, unsigned char type, int x, int y, int cx, int cy, int cx1, int cy1)
function stbtt__csctx_v(c, type, x, y, cx, cy, cx1, cy1) {
	stbtt__track_vertex(c, x, y);
	if (type == STBTT_vcubic) {
		stbtt__track_vertex(c, cx, cy);
		stbtt__track_vertex(c, cx1, cy1);
	}
	var v = {};
	stbtt_setvertex(v, type, x, y, cx, cy);
	v.cx1 = cx1;
	v.cy1 = cy1;
	c.vertices.push(v);
 }

//static void stbtt__csctx_close_shape(stbtt__csctx * ctx)
function stbtt__csctx_close_shape(ctx) {
    if (ctx.first_x != ctx.x || ctx.first_y != ctx.y) {
        stbtt__csctx_v(ctx, STBTT_vline, ctx.first_x, ctx.first_y, 0, 0, 0, 0);
	}
}

//static void stbtt__csctx_rmove_to(stbtt__csctx * ctx, float dx, float dy)
function stbtt__csctx_rmove_to(ctx, dx, dy) {
    stbtt__csctx_close_shape(ctx);
    ctx.first_x = ctx.x = ctx.x + dx;
    ctx.first_y = ctx.y = ctx.y + dy;
    stbtt__csctx_v(ctx, STBTT_vmove, ctx.x, ctx.y, 0, 0, 0, 0);
}

//static void stbtt__csctx_rline_to(stbtt__csctx * ctx, float dx, float dy)
function stbtt__csctx_rline_to(ctx, dx, dy) {
    ctx.x += dx;
    ctx.y += dy;
    stbtt__csctx_v(ctx, STBTT_vline, ctx.x, ctx.y, 0, 0, 0, 0);
}

//static void stbtt__csctx_rccurve_to(stbtt__csctx * ctx, float dx1, float dy1, float dx2,
//									float dy2, float dx3, float dy3)
function stbtt__csctx_rccurve_to(ctx, dx1, dy1, dx2, dy2, dx3, dy3) {
    var cx1 = ctx.x + dx1,
		cy1 = ctx.y + dy1,
		cx2 = cx1 + dx2,
		cy2 = cy1 + dy2;
    ctx.x = cx2 + dx3;
    ctx.y = cy2 + dy3;
    stbtt__csctx_v(ctx, STBTT_vcubic, ctx.x, ctx.y, cx1, cy1, cx2, cy2);
}

//static stbtt__buf stbtt__get_subr(stbtt__buf idx, int n)
function stbtt__get_subr(b, n) {
    var count = stbtt__cff_index_count(b);
    var bias = 107;
    if (count >= 33900) {
        bias = 32768;
    } else if (count >= 1240) {
        bias = 1131;
    }
    n += bias;
    if (n < 0 || n >= count) {
        return stbtt__null_buf();
    }
    return stbtt__cff_index_get(b, n);
}

//static stbtt__buf stbtt__cid_get_glyph_subrs(const stbtt_fontinfo * info, int glyph_index)
function stbtt__cid_get_glyph_subrs(info, glyph_index) {
    var fdselect = info.fdselect;
    var nranges, start, end, v, fmt, fdselector = -1, i;

    stbtt__buf_seek(fdselect, 0);
    fmt = stbtt__buf_get8(fdselect);
    if (fmt == 0) {
        stbtt__buf_skip(fdselect, glyph_index);
        fdselector = stbtt__buf_get8(fdselect);
    } else if (fmt == 3) {
        nranges = stbtt__buf_get(fdselect, 2);
        start = stbtt__buf_get(fdselect, 2);
        for (i = 0; i < nranges; i++) {
            v = stbtt__buf_get8(fdselect);
            end = stbtt__buf_get(fdselect, 2);
            if (glyph_index >= start && glyph_index < end) {
                fdselector = v;
                break;
            }
            start = end;
        }
    }
    if (fdselector == -1) {
        stbtt__null_buf();
    }
    return stbtt__get_subrs(info.cff, stbtt__cff_index_get(info.fontdicts, fdselector));
}

//static int stbtt__run_charstring(const stbtt_fontinfo * info, int glyph_index,
//								   stbtt__csctx * c)
function stbtt__run_charstring(info, glyph_index, c) {
    var in_header = 1, maskbits = 0, subr_stack_height = 0, sp = 0, v, i, b0,
		has_subrs = 0, clear_stack,
		s = [], subr_stack = [], subrs = info.subrs, b, f;

    b = stbtt__cff_index_get(info.charstrings, glyph_index);
    while (b.cursor < b.length) {
        i = 0;
        clear_stack = 1;
        b0 = stbtt__buf_get8(b);
        switch (b0) {
        case 0x13:
        case 0x14:
            if (in_header) {
                maskbits += (sp / 2)|0;
            }
            in_header = 0;
            stbtt__buf_skip(b, ((maskbits + 7) / 8)|0);
            break;

        case 0x01:
        case 0x03:
        case 0x12:
        case 0x17:
            maskbits += (sp / 2)|0;
            break;

        case 0x15:
            in_header = 0;
            if (sp < 2) {
                return 0;
            }
            stbtt__csctx_rmove_to(c, s[sp - 2], s[sp - 1]);
            break;
        case 0x04:
            in_header = 0;
            if (sp < 1) {
                return 0;
            }
            stbtt__csctx_rmove_to(c, 0, s[sp - 1]);
            break;
        case 0x16:
            in_header = 0;
            if (sp < 1) {
                return 0;
            }
            stbtt__csctx_rmove_to(c, s[sp - 1], 0);
            break;

        case 0x05:
            if (sp < 2) {
                return 0;
            }
            for (; i + 1 < sp; i += 2) {
                stbtt__csctx_rline_to(c, s[i], s[i + 1]);
            }
            break;

        case 0x07:
            if (sp < 1) {
                return 0;
            }
			for (;;) {
                if (i >= sp) {
                    break;
                }
                stbtt__csctx_rline_to(c, 0, s[i]);
                i++;
                if (i >= sp) {
                    break;
                }
                stbtt__csctx_rline_to(c, s[i], 0);
                i++;
			}
			break;
        case 0x06:
            if (sp < 1) {
                return 0;
            }
            for (;;) {
                if (i >= sp) {
                    break;
                }
                stbtt__csctx_rline_to(c, s[i], 0);
                i++;
                if (i >= sp) {
                    break;
                }
                stbtt__csctx_rline_to(c, 0, s[i]);
                i++;
            }
            break;

        case 0x1F:
            if (sp < 4) {
                return 0;
            }
			for (;;) {
                if (i + 3 >= sp) {
                    break;
                }
                stbtt__csctx_rccurve_to(c, s[i], 0, s[i + 1], s[i + 2],
                                        (sp - i == 5) ? s[i + 4] : 0.0,
                                        s[i + 3]);
                i += 4;
                if (i + 3 >= sp) {
                    break;
                }
                stbtt__csctx_rccurve_to(c, 0, s[i], s[i + 1],
                                        s[i + 2], s[i + 3],
                                        (sp - i == 5) ? s[i + 4] : 0.0);
                i += 4;
			}
			break;
        case 0x1E:
            if (sp < 4) {
                return 0;
            }
            for (;;) {
                if (i + 3 >= sp) {
                    break;
                }
                stbtt__csctx_rccurve_to(c, 0, s[i], s[i + 1],
                                        s[i + 2], s[i + 3],
                                        (sp - i == 5) ? s[i + 4] : 0.0);
                i += 4;
                if (i + 3 >= sp) {
                    break;
                }
                stbtt__csctx_rccurve_to(c, s[i], 0, s[i + 1], s[i + 2],
                                        (sp - i == 5) ? s[i + 4] : 0.0,
                                        s[i + 3]);
                i += 4;
            }
            break;

        case 0x08:
            if (sp < 6) {
                return 0;
            }
            for (; i + 5 < sp; i += 6) {
                stbtt__csctx_rccurve_to(c, s[i], s[i + 1],
                                        s[i + 2], s[i + 3],
                                        s[i + 4], s[i + 5]);
			}
            break;

        case 0x18:
            if (sp < 8) {
                return 0;
            }
            for (; i + 5 < sp - 2; i += 6) {
                stbtt__csctx_rccurve_to(c, s[i], s[i + 1],
                                        s[i + 2], s[i + 3],
                                        s[i + 4], s[i + 5]);
			}
            if (i + 1 >= sp) {
                return 0;
            }
            stbtt__csctx_rline_to(c, s[i], s[i + 1]);
            break;

        case 0x19:
            if (sp < 8) {
                return 0;
            }
            for (; i + 1 < sp - 6; i += 2) {
                stbtt__csctx_rline_to(c, s[i], s[i + 1]);
            }
            if (i + 5 >= sp) {
                return 0;
            }
            stbtt__csctx_rccurve_to(c, s[i], s[i + 1], s[i + 2],
                                    s[i + 3], s[i + 4], s[i + 5]);
            break;

        case 0x1A:
        case 0x1B:
            if (sp < 4) {
                return 0;
            }
            f = 0.0;
            if (sp & 1) {
                f = s[i];
                i++;
            }
            for (; i + 3 < sp; i += 4) {
                if (b0 == 0x1B) {
                    stbtt__csctx_rccurve_to(c, s[i], f,
                                            s[i + 1],
                                            s[i + 2],
                                            s[i + 3], 0.0);
                } else {
                    stbtt__csctx_rccurve_to(c, f, s[i],
                                            s[i + 1],
                                            s[i + 2], 0.0,
                                            s[i + 3]);
				}
                f = 0.0;
            }
            break;

        case 0x0A:
            if (!has_subrs) {
                if (info.fdselect.length) {
                    subrs = stbtt__cid_get_glyph_subrs(info, glyph_index);
				}
                has_subrs = 1;
            }

        case 0x1D:
            if (sp < 1) {
                return 0;
            }
            v = s[--sp]|0;
            if (subr_stack_height >= 10) {
                return 0;
            }
            subr_stack[subr_stack_height++] = b;
            b = stbtt__get_subr(b0 == 0x0A ? subrs : info.gsubrs, v);
            if (b.length == 0) {
                return 0;
            }
            b.cursor = 0;
            clear_stack = 0;
            break;

        case 0x0B:
            if (subr_stack_height <= 0) {
                return 0;
            }
            b = subr_stack[--subr_stack_height];
            clear_stack = 0;
            break;

        case 0x0E:
            stbtt__csctx_close_shape(c);
            return 1;

        case 0x0C:
            var dx1, dx2, dx3, dx4, dx5, dx6, dy1, dy2, dy3, dy4, dy5, dy6,
				dx, dy, b1 = stbtt__buf_get8(b);
            switch (b1) {
            case 0x22:
                if (sp < 7) {
                    return 0;
                }
                dx1 = s[0];
                dx2 = s[1];
                dy2 = s[2];
                dx3 = s[3];
                dx4 = s[4];
                dx5 = s[5];
                dx6 = s[6];
                stbtt__csctx_rccurve_to(c, dx1, 0, dx2, dy2, dx3, 0);
                stbtt__csctx_rccurve_to(c, dx4, 0, dx5, -dy2, dx6, 0);
                break;

            case 0x23:
                if (sp < 13) {
                    return 0;
                }
                dx1 = s[0];
                dy1 = s[1];
                dx2 = s[2];
                dy2 = s[3];
                dx3 = s[4];
                dy3 = s[5];
                dx4 = s[6];
                dy4 = s[7];
                dx5 = s[8];
                dy5 = s[9];
                dx6 = s[10];
                dy6 = s[11];

                stbtt__csctx_rccurve_to(c, dx1, dy1, dx2, dy2, dx3, dy3);
                stbtt__csctx_rccurve_to(c, dx4, dy4, dx5, dy5, dx6, dy6);
                break;

            case 0x24:
                if (sp < 9) {
                    return 0;
                }
                dx1 = s[0];
                dy1 = s[1];
                dx2 = s[2];
                dy2 = s[3];
                dx3 = s[4];
                dx4 = s[5];
                dx5 = s[6];
                dy5 = s[7];
                dx6 = s[8];
                stbtt__csctx_rccurve_to(c, dx1, dy1, dx2, dy2, dx3, 0);
                stbtt__csctx_rccurve_to(c, dx4, 0, dx5, dy5, dx6, -(dy1 + dy2 + dy5));
                break;

            case 0x25:
                if (sp < 11) {
                    return 0;
                }
                dx1 = s[0];
                dy1 = s[1];
                dx2 = s[2];
                dy2 = s[3];
                dx3 = s[4];
                dy3 = s[5];
                dx4 = s[6];
                dy4 = s[7];
                dx5 = s[8];
                dy5 = s[9];
                dx6 = dy6 = s[10];
                dx = dx1 + dx2 + dx3 + dx4 + dx5;
                dy = dy1 + dy2 + dy3 + dy4 + dy5;
                if (abs(dx) > abs(dy)) {
                    dy6 = -dy;
                } else {
                    dx6 = -dx;
                }
                stbtt__csctx_rccurve_to(c, dx1, dy1, dx2, dy2, dx3, dy3);
                stbtt__csctx_rccurve_to(c, dx4, dy4, dx5, dy5, dx6, dy6);
                break;

            default:
                return 0;
            }
        	break;

        default:
            if (b0 != 255 && b0 != 28 && (b0 < 32 || b0 > 254)) {
                return 0;
            }
            if (b0 == 255) {
                // f = (float)(stbtt_int32)stbtt__buf_get32(&b) / 0x10000;
                f = (stbtt__buf_get(b, 4)|0) / 0x10000;
            } else {
                stbtt__buf_skip(b, -1);
                // f = (float)(stbtt_int16)stbtt__cff_int(&b);
                f = ((stbtt__cff_int(b)<<16)|0)>>16;
            }
            if (sp >= 48) {
                return 0;
            }
            s[sp++] = f;
            clear_stack = 0;
            break;
        }
        if (clear_stack) {
            sp = 0;
        }
    }
    return 0;
}

function stbtt__csctx_init() {
	return { started:0, first_x:0, first_y:0, x:0, y:0,
			min_x:0, max_x:0, min_y:0, max_y:0,
			vertices:[]
		};
}

//static int stbtt__GetGlyphShapeT2(const stbtt_fontinfo * info, int glyph_index,
//									stbtt_vertex ** pvertices)
function stbtt__GetGlyphShapeT2(info, glyph_index) {
    var output_ctx = stbtt__csctx_init();
    if (stbtt__run_charstring(info, glyph_index, output_ctx)) {
		return output_ctx.vertices;
    }
    return null;
}

//static int stbtt__GetGlyphInfoT2(const stbtt_fontinfo * info, int glyph_index, int *x0,
//                      int *y0, int *x1, int *y1)
function stbtt__GetGlyphInfoT2(info, glyph_index, out) {
    var c = stbtt__csctx_init();
    var r = stbtt__run_charstring(info, glyph_index, c);
	out.x0 = r ? c.min_x : 0;
	out.y0 = r ? c.min_y : 0;
	out.x1 = r ? c.max_x : 0;
	out.y1 = r ? c.max_y : 0;
    return r && c.vertices ? c.vertices.length : 0;
}

//extern int stbtt_GetGlyphShape(const stbtt_fontinfo * info, int glyph_index,
//								 stbtt_vertex ** pvertices)
function stbtt_GetGlyphShape(info, glyph_index) {
    if (!info.cff.length) {
        return stbtt__GetGlyphShapeTT(info, glyph_index);
    } else {
        return stbtt__GetGlyphShapeT2(info, glyph_index);
    }
}

//extern void stbtt_GetGlyphHMetrics(const stbtt_fontinfo * info, int glyph_index,
//                       int *advanceWidth, int *leftSideBearing)
function stbtt_GetGlyphHMetrics(info, glyph_index) {
    var numOfLongHorMetrics = ttUSHORT(info.data, info.hhea + 34);
    if (glyph_index < numOfLongHorMetrics) {
		return {
				advanceWidth:   ttSHORT(info.data, info.hmtx + 4 * glyph_index),
				leftSideBearing:ttSHORT(info.data, info.hmtx + 4 * glyph_index + 2)
			};
    } else {
		return {
				advanceWidth:   ttSHORT(info.data, info.hmtx + 4 * (numOfLongHorMetrics - 1)),
				leftSideBearing:ttSHORT(info.data, info.hmtx + 4 * numOfLongHorMetrics +
											2 * (glyph_index - numOfLongHorMetrics))
			};
    }
}

//extern void stbtt_GetCodepointHMetrics(const stbtt_fontinfo * info, int codepoint,
//                           int *advanceWidth, int *leftSideBearing)
function stbtt_GetCodepointHMetrics(info, codepoint) {
     return stbtt_GetGlyphHMetrics(info, stbtt_FindGlyphIndex(info, codepoint));
}

//extern void stbtt_GetFontVMetrics(const stbtt_fontinfo * info, int *ascent, int *descent, int *lineGap)
function stbtt_GetFontVMetrics(info) {
	return {
        ascent:	ttSHORT(info.data, info.hhea + 4),
        descent:ttSHORT(info.data, info.hhea + 6),
        linegap:ttSHORT(info.data, info.hhea + 8),
	};
}

//extern void stbtt_GetGlyphBitmapBoxSubpixel(const stbtt_fontinfo * font, int glyph,
//                              float scale_x, float scale_y, float shift_x, float shift_y,
//								int *ix0, int *iy0, int *ix1, int *iy1)
function stbtt_GetGlyphBitmapBoxSubpixel(font, glyph, scale_x, scale_y, shift_x, shift_y) {
    var tmp = {};
    if (!stbtt_GetGlyphBox(font, glyph, tmp)) {
		return { x0:0, y0:0, x1:0, y1:0 };
    }
	return {
			x0:floor(tmp.x0 * scale_x + shift_x),
			y0:floor(-tmp.y1 * scale_y + shift_y),
			x1:ceil(tmp.x1 * scale_x + shift_x),
			y1:ceil(-tmp.y0 * scale_y + shift_y),
		};
}

//extern void stbtt_GetCodepointBitmapBoxSubpixel(const stbtt_fontinfo * font,
//                                    int codepoint, float scale_x, float scale_y, float shift_x,
//                                    float shift_y, int *ix0, int *iy0, int *ix1, int *iy1)
function stbtt_GetCodepointBitmapBoxSubpixel(font, codepoint, scale_x, scale_y, shift_x, shift_y) {
    return stbtt_GetGlyphBitmapBoxSubpixel(font, stbtt_FindGlyphIndex(font, codepoint),
											scale_x, scale_y, shift_x, shift_y);
}

//extern void stbtt_GetCodepointBitmapBox(const stbtt_fontinfo * font, int codepoint,	float scale_x, float scale_y,
//										int *ix0, int *iy0, int *ix1, int *iy1)
function stbtt_GetCodepointBitmapBox(font, codepoint, scale_x, scale_y) {
    return stbtt_GetCodepointBitmapBoxSubpixel(font, codepoint, scale_x, scale_y, 0, 0);
}

//static stbtt__active_edge *stbtt__new_active(stbtt__hheap * hh, stbtt__edge * e, int off_x, float start_point, void *userdata)
function stbtt__new_active(e, off_x, start_point) {
    var dxdy = (e.x1 - e.x0) / (e.y1 - e.y0);
	return {
		fdx:dxdy,
		fdy:dxdy != 0.0 ? (1.0 / dxdy) : 0.0,
		fx:(e.x0 + dxdy * (start_point - e.y0)) - (off_x|0),
		direction:e.invert ? 1.0 : -1.0,
		sy:e.y0,
		ey:e.y1,
		next:0,
    };
}

//static void stbtt__handle_clipped_edge(float *scanline, int x, stbtt__active_edge * e,
//                           float x0, float y0, float x1, float y1)
function stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x1, y1) {
	x = x|0;
    if (y0 == y1) {
        return;
    }
    if (y0 > e.ey) {
        return;
    }
    if (y1 < e.sy) {
        return;
    }
    if (y0 < e.sy) {
        x0 += (x1 - x0) * (e.sy - y0) / (y1 - y0);
        y0 = e.sy;
    }
    if (y1 > e.ey) {
        x1 += (x1 - x0) * (e.ey - y1) / (y1 - y0);
        y1 = e.ey;
    }

    if (x0 <= x && x1 <= x) {
        scanline[x] += e.direction * (y1 - y0);
    } else if (x0 >= x + 1 && x1 >= x + 1) {

    } else {
        scanline[x] += e.direction * (y1 - y0) * (1 - ((x0 - x) + (x1 - x)) / 2);
    }
}

//static void stbtt__fill_active_edges_new(float *scanline, float *scanline_fill, int len,
//                             stbtt__active_edge * e, float y_top)
// The C implementation passed scanline_fill as a +1 pointer on the call, and then -1 in
// places in this function.  That doesn't work with array-views, so we reverse the handling.
function stbtt__fill_active_edges_new(scanline, scanline_fill, len, e, y_top) {
    var y_bottom = y_top + 1;
    while (e) {
        if (e.fdx == 0) {
            var x0 = e.fx;
            if (x0 < len) {
                if (x0 >= 0) {
                    stbtt__handle_clipped_edge(scanline, x0, e, x0, y_top, x0, y_bottom);
                    stbtt__handle_clipped_edge(scanline_fill, x0+1, e, x0, y_top, x0, y_bottom);
                } else {
                    stbtt__handle_clipped_edge(scanline_fill, 0, e, x0, y_top, x0, y_bottom);
                }
            }
        } else {
            var x0 = e.fx,
				dx = e.fdx,
				xb = x0 + dx,
				x_top, x_bottom,
				sy0, sy1,
				dy = e.fdy;

            if (e.sy > y_top) {
                x_top = x0 + dx * (e.sy - y_top);
                sy0 = e.sy;
            } else {
                x_top = x0;
                sy0 = y_top;
            }
            if (e.ey < y_bottom) {
                x_bottom = x0 + dx * (e.ey - y_top);
                sy1 = e.ey;
            } else {
                x_bottom = xb;
                sy1 = y_bottom;
            }

            if (x_top >= 0 && x_bottom >= 0 && x_top < len && x_bottom < len) {
                if ((x_top|0) == (x_bottom|0)) {
                    var height = sy1 - sy0,
						x = x_top|0;
                    scanline[x] += e.direction * (1 - ((x_top - x) + (x_bottom - x)) / 2) * height;
                    scanline_fill[x+1] += e.direction * height;
                } else {
                    var t, x, x1, x2, y_crossing, step, sign, area;
                    if (x_top > x_bottom) {
                        sy0 = y_bottom - (sy0 - y_top);
                        sy1 = y_bottom - (sy1 - y_top);
                        t = sy0, sy0 = sy1, sy1 = t;
                        t = x_bottom, x_bottom = x_top, x_top = t;
                        dx = -dx;
                        dy = -dy;
                        t = x0, x0 = xb, xb = t;
                    }

                    x1 = x_top|0;
                    x2 = x_bottom|0;
                    y_crossing = (x1 + 1 - x0) * dy + y_top;
                    sign = e.direction;
                    area = sign * (y_crossing - sy0);

                    scanline[x1] += area * (1 - ((x_top - x1) + (x1 + 1 - x1)) / 2);

                    step = sign * dy;
                    for (x = x1 + 1; x < x2; ++x) {
                        scanline[x] += area + step / 2;
                        area += step;
                    }
                    y_crossing += dy * (x2 - (x1 + 1));

                    scanline[x2] += area + sign * (1 - ((x2 - x2) + (x_bottom - x2)) / 2) *
												(sy1 - y_crossing);
                    scanline_fill[x2+1] += sign * (sy1 - sy0);
                }
            } else {
                for (var x = 0; x < len; ++x) {
                    var y0 = y_top,
						x1 = x,
						x2 = x + 1,
						x3 = xb,
						y3 = y_bottom,
						y1 = (x - x0) / dx + y_top,
						y2 = (x + 1 - x0) / dx + y_top;

                    if (x0 < x1 && x3 > x2) {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x1, y1);
                        stbtt__handle_clipped_edge(scanline, x, e, x1, y1, x2, y2);
                        stbtt__handle_clipped_edge(scanline, x, e, x2, y2, x3, y3);
                    } else if (x3 < x1 && x0 > x2) {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x2, y2);
                        stbtt__handle_clipped_edge(scanline, x, e, x2, y2, x1, y1);
                        stbtt__handle_clipped_edge(scanline, x, e, x1, y1, x3, y3);
                    } else if (x0 < x1 && x3 > x1) {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x1, y1);
                        stbtt__handle_clipped_edge(scanline, x, e, x1, y1, x3, y3);
                    } else if (x3 < x1 && x0 > x1) {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x1, y1);
                        stbtt__handle_clipped_edge(scanline, x, e, x1, y1, x3, y3);
                    } else if (x0 < x2 && x3 > x2) {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x2, y2);
                        stbtt__handle_clipped_edge(scanline, x, e, x2, y2, x3, y3);
                    } else if (x3 < x2 && x0 > x2) {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x2, y2);
                        stbtt__handle_clipped_edge(scanline, x, e, x2, y2, x3, y3);
                    } else {
                        stbtt__handle_clipped_edge(scanline, x, e, x0, y0, x3, y3);
                    }
                }
            }
        }
        e = e.next;
    }
}

//static void stbtt__rasterize_sorted_edges(stbtt__bitmap * result, stbtt__edge * e, int n,
//                              int vsubsample, int off_x, int off_y, void *userdata)
function stbtt__rasterize_sorted_edges(result, edges, nedges, vsubsample, off_x, off_y) {
	vsubsample |= 0, off_x |= 0, off_y |= 0;
    var active = null, z;
    var y = off_y, j = 0, i;
    var scanline = new Float32Array(result.w * 2 + 1);
    var scanline2 = scanline.subarray(result.w);
	var eoff = 0;

    edges[nedges].y0 = off_y + result.h + 1;
    while (j < result.h) {
        var scan_y_top = y + 0.0,
			scan_y_bottom = y + 1.0,
			step = active;

		// F'ing IE
		if (scanline.fill) { scanline.fill(0); }
		else { for (var $i = 0, $l = scanline.length; $i < $l; $i++) scanline[$i] = 0; }

        while (step) {
            z = step;
			step = z.next;
            if (z.ey <= scan_y_top) {
                z.direction = 0;
            } else {
			}
        }

        while (edges[eoff].y0 <= scan_y_bottom) {
            if (edges[eoff].y0 != edges[eoff].y1) {
                z = stbtt__new_active(edges[eoff], off_x, scan_y_top);
				z.next = active;
				active = z;
            }
            ++eoff;
        }

        if (active) {
			// C implementation passed scanline2+1.  See function for details.
            stbtt__fill_active_edges_new(scanline, scanline2, result.w, active, scan_y_top);
		}
		for (var i = 0, sum = 0; i < result.w; ++i) {
			var k, m;
			sum += scanline2[i];
			k = scanline[i] + sum;
			k = abs(k) * 255 + 0.5;
			m = k>>>0;
			if (m > 255) {
				m = 255;
			}
			result.pixels[j * result.stride + i] = m;
        }

        step = active;
        while (step) {
            z = step;
            z.fx += z.fdx;
            step = z.next;
        }
        ++y;
        ++j;
    }
}

//static void stbtt__sort_edges_ins_sort(stbtt__edge * p, int n)
function stbtt__sort_edges_ins_sort(p, n) {
    for (var i = 1; i < n; ++i) {
        var t = p[i], j = i;
        while (j > 0 && t.y0 < p[j-1].y0) {
             p[j] = p[j - 1];
            --j;
        }
        if (i != j) {
            p[j] = t;
        }
    }
}

//static void stbtt__sort_edges_quicksort(stbtt__edge * p, int n)
// The C implementation messed with the p pointer.  JS uses an offset instead.
function stbtt__sort_edges_quicksort(p, o, n) {
    while (n > 12) {
        var t, c, i, j, z,
			m = n >> 1,
			c01 = p[o].y0 < p[o+m].y0,
			c12 = p[o+m].y0 < p[o+n-1].y0;

        if (c01 != c12) {
            c = p[o].y0 < p[o+n-11].y0;
            z = (c == c12) ? 0 : n - 1;
            t = p[o+z];
            p[o+z] = p[o+m];
            p[o+m] = t;
        }

        t = p[o];
        p[o] = p[o+m];
        p[o+m] = t;

        i = 1;
        j = n - 1;
        for (;;) {
            for ( ; p[o+i].y0 < p[o].y0; ++i) {
            }
            for ( ; p[o].y0 < p[o+j].y0; --j) {
            }
            if (i >= j) {
                break;
            }
            t = p[o+i];
            p[o+i] = p[o+j];
            p[o+j] = t;

            ++i;
            --j;
        }

        if (j < n - i) {
            stbtt__sort_edges_quicksort(p, o, j);
            o += i;
            n -= i;
        } else {
            stbtt__sort_edges_quicksort(p, o + i, n - i);
            n = j;
        }
    }
}

//static void stbtt__sort_edges(stbtt__edge * p, int n)
function stbtt__sort_edges(p, n) {
    stbtt__sort_edges_quicksort(p, 0, n);
    stbtt__sort_edges_ins_sort(p, n);
}

//static void stbtt__rasterize(stbtt__bitmap * result, stbtt__point * pts, int *wcount,
//                 int windings, float scale_x, float scale_y, float shift_x,
//                 float shift_y, int off_x, int off_y, int invert,
//                 void *userdata)
function stbtt__rasterize(result, pts, wcount, scale_x, scale_y, shift_x, shift_y, off_x, off_y, invert) {
    var y_scale_inv = invert ? -scale_y : scale_y,
		e, n, i, j, k, m,
		vsubsample = 1;

    n = 0;
    for (i = 0; i < wcount.length; ++i) {
        n += wcount[i];
    }

    e = oalloc(n + 1);
    n = 0;
    m = 0;
    for (i = 0; i < wcount.length; ++i) {
        var p = m;
        m += wcount[i];
        j = wcount[i] - 1;
        for (k = 0; k < wcount[i]; j = k++) {
            var a = k, b = j;
            if (pts[p+j].y == pts[p+k].y) {
                continue;
            }

            e[n].invert = 0;
            if (invert ? pts[p+j].y > pts[p+k].y : pts[p+j].y < pts[p+k].y) {
                e[n].invert = 1;
                a = j, b = k;
            }
            e[n].x0 = pts[p+a].x * scale_x + shift_x;
            e[n].y0 = (pts[p+a].y * y_scale_inv + shift_y) * vsubsample;
            e[n].x1 = pts[p+b].x * scale_x + shift_x;
            e[n].y1 = (pts[p+b].y * y_scale_inv + shift_y) * vsubsample;
            ++n;
        }
    }

    stbtt__sort_edges(e, n);
    stbtt__rasterize_sorted_edges(result, e, n, vsubsample, off_x, off_y);
 }

//static int stbtt__tesselate_curve(stbtt__point * points, int *num_points, float x0,
//                       float y0, float x1, float y1, float x2, float y2,
//                       float objspace_flatness_squared, int n)
function stbtt__tesselate_curve(points, x0, y0, x1, y1, x2, y2, objspace_flatness_squared, n) {
    var mx = (x0 + 2 * x1 + x2) / 4,
		my = (y0 + 2 * y1 + y2) / 4,
		dx = (x0 + x2) / 2 - mx,
		dy = (y0 + y2) / 2 - my;
    if (n > 16) {
        return 1;
    }
    if (dx * dx + dy * dy > objspace_flatness_squared) {
        stbtt__tesselate_curve(points, x0, y0, (x0 + x1) / 2.0, (y0 + y1) / 2.0, mx, my,
                               objspace_flatness_squared, n + 1);
        stbtt__tesselate_curve(points, mx, my, (x1 + x2) / 2.0, (y1 + y2) / 2.0, x2, y2,
                               objspace_flatness_squared, n + 1);
    } else {
		points.push({ x:x2, y:y2 });
    }
    return 1;
}

//static void stbtt__tesselate_cubic(stbtt__point * points, int *num_points, float x0,
//                       float y0, float x1, float y1, float x2, float y2,
//                       float x3, float y3, float objspace_flatness_squared, int n)
function stbtt__tesselate_cubic(points, x0, y0, x1, y1, x2, y2, x3, y3, objspace_flatness_squared, n) {
    var dx0 = x1 - x0,
		dy0 = y1 - y0,
		dx1 = x2 - x1,
		dy1 = y2 - y1,
		dx2 = x3 - x2,
		dy2 = y3 - y2,
		dx = x3 - x0,
		dy = y3 - y0,
		longlen = sqrt(dx0 * dx0 + dy0 * dy0) +
				  sqrt(dx1 * dx1 + dy1 * dy1) +
                  sqrt(dx2 * dx2 + dy2 * dy2),
		shortlen = sqrt(dx * dx + dy * dy),
		flatness_squared = longlen * longlen - shortlen * shortlen;
    if (n > 16) {
        return;
    }

    if (flatness_squared > objspace_flatness_squared) {
        var x01 = (x0 + x1) / 2,
			y01 = (y0 + y1) / 2,
			x12 = (x1 + x2) / 2,
			y12 = (y1 + y2) / 2,
			x23 = (x2 + x3) / 2,
			y23 = (y2 + y3) / 2,
			xa = (x01 + x12) / 2,
			ya = (y01 + y12) / 2,
			xb = (x12 + x23) / 2,
			yb = (y12 + y23) / 2,
			mx = (xa + xb) / 2,
			my = (ya + yb) / 2;

        stbtt__tesselate_cubic(points, x0, y0, x01, y01, xa, ya, mx, my,
								objspace_flatness_squared, n + 1);
        stbtt__tesselate_cubic(points, mx, my, xb, yb, x23, y23, x3, y3,
								objspace_flatness_squared, n + 1);
    } else {
		points.push({ x:x3, y:y3 });
    }
}

//static stbtt__point *stbtt_FlattenCurves(stbtt_vertex * vertices, int num_verts,
//        float objspace_flatness, int **contour_lengths, int *num_contours, void *userdata)
function stbtt_FlattenCurves(vertices, objspace_flatness, contour_lengths) {
    var points = [],
		objspace_flatness_squared = objspace_flatness * objspace_flatness,
		n = -1, start = 0,
		x = 0, y = 0;
	for (var i = 0, nverts = vertices.length; i < nverts; ++i) {
		switch (vertices[i].type) {
		case STBTT_vmove:
			if (n >= 0) {
				contour_lengths[n] = points.length - start;
			}
			++n;
			start = points.length;
			x = vertices[i].x, y = vertices[i].y;
			points.push({ x:x, y:y });
			break;
		case STBTT_vline:
			x = vertices[i].x, y = vertices[i].y;
			points.push({ x:x, y:y });
			break;
		case STBTT_vcurve:
			stbtt__tesselate_curve(points, x, y, vertices[i].cx, vertices[i].cy,
								   vertices[i].x, vertices[i].y, objspace_flatness_squared, 0);
			x = vertices[i].x, y = vertices[i].y;
			break;
		case STBTT_vcubic:
			stbtt__tesselate_cubic(points, x, y, vertices[i].cx, vertices[i].cy,
								   vertices[i].cx1, vertices[i].cy1, vertices[i].x, vertices[i].y,
								   objspace_flatness_squared, 0);
			x = vertices[i].x, y = vertices[i].y;
			break;
		}
	}
	contour_lengths[n] = points.length - start;

	//console.log("--cl(" + (n+1) + '):');
	//for (var i = 0; i <= n; i++) {
	//	console.log(" %d", contour_lengths[i]);
	//}
	//console.log("\n--pts(" + points.length + '):');
	//for (var i = 0; i < points.length; i++) {
	//	var pt = points[i];
	//	console.log(i + ': ' + pt.x  + ',' + pt.y);
	//}

    return points;
}

//extern void stbtt_Rasterize(stbtt__bitmap * result, float flatness_in_pixels,
//                stbtt_vertex * vertices, int num_verts, float scale_x,
//                float scale_y, float shift_x, float shift_y, int x_off,
//                int y_off, int invert, void *userdata)
function stbtt_Rasterize(result, flatness_in_pixels, vertices, scale_x, scale_y, shift_x, shift_y,
						 x_off, y_off, invert) {
	x_off |= 0, y_off |= 0;
    var scale = scale_x > scale_y ? scale_y : scale_x,
		wcount = [],
		windings = stbtt_FlattenCurves(vertices, flatness_in_pixels / scale, wcount);
    if (windings) {
        stbtt__rasterize(result, windings, wcount, scale_x, scale_y,
						 shift_x, shift_y, x_off, y_off, invert);
    }
}

//extern void stbtt_MakeGlyphBitmapSubpixel(const stbtt_fontinfo * info,
//                              unsigned char *output, int out_w, int out_h,
//                              int out_stride, float scale_x, float scale_y,
//                              float shift_x, float shift_y, int glyph)
function stbtt_MakeGlyphBitmapSubpixel(info, buffer, out_w, out_h, out_stride,
									scale_x, scale_y, shift_x, shift_y, glyph) {
    var vertices = stbtt_GetGlyphShape(info, glyph);
    var gbm = {};
    var rect = stbtt_GetGlyphBitmapBoxSubpixel(info, glyph, scale_x, scale_y, shift_x, shift_y);
    gbm.pixels = buffer;
    gbm.w = out_w|0;
    gbm.h = out_h|0;
    gbm.stride = out_stride|0;

    if (gbm.w && gbm.h) {
        stbtt_Rasterize(gbm, 0.35, vertices, scale_x, scale_y, shift_x, shift_y, rect.x0, rect.y0, 1);
	}
}

//extern void stbtt_MakeCodepointBitmapSubpixel(const stbtt_fontinfo * info,
//                                  unsigned char *output, int out_w,
//                                  int out_h, int out_stride, float scale_x,
//                                  float scale_y, float shift_x,
//                                  float shift_y, int codepoint)
function stbtt_MakeCodepointBitmapSubpixel(info, buffer, out_w, out_h, out_stride,
									scale_x, scale_y, shift_x, shift_y, codepoint) {
    stbtt_MakeGlyphBitmapSubpixel(info, buffer, out_w, out_h, out_stride,
                                  scale_x, scale_y, shift_x, shift_y,
                                  stbtt_FindGlyphIndex(info, codepoint));
}

//extern int stbtt_InitFont(stbtt_fontinfo * info, const unsigned char *data, int offset)
function stbtt_InitFont(font, data, offset) {
    return stbtt_InitFont_internal(font, data, offset);
}


function InitFont(data) {
	var font = {};
    if (!stbtt_InitFont_internal(font, data, 0)) {
		return null;
	}

	var vm = stbtt_GetFontVMetrics(font);

	font.ascent = vm.ascent;
	font.descent = vm.descent;
	font.linegap = vm.linegap;

	return font;
}

function GetGlyph(font, codepoint, size_x, size_y) {
	size_y = size_y || size_x;
	var scale_x = size_x / font.ascent;
	var scale_y = size_y / font.ascent;

	var glyph = stbtt_FindGlyphIndex(font, codepoint);
	if (!glyph && codepoint) {
		return null;
	}

    var vertices = stbtt_GetGlyphShape(font, glyph);
	var rect = stbtt_GetGlyphBitmapBoxSubpixel(font, glyph, scale_x, scale_y, 0, 0);
	var width = rect.x1 - rect.x0;
	var height = rect.y1 - rect.y0;
	var pixels = null;

	if (width && height) {
		var gbm = {
			pixels : (pixels = new Uint8Array(width * height)),
			w : width,
			h : height,
			stride : width,
		}
		stbtt_Rasterize(gbm, 0.35, vertices, scale_x, scale_y, 0, 0, rect.x0, rect.y0, 1);
	}

	var hmetrics = stbtt_GetGlyphHMetrics(font, glyph);
	return {
		glyph:glyph, pixels:pixels, width:width, height:height, top:-rect.y0, left:rect.x0,
		advance:floor(hmetrics.advanceWidth * scale_x),
	}
}
function GetPaths(font, codepoint, size_x, size_y) {
	size_y = size_y || size_x;
	var scale_x = size_x / font.ascent;
	var scale_y = size_y / font.ascent;

	var glyph = stbtt_FindGlyphIndex(font, codepoint);
	if (!glyph && codepoint) {
		return null;
	}
    var vertices = stbtt_GetGlyphShape(font, glyph);
	var hmetrics = stbtt_GetGlyphHMetrics(font, glyph);

	// The hmetrics just give us advance.  We need ascent and descent as well.
	var ascent = 0;
	var descent = 0;

	// Convert to SVG notation
	var paths = [];
	if (vertices) {
		for (var i = 0, l = vertices.length; i < l; i++) {
			var v = vertices[i];
			var path;
			if (v.type == STBTT_vmove) {
				path = { type:'M', x:v.x * scale_x, y:v.y * scale_y };
			} else if (v.type == STBTT_vline) {
				path = { type:'L', x:v.x * scale_x, y:v.y * scale_y };
			} else if (v.type == STBTT_vcurve) {
				path = { type:'Q', x:v.x * scale_x, y:v.y * scale_y,
								  cx:v.cx * scale_x, cy:v.cy * scale_y };
			} else if (v.type == STBTT_vcubic) {
				path = { type:'C', x:v.x * scale_x, y:v.y * scale_y,
								 cx1:v.cx * scale_x, cy1:v.cy * scale_y,
								 cx2:v.cx1 * scale_x, cy2:v.cy1 * scale_y };
			} else {
				continue;
			}
			if (path.y > ascent)  ascent  = path.y;
			if (path.y < descent) descent = path.y;
			paths.push(path);
		}
	}

	// Add the glyph metrics to the returned array.
	paths.advance = hmetrics.advanceWidth * scale_x;
	paths.ascent  = ascent;
	paths.descent = descent;
	return paths;
}


// exports
return {
	InitFont:	InitFont,
	GetGlyph:	GetGlyph,
	GetPaths:	GetPaths,
}

})();
