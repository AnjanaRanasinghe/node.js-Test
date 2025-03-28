const fs = require('node:fs');

fs.writeFileSync("text.txt", "HEllow");
fs.appendFileSync("text.txt", " World!");
const rd = fs.readFileSync("text.txt");
console.log(rd.toString());