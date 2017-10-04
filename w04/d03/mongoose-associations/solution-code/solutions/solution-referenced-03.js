var db = require("../models");

/* REFERENCED */
// 3) List all the Foods
db.Food.find({}, function(err, foods){
  console.log(foods);
});
