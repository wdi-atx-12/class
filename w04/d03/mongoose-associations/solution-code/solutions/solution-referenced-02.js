var db = require("../models");

/* REFERENCED */
// 2) Create a food that references those ingredients
var pizza = new db.Food({name: "Pizza"});
pizza.ingredients.push(sauce._id, cheese._id);
pizza.save();
