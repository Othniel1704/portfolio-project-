import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('./public/tableau_synthese.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(console.error);
