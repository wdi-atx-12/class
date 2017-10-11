const db = require('../models/student');

function getAllStudents(req, res){
  db.Student.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving student items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
};


function createStudent(req, res) {
  const newStudent = db.Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    outcomesStatus: req.body.outcomesStatus
  });

  newStudent.save(function(err, data) {
    if (err) {
      console.log('Error saving student item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

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


function updateStudent(req, res) {
  // get user id from url params (`req.params`)
  var studentId = req.params.id;

    // create an updateUser object from req.body
	var updateStudent = {
	  firstName: req.body.firstName
    // fill out rest of body
    }

    db.Student.findOneAndUpdate({ _id: studentId }, updateUser, { new: true}, function(err, updatedUser){
      if(err){return console.log(err)}
	     res.json(updatedUser);
    });
});


function deleteStudent(req, res) {
    // get user id from url params (`req.params`)
    var studentId = req.params.id;

    // find user in db by id and remove
    db.Student.findOneAndRemove({ _id: studentId }, function(err, deletedUser) {
        res.json(deletedUser);
    });
});

module.exports = {
  getAllStudents: getAllStudents,
  createStudent: createStudent,
  getOneStudent: getOneStudent,
  updateStudent: updateStudent,
  deleteStudent: deleteStudent
}
