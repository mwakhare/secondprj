var mongoose = require ('mongoose');
var FeedBackModel = mongoose.model ('FeedbackModel');

var app = require ('../app'); //expressJS allows circular dependencies


/* ******** ******** ******** ******** ******** ********  */
/* ******** ******** REST API HANDLERS ******** ********  */
/* ******** ******** ******** ******** ******** ********  */


exports.getAllHandler = function (req, res)
{
    //app.get ('/v1/feedbacks'
    
    FeedBackModel.find ({}, function (err, feedBackArray)
    {
        if (!err)
        {
            res.json (feedBackArray);
            console.log ("FeedBack array being returned=" + JSON.stringify (feedBackArray));
        } 
        else
        {
            res.json ({error: -999, message: 'Records not found.'});    
            return;
        }
    }); //FeedBackModel.find

}; //getAllHandler


exports.getOneHandler = function (req, res)
{
    //app.get ('/v1/feedbacks/:id'
    
    var feedbackToFind = req.params.id;

    console.log ("feedbackToFind = "  + feedbackToFind);
    
    FeedBackModel.findOne ({username : feedbackToFind}, function(err, feedbackRec)
    {
        if (err)
        {
            res.json ({error: -111, message: 'Record not found.'});    
            return;
        }

        if (!err)
        {
            console.log ("Going to edit -> [" + feedbackRec.username + " : " + feedbackRec.comment + "]");
            res.json (feedbackRec);
        } 
        
       
    }); //FeedBackModel.findOne

}; //s/getOneHandler


exports.postOneHandler = function (req, res)
{
  //app.post('/v1/feedbacks'

  var newFeedback = new FeedBackModel ();

  newFeedback.username = req.body.username;
  newFeedback.location = req.body.location;
  newFeedback.response1 = req.body.response1;
  newFeedback.response2 = req.body.response2;
  newFeedback.response3 = req.body.response3;
  newFeedback.response4 = req.body.response4;
  newFeedback.comment = req.body.comment;

   //save to db through model :: Add a record
   newFeedback.save (function (err, savedFeedback)
   {
        if (err)
        {
            res.json (false);
            console.log (newFeedback.username + " could not be added");
        }
        else
        {
            res.json (true);
            res.json (savedFeedback);

            console.log (newFeedback.username + " added successfully");
        } 
    }); //newFeedback.save

}; //postOneHandler


// exports.updateOneHandler = function (req, res)
// {
//     //app.put ('/v1/feedbacks/:feedback'

//     var feedbackName = req.params.name;
//     var feedbackLocation = req.params.location;
//     var feedbackResponse1 = req.params.response1;
//     var feedbackResponse2 = req.params.response2;
//     var feedbackResponse3 = req.params.response3;
//     var feedbackResponse4 = req.params.response4;
//     var feedbackComment = req.params.comment;

//     //console.log ("Saving Edited records : " + feedbackName + " : " + feedbackComment);
    
//     var message;
    
//     //update rec through model
//     FeedBackModel.update (  {name: feedbackName}, 
//                             {$set: { comment: feedbackComment }}, 
//                             {multi:false}, 
//                             function (err, updatedRec)
//                             {
//                                 if (err)
//                                 {
//                                     res.json (false);
//                                 }
//                                 else
//                                 {
//                                     res.json (true);
//                                 }
//                             }
//                         );
// }; //updateOneHandler

// exports.deleteOneHandler = function (req, res)
// {
//     //app.delete ('/v1/feedbacks/:feedback'
//     var feedbackToEdit = req.params.feedback;

//     FeedBackModel.remove (  {name:feedbackToEdit}, 
//                             function (err, feedbackRec)
//                             {
//                                 if (err)
//                                 {
//                                     res.json (false);
//                                     console.log (feedbackToEdit + " could not be deleted");
//                                 }
//                                 else
//                                 {
//                                     res.json(true);
//                                     console.log (feedbackToEdit + " deleted successfully");
//                                 } 
//                             }
//                         ); //FeedBackModel.remove

// }; //deleteOneHandler