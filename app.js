var http = require('http');
var fs = require('fs');

// Reading file as streams of data
var readableStream = fs.createReadStream('./big.file', {encoding: 'utf-8'});
// Writing file as streams of data
var writableStream = fs.createWriteStream('./secondBig.file');

// Getting a chunk of data
readableStream.on('data', function (chunk) {
    // Writing a chunk of data
    console.log("chunk");
    writableStream.write(chunk);
});

// Recieving end event on completion of reading file
readableStream.on('end', function () {
    writableStream.end();
});
