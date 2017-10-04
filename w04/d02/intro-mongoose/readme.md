<!-- 
Author: Britney Jo
Market: Austin
Date: 10/2/2017
 -->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Intro to Mongoose

### Express Review

1. File Structure:
  [Here's a link to a filled-in sheet where you can add comments if you'd like.](https://docs.google.com/a/generalassemb.ly/document/d/1Zx6x65dmyqwx1fgWKG2VedQbOls43_7gz08C6NA9ujQ/edit?usp=sharing)
  For each file or directory on the sheet, list:
  - a short summary of the purpose of the file or directory
  - whether the file or directory is most related to the client, the server, or the database

2. Use Express to configure a server's responses to various HTTP verbs on various routes.

**RESTful Routing Preview**

Let's look at _some_ routes for a users **resource**.  

| HTTP Verb | Route       | RESTful description | Purpose |
| :-------- | ----------- | ------------------- | --------------------|
| GET       | /users     | usersIndex         | Listing all users. |
| GET       | /users/:id | usersShow          | Details of one user. |
| POST      | /users     | usersCreate        | Create a new user. |
| PUT/PATCH  | /users/:id     | usersUpdate         | Update one user. |
| DELETE       | /users/:id | usersDestroy          | Delete one user. |


**REST** is a convention for writing routes in a standard way to make it easier to work with **resources** across the web. We'll talk more about this, as it's an important theme in modern API design.


3. Access data that comes in on a request from the client-side (`req.query`, `req.params`, `req.body`)


### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

We want user data that lasts (or "persists") even when we make changes to the code on our servers! Databases will give us more power to store persistent data even when servers restart.

There are *many* kinds of databases that are optimized for different things.  We'll start with MongoDB. MongoDB is a widely-used noSQL database, and using it will help you understand how many databases work.

We'll also take advantage of Mongoose, a library that makes it easier to use MongoDB with express projects.


### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- Describe the relationship between schemas and models in Mongoose.
- Create Mongoose model instances.
- Using Mongoose, integrate a MongoDB database with an Express project.


### Middleware and `body-parser`

Middleware allows us to intercept the request and response before they're processed by their actual route handler.

POST requests don't use query parameters like GET requests do.  Instead, they submit data in the body of the request.  This looks similar on the client side (the data can still be sent as `data` in jQuery's `ajax` method).

On the server side, we'll use middleware called **body-parser** to help us parse and make use of data from the body of a request.


#### Setting Up `body-parser`

To add the `body-parser` middleware to your app:  

1. Install the `body-parser` module for the project:

  ```bash
  npm install body-parser
  ```

2. Require `body-parser` in your server file:

  ```js
  var bodyParser = require('body-parser');
  ```

3. Include the middleware in the app with `app.use`. (The url encoding is configuration for HTML forms.)

  ```js
  // for html form use
  app.use(bodyParser.urlencoded({ extended: false }));
  // for json parsing
  app.use(bodyParser.json());
  ```

#### Using `body-parser`

In any routes receiving `POST`ed data, access that data using `request.body`.

```js
app.post('/cities', function citiesCreate(request, response) {
  var name = request.body.name;
  var desc = request.body.description;
  var newCity = { name: name, description: desc };
  // if we have a cities array in our app (pre-database):
  cities.push(newCity);
  response.json(cities);
});
```

> Note: for most of our Express apps, we'll include `body-parser` as part of the _boilerplate_ of the app.


## MongoDB versus Mongoose

`MongoDB` is a no-SQL database. It is responsible for storing data in containers and making sure that the data is safe and organized. MongoDB stores data in BSON, "a binary JSON format", and it has a JavaScript API. We'll see SQL databases later that store data in a format more like an Excel spreadsheet.

`Mongoose` is a library or "wrapper" that allows us to encapsulate and model our data in our applications. It gives us access to a bunch of helpers, functions, queries, and convenience methods for working with MongoDB records to simply and easily preform CRUD actions - kind of like jQuery's convenience methods for manipulating the DOM. Generally we will not be interacting _directly_ with MongoDB, instead we'll be working through `mongoose`.

> CRUD functionality is something that is necessary in almost most every application, as we still have to create, read, update, and delete data.

## Schemas and Models

Mongoose presents us with two key concepts for how we create and store data in our MongoDB database.

**[Schema](http://mongoosejs.com/docs/guide.html)**: A Schema is a diagram or blueprint for what every object in the noSQL database will contain. It does not include any methods, just placeholders for what data you will eventually store. Here's an example of a simple Address Book mongoose schema:

```js
var ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    phoneNumber: Number,
    email: String,
    professionalContact: Boolean
});
```

With the above Schema, we can expect that all of our Address Book entries would have a first name, last name, address, and email address in the form of Strings. We can count on the phoneNumber to always be accepted, stored, and returned as a number. Lastly, the boolean value of Professional Contact will always be a true or false. A Schema has no functionality. It simply defines the shape of the data that we will expect when we work with contacts.

**[Model](http://mongoosejs.com/docs/models.html)**: A mongoose model is compiled from a Schema. It takes in the structure and shape of a Schema and adds the capacity to perform actions such as reading, saving, updating, etc. The Schema is just an inert mould to make sure that the models will hold the data consistently. A model is actually capable of creating new entries in a database and retrieving data from the database. Here's how you'd make a Contact model out of our Contact Schema:

```js
var Contact = mongoose.model('Contact', ContactSchema);
```

![image](https://i.chzbgr.com/full/7986468352/hE55E1B66/)

Factory metaphor: Imagine a factory that has a mold for making rubber ducks. The mold would be the Schema. The machine that is capable of putting the different colored plastic into the mold, pressing it, and delivering a new toy to the world would be the model. The toy itself would be the data that would now be stored in your database.

![image](https://cloud.githubusercontent.com/assets/6520345/18133637/3e2d48e0-6f50-11e6-80c7-0336334d8c91.png)


## MongoDB & Mongoose setup

### MongoLab

Generally for development we would create a local MongoDB database to use, but in preparation for the upcoming group project, let's set up an account on MongoLab and use a remote cloud database since we'll be deploying our apps to either AWS or Heroku.

Either log in or set up an account on [MongoLab](https://mongolab.com) if you haven't done so already.

#### 1. Create the database

  1. On your dashboard, click the button **Create new** on the right hand side to create a new database.
  2. Select the free **Sandbox** option
  3. Enter a name for your new database, for our purposes let's use something like **ga_express**
  4. Click the button **Create new MongoDB deployment** to create the database

#### 2. Create a database user
  Now that we have the database, let's create a new database user and get the connection string we'll need to access the database from our Express application.

  1. On the dashboard, click into the database you just created
  2. Click the **Users** tab
  3. Click the **Add database user** button
  4. Enter a new username and password. Take note of the values you used. (Don't use `@` in your password - it will break when we use the connection string.)

#### 3. Create the database connection string
  At the top, you should now see under "**To connect using a driver via the standard URI**" the connection string to use to access the new database remotely.

  1. Replace `<dbuser>` with the username you created
  2. Replace `<dbpassword>` with the password you chose above

  For example, your database connection string might look something similar to this:

  ```
  # Format: mongodb://<dbuser>:<dbpassword>@<host>:<port>/<database>
  mongodb://test_ga:Superfakepassword@ds037824.mongolab.com:37824/ga_express
  ```

#### 4. Save the database connection string using [dotenv](https://www.npmjs.com/package/dotenv)
  Now, we could hardcode this connection string into our code, but that means anyone with access to the repository instantly knows our database connection details and could do some really malicious things. Let's instead save it to our environment variables.

  ```bash
  $ npm install dotenv
  ```

  Require the module in server.js

  ```js
  require('dotenv').config()
  ```
  Create a `.env` file in the root directory of your project.

  ```
  # Replace the database connection string inside the quotes with the one you created above
  DB_CONN_GA=mongodb://test_ga:Superfakepassword@ds037824.mongolab.com:37824/ga_express
  ```

  > We strongly recommend against committing your `.env` file to version control. Add this to a `.gitignore` file if you want to be sure it doesn't get added.

### Mongoose 

1. To get started using mongoose in a project, we have to install it to add it to a project's `package.json`:

  ```bash
  npm install mongoose
  ```

2. Next we need to `require` Mongoose in our project and `connect` to the MongoDB service (it could be local or hosted). We can do this in `server.js`, or separate the code a little more by using a `models` directory and connecting everything in `models/index.js`.

  ```js
    // Mongoose connection
    const mongoose = require('mongoose');
    mongoose.connect(process.env.DB_CONN_GA);
    // use native JS promise library instead of Mongoose's deprecated one
    mongoose.Promise = global.Promise;
  ```


## Set Up Express App

```
$ touch server.js
$ npm init
$ npm install express
$ npm install body-parser
$ npm install ejs 
```

Configure server.js file: 

```js
// dependencies
var express = require('express'),
    bodyParser = require('body-parser')

// app set up
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// app routes


// app start
app.listen(3000, function() {
  console.log('Server running on port 3000');
});
```

## Set up Environment Variables 

- Create .gitignore in the root of the website
- Add .env and node_modules to .gitignore
- Create .env file and put our database connection string in

```
# .env
# Note that this is an example value, yours will be different
GA_DB_CONN=mongodb://test_ga:Superfakepassword@ds037824.mongolab.com:37824/ga_express
```

## Install Mongoose

Install the Mongoose package through NPM

```
# In the root of the project directory
$ npm install mongoose
$ npm install dotenv
```

We also need to include Mongoose in our server.js file in Express now.

```js
require('dotenv').config({ silent: true });

// Mongoose connection
var mongoose = require('mongoose');
mongoose.connect(process.env.GA_DB_CONN);
```

## Define the Model

We must build a Mongoose model before we can use any CRUD operations. Our Mongoose schema is what we'll use to define our document attributes. Think about it like this: a document is the equivalent of a record/row in a relational database - only here, our attributes (or columns) are flexible.

Let's create our models directory in the root of our project:

```
$ mkdir models
$ touch models/user.js
$ touch models/index.js
```

Now add the Mongoose schema for our user model:

```js
// /models/user.js
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  vegetarian: Boolean,
  age: Number
});

var User = mongoose.model('User', userSchema);

// Make this available to our other files
module.exports = User;
```

#### Database IDs and data types

Most databases also require that we specify the data type for each attribute.  In mongoose we can use data types from JavaScript, such as String, Number, and Array. Here's a list of all the [available data-types](http://mongoosejs.com/docs/schematypes.html) in mongoose.

```js
// models/person.js
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var personSchema = new Schema({
    firstName: String,
    lastName: String,
    height: Number,
    superPower: String,
    weakness: String,
    isExcited: Boolean
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
```
Once the model object is exported from its individual file, you'll want to `require` it to use it in another file.

Here's an example of how we could require the model directly into a server file:

```js
  // server.js
  var Person = require('./models/person');
  // now Person stores the Person model from the other file!
```
Here's a slightly more complex example using the structure with a `models/index.js` file to group together all the models:  

```js
  // models/index.js
  var PersonModel = require('./models/person');
  module.exports = {
    Person: PersonModel
  }
  // or
  // module.exports.Person = PersonModel;
```

... and in `server.js`:  

```js
  // server.js
  var db = require(`./models`); // grab the export object from models/index.js
  // now db.Person stores the Person model from the models/person.js file
```

## CRUD Operations with Mongoose

Until now, when we wanted to access or manipulate stored data on our server, we worked with an array. We were sending around the whole array, finding single objects in an array, adding objects to an array, and deleting elements from an array.

Luckily, Mongoose provides methods to access the database data which will help us accomplish these tasks.

Plan out routes:

```js
// get all users
app.get('/users', function show(req, res) {

});

// create new user
app.post('/users', function create(req, res) {

});

// get one user
app.get('/users/:id', function show(req, res) {

});

// update one user
app.put('/users/:id', function update(req, res) {

});

// delete one user
app.delete('/users/:id', function destroy(req, res) {

});
```

## Read

We have various methods available to access the data in our Mongo database. Aside from the [query builder](http://mongoosejs.com/docs/queries.html), you have:

* `.findById()`
* `.findOne()`
* `.find()`

#### Get all users: `.find()`

```js
// get all users
app.get('/users', function show(req, res) {
  // find all users in db
    User.find({}, function(err, allUsers) {
        res.json({ users: allUsers });
    });
});
```
### Create

We've seen the `new` keyword before! It creates new instances of an object. We use it here to create new instances of our `User` model. We then call `.save()` to store the new todo in our database.

Let's use [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) to send data as JSON instead of rendering a form in a view for right now. 

We will be utilizing body-parser but for JSON this time so configure in server.js : `app.use(bodyParser.json());`

```js
app.post('/users', function create(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var dob = req.body.dob;
  var strengths = req.body.strengths;
  var vegetarian = req.body.vegetarian;

  var newUser = User({
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      strengths: strengths,
      vegetarian: vegetarian
  });

  // Save the user
  newUser.save(function(err, user) {
      if (err) console.log(err);
      res.send(`User created: ${user}`);
  });
});
```

#### Get one user: `.findOne()`

``` javascript
// get one user
app.get('/users/:id', function(req, res) {
    // get todo id from url params (`req.params`)
    var userId = req.params.id;

    // find user in db by id
    User.findOne({ _id: userId }, function(err, foundUser) {
       	if(err){return console.log(err)}
        res.json(foundUser);
    });
});
```

### Update

For update, you can do it in one of two ways:

* `.findByIdAndUpdate()`
* `.findOneAndUpdate()`

```js
// update todo
router.put('users/:id', function(req, res) {
  // get user id from url params (`req.params`)
  var userId = req.params.id;

    // create an updateUser object from req.body
	var updateUser = {
	  firstName: req.body.firstName
    }

    User.findOneAndUpdate({ _id: userId }, updateUser, { new: true}, function(err, updatedUser){
      if(err){return console.log(err)}
	     res.json(updatedUser);
    });
});
```

### Delete

Mongoose gives you a couple of methods to delete documents:

* `.findByIdAndRemove()`
* `.findOneAndRemove()`

```js
/// delete user
app.delete('/users/:id', function(req, res) {
    // get user id from url params (`req.params`)
    var userId = req.params.id;

    // find user in db by id and remove
    User.findOneAndRemove({ _id: userId }, function(err, deletedUser) {
        res.json(deletedUser);
    });
});

// Find a document by the unique _id field
User.findByIdAndRemove('533f141070d7654f0c000008', function(err) {
  if (err) console.log(err);
  console.log('User deleted!');
});
```
> Note: Another way to remove the document is by finding the document first (using `.findOne()` or  `.findById()`) and calling <a href="http://mongoosejs.com/docs/api.html#model_Model.remove" >`.remove()`</a>


  ## Independent Practice
  Practice the skills covered in this workshop with the [Mongoose books training](https://github.com/generalassembly-atx/mongoose-books-app). We'll be doing **Sprint 1** only today.

  ## Closing Thoughts
  - Why is Mongoose useful?
  - Compare and contrast a schema with a model.

  ## Additional Resources
  * [MongooseJS](http://mongoosejs.com/)
  * 
