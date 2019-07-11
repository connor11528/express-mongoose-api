require('./index');
const mongoose = require('mongoose');
const { Author, BlogPost } = require('../server/models');

async function seedAuthors() {
  console.log('Seeding authors to ' + mongoose.connection.name + '...');
  const authors = [
    { name: 'JK Rowling', bio: 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007.', twitter_url: 'jk_rowling' },
    { name: 'Tony Robbins', bio: 'Tony Robbins is an entrepreneur, best-selling author, philanthropist and the nation\'s #1 Life and Business Strategist.', twitter_url: 'TonyRobbins' },
  ];

  for (author of authors) {
    console.log(author);
    var newAuthor = new Author(author);
    newAuthor.save();
  }


  const a = await Author.find();
  console.log('authors: ', a);
}

seedAuthors();

