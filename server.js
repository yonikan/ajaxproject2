
// --------------------------------------------------------------  //
var express = require('express');
var app = express();

var htmlController = require('./server/htmlCtrl');
var apiController = require('./server/apiCtrl');
// var mongoUtil = require('./server/mongoCtrl');
// mongoUtil.connect();

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

var port = process.env.PORT || 3000;
app.listen(port);
