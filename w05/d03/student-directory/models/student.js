const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  passing: Boolean,
  courses: [String],
  dob: {
    type: Date,
    required: true
  }
});

const Student  = mongoose.model('Student', StudentSchema);

module.exports = Student
