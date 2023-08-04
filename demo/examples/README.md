
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

  - `examples/pdfkit.js` and `examples/drawing-pdfkit.js` show how to add
    scalable barcodes (PDF graphics) to a [pdfkit](https://pdfkit.org/) document.  

    `drawing-pdfkit.js` is browser compatible if you prefer to use pdfkit
    client side.


## Example Raw BWIPP Encoder/Rendering Data

  - `raw.js` is a utility for displaying the low-level BWIPP data used to render a barcode.

    See [Notes on the Raw BWIPP Data](https://github.com/metafloor/bwip-js/wiki/Notes-on-the-Raw-BWIPP-Data)
    for more details.


