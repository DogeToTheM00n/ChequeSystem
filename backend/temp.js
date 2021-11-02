var chequeOCR = require('cheque-ocr'),
    fs = require('fs');

var image = fs.readFileSync('/path/to/image.jpg');
chequeOCR(image, function(err, result) {
  console.log(err, result);
});