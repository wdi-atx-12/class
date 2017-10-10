const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: String,
  passwordHash: String
});

const User = mongoose.model('User', UserSchema);

// export
module.exports = User;
