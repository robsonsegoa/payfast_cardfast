var winston = require('winston');
var fs = require('fs');

if(!fs.existsSync('logs')){
	fs.mkdirSync('logs');
}

//var logger = new winston.Logger({
module.exports = new winston.Logger({
	transports: [
		new winston.transports.File({
			level:"info",
			filename:"logs/payfast.log",
			maxsize: 100000,
			maxFiles: 10
		})
	]
});

//só para testar Logs
/*
logger.log('info', 'Log Utilizando winston e info');
logger.info('Log mais maroto.');
*/