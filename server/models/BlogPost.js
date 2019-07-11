const mongoose = require('mongoose');

const blogPostModel = mongoose.Schema({
  title: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  subtitle: {
  	type: String
  },
  twiiter_url: {
  	type: String
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Author' 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BlogPost', blogPostModel);