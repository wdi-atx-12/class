var db = require("../models");

/* REFERENCED */
// 1) Create several ingredients
var sauce = new db.Ingredient({title: "Tomato Sauce", origin: "Napoli"});
sauce.save();
var cheese = new db.Ingredient({title: "Parmigiano Regianno", origin: "Parma"});
cheese.save();
var sausage = new db.Ingredient({title: "Sweet Italian sausage", origion: "???"});
sausage.save();
