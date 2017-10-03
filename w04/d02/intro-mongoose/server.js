// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// app setup
const app = express();

// mongoose connection
mongoose.connection.openUri(process.env.DB_CONN);

var User = require('./models/user');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());

// app routes
// get all users
app.get('/users', function(req, res){
  User.find({}, function(err, allUsers){
    if (err) throw err;
    res.json({ users: allUsers })
  });
});

// create new user
app.post('/users', function(req, res){
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var dob = req.body.dob;
  var strengths = req.body.strengths;
  var vegetarian = req.body.vegetarian;

  var newUser = User({
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    strengths: strengths,
    vegetarian: vegetarian
  });

  newUser.save(function(err, user){
    res.send(`user created: ${user}`)
  });
});

// get one user
app.get('/users/:id', function(req, res){
  var userId = req.params.id;
  User.findOne({_id: userId}, function(err, foundUser){
    res.json(foundUser)
  })
});

// update one user
app.put('/users/:id', function(req, res){
  var userId = req.params.id;
  var updatedUser = {
    firstName: req.body.firstName
  }
  User.findByIdAndUpdate(userId, updatedUser, {new: true}, function(err, modifiedUser){
    res.json(modifiedUser);
  })
});

// delete one user
app.delete('/users/:id', function(req, res){
  var userId = req.params.id;
  User.findOneAndRemove({_id: userId}, function(err, deletedUser){
    res.json(deletedUser);
  });
});


// app start
app.listen(3000, function(){
  console.log('Server running on port 3000')
});
