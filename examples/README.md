
## Server Examples

Generating barcodes can be CPU intensive.  2D barcodes typically require 100ms - 250ms
on a fairly modern CPU.  Best to offload to secondary processes or threads, otherwise the
nodejs event loop will be blocked.

  - `server.js` is the most basic server example.  A single-threaded, single-process
    server.  

  - `cluster.js` creates a bwip-js specific process per CPU, plus a master to
    automatically relaunch killed processes.

  - `threaded.js` is a single-process, multi-threaded server.  Requires node.js 10.5 
    or higher.


## Drawing Examples

  - `drawing-example.js` and `example.html`

    These files are the simplest demonstation of the bwip-js drawing interface.
    Do not use in production as the canvas API will create fuzzy lines/edges.

    See `example.html` for the following code showing how to create the drawing
    object and pass it to bwip-js:

    ```
    // Draw the bar code to the canvas using a custom drawing interface.
    try {
        // fixupOptions() modifies options values (currently padding and
        // background color) to provide a simplified interface for the
        // drawing code.
        bwipjs.fixupOptions(opts);
        bwipjs.render(opts, DrawingExample(opts, canvas));
    } catch (e) {
        // e can be a string or Error object
    }
    ```

    You can launch `example.html` from your browser using the `file://` scheme.

  - `drawing-svg.js`, `svg.html`, `svg.js`

    These files show a more advance drawing interface.  The output is an SVG text
    block with the barcode image rendered as SVG paths.  If the image contains text,
    the character (glyph) paths are extracted from the font and added as SVG paths.

    You can launch `svg.html` from your browser using the `file://` scheme.  The SVG
    is both rendered on the page and shown as text.

    `svg.js` is an example nodejs command line utility.

    ```
    Usage: node svg encoder text [options ...]
    ```

    For example:

    ```
    $ node svg code128 0123 includetext textcolor=ff0000

    <svg version="1.1" width="114" height="160" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#000000" stroke-width="4" d="M2 144L2 0M24 144L24 ... 144L112 0" />
    <path stroke="#000000" stroke-width="2" d="M7 144L7 0M73 144L73 0M107 144L107 0" />
    <path stroke="#000000" stroke-width="6" d="M15 144L15 0M47 144L47 ... 144L101 0" />
    <path d="M37.04 159.45L36.96 159 ... 09 71.32 158.79Z" fill="#ff0000" />
    </svg>
    ```

  - `examples/pdfkit.js` and `examples/drawing-pdfkit.js` show how to add
    scalable barcodes (PDF graphics) to a [pdfkit](https://pdfkit.org/) document.  

    `drawing-pdfkit.js` is browser compatible if you prefer to use pdfkit
    client side.


## Example Raw BWIPP Encoder/Rendering Data

  - `raw.js` is a utility for displaying the low-level BWIPP data used to render a barcode.

    See [Notes on the Raw BWIPP Data](https://github.com/metafloor/bwip-js/wiki/Notes-on-the-Raw-BWIPP-Data)
    for more details.


