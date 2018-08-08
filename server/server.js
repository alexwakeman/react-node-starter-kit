const express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	session = require('express-session'),
	MongoStore = require('express-session-mongo');

app.use(session({
	secret: 'test-test',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: false },
	store: new MongoStore()
}));
app.use('/', express.static(path.join(__dirname, '../dist/login/')));
app.use('/app/', express.static(path.join(__dirname, '../dist/')));

router.route('/api/example')
	.get((req, res) => {
		let message = { messgae: 'Example API request to fetch data'};
		res.json(message);
	});


app.use(router);
app.listen(3000, () => console.log('App listening on port 3000!'));
