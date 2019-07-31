const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ AuthorsController, 
		HomeController, 
		BooksController } = require('./controllers');

module.exports = function(app){	

	router.get('/', HomeController.index);

	router.get('/authors', AuthorsController.index);
	router.post('/authors', AuthorsController.store);
	router.get('/authors/:id', AuthorsController.show);
	router.put('/authors/:id', AuthorsController.update);
	router.delete('/authors/:id', AuthorsController.remove);

	app.use('/api', router);
};