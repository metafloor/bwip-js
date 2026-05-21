// 4-connected path tracing

function tracepaths(pixs, width, height, inkspreadh, inkspreadv) {
    let dx = inkspreadh||0;
    let dy = inkspreadv||0;

    // The pixs array is in y-inverted postscript orientation.
    // Convert to an array of arrays.
    let grid = new Array(height+1);
    let yoff = 0;
    for (let y = height-1; y >= 0; y--) {
        let row = new Uint8Array(width);
        for (let x = 0; x < width; x++) {
            row[x] = pixs[yoff + x] ? 1 : 0;
        }
        grid[y] = row;
        yoff += width;
    }
    // Add a row before/after so we can blindly access the grid.
    // We don't need actual zero-padding around the pixels.
    // All accesses are "cast to integer" with bit-&, so undefined
    // get converted to zero.
    grid[-1] = [];
    grid[height] = [];

    let paths = [];
    for (let y = 0; y < height; y++) {
        let last = 0;
        for (let x = 0; x < width; x++) {
            // The last&9 verifies the edge was not traced ccw (dir == 8).
            if ((last&9) == 0 && grid[y][x] == 1) {
                paths.push(tracecw(x, y, []));  // clockwise for outside
            // The last&5 verifies the edge was not traced cw (dir == 4).
            } else if ((last&5) == 1 && grid[y][x] == 0) {
                paths.push(traceccw(x, y, [])); // counter-clockwise for inside
            }
            last = grid[y][x];
        }
    }
    return paths;

    // Trace outside edges clockwise
    function tracecw(x, y, path) {
        path.push([ x+dx, y+dy ]);

        // 2 == top edge
        // 4 == right edge
        // 2 == top edge
        // 4 == right edge
        // 8 == bottom edge
        // 16 == left edge
        let dir = 2;
        for (;;) {
            if (grid[y][x] & dir) {
                path.pop();
                return path;
            }
            grid[y][x] |= dir;

            if (dir == 2) { // top edge rightward
                if (grid[y][x+1] & 1) {
                    if (grid[y-1][x+1] & 1) {
                        path.push([ x+1-dx, y+dy, 'H' ]);
                        dir = 16;
                    }
                    x++;
                } else {
                    path.push([ x+1-dx, y+dy, 'H' ]);
                    dir = 4;
                }
            } else if (dir == 4) {  // right edge downward
                if (grid[y+1][x] & 1) {
                    if (grid[y+1][x+1] & 1) {
                        path.push([ x+1-dx, y+1-dy, 'V' ]);
                        dir = 2;
                    }
                    y++;
                } else {
                    path.push([ x+1-dx, y+1-dy, 'V' ]);
                    dir = 8;
                }
            } else if (dir == 8) { // bottom edge leftward
                if (grid[y][x-1] & 1) {
                    if (grid[y+1][x-1] & 1) {
                        path.push([ x+dx, y+1-dy, 'H' ]);
                        dir = 4;
                    }
                    x--;
                } else {
                    path.push([ x+dx, y+1-dy, 'H' ]);
                    dir = 16;
                }
            } else { // left edge upward
                if (grid[y-1][x] & 1) {
                    if (grid[y-1][x-1] & 1) {
                        path.push([ x+dx, y+dy, 'V' ]);
                        dir = 8;
                    }
                    y--;
                } else {
                    path.push([ x+dx, y+dy, 'V' ]);
                    dir = 2;
                }
            }
        }
    }

    // Trace inside edges counter clockwise
    function traceccw(x, y, path) {
        path.push([ x-dx, y-dy ]);

        // 2 == left edge
        // 4 == bottom edge
        // 8 == right edge
        // 16 == top edge
        let dir = 2;
        for (;;) {
            if (grid[y][x] & dir) {
                path.pop();
                return path;
            }
            grid[y][x] |= dir;

            if (dir == 2) { // left edge downward
                if ((grid[y+1][x] & 1) == 0) {
                    if ((grid[y+1][x-1] & 1) == 0) {
                        path.push([ x-dx, y+1+dy ]);
                        dir = 16;
                    }
                    y++;
                } else {
                    path.push([ x-dx, y+1+dy ]);
                    dir = 4;
                }
            } else if (dir == 4) {  // bottom edge rightward
                if ((grid[y][x+1] & 1) == 0) {
                    if ((grid[y+1][x+1] & 1) == 0) {
                        path.push([ x+1+dx, y+1+dy ]);
                        dir = 2;
                    }
                    x++;
                } else {
                    path.push([ x+1+dx, y+1+dy ]);
                    dir = 8;
                }
            } else if (dir == 8) { // right edge upward
                if ((grid[y-1][x] & 1) == 0) {
                    if ((grid[y-1][x+1] & 1) == 0) {
                        path.push([ x+1+dx, y-dy ]);
                        dir = 4;
                    }
                    y--;
                } else {
                    path.push([ x+1+dx, y-dy ]);
                    dir = 16;
                }
            } else { // top edge leftward
                if ((grid[y][x-1] & 1) == 0) {
                    if ((grid[y-1][x-1] & 1) == 0) {
                        path.push([ x-dx, y-dy ]);
                        dir = 8;
                    }
                    x--;
                } else {
                    path.push([ x-dx, y-dy ]);
                    dir = 2;
                }
            }
        }
    }
}
