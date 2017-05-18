var fs = require('fs');

fs.createReadStream('ER1.jpg')
	.pipe(fs.createWriteStream('ER_com_Stream.jpg'))
	.on('finish', function(){
		console.log('arquivo escrito com stream');
	});