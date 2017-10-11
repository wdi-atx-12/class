function getAllStudents(req, res){
    res.send('return all students in the db')
};

function createStudent(req, res){
    res.send('create a student')
};

function getOneStudent(req, res){
    res.send('return one student by their id')
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
