var express = require ('express');
var bodyparser = require ('body-parser');
var session = require ('express-session');

var db = require ('./models/db.js');  
var app = express(); 
var routes = require ('./routes/route.js');


app.use (bodyparser.json ());
app.use (bodyparser.urlencoded ({extended:false}));

// REST Routes

app.get ('/v1/feedbacks', routes.getAllHandler);  				// return all feedbacks records
//app.get ('/v1/feedbacks/:feedback', route.getOneHandler);  	// return one record
app.post ('/v1/feedbacks', routes.postOneHandler); 				// add new feedback record
//app.put ('/v1/feedbacks/:feedback', route.updateOneHandler); 	// update a record
//app.delete ('/v1/feedbacks/:feedback', route.deleteOneHandler); // detete a record


var port = process.env.PORT || 3000;

app.listen (port, function ()
{
	console.log ('HTTP server is listening on port: ' + port);
});
