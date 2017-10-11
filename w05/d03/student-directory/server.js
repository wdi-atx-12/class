// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// app set up
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app routes
app.get('/', function(req,res){
  res.send("Hi there!")
});

const studentRoutes = require('./routes/students');

app.get('/students', studentRoutes.getAllStudents);
app.post('/students', studentRoutes.createStudent);
app.get('/students/:id', studentRoutes.getOneStudent);
app.put('/students/:id', studentRoutes.updateStudent);
app.delete('/students/:id', studentRoutes.deleteStudent);


// app start
app.listen(3000, function(){
  console.log('Server running on port 3000')
});
