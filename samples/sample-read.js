var JSZip, data64, filename, fs, workbook, xlsx;

JSZip = require('node-zip');

fs = require('fs');

xlsx = require('../lib/xlsx');

filename = "./testdata/Formatting.xlsx";

if (process.argv[2]) {
  filename = process.argv[2];
}

data64 = fs.readFileSync(filename, "base64");

workbook = xlsx.decode(data64);

console.log(JSON.stringify(workbook, null, 4));
