require('./index');
const mongoose = require('mongoose');
const { Author, Book } = require('../server/models');

async function seedAuthors() {
  console.log('Seeding authors to ' + mongoose.connection.name + '...');
  const authors = [
    { name: 'JK Rowling', bio: 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007.' },
    { name: 'Tony Robbins', bio: 'Tony Robbins is an entrepreneur, best-selling author, philanthropist and the nation\'s #1 Life and Business Strategist.' },
  ];

  for (author of authors) {
    var newAuthor = new Author(author);
    await newAuthor.save();
  }

  const a = await Author.find();
  console.log('authors: ', a);
}

seedAuthors();

