var db = require("../models");

/* EMBEDDED */
//4) List all tweets of a specific user
db.User.findOne({name: "boberto"}, function(err, user){
  console.log(user.tweets);
});
