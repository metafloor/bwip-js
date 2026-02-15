// drawing-table.js
//
// Converts the barcode drawing into an HTML table using the built-in drawing
// engine for rasterization and greedy rectangle packing with colspan/rowspan
// for compact output.  Ideal for embedding barcodes in emails where image
// support is unreliable.
//
// Wraps DrawingBuiltin (like DrawingCanvas and DrawingZlibPng) to leverage
// the existing scanline fill, text rendering, and rotation logic.
//
function DrawingTable() {
    var drawing = DrawingBuiltin();
    var opts;
    var imgWidth, imgHeight, imgBuffer;

    var _setopts = drawing.setopts;
    drawing.setopts = function(options) {
        opts = options;
        _setopts && _setopts.call(drawing, options);
    };

    // Called by DrawingBuiltin.init() to get the RGBA bitmap for rendering.
    drawing.image = function(width, height) {
        imgWidth = width;
        imgHeight = height;
        imgBuffer = new Uint8Array(width * height * 4);

        var bg = opts.backgroundcolor;
        if (/^[0-9a-fA-F]{6}$/.test('' + bg)) {
            var r = parseInt(bg.substr(0, 2), 16);
            var g = parseInt(bg.substr(2, 2), 16);
            var b = parseInt(bg.substr(4, 2), 16);
            for (var i = 0; i < imgBuffer.length; i += 4) {
                imgBuffer[i] = r;
                imgBuffer[i + 1] = g;
                imgBuffer[i + 2] = b;
                imgBuffer[i + 3] = 255;
            }
        }
        return { buffer: imgBuffer, ispng: false };
    };

    drawing.end = function() {
        var bg = opts.backgroundcolor || '';
        var bgColor = /^[0-9a-fA-F]{6}$/.test(bg) ? bg.toLowerCase() : '';

        // Convert pixel buffer to color grid
        var grid = buildGrid(imgBuffer, imgWidth, imgHeight, bgColor);

        // Pack with best D4 orientation for minimal HTML size
        var packed = packBestOrientation(grid, imgHeight, imgWidth, bgColor);

        // Generate HTML table
        return buildTable(packed.spans, imgHeight, imgWidth, bgColor);
    };

    return drawing;

    // === Private utility functions ===

    function buildGrid(buffer, width, height, bgColor) {
        var grid = new Array(height);
        for (var r = 0; r < height; r++) {
            grid[r] = new Array(width);
            for (var c = 0; c < width; c++) {
                var off = (r * width + c) * 4;
                if (buffer[off + 3] === 0) {
                    grid[r][c] = bgColor;
                } else {
                    grid[r][c] = hex2(buffer[off]) + hex2(buffer[off + 1]) + hex2(buffer[off + 2]);
                }
            }
        }
        return grid;
    }

    function hex2(n) {
        return (n < 16 ? '0' : '') + n.toString(16);
    }

    function shortHex(color) {
        if (color.length === 6 &&
            color[0] === color[1] && color[2] === color[3] && color[4] === color[5]) {
            return '#' + color[0] + color[2] + color[4];
        }
        return '#' + color;
    }

    // Estimate byte cost of a single <td> element for the cost-based packing.
    function tdCost(color, w, h, bgColor) {
        var s = '<td';
        if (w > 1) s += ' colspan="' + w + '"';
        if (h > 1) s += ' rowspan="' + h + '"';
        s += ' style="width:' + w + 'px;height:' + h + 'px;padding:0';
        if (color !== bgColor) s += ';background:' + shortHex(color);
        s += '"></td>';
        return s.length;
    }

    // Greedy rectangle packing: scan top-left to bottom-right, at each uncovered
    // cell find the rectangle with the lowest bytes-per-cell cost.
    function packGreedy(grid, rows, cols, bgColor) {
        var used = new Array(rows);
        for (var r = 0; r < rows; r++) used[r] = new Uint8Array(cols);

        var spans = new Array(rows);
        for (var r = 0; r < rows; r++) spans[r] = new Array(cols).fill(null);

        var totalByteCost = 0;
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                if (used[r][c]) continue;
                var color = grid[r][c];

                // Find max width of same color
                var maxW = 0;
                while (c + maxW < cols && grid[r][c + maxW] === color && !used[r][c + maxW]) maxW++;

                // Find best rectangle by bytes-per-cell cost
                var bestScore = Infinity, bestArea = 0, bestW = 1, bestH = 1;
                for (var w = 1; w <= maxW; w++) {
                    var maxH = 0;
                    for (var h = 1; r + h <= rows; h++) {
                        var ok = true;
                        for (var dc = 0; dc < w; dc++) {
                            if (grid[r + h - 1][c + dc] !== color || used[r + h - 1][c + dc]) {
                                ok = false;
                                break;
                            }
                        }
                        if (!ok) break;
                        maxH = h;
                    }
                    if (maxH === 0) continue;
                    var area = w * maxH;
                    var score = tdCost(color, w, maxH, bgColor) / area;
                    if (score < bestScore || (score === bestScore && area > bestArea)) {
                        bestScore = score;
                        bestArea = area;
                        bestW = w;
                        bestH = maxH;
                    }
                }

                spans[r][c] = { w: bestW, h: bestH, color: color };
                for (var dr = 0; dr < bestH; dr++)
                    for (var dc = 0; dc < bestW; dc++)
                        used[r + dr][c + dc] = 1;
                totalByteCost += tdCost(color, bestW, bestH, bgColor);
            }
        }
        return { spans: spans, totalByteCost: totalByteCost };
    }

    // Try all 8 orientations of the dihedral group D4 (identity + 7 transforms)
    // and return the packing with the lowest total byte cost.  Different scan
    // orders cause the greedy algorithm to make different rectangle choices;
    // picking the best eliminates scan-order bias.
    function packBestOrientation(grid, rows, cols, bgColor) {
        var R = rows, C = cols;
        var best = packGreedy(grid, R, C, bgColor);

        var orientations = [
            [false, true, false],
            [false, false, true],
            [false, true, true],
            [true, false, false],
            [true, true, false],
            [true, false, true],
            [true, true, true],
        ];

        for (var oi = 0; oi < orientations.length; oi++) {
            var trans = orientations[oi][0];
            var fH = orientations[oi][1];
            var fV = orientations[oi][2];
            var tR = trans ? C : R;
            var tC = trans ? R : C;

            // Build transformed grid
            var tGrid = new Array(tR);
            for (var r = 0; r < tR; r++) {
                tGrid[r] = new Array(tC);
                for (var c = 0; c < tC; c++) {
                    var srcR = trans ? c : r;
                    var srcC = trans ? r : c;
                    if (fV) srcR = R - 1 - srcR;
                    if (fH) srcC = C - 1 - srcC;
                    tGrid[r][c] = grid[srcR][srcC];
                }
            }

            var result = packGreedy(tGrid, tR, tC, bgColor);
            if (result.totalByteCost >= best.totalByteCost) continue;

            // Map spans back to original coordinates
            var newSpans = new Array(R);
            for (var r = 0; r < R; r++) newSpans[r] = new Array(C).fill(null);
            for (var r = 0; r < tR; r++) {
                for (var c = 0; c < tC; c++) {
                    var s = result.spans[r][c];
                    if (!s) continue;
                    var tlR = trans ? c : r;
                    var tlC = trans ? r : c;
                    var brR = trans ? (c + s.w - 1) : (r + s.h - 1);
                    var brC = trans ? (r + s.h - 1) : (c + s.w - 1);
                    if (fV) { tlR = R - 1 - tlR; brR = R - 1 - brR; }
                    if (fH) { tlC = C - 1 - tlC; brC = C - 1 - brC; }
                    var minR = Math.min(tlR, brR), minC = Math.min(tlC, brC);
                    var maxR = Math.max(tlR, brR), maxC = Math.max(tlC, brC);
                    newSpans[minR][minC] = {
                        w: maxC - minC + 1,
                        h: maxR - minR + 1,
                        color: s.color
                    };
                }
            }
            best = { spans: newSpans, totalByteCost: result.totalByteCost };
        }
        return best;
    }

    function buildTable(spans, rows, cols, bgColor) {
        var bgShort = bgColor ? shortHex(bgColor) : '#fff';
        var html = '<table role="presentation" cellpadding="0" cellspacing="0" border="0" ' +
                   'style="border-collapse:collapse;border-spacing:0;margin:0 auto;' +
                   'font-size:0;line-height:0;background:' + bgShort + '">';

        for (var r = 0; r < rows; r++) {
            html += '<tr>';
            // Zero-width sizing cell for Safari row-height locking
            html += '<td style="width:0;height:1px;padding:0"></td>';
            for (var c = 0; c < cols; c++) {
                var s = spans[r][c];
                if (!s) continue;
                html += '<td';
                if (s.w > 1) html += ' colspan="' + s.w + '"';
                if (s.h > 1) html += ' rowspan="' + s.h + '"';
                html += ' style="width:' + s.w + 'px;height:' + s.h + 'px;padding:0';
                if (s.color !== bgColor) html += ';background:' + shortHex(s.color);
                html += '"></td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        return html;
    }
}
