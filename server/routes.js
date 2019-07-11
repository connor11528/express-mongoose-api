const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ AuthorsController } = require('./controllers');

module.exports = function(app){	

	router.get('/authors', AuthorsController.index);

	router.get('/posts', function(req, res){
		return 'hello posts';
	});

	app.use('/api', router);
};