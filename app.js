var express = require ('express');
//var bodyparser = require ('body-parser');
var session = require ('express-session');

var db = require ('./models/db.js');  // db.js must be required before routes.js
var app = express(); // exporting apps must be done before routes.js
var routes = require ('./routes/route.js');


//app.use (express.static (__dirname + "/public"));
//app.use (bodyparser.json ());

//app.use (bodyparser.urlencoded ({extended:false}));
//app.use (session ({secret: "secret",  resave : true,  saveUninitialized : false}));

//app.post ('/auth', route.authHandler);
//app.post ('/register', route.registerUserHandler);

// REST Routes
//app.get ('/v1/feedbacks', route.getAllHandler);  // return all feedbacks records
//app.get ('/v1/feedbacks/:feedback', route.getOneHandler);  // return one record
app.post ('/v1/feedbacks', routes.postOneHandler); // add new feedback record
//app.put ('/v1/feedbacks/:feedback', route.updateOneHandler); // update a record
//app.delete ('/v1/feedbacks/:feedback', route.deleteOneHandler); // detete a record


var port = process.env.PORT || 3000;

app.listen (port, function ()
{
	console.log ('HTTP server is listening on port: ' + port);
});
