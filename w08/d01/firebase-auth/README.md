<!--
Creator: SF WDI Team, Brianna Veenstra
Edited by: Brianna
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Firebase 

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

For prototypes and simple applications, development will often be faster if we rely on stronger tools.  Firebase is a tool that makes it very fast and easy to set up a server and database. It also has features like authentication that can be complex and/or risky (insecure) to build ourselves.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- set up a project on firebase
- configure firebase authentication 


### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- draw a diagram of the request-response cycle 
- make an AJAX request to a third party API
- describe a login process and expectations from a user perspective


### What Is Firebase?

Firebase is a PaaS, or "Platform as a Service." That means it offers a number of cloud-based computing services, including the one that matters to us today: a realtime database. Firebase is owned by Google.

Not only can we access a Firebase database programmatically using code, but we can also interact with data via a graphical interface in the browser.

Firebase uses a NoSQL database. This means that information is not stored in tables. Instead, information stored in one big JSON object.

#### Why Use Firebase?

There are lots of notable apps that use Firebase, including [Shazam](https://www.shazam.com/) and [NPR One](http://one.npr.org/), and [plenty more](https://firebase.google.com/customers/).


It's fast to develop.
* Setting up Firebase should take much less time than coding a back-end from scratch.

It's realtime.
* Firebase uses Websockets to maintain a constant, open connection between the client and the database. Rather than use a traditional request-response system with HTTP, the browser and server are constantly in communication with each other and are immediately aware of changes on either end. 

It's user friendly.
* Firebase's graphical interface means we only need to load up a browser in order to explore what we have in our database.

It's secure.
* Because it's widely used and well-maintained, Firebase's authentication solutions are more secure than what we would create ourselves.

#### Why Not Use Firebase?

Limited querying.
* Firebase's JSON format isn't set up well for complex data queries and aggregation. 

Limited control.
* Users, especially free users, have very limited say in when Firebase makes updates or takes services offline for maintenance. The free version also only allows about 50 connections and 100mb of storage.

Not a one-stop solution.
* Features like mailing, image processing, repeated jobs, or server-side integration with most APIS aren't part of Firebase yet.

And remember, some simple web apps don't need a backend at all.  

## Setting up Firebase

Instructions modified from [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup).

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/). 

2. Click "Add Project," and follow the prompts to create a "project" for your app.

3. Once you're on your project page, click "Add Firebase to your web app".   A popup will appear with some code that looks like this:

```
<script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "1A2B3C4D5E6F7G8H9IAJBKCL",
    authDomain: "ga-firebase-example.firebaseapp.com",
    databaseURL: "https://ga-firebase-example.firebaseio.com",
    projectId: "ga-firebase-example",
    storageBucket: "ga-firebase-example.appspot.com",
    messagingSenderId: "0123456789"
  };
  firebase.initializeApp(config);
</script>
```

5. The instructions say to add this code directly to your HTML, so it's safe to share openly. If your project is simple, you can add this code directly to your HTML as the instructions suggest. However, if you're working on a larger app with JavaScript files, you may want to incorporate this configuration into a different part of your code. You will still need this configuration information, so it's important to know where to find it!

6. Close the configuration information popup.  Back on the project's page, you'll see a list of feature cards on the bottom half of the page. Take a minute to read over the features available. Follow Google's guides for any feature you want to incorporate into your app!


### Example: Firebase for Google Auth with React

The most commonly used feature of Firebase is probably its Realtime Database, but as an example we'll see how to use Firebase for authentication in a React app. 

This example assumes you're working on a React project created with `create-react-app`.  

Resources:  
- [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup)  
- [Getting Started with Firebase Authentication on Websites](https://firebase.google.com/docs/auth/web/start)  
- [Main Firebase "Auth" documentation](https://firebase.google.com/docs/auth/)  
- [List of Firebase "Auth" classes](https://firebase.google.com/docs/reference/js/firebase.auth)

1. On the [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup) page, under the first set of instructions, click 'NODE.JS' to see steps for configuring the project for Node.js-managed front end applications (like a `create-react-app` app).  Start with `npm install firebase --save`.

2. Create a file or directory for your Firebase code within the `src` directory of your project. In the sample instructions below, this file is `src/utils/firebase.js`.

3. Since `create-react-app` uses ES6, we'll use Firebase as a module with the `import` command. Inside your firebase.js file, add the following code to initialize your app:

```js
import firebase from 'firebase';

// TODO: replace with your project's customized code snippet
const config = {
  apiKey: enter your API key,
  authDomain: enter your auth domain,
  databaseURL: enter your database url,
  storageBucket: eter your storage bucket,
  messagingSenderId: enter your message sender id
};

// initialize firebase app with config information
firebase.initializeApp(config);
```

4. Also in firebase.js, export `firebase` and the `auth` object from within the newly initialized firebase app:

```js
const auth = firebase.auth();
export { firebase, auth } 
```

5. The `src/App.js` file will control most of the login/logout logic.  Import `firebase` and `auth` in src/App.js:

```js
import { firebase, auth } from './utils/firebase';
```

6. In order for the main `App` component to track which user is logged in, add a `currentUser` field to the component's `state`.  When no one is logged in, the value will be `null`. When a user is logged in, the value will be their object. 

7. To take advantage of Firebase auth, we'll need to attach an "event listener" for Firebase's `onAuthStateChanged` event.  Add this to the `componentWillMount` method. 


```js
 componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        // set currentUser in App component state
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }
 ```
 
8. The `App` component will also contain the functions that handle communicating with Firebase about when the user wants to log in or log out. Add the following method stubs:

```js
loginButtonClicked(e) {
  e.preventDefault();
  // tell Firebase auth to log in
  console.log("signing in")
}
```

```js
logoutButtonClicked(e) {
  e.preventDefault();
  // tell Firebase auth to log out
  console.log("signing out");
}
```

9. These methods probably won't be *triggered* in the `App` component, though. Decide which component on your page will contain the login and logout buttons, and make sure there are user interface elements so the user can trigger logging in and logging out. 

10. Send the `loginButtonClicked` and `logoutButtonClicked` methods to the component(s) that will trigger them through `props` (wherever those components are rendered). Work with the code until you can see the correct console log messages when you click each button on the user interface.

11. Fill in the login and logout methods in `src/App.js`. 

```js
loginButtonClicked(e) {
  e.preventDefault();
  // set up provider 
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log("signing in")
  // tell Firebase auth to log in with a popup and that provider
  auth.signInWithPopup(provider);
}
```

```js
logoutButtonClicked(e) {
  e.preventDefault();
  // tell Firebase auth to log out
  console.log("signing out");
  auth.signOut();
}
```
