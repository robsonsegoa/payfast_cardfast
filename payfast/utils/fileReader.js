var fs = require('fs');

fs.readFile('ER1.jpg', function(error,buffer){
	console.log('arquivo lido');

	fs.writeFile('ER2.jpg', buffer, function(err){
		console.log('arquivo escrito');
	});
})