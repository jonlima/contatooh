var http = require('http');
var express = require('express');
var app = require('./config/express')(app);
var config = require('./config/config.js')();
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(config.port, config.address,
	function(){
	console.log('Express Https Server' + config.address + ' (' + config.env + ') escutando na porta ' + config.port);
});



/*http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta '+ app.get('port'));
});*/
