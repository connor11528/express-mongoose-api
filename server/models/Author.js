const mongoose = require('mongoose');

const authorModel = mongoose.Schema({
  name: { 
  	type: String, 
  	required: '{PATH} is required!'
  },
  bio: {
  	type: String
  },
  twiiter_url: {
  	type: String
  },
  posts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Story' }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', authorModel);