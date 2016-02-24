var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// --------------------------------------------------------------  //

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/users/:id', function(req, res) {
		res.render('users', { ID: req.params.id, Qstr: req.query.qstr });
	});

	app.post('/users', urlencodedParser, function(req, res) {
		res.send('Thank you!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});


// ---------------------------- PHOTOS----------------------------------  //
	app.get('/photos', function(req, res) {
		res.render('photos');
	});

}
