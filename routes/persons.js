var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var PofI = mongoose.model('PofI');
//var User = mongoose.model('User');


//Route endpoints for Person of Interest
router.route('/person')
  //Create a single person of interest
  .post(function(req, res){
    var body = req.body;
    var poi = new PofI();
    poi.fn = body.fn;
    poi.ln = body.ln;
    poi.dob = body.dob;

    // var keywords = [ body.fn, body.ln, body.dob ];
    // poi.keywords = keywords;

    poi.save(function(err, product){
      if( err ) return console.error("error:\n" + JSON.stringify(err));

      // console.log("Success!\n" + JSON.stringify(product));
    });
    //console.log("Testing logging");
    res.send({'message' : { "message" : "TODO: post person", "_id" : poi._id }});
  })
  //Retrieve all persons of interest's ids, fn, ln, and dob.
  .get(function(req, res){
    var query = PofI.find(req.query,
      function(err, product){
        if(err) return console.error("Error:\n" + JSON.stringify(err));
        res.send({'message' : "Success", 'searchParams' : req.query, 'result' : product});
      }
    );
  })
  //Update a person of interest
  //TODO: SECURITY. Lock down to moderators only.
  .put(function(req, res){
    res.send({'message' : "TODO: put person"});
  })
  //Delete a person of interest.
  //TODO: SECURITY. Lock down to moderators only.
  .delete(function(req,res){
    res.send({'message' : "TODO: delete person"});
  });


/** TODO: Implement event, donantion, and career db models. Do this after successfully making the backend for a person.
router.route('/person/event')
  //Create a single event
  .post(function(req, res){
    res.send({'message' : "TODO: post person/event"});
  })
  //Retrieve a single event by ID.
  .get(function(req, res){
    res.send({'message' : "TODO: get person/event"});
  })
  //Update a event
  //TODO: SECURITY. Lock down to modrators only.
  .put(function(req, res){
    res.send({'message' : "TODO: put person/event"});
  })
  //Delete a event.
  //TODO: SECURITY. Lock down to moderators only.
  .delete(function(req,res){
    res.send({'message' : "TODO: delete person/event"});
  });



router.route('/person/career')
  //Create a single career dp
  .post(function(req, res){
    res.send({'message' : "TODO: post person/career"});
  })
  //Retrieve a single career dp by ID.
  .get(function(req, res){
    res.send({'message' : "TODO: get person/career"});
  })
  //Update a career dp
  //TODO: SECURITY. Lock down to modrators only.
  .put(function(req, res){
    res.send({'message' : "TODO: put person/career"});
  })
  //Delete a career dp.
  //TODO: SECURITY. Lock down to moderators only.
  .delete(function(req,res){
    res.send({'message' : "TODO: delete person/career"});
  });



router.route('/person/donation')
  //Create a single donation
  .post(function(req, res){
    res.send({'message' : "TODO: post person/donation"});
  })
  //Retrieve a single donation by ID.
  .get(function(req, res){
    res.send({'message' : "TODO: get person/donationt"});
  })
  //Update a donation
  //TODO: SECURITY. Lock down to modrators only.
  .put(function(req, res){
    res.send({'message' : "TODO: put person/donation"});
  })
  //Delete a donation.
  //TODO: SECURITY. Lock down to moderators only.
  .delete(function(req,res){
    res.send({'message' : "TODO: delete person/donation"});
  });
*/
module.exports = router;
//
