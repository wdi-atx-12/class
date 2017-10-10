<!--
Creator: DC Team
Last Edited by: Brianna
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Local Auth with Express and Bcrypt

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Controlling access to data is a key part of many modern web applications. Rails does a lot of the work of authentication and authorization for us behind the scenes.  Today we'll see that Rails's "local" (in-app) authentication strategy generalizes to other languages and frameworks. We'll create a "hand-made" version of authentication in an Express app.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

* Explain key steps of a framework-independent local authentication strategy.
* Authenticate users in Express.
* Restrict access to data based on whether a user is authenticated.
* Describe alternate authentication or authorization strategies.

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

* Implement client-side forms and AJAX calls.
* Create an express application with RESTful routes.
* Set up schemas and models with Mongoose.
* CRUD data in a MongoDB database through Mongoose.

### Local Authentication

Modern web developers can choose from a variety of strategies to authenticate users. The tactic of checking a username and password combination within your own app is called "local" authentication. Password-based local authentication is one of the oldest widely-used authentication schemes for the web. It can be more or less secure depending on how you store and send the usernames and passwords.

Password-based authentication is the heart of what we saw with Ruby on Rails, and it's what we'll build today. We'll also see how to create Express middleware to easily manage authorization in an Express app.

> Recall:
>  * _**Authentication** verifies that a user is who they say they are. When a user logs into our site, we *authenticate* them by checking that the password they typed in matches the password we have stored for them._
>  * _**Authorization** is the process of determining whether or not a user has *permission* to perform certain actions on our site. For example, a user may *be authorized* to view their profile page and edit their own blog posts, but not to edit another user's blog posts._

### Why do we hash (and salt) passwords?

In order to authenticate a user, we need to store their password in our database. This allows us to check that the user typed in the correct password when logging into our site.

The downside is that if anyone ever got access to our database, they would also have access to all of our users' login information. We use a <a href="https://crackstation.net/hashing-security.htm#normalhashing" target="_blank">hashing algorithm</a> to avoid storing plain-text passwords in the database. We also use a <a href="https://crackstation.net/hashing-security.htm#salt" target="_blank">salt</a> to randomize the hashing algorithm, providing extra security against potential attacks.

<img src="https://blog.engineyard.com/images/blog-images/password-security/hash-anatomy.png" width="60%">

### Implementing Authentication

To give users the ability to sign up and log in to our site, we'll need:

* **Express:** for building our application and handling requests
* **Middleware:**
  * `body-parser`: for handling incoming form data
  * `express-session`: for setting sessions and cookies
* **Mongoose Models:** for CRUD-ing users and setting up authentication methods
* <a href="https://github.com/ncb000gt/node.bcrypt.js" target="_blank">**bcrypt:**</a> for hashing users' passwords

#### Here's the plan

* Signup
  * Make a signup form
  * Submit email and password to a server route
  * Save a new user with a secure password

* Login
  * Make a login form
  * Submit email and password to a server route
  * Check that user's email exists in database
  * Authenticate that the password is correct for that user
  * Save that user's data in a session on our server

* Logout
  * Delete any saved user data in our session

### 1. Create a new Node/Express project.

1. In the terminal, initialize a new Node project, and install `express` and `body-parser`.

  ```
  $ mkdir simple-login
  $ cd simple-login
  $ touch server.js
  $ npm init
  $ npm install --save express body-parser mongoose ejs
  ```

2. Open your project in your text editor, and set up your server in `server.js` with the following code snippet:

  ```js
  // server.js

  // require express framework and additional modules
  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

  // middleware
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
  mongoose.connect('mongodb://localhost/simple-login');


  // signup route with placeholder response
  app.get('/signup', function (req, res) {
    res.send('signup coming soon');
  });

  // login route with placeholder response
  app.get('/login', function (req, res) {
    res.send('login coming soon');
  });

  // listen on port 3000
  app.listen(3000, function () {
    console.log('server started on locahost:3000');
  });
  ```

3. In the terminal, run `nodemon` and make sure your server starts without any errors. If you get an error in your Terminal, read the line number and error message. Most likely, you're trying to use an undefined variable or a module that's not installed. Visit `/login` and `/signup` in your browser to make GET requests to those paths. Verify that those routes are sending back the messages you expect.

  ```
  $ nodemon
  ```

  **Note:** Keep `nodemon` running the entire time you're developing your application. When you need to execute other terminal commands, press `command + T` to open a new terminal tab.

### 2. Set up a signup view and route

1. In the terminal, make a `views` directory, a view called `signup.ejs`, and a view called `login.ejs`.

  ```
  $ mkdir views
  $ touch views/signup.ejs
  $ touch views/login.ejs
  ```

2. Add this boilerplate to `signup.ejs`.  Spend a minute looking over it. What is the id of the signup form? What are the `name`s of its input fields?  What external CSS and/or JS are linked to the file?  Find any places where ejs is filling in template data.

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Sign Up</h1>
          <hr>
          <form id="signup-form">
            <div class="form-group">
              <input type="text" name="email" class="form-control" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="submit" value="Sign Up" class="submit btn btn-primary">
            </div>
            <a href="/login">Login</a>
          </form>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

3. Now that the signup view is ready, it's time for a signup route. In `server.js`, set up `GET /signup` to render the `signup` view.

  ```js
  // server.js

  // signup route (renders signup view)
  app.get('/signup', function (req, res) {
    res.render('signup');
  });
  ```

4. Test that you can go to `localhost:3000/signup` and see your template rendered on the page.

### 3. Submit your signup form to the server

1. We've already told Express to serve a public folder with `app.use(express.static('/public'))`, so make a `public` folder and inside make an `app.js` file inside a `scripts` subfolder. Then link it with a `<script>` tag in your `signup.ejs`. Log something to the console to make sure they're connected.

2. Set a submit listener on your signup form and use `$.post()` or `$.ajax()` to post the form data to `POST /signup`. (Consider using the `serialize()` method to quickly make a data string to send to the server. The serialized string will represent a data object: its keys will match the "name" attributes of your html form's inputs, and the each value in the object will be the value of the input field.)  Since the form is a DOM element, wrap your request in `$(document).ready(function(){ ... });`

  ```js

  // app.js

  // part of your code for this step:
    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/users', signupData, function(response){
      console.log(response);
    })
  ```

3. In your server, create a `post` route to `/signup` that will handle signing up the user.

  ```js
  // server.js

  // A create user route - creates a new user with a secure password
  app.post('/users', function (req, res) {
    console.log('request body: ', req.body);
    res.json("it worked!");
  });
  ```

4. Try to submit the signup form. You should see the form's data logged in your server's and browser's console.

### 4. Create a User model and more secure signup method with `bycrpt`

1. In the terminal, create a new directory for `models` and create a file for your `User` model.

  ```
  $ mkdir models
  $ touch models/user.js
  ```

2. Also in the terminal, install `bcrypt`. Use `--save` to put it into your package.json's dependencies at the same time.

  ```
  $ npm install --save bcrypt
  ```

3. In your text editor, open `user.js` and require the dependencies your user schema and model will need, `mongoose` and `bcrypt`.

  ```js
  // user.js

  // require dependencies
  var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

  // set up shorthand method name
  var Schema = mongoose.Schema;
  ```

4. Also in `user.js`, write your `UserSchema`. For our simple example, users should have the properties **email** and **passwordDigest**.

  ```js
  // user.js

  // define user schema
  var UserSchema = new Schema({
    email: String,
    passwordDigest: String
  });
  ```

5. Continuing in `user.js`, define a new, more secure create method for our `User` model that stores a hashed and salted version of the user's password instead of their exact password.

  **Note:** We use `UserSchema.statics` to define <a href="http://mongoosejs.com/docs/guide#statics" target="_blank">static methods</a> for our schema, ones that we'll call from the model (like `User.createSecure`).  The other option, `UserSchema.methods`, defines <a href="http://mongoosejs.com/docs/guide#methods" target="_blank">instance methods</a> for our schema, which we could call from an individual instance of a user (like `princessPeach.checkPassword`). Static methods can hold any functionality related to the collection, while instance methods define functionality related to individual documents in the collection. You can think of instance methods like prototype methods in OOP!

```javascript
// create a new user with secure (hashed) password
UserSchema.statics.createSecure = function (email, password, callback) {
  // `this` references our user model, since this function will be called from the model itself
  // store it in variable `UserModel` because `this` changes context in nested callbacks

  var UserModel = this;

  // hash password user enters at sign up
  bcrypt.genSalt(function (err, salt) {
  console.log('salt: ', salt);  // changes every time
    bcrypt.hash(password, salt, function (err, hash) {

      // create the new user (save to db) with hashed password
      UserModel.create({
        email: email,
        passwordDigest: hash
      }, callback);
    });
  });
};
```

  **NOTE:** `bcrypt`'s `genSalt` or `genSaltSync` function provides the salt we'll use to randomize the hashing algorithm. The `Sync` at the end of the second method name says we want it to run synchronously. It will complete before the code moves on, so we don't need to give it a callback to say what to do when it finishes.

6. Continuing in `user.js`, define a `User` model using your `UserSchema` and export the model (so we can require it in other parts of our application).

  ```js
  // user.js

  // define user model
  var User = mongoose.model('User', UserSchema);

  // export user model
  module.exports = User;
  ```

  **Note:** Make sure all your static and instance methods come before defining and exporting the `User` model. Setting and exporting the `User` model should be the last pieces of logic in `user.js`, since they both rely on the version of the schema that exists when they're called. If you forget,  authentication methods might not get added to the model and exported.

7. Don't forget to require your `User` model in `server.js`.

  ```js
  // server.js
      var User = require('./models/user');
  ```

8. In your `POST /users` route, use your new `createSecure` model method to create a user in your database with a secure password.

  ```js
  // Sign up route - creates a new user with a secure password
  app.post('/users', function (req, res) {
    // use the email and password to authenticate here
    db.User.createSecure(req.body.email, req.body.password, function (err, user) {
      res.json(user);
    });
  });
  ```

9. Submit your signup form. Did your route return the `user` object? Is the version it returned from your database? How can you check?

### 5. Logging In

1. Flesh out your `login` view template (boilerplate below).

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="scripts/app.js"></script>

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Log In</h1>
          <hr>

          <form id="login-form">
            <div class="form-group">
              <input type="text" name="email" class="form-control" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="submit" value="Log In" class="login btn btn-primary">
            </div>
            <a href="/signup">Sign Up</a>
          </form>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

2. Create a `GET /login` route on your server that renders the login view.

3. Add an "on submit" listener in your `scripts.js` file for the login form. When the login form is submitted, use `$.ajax` or `$.post` to send a request to a `/sessions` path with the user's login data.  As with signup, you can use `serialize()` to package and format the login data to send to the server.  We aren't storing our session data in the database, but we're using this route path because the mechanics of logging in will require us to update the session.

4. Set up a `POST /sessions` route in the server. Start by making it console log the login form data and send a message back as the response. To log a user in, we'll need to do more than that:

  * look the user up in the database with the email from the form
  * if a user is found, compare that user's passwordDigest with the password from the form
  * if the passwords match, save the user's data in our session
  * redirect somewhere - they should see site content, not json, as a response

  We'll split these tasks between the main server code and the user schema.

5. Add a method to the user schema that checks whether a plain text password (like from a form) "matches" the passwordDigest stored in a specific user's database document. It will need to use bcrypt to `compare` or `compareSync` (synchronously compare) the two forms of the password.   We'll call this method once we have a specific user from the database, so put it on `UserSchema.methods`.

  ```js
  // models/user.js

  // compare password user enters with hashed password (`passwordDigest`)
  UserSchema.methods.checkPassword = function (password) {
    // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
    return bcrypt.compareSync(password, this.passwordDigest);
  };

  ```

6. Add another method that does full authentication based on an email and a password. It will also take a callback, so when our server uses the `authenticate` method, the server code can specifiy what should happen next. This method will be called from the `User` model, since it will be looking up a user instance, not starting with one. It has to be added on `UserSchema.statics`.

  ```js
  // models/user.js

  // authenticate user (when user logs in)
  UserSchema.statics.authenticate = function (email, password, callback) {
    // find user by email entered at log in
    // remember `this` refers to the User for methods defined on UserSchema.statics
    this.findOne({email: email}, function (err, foundUser) {
      console.log(foundUser);

      // throw error if can't find user
      if (!foundUser) {
        console.log('No user with email ' + email);
        callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
      // if we found a user, check if password is correct
      } else if (foundUser.checkPassword(password)) {
        callback(null, foundUser);
      } else {
        callback("Error: incorrect password", null);
      }
    });
  };
  ```

7. In `server.js`, update your `POST /sessions` route to authenticate a user.

  ```js
  // server.js

  // authenticate the user
  app.post('/sessions', function (req, res) {
    // call authenticate function to check if password user entered is correct
    db.User.authenticate(req.body.email, req.body.password, function (err, user) {
      res.json(user);
    });
  });
  ```

8. Try to login with the credentials of the first user you created. Do you get the response you expected?

### 6. Set up sessions and cookies to keep track of logged-in users.

1. In the Terminal, install `express-session`.

  ```
  $ npm install --save express-session
  ```

2. In `server.js`, require `express-session` and set the session options. <a href="https://github.com/expressjs/session#options" target="_blank">Read more about the session options.</a>

  ```js
  // server.js
  var session = require('express-session');

  // middleware (new addition)
  // set session options
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretCookie',
    cookie: { maxAge: 30 * 60 * 1000 } // 30 minute cookie lifespan (in milliseconds)
  }));
  ```

3. Now that the session is defined, let's start keeping data in a session when someone signs up or logs in by setting `req.session.userId` to the user's id. This would go just before the `res` line of your `POST /sessions` route.

  ```js
      req.session.userId = user._id;
  ```

4. After authenticating a user, and loggin them in, we don't want to just send back JSON or a message. They should see site content.  Create a simple profile view.  You could call the view template file `profile.ejs` or `user-show.ejs`. There's boilerplate below. Take a minute to look it over - notice where it's using ejs templating.

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap css -->
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="scripts.js"></script>

    <title>Simple Login</title>
  </head>
  <body>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>Profile</h1>
          <hr>
          <h2>Welcome! You're logged in as <%= user.email %>.</h2>
        </div>
      </div>
    </div>
  </body>
  </html>
  ```

5. Create a route to render this profile view at `GET` `/profile`.

  ```js
  // server.js

  // show user profile page
  app.get('/profile', function (req, res) {
    // find the user currently logged in
    db.User.findOne({_id: req.session.userId}, function (err, currentUser) {
      res.render('profile.ejs', {user: currentUser})
    });
  });
  ```

6. Modify the `POST /sessions` route to redirect to the user's profile page using `res.redirect('/profile');` instead of its current response.

7. Test the effect of your modification in the browser. What do you see on the page and in the console?

8. It turns out AJAX doesn't play well with redirects. They're changing your browser in two fundamentally different ways. The AJAX requests we've been making in our client-side JavaScript were helpful for debugging as we set everything up, but now that we want to redirect, we need to move back to non-AJAX requests.

9. Update your `login.ejs` so that the form has a `method` and `action`. Remove the AJAX call for the login form from your scripts.js.  Test your login form again.

10. We don't want new users to get a JSON or message response when they sign up, either. In fact, we probably want to log them in automatically. Modify the `POST /users` route to save a new user's id in the session and then redirect to the profile. Also modify your signup form to use `method` and `action`.

### 7. Enable logout

1. On the profile view, add a logout link.

  ```html
  <!-- profile.ejs -->
  <h1>Profile</h1>
  <hr>
  <h2>Welcome! You're logged in as <%= user.email %>.</h2>
  <a id="logout" href="/logout" class="btn btn-default">Log Out</a>
  ```

2. Make a `GET /logout` route on your server that logs out a user by setting the  `req.session.userId` to `null`, then redirects to the login page.

  ```js

  //server.js
  app.get('/logout', function (req, res) {
    // remove the session user id
    req.session.userId = null;
    // redirect to login (for now)
    res.redirect('/login');
  });
  ```

### 8. Error Handling

Things don't always go right, and we need our apps to respond nicely when they don't. Here are some strategies.

1. Upon login, if a password is not correct, respond with an error message and display it on the client. Remember to use the bootstrap `.alert` and `.alert-warning` classes.
2. Upon login, if a user is not found, respond with an error message and display it on the client.
3. Upon signup, make sure passwords are at least 6 characters long. Return and display an error if this is false.
4. Is there a way to refactor your client- or server-side code to generalize these two examples of error handling?

### Custom Middleware Refactor for Authorization

1. Let's refactor our lookup of the current user into some custom middleware to find the current user so we will always have it available.

  ```js
    // server.js
    // custom middleware - should go before routes
    // adds a currentUser method to the request (req) that can find the user currently logged in based on the request's `session.userId`
    app.use('/', function (req, res, next) {    
      req.currentUser = function (callback) {
        db.User.findOne({_id: req.session.userId}, function (err, user) {
          if (!user) {
            callback("No User Found", null)
          } else {
            req.user = user;
            callback(null, user);
          }
        });
      };

      next();
    });
  ```

2. Modify your logout route so that it also sets `req.user` to `null`.

3. The `req.currentUser` middleware finds the user who is currently logged in. You can use `req.currentUser` to *authorize* parts of your site.
  * Logged-in users should NOT be able to see the `/signup` or `/login` pages.
  * Users should only be able to see `/profile` when logged in.

  **Hint:** You'll need to add some logic when calling `req.currentUser` to check if a logged-in user was found. You'll want to use `res.redirect` if a user tries to perform an unauthorized action.

### Alternative Strategies

There are a lot of libraries that help implement authentication.  For Node.js, Passport is very popular. For MEAN stack, Satellizer is a really common choice. Both of these libraries also handle strategies beyond password-based local authenticaiton. These other auth strategies inlcude OAuth 1 or OAuth 2, JWT, and other token-based schemes - you've seen these on the web managing "sign in with facebook", "sign in with github", etc.

#### Alternative Strategy Example: OAuth 2

OAuth is technically a framework for authorization - allowing one application to access data from another application, on a user's behalf.

In the real world, this might correspond to me walking into a bank and telling the teller you said I could have some of your money every month. We'd hope the teller would be skeptical. Maybe they'd ask that you come into the bank yourself and authorize me to withdraw some specific amount of money on a specific schedule.  They'd probably want a copy of my id so they could verify it was me coming back to withdraw money each time.    With OAuth, if everything checked out, the bank would give me a special token or passphrase that I could use to get money now and smooth out the transaction now and for some specified amount of time.

On the web, a classic example is an application that aggregates information stored elsewhere. Say we have a user named Expo. Expo wonders: do the times I commit to github have any relationship to the times I'm most active on facebook?  If Expo wants to use a GitFace app that promises to answer that question, he might have to log into his facebook account and github account so the app can access and process his data.

Expo may not want to give GitFace his login information for both of those sites, so instead GitFace makes an arrangement with github and facebook. Let's consider facebook. When GitFace needs to access restricted data, it will link Expo to a special authorization page the app has set up with facebook.  This page is entirely controlled by facebook - and it relies on GitFace's facebook app id as well as the specific information GitFace is requesting.  Expo will enter in his information in a form on that page.

GitFace never interacts directly with  Expo's login information.  If Expo is authenticated and agrees to share the resource GitFace needs, facebook's server sends back a response that redirects Expo back to the GitFace app.  The response also includes a special code specific to the data GitFace has requested.

In the background, GitFace then sends a new request to facebook - it needs to convert Expo's permission code into a token.  In order to get the code converted, GitFace also needs to securely identify itself to facebook by telling facebook its client secret.

If the permission code and client secret check out, facbook issues a token that GitFace can use to access the materials approved by Expo. This usually has some expiration time so that the user doesn't have to re-authenticate on every step.

### Resources

- [Passport documentation](http://passportjs.org/docs)
- [Lesson & Lab: Express Auth with Passport](https://github.com/sf-wdi-31/express-passport-local-authentication/) for local authentication and twitter OAuth. Check the solution and twitter solution branches!  This lesson/lab is from WDI in DC, so their Express app structure is a little different from what you've seen before.  You'll find the routes listed inside the `config` directory.

- [Satellizer on GitHub (and documentation)](https://github.com/sahat/satellizer)
- [Lesson & Lab: MEAN Auth with Satellizer](https://github.com/sf-wdi-31/angular-auth-satellizer) This lesson/lab is from a previous SF cohort, so the app structure may be a little different than what we've seen.

- [JSON Web Tokens documentation](https://jwt.io/)
