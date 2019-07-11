const mongoose = require('mongoose'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('../server/env')[env];

mongoose.Promise = require('bluebird');
mongoose.connect(envConfig.db, { useMongoClient: true, });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + mongoose.connection.host + ' ' + mongoose.connection.name);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});