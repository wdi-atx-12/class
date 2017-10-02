// requirements
const express = require('express');
const app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

// routes
app.get('/', function(req, res){
  res.redirect('/99');
})

app.get('/:bottles', function(req,res){
  var bottles = req.params.bottles || 99;
  var next = bottles - 1;
  res.render('index', { numOfBottles: bottles, nextLink: next});
  // if (bottles !== '0'){
  //   res.send(bottles + " Bottles of Beer on the Wall <a href='/" + next + "'>Take One Down, Pass it Around</a>")
  // } else {
  //   res.send(bottles + " Bottles of Beer on the Wall <a href='/'>Restart</a>")
  // }
})

// app.get('/', function(request, response){
//   response.send("Hello World!");
// });
//
// app.get('/hello/:name', function(req, res){
//   res.send("Hello " + req.params.name);
// });
//
// app.get('/about', function(req, res){
//   res.send("About Me");
// });
//
// app.get('/color/:color', function(request, response){
//   response.send("You chose the color " + request.params.color)
// });
//
// app.get('/thank', function(req, res){
//   console.log(req.query);
//   res.send("Thank you " + req.query.name)
// });
//
// // /multiply?x=2&y=3
// app.get('/multiply', function(req, res){
//   var x = req.query.x
//   var y =req.query.y
//   var total = parseInt(x) * parseInt(y);
//   res.send(total + " is the result");
// })


// server start
app.listen(3000, function(){
  console.log("HTTP server listening on 3000");
});
