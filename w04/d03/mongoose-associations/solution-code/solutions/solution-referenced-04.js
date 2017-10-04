var db = require("../models");

/* REFERENCED */
// 4) List all the ingredient data for a Food
db.Food.findOne({name: "Pizza"})
       .populate('ingredients')
       .exec(function(err, pizza){
           console.log(pizza.ingredients);
       });

//Alternate strategy for finding documents based on array of ids:
// http://stackoverflow.com/questions/8303900/mongodb-mongoose-findmany-find-all-documents-with-ids-listed-in-array
db.Ingredient.find(
  {
    _id: {$in: pizza.ingredients}
  },
  function(err, ingredients){
    console.log(ingredients);
  }
);
