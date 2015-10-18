var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
// var PofI = mongoose.model('PofI');
var User = mongoose.model('User');

router.route('/user')

  .post(function(req, res){
    var body = req.body;
    var user = new User();
    user.username = body.username;
    user.email = body.email;
    user.pwdHash = body.pwd;
    user.isMod = false;
    user.postList = [];

    user.save(function(err, product){
      if( err ) return console.error("error:\n" + JSON.stringify(err));

      // console.log("Success!\n" + JSON.stringify(product));
    });
    //console.log("Testing logging");
    return res.send({'message' : { "message" : "TODO: post user", "_id" : user._id }});
  })
  .get(function(req, res){
    var query = {id: req.query.id};
    console.log(query);
    if( /^[0-9a-fA-F]{24}$/.test(query.id) ){
      User.find(query,
        function(err, product){
          if(err) {
            return res.status(500).send(err);
          }
          return res.send({'message' : "Success", 'searchParams' : req.query, 'result' : product});
        }
      );
    }
    else{
      return res.status(500).send({'message':'id is not a 24 character, alphanumeric string.', 'id': req.query.id, 'idLength': req.query.id.length});
    }
  })
  .delete(function(req, res){
    var query = {_id: req.body.id};
    User.remove(query, function(err, user){
        if(err){
          return res.send(500, err);
        }
        return res.send({'message' : "Success", 'searchParams' : query, 'result' : user});
    });
  });

/**
router.route('/user/saved/')
  .post(function(req, res){

  })
  .get()
  .delete();
*/

module.exports = router;
