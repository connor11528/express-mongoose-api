const { Author } = require('../models');

const AuthorsController = {
  async index(req, res){
  	const authors = await Author.find().populate('posts');
  	res.send(authors);
  }
};

module.exports = AuthorsController;