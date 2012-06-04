var imagesnap = require('../index.js');
var fs = require('fs');
var imageStream = fs.createWriteStream('capture.jpg');
imagesnap().pipe(imageStream);