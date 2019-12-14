var fs  = require('fs');

// To generate barcode.psc, run the psc script with 'rm barcode.psc' 
// (near the end of the file) commented out.
var pstext = fs.readFileSync('barcode.psc', 'binary');
let lnbr = 0;
fs.writeFileSync('pscdbg.html',
`<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" \>
<title>debug psc</title>
<script type="text/javascript" src="psc.js"></script>
</head>
<body>
<xmp id="barcode.ps">
${fs.readFileSync('barcode.psc', 'utf-8')}
</xmp>
<script type="text/javascript">
debugger;
PSC(document.getElementById('barcode.ps').textContent, []);
</script>
</body>
</html>
`, 'utf-8');
