const express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	session = require('express-session'),
	MongoDBStore = require('connect-mongodb-session')(session),
	store = new MongoDBStore({
		uri: 'mongodb://localhost:27017/session-db',
		collection: 'sessions'
	});

app.use(session({
	secret: 'test-test',
	resave: true,
	saveUninitialized: true,
	cookie: { secure: false },
	store: store
}));

app.use('/', express.static(path.join(__dirname, '../dist/')));

router.route('/api/example')
	.get((req, res) => {
		let exampleMessage = { exampleMessage: 'Example API request to fetch data... done!'};
		res.json(exampleMessage);
	});

app.use(router);
app.listen(3000, () => console.log('App listening on port 3000!'));
