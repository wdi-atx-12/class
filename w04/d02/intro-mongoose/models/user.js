const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  strengths: Array,
  vegetarian: Boolean
});

var User = mongoose.model('User', userSchema);

// make this available to our other files
module.exports = User;
