# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Express Practice

### Base Challenges - Build an Express App

Solution in the solution branch.

#### Check Install

1. You should have Node.js and NPM installed from installfest. Run the Terminal commands `which node` and `which npm` to check that they are installed. If they are installed, you will see a file path after each command, like `/usr/local/bin/node`.

1. **Only if you do not have node and npm installed**:
  Install Node & NPM (instructions for Mac)

    1. To install Homebrew:

      ```bash
        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      ```

    2. To install Node.js: `brew install node`
    3. If you encounter issues, ask for help!

#### Initialize a Node.js Project with Express

1. Go to your class directory and `cd` into this folder. Make sure you're in the right directory (`pwd`) and then enter the Terminal command `npm init`. It asks a series of questions about your project and uses the information to create a `package.json` file for you. For now, we'll use all of the defaults except "entry point". **Type in `server.js` for your entry point**, and then you can just hit enter until `npm init` is done.  Take a look at `package.json` to see the initial information `npm init` helps you set up.

2. Add express to the local project using `npm`. Use the `save` option so that NPM automatically adds express to your dependencies in `package.json`.

  ```bash
  npm install express --save
  ```

  Notice that a new folder called `node_modules` was created. Open it up and you'll see that there is an `express` folder. `node_modules` is where the dependencies in `package.json` are downloaded to.  If you look at `package.json` again, you should see that `express` has been added as a dependency for this project.

#### Express Hello World!

1. Create a `server.js` file and add this basic hello world code:

  ```js
    // server.js
    // SERVER-SIDE JAVASCRIPT
    var express = require('express');
    var app = express();

    // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.get('/', function (req, res) {
      res.send('Hello World!');
    });

    app.listen(process.env.PORT || 3000, function () {
      console.log('Example app listening at http://localhost:3000/');
    });
  ```
2. Add a comment above each line of code saying what each line does.

  > **Hint**: Reference [the express documentation](http://expressjs.com/en/4x/api.html#app).
  > .
  > **Hint**: `process.env.PORT || 3000` means "in production use the production port, otherwise use 3000 (for development)".

3. Run `node server.js` in the Terminal. You should see `Example app listening at http://localhost:3000/` _in the Terminal_.  When we're using express, this is where our server-side console logs show up!  Also, visit `http://localhost:3000/` in your browser. You should see "Hello World!"  The browser console only shows client-side console outputs. **Every time you make a change in your server code and want it to run, you need to end the previous server and run `node server.js`**.

4. Console log the `req` (request) and the `res` (response) objects inside your server code's `app.get` method for the `/` path. (The `/` path is often called the "root" path.) Restart the server and briefly check out what the `req` and `res` are.


#### Add Some Data on the Server

1. In server.js, add some starter data  (often called "seed data") to serve when the users visit '/api/albums'.

  ```js
    // server.js
    var albums = [
      {
        title: 'Cupid Deluxe',
        artist: 'Blood Orange'
      },
      {
        title: 'M3LL155X - EP',
        artist: 'FKA twigs'
      },
      {
        title: 'Fake History',
        artist: 'letlive.'
      }
    ];
  ```

2.  To have this data be accessible, we'll need to set up a route to serve it. Add an `app.get` method for the path `/api/albums`.  Inside the new route, use `res.json(albums)` to respond with some JSON containing all the albums from our albums variable.

  > Restart your server, and you should see our albums when you use postman to request the `http://localhost:3000/api/albums` URL.  You could also try using curl: `curl -X GET http://localhost:3000/api/albums` or just your browser.

#### Request Data From the Server

1. Let's get this working with our index page now.  In your browser, open `index.html` and then open the javascript console.  You should see 'Sanity Check: JS is working!'  Try running the following AJAX request in the JavaScript console:

  ```js
  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });

   function handleSuccess(json) {
     console.log(json);
   }

   function handleError(xhr, status, errorThrown) {
     console.log('uh oh');
   }
  ```
  > Note: you must be on a page with jQuery in order to use .ajax in the browser console!  Fortunately, the included index.js does have jQuery.

  You should get something back like:
  ```
  [Object, Object, Object]
  ```
  Dig into those and see what they look like.

2. Next edit `app.js` to run the same ajax call as above and console log the data.  Remember to put your ajax call inside the handler for the document ready event: `$(document).ready(function() {})`. Consider moving the success handling function definition outside the ajax call, since it's about to get more complicated!

3. Once you have that, edit `app.js` to display this data on your `index.html` page using jQuery.  Decide how you want it to look.  **Hint:** You might also find it useful to edit `index.html`!

4. Restart your server and refresh the page. You should see a list of album titles on the page.

#### Serve our index page

At this point, `server.js` and our client-side files (`index.html`, `app.js`, and `styles.css`) are only connected by the ajax request made in `app.js`. Let's make a route to serve our `index.html`.  We're just going to serve the index on the route GET `/` for now.

1. First let's be sure we follow a good convention for file location and directory structure. This will help a lot when organizing larger projects.  Move `index.html` into a new `views` directory. (Create the directory first.)

  _A good express file tree structure_:

  ```
  ├── server.js  // your server code
  ├── package.json    // project info and dependencies; changed by npm init or npm install --save somePackage
  ├── public  // i.e. client-side
  │   ├── images  // images to serve to client
  │   ├── scripts  // or js
  │       └── app.js   // client-side javascript file
  │   └── styles // or css
  │       └── styles.css
  ├── vendor // an optional 2nd public directory that includes jQuery & bootstrap if we choose not to use a CDN
  └── views  // html files that we'll serve
  │   ├── index.html
  ```

2. We're just going to serve our index on the root route, `/`, so change the current GET `/` route from serving the string `'hello world'` to instead sending the `index.html` file, with `res.sendFile('views/index.html' , { root : __dirname});`. Curious about what this does? Try logging `__dirname` to your console.

  > If you restart your server now and visit 'localhost:3000' in the browser, you'll notice the site now shows the contents of the html file instead of just the hello world message! Congratulations; you now have a server serving a page!

  > But the page looks a little different than when we just opened it as a file, and you'll see some errors in the console.  That's because we're not yet serving the js and css files the page needs.  Let's fix that next.

#### Add Static Files (CSS, JS, Images)

1. Make a directory in your project called `public`; then create `public/scripts`, `public/styles` and `public/images` subdirectories.  Move `styles.css`, and `app.js`, into their public subdirectories.  These files are called static files. (You can delete the old directories they were in.)

2. Set up the express app to serve the static files (actually, the whole public directory.)

  ```js
    // server.js
    app.use(express.static('public'));
  ```

3. Get a `console.log("Sanity Check: JS is working!")` from your `app.js` to appear in your browser dev tools console.

4. Get the css styles in `styles.css` working again on the index page.

5. Everything should be working again now, and you should see your albums when you visit `localhost:3000`.  If not, fix it!

#### Challenge

We're making a weird app. Albums and taquerias.  Treat your senses.  

1. Add some taqueria seed data to your server file.

  ```js
    // server.js
    var taquerias = [
      { name: "La Taqueria" },
      { name: "El Farolito" },
      { name: "Taqueria Cancun" }
    ];
  ```

2. Add a route to your server side javascript that clients can use to get taqueria data.  The route's path should be `/api/taquerias`.  Instead of `res.send` (for simple strings) or `res.sendFile`, this route will use `res.json`.


  ```js
    app.get('/api/taquerias', function (req, res) {
      res.json(taquerias);
    });
  ```

3. Navigate to `http://localhost:3000/api/taquerias` (remember to restart your server first!) and check that the data is showing up.


4. In your `app.js` file, write a jQuery AJAX request to get the taqueria data. When the response comes back, display all the taqueria names above the albums on your site's root page (localhost:3000/).  

  <details><summary> Want a reminder of the ajax call structure? Click here!</summary>

  ```js
  $.ajax({
    method: 'GET',
    url: '/api/taquerias',
    success: handleResponse
  });

  function handleResponse(json) {
    // your code here
  }
  ```

  </details>

### Stretch Challenges

1. Add a `vendor` folder to your project. The `vendor` folder is traditionally used for third-party (external) library code.  Download Bootstrap's CSS and JavaScript files and add them to the `vendor` folder. Can you include Bootstrap in your project from this location instead of the CDN? What is the benefit of having a separate `vendor` folder for external front-end libraries?

  > **Hint**: Remember to serve the static vendor files to make them available to your front end.

  ```js
    // server.js
    app.use(express.static('vendor'));
  ```

2. Add an image to your `public/images` folder and display it in `index.html`.
