var db = require("../models");

/* EMBEDDED */
//2) Build tweets and save them as embedded data in a user
var tweet1 = new db.Tweet({body: "I wanna be a pirate!"});
var tweet2 = new db.Tweet({body: "How can you see without eyeballs?"});
rob.tweets.push(tweet1, tweet2);
rob.save();
