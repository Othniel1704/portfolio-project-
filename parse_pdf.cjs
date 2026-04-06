const fs = require('fs');
const pdf = require('pdf-parse');

console.log(pdf);
if (typeof pdf === 'function') {
  let dataBuffer = fs.readFileSync('./public/tableau_synthese.pdf');
  pdf(dataBuffer).then(function(data) {
      console.log(data.text);
  }).catch(console.error);
} else if (pdf && typeof pdf.default === 'function') {
  let dataBuffer = fs.readFileSync('./public/tableau_synthese.pdf');
  pdf.default(dataBuffer).then(function(data) {
      console.log(data.text);
  }).catch(console.error);
} else {
  console.log("Could not find pdf function");
}
