var db = require("../models");

/* EMBEDDED */
//3) List all the users
db.User.find({}, function(err, users){
  console.log(users);
});
