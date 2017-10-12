# Express API Review

### What are we building today?
Let's build an Express App that allows us to CRUD students in a database. We can imagine we're building an app for General Assembly to use and keep track of students.

### What are the goals?
This is a review of Express Server Code Structure. We have gone through these steps with the Food API, Books App and the weekend lab. This afternoon, however, I want to make sure we all can explain WHY we are doing these steps - so if they change, we can understand how to pivot. If at any point you feel like you are just copying code, stop me and let's discuss.

### What is the format?
We are going to do things in 20 minute segments. Give you a chance to start on your own, then go over it together and make sure all questions have been answered. 

## 1. Set up a basic Express server

```bash
$ touch server.js
$ npm init
$ npm install express ejs mongoose body-parser dotenv
```

```js
// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// app set up
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

// configure bodyParser (for receiving data)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// app routes
app.get('/', function(req,res){
  res.send("Hi there!")
});

// app start
app.listen(3000, function() {
  console.log('Server running on port 3000');
});
```

## 2. Stub out routes with the functions in a separate file.

The only logic should be `res.send('coming soon')`.

```js
// routes/students.js

function getAllStudents(req, res){
  res.send("Show all students in database");
}

function createStudent(req, res){
  res.send("Create one student in database");
}

function getStudent(req, res){
  res.send("Find one student by their ID");
}

function deleteStudent(req, res){
  res.send("Delete one student from database");
}

function updateStudent(req, res){
  res.send("Update one student in database");
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getAllStudents: getAllStudents,
  createStudent: createStudent,
  getStudent: getStudent,
  deleteStudent: deleteStudent,
  updateStudent: updateStudent
};
```

```js
// server.js

// app routes - import route handlers from other file
const studentRoutes = require('./routes/students');
app.get('/students', studentRoutes.getAllStudents);
app.post('/students', studentRoutes.createStudent);
app.get('/students/:id', studentRoutes.getStudent);
app.delete('/students/:id', studentRoutes.deleteStudent);
app.put('/students/:id', studentRoutes.updateStudent);
```

## 3. Write out Schema and Model for `Student`

```js
// student.js

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

const Student = mongoose.model('Student', StudentSchema);

module.exports = {
  Student: Student
}
```

## 4. Connect to the database - make sure to set up `.env` and `.gitignore` files

```js
// models/index.js

const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)
const studentModels = require('./students');

// connect to Mongo DB
mongoose.connection.openUri(process.env.DB_CONN, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  // TODO: add references to all models here
  Student: studentModels.Student
};
```

## 5. Write the code for the GET all collection method

```js
const db = require('../models');

function getAllStudents(req, res) {
  db.Student.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving students from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
```

## 6. Write the code for the POST new item method
```js
function createStudent(req, res) {
  const newStudent = db.Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    passing: req.body.passing,
    courses: req.body.courses,
    dob: req.body.dob
  });

  newStudent.save(function(err, data) {
    if (err) {
      console.log('Error saving student to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}
```
## 7. Write the code for the GET one item in collection method
```js
function getStudent(req, res){
  db.Student.findOne({_id: req.params.id }, function(err, studentData) {
  res.json(studentData);
});
}
```

## 8. Write the code to DELETE one item from collection
```js
function deleteStudent(req, res) {
    // get user id from url params (`req.params`)
    var studentId = req.params.id;

    // find user in db by id and remove
    db.Student.findOneAndRemove({ _id: studentId }, function(err, deletedStudent) {
        res.json(deletedStudent);
    });
});
```

## 9. Write the code to PUT or update one item
```js
function updateStudent(req, res) {
  // get user id from url params (`req.params`)
  var studentId = req.params.id;

    // create an updateUser object from req.body
	var updateStudent = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    passing: req.body.passing,
    courses: req.body.courses,
    dob: req.body.dob
  }

  db.Student.findOneAndUpdate({ _id: studentId }, updateStudent, { new: true}, function(err, updatedStudent){
      if(err){return console.log(err)}
	     res.json(updatedStudent);
    });
});
```
