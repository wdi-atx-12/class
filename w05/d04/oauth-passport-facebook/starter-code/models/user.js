const mongoose = require('mongoose');

const FacebookUserInfoSchema = new mongoose.Schema({
  id: String,
  access_token: String,
  firstName: String,
  lastName: String,
  email: String,
});

const UserSchema = new mongoose.Schema({
  fb: FacebookUserInfoSchema,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
