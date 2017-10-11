const db = require('../models/student');

function getAllStudents(req, res){
    res.send('return all students in the db')
};

function createStudent(req, res){
    res.send('create a student')
};

function getOneStudent(req, res){
    db.Student.findOne({_id: req.params.id}, function(err, studentData){
      // HYPOTHETICAL
      var courseArray = studentData.courses
      var courseId = courseArray[0]
      db.Course.findOne({_id: courseId}, function(err, courseData){
        // TODO: print course information within the student json
      })
    })
};

function updateStudent(req, res){
    res.send('update one student')
};

function deleteStudent(req, res){
    res.send('delete one student')
};

module.exports = {
  getAllStudents: getAllStudents,
  createStudent: createStudent,
  getOneStudent: getOneStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent
}
