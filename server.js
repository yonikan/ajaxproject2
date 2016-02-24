var express = require('express');
var app = express();

var apiController = require('./server/apiController');
var htmlController = require('./server/htmlController');
var port = process.env.PORT || 3000;

// --------------------------------------------------------------  //
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

// --------------------------------------------------------------  //
htmlController(app);

apiController(app);

app.listen(port);
