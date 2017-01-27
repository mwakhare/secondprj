//var chalk = require('chalk');
var mongoose = require( 'mongoose' );


var dbURI = 'mongodb://127.0.0.1/restfulDB';
//var dbURI =  'mongodb://edu:edu@ds015879.mlab.com:15879/edurekadb';

console.log ("Establishing connection to the DB");

//   ****** CONNECTIONS
mongoose.connect (dbURI);

mongoose.connection.on ('connected', function () 
{
  console.log ('Mongoose connected to ' + dbURI);
}
);

mongoose.connection.on ('error', function (err) 
{
  console.log ('Mongoose connection error: ' + err);
}
);

mongoose.connection.on ('disconnected', function () 
{
  console.log ('Mongoose disconnected');
}
);

// ***** *******  *  *****   Schema defs
// var userSchema = new mongoose.Schema({
//   username: {type: String, unique:true},
//   location: {type: String},
//   password: String
// }, {collection: 'UsersCol'});

var feedbackSchema = new mongoose.Schema({
  username: {type: String},
  location: {type: String},
  response1: {type: String},
  response2: {type: String},
  response3: {type: String},
  response4: {type: String},
  comment: {type: String}

}, {collection: 'feedbackCol'});

// register the User model
//mongoose.model( 'UserModel', userSchema);
mongoose.model( 'FeedbackModel', feedbackSchema);

