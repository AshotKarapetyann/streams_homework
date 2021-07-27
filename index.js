const process = require('process');
const fs = require('fs')
const zlib = require("zlib")
const path = require("path")
const argv = process.argv.slice(2)
const zip = zlib.createGzip()

fs.mkdir('newFolder', (err) => {
    if (err) {
        return console.error(err);
    }

    fs.readdir(argv[0], function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            const input = fs.createReadStream(file);
            const output = fs.createWriteStream("./newFolder/files.zip");

            input.pipe(zip).pipe(output)
        });
    });

    console.log('Directory created successfully!');
});



