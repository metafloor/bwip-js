export default function Bitmap(bgcolor = 'fff') {
    let clr = [0, 0, 0];
    const pts = [];
    let minx = 0; // min-x
    let miny = 0; // min-y
    let maxx = 0; // max-x
    let maxy = 0; // max-y
    let padx = 0; // padding-x
    let pady = 0; // padding-y

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
        const cvs = cvsid instanceof window.HTMLCanvasElement ? cvsid : document.getElementById(cvsid); // eslint-disable-line max-len
        if (pts.length === 0) {
            cvs.width = 32;
            cvs.height = 32;
            cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
            cvs.style.visibility = 'visible';
            return;
        }

        let h;
        let w;
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
            const c = parseInt(bgcolor.substr(0, 2), 16) / 255;
            const m = parseInt(bgcolor.substr(2, 2), 16) / 255;
            const y = parseInt(bgcolor.substr(4, 2), 16) / 255;
            const k = parseInt(bgcolor.substr(6, 2), 16) / 255;
            const r = Math.floor((1 - c) * (1 - k) * 255);
            const g = Math.floor((1 - m) * (1 - k) * 255);
            const b = Math.floor((1 - y) * (1 - k) * 255);
            bgcolor = `rgb(${r},${g},${b})`; // eslint-disable-line no-param-reassign
        } else if (bgcolor) {
            bgcolor = `#${bgcolor}`; // eslint-disable-line no-param-reassign
        }

        const ctx = cvs.getContext('2d');
        ctx.fillStyle = bgcolor;
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = '#000';

        const id = ctx.getImageData(0, 0, cvs.width, cvs.height);
        const dat = id.data;

        for (let i = 0; i < pts.length; i++) {
            // PostScript builds bottom-up, we build top-down.
            let x = pts[i][0] - minx;
            let y = pts[i][1] - miny;
            const c = pts[i][2];
            const a = pts[i][3] / 255;

            if (rot === 'N') {
                y = h - y - 1; // Invert y
            } else if (rot === 'I') {
                x = w - x - 1; // Invert x
            } else {
                y = w - y; // Invert y
                if (rot === 'L') {
                    const t = y;
                    y = h - x - 1;
                    x = t - 1;
                } else {
                    const t = x;
                    x = w - y;
                    y = t;
                }
            }

            const idx = (y * id.width + x) * 4;
            dat[idx + 0] = (dat[idx + 0] * (1 - a) + c[0] * a) | 0;
            dat[idx + 1] = (dat[idx + 1] * (1 - a) + c[1] * a) | 0;
            dat[idx + 2] = (dat[idx + 2] * (1 - a) + c[2] * a) | 0;
            dat[idx + 3] = 255;
        }
        ctx.putImageData(id, padx, pady);
        cvs.style.visibility = 'visible';
    };
}
