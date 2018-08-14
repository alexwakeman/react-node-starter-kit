const express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path');

app.use('/', express.static(path.join(__dirname, '../dist/')));

router.route('/api/example')
	.get((req, res) => {
		let exampleMessage = { exampleMessage: 'Example API request to fetch data... done!'};
		res.json(exampleMessage);
	});

app.use(router);
app.listen(3000, () => console.log('App listening on port 3000!'));
