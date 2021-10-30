var zia = require('zia');
zia.extractOpticalCharacters(fs.createReadStream('/Users/amelia-421/Desktop/cheque.jpg'), {modelType: 'CHEQUE'}) //Pass the input file with the model type
	.then((result) => {
		console.log(result);
	})
	.catch((err) => console.log(err.toString())); //Push errors to Catalyst Logs
