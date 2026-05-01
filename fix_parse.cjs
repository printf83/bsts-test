const fs = require('fs');
const idx = 'src/index.ts';
let txt = fs.readFileSync(idx, 'utf8');
txt = txt.replace(/return str\.replace\(/g, 'return str.replace(/`/g, "\\`",
');
