var mongoose = require('mongoose');

var dbURI = 'mongodb://127.0.0.1/restfulDB';

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

var feedbackSchema = new mongoose.Schema (
    {
        username: {type: String},
        location: {type: String},
        response1: {type: String},
        response2: {type: String},
        response3: {type: String},
        response4: {type: String},
        comment: {type: String}
    }, 
    {
        collection: 'feedbackCol'
    }
  );

// register the Feedback model
mongoose.model ('FeedbackModel', feedbackSchema);

