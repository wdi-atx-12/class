var db = require("../models");

/* EMBEDDED */
//1) Create a user
var rob = new db.User({name: "boberto"});
rob.save();
