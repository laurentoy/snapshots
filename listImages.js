//run script in terminal with node listImages.js
//output is JSON encoded array of image filenames which can read from for client side JS
const output_name = 'compressed_listImages'

const fs = require('fs');
const directoryPath = './images/compressed';
fs.readdir(directoryPath, (err, files) => {
    if(err){
        console.error('Error reading directory: ${err}');
        return;
    }
    //filter out non-image files
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    fs.writeFile(`./data/${output_name}.json`, JSON.stringify(imageFiles), err => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }
        console.log(`File saved: ./data/${output_name}.json`);
    });
    //console.log(JSON.stringify(imageFiles)); //print array to terminal
    //module.exports = imageFiles; //export array var to be used other file
});


