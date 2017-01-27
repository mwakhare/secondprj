var mongoose = require ('mongoose');

// var UserModel = mongoose.model ('UserModel');
var FeedBackModel = mongoose.model ('FeedbackModel');

var app = require ('../app'); //expressJS allows circular dependencies


// exports.authHandler = function (req, res)
// {
// 	var nmReq = req.body.loginName;
// 	var pwdReq = req.body.loginPassword;

// 	var authResult;
    
//     req.session.loggedin = false;

// 	UserModel.findOne ({username:nmReq}, function (err, userObj)
//     {
//         var authResult;
        
//         if (userObj === null)
//         {
//             authResult = false;
//         } 
//         else if (pwdReq === userObj.password)
//         {
//             authResult = true;
//         } 
//         else
//         {
//             authResult = false;
//         }
        
//         res.json (authResult);
        
//         console.log ("Login Name %s, Password %s. Login outcome [%s]", nmReq, pwdReq, authResult);
        
//     }
//     );//UserModel.findOne

// }; //authHandler


// exports.registerUserHandler = function (req, res)
// {
//    var newuser = new UserModel();

//    newuser.username = req.body.loginName;;
//    newuser.location = req.body.location;
//    newuser.password = req.body.loginPassword;

//    console.log ("Register: " + newuser.username + "  " + newuser.location + " " + newuser.password);
  
//    //save to db through model :: Add a record
//    newuser.save (function (err, savedUser)
//    {
//         if (err)
//         {
//             var message = "A user already exists with that username or email";
        
//             console.log (message);

//             res.json (false);
//         }
//         else
//         {
//             req.session.newuser = savedUser.username;

//             res.json(true);
//         }
//    }); //newuser.save

// };//registerUserHandler
 

// /* ******** ******** ******** ******** ******** ********  */
// /* ******** ******** REST API HANDLERS ******** ********  */
// /* ******** ******** ******** ******** ******** ********  */
// exports.getAllHandler = function (req, res)
// {
//     //app.get ('/v1/feedbacks'
    
//     FeedBackModel.find ({}, function (err, feedBackArray)
//     {
//         if (!err)
//         {
//             res.json (feedBackArray);
//             console.log ("FeedBack array being returned=" + JSON.stringify (feedBackArray));
//         } 
//     }); //FeedBackModel.find

// }; //getAllHandler

// exports.getOneHandler = function(req, res)
// {
//     //app.get ('/v1/feedbacks/:feedback'
    
//     var feedBackToEdit = req.params.feedback;

//     console.log ("feedbackToEdit = "  + feedBackToEdit);
    
//     FeedBackModel.findOne ({feedBack:feedBackToEdit}, function(err, feedbackRec)
//     {
//         if (!err)
//         {
//             console.log (chalk.yellow ("Going to edit -> [" + feedbackRec.name + " : " + feedbackRec.comment + "]"));
//             res.json (feedbackRec);
//         } 
//     }); //FeedBackModel.findOne

// }; //s/getOneHandler

exports.postOneHandler = function (req, res)
{
  //app.post('/v1/feedbacks'

  //var message;

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