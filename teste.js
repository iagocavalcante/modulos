var Transform = require('stream').Transform,
    fs = require('fs');

var dataFile = fs.createReadStream('estado-teste.csv');

var parser = new Transform();
parser._transform = function(data, encoding, done) {
  this.push(data);
  done();
};

// Pipe the streams
dataFile
.pipe(parser)
.pipe(process.stdout);

// Some programs like `head` send an error on stdout
// when they don't want any more data
process.stdout.on('error', process.exit);