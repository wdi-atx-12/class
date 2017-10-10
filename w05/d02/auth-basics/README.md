# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Website Auth

## COOKIES + SESSIONS

There are a few ways to ensure that your users experience "continuity" between visits to your website.

Ideally:
  - you don't need to log on each time you visit a website
  - a site can remember your progress through an article you were reading
  - the browser already knows about some this information on page load, rather than waiting for a DB response

 We can use **cookies** to meet all these challenges! If we don't need the user info immediately, we can use **sessions**, which we do store in the DB. They can hold much more data, but they're slower to access when loading the page.

## Cookie Cookie Cookie!

Cookies are small pieces of data (4kb) sent from a website and stored in a user's computer by the browser. Every time the user loads the website, the browser sends the cookie back to the server in the HTTP Request Header. Cookies are commonly used to track whether a user is logged in or not. They can also be used to record user preferences.

They are sent with each request to web servers to give state for otherwise stateless HTTP transactions. Cookie data is stored as key/value pairs and you can access the data by the name.
  Although cookie data is generally sent from websites, it's also possible to use a client side language like JavaScript to set and retrieve cookie data.
The first use of cookies (out of the labs) was checking whether visitors to the Netscape website had already visited the site.
Cookies were invented by Netscape, which wanted to use them for creating a shopping cart for an online shop. Thanks to cookies people were able to keep items their cart, even after disconnecting from the shop.

> The word 'cookie' comes from 'magic cookie,' a term in programming languages for a piece of information shared between co-operating pieces of software. The choice of the word cookie appears to come from the American tradition of giving and sharing edible cookies.

#### Restrictions to make this process as safe as possible:

- Web servers can only access cookies which are set to their own domain. This domain is set by the browser when a new cookie is requested by the web server, and can only be the domain or a subdomain of the web server (the web server can choose a subdomain if it wants to). This means that cookies which were set by, for example, google.com can't be read by mozilla.com, and vice versa.
- According to the HTTP protocol, cookies can't be larger than 4096 Bytes (4KB) each
- There is a limit to the number of cookies per domain. The number differs per browser, however, the generally used limit is twenty cookies. This is to prevent a single domain from hogging the disk space of the client.
- There is a limit to the total number of cookies on the client's hard drive. This number also differs per browser, but is usually limited to around three hundred cookies. When this number is exceeded, an older cookie is deleted before a new one is created.

<img src="https://media.giphy.com/media/bAlYQOugzX9sY/giphy.gif">

#### Types of Cookies

* Session
  - No expiration timestamp, lives only for the duration of the browser session (this is how the browser knows to treat them as session cookies)
  - exist in temporary memory while user browses the website
  - sessions generally store their data in a database (on the server), instead of as a string of key/value pairs (in the client's browser)
* Persistent
  - Expiration date attached, information persists across sessions and is sent to servers with every request
  - Sometimes referred to as _tracking cookies_ because they can be used by advertisers to record information about a user's web browsing habits over an extended period of time. However, they are also used for "legitimate" reasons (such as keeping users logged into their accounts on websites, to avoid re-entering login credentials at every visit).
* Third Party Cookie
  - Belong to a domain different from the one shown in the address bar (normally these match)
  - Typically appear when web pages feature content from external websites, such as banner advertisements
  - This opens up the potential for tracking the user's browsing history, and is often used by advertisers in an effort to serve relevant advertisements to each user - also why you see the same swimsuit ad on facebook and in gmail, etc.
* HttpOnly
  - Cannot be accessed by client-side APIs, such as JavaScript
  - This restriction eliminates the threat of cookie theft via cross-site scripting (XSS)
  - For example, Sinatra sets HttpOnly cookies for session data, that way client side scripts can't access it
  - set with the HttpOnly flag

<img src="https://media.giphy.com/media/R52934IAVt4jK/giphy.gif">

#### Uses

* Session Management
  - Unique session identifier within the persistent cookie that is sent with each request to the server
  - Session cookies help to improve page load times, since the amount of information in a session cookie is small and requires little bandwidth
  - EX: the contents of a user's shopping cart are usually stored in a database on the server, rather than in a cookie on the client. To keep track of which user is assigned to which shopping cart, the server sends a cookie to the client that contains a unique session identifier (typically, a long string of random letters and numbers).
* Personalization
  - Cookies can be used to remember information about the user in order to show relevant content to that user over time.
  - EX: a web server might send a cookie containing the username last used to log in to a website so that it may be filled in automatically the next time the user logs in.
* User Tracking
  - Advertisers use cookies to track users across multiple sites
  - This is why we might see custom/personalized ads when we visit Facebook or other sites
  - The Wall Street Journal found that America's top fifty websites installed an average of sixty-four pieces of tracking technology onto computers resulting in a total of 3,180 tracking files.

Nowadays, we use cookies for almost every purpose you can think of. You can use them for saving user settings like name, language, location or screen size. This can improve the quality of the service you want to provide for a client, because you can optimize the service for a client and remember this optimization in the future. For instance, you could save the client's preferred language to a cookie, and, afterward, show your site's content in the preferred language every time the client visits your site.

### Setting and retrieving cookies

##### Server

- On the server, cookies are set with the `Set-Cookie` header in the response.
- The expires time is set with the `Expires` attribute with the date/time that the cookie should expire.
- The `Max-Age` sets the number of seconds the cookie is allowed to live since the time it was received.

##### Client

It's also possible to manipulate cookies on the client-side.

Open developer tools and click to the 'Application' tab. This is where the cookies are with their names, expiration dates, size, etc.

To demonstrate the JavaScript syntax, use the Chrome Developer Console:

```js
// Set a cookie name/value
document.cookie = "username=John Doe";
```

As you can see, the cookie displays as a string! It works differently though. You use assignment (=) to add values to this string:

```js
// Retrieve the cookie value
document.cookie;
```
Does it work for you?! Open your Console: Can you add a key-value pair to an existing cookie?

## Stop and Think

What are some limitations of cookies? Concerns?
- Live on the client side, users can tamper with
- Cookies eventually expire
- They are specific to the machine that the user browsed the site with (e.g. shopping cart contents would be tied to that machine). What happens when they switch devices or their computer dies?

### Sessions vs Cookies vs Local Storage

##### Sessions

  - Can only be read on the server
  - Store secure data that you want to ensure hasn't been tampered with

##### Cookies

  - Can be read by both the client and server
  - Limited in size: 4 kb
  - Can set expiry time
  - Sent with every request to the server in the headers

##### Local Storage

  - HTML5, newer technology. Need to check requirements
  - Up to 5 mb storage per domain
  - Can ONLY be read by the client (so if you need data from the server, this won't work)
  - Data persists forever, must be cleared manually by JavaScript or clearing browser history

## USER AUTHENTICATION

### Authentication vs Authorization

**Authentication** verifies that a user is who they say they are. When a user logs into our site, we authenticate them by checking that the password they typed in matches the password we have stored for them.

**Authorization** is the process of determining whether or not a user has permission to perform certain actions on our site. For example, a user may be authorized to view their profile page and edit their own blog posts, but not to edit another user's blog posts. Authorization is determining whether they have access to a particular resource (e.g. roles).

### Local Authentication

Modern web developers can choose from a variety of strategies to authenticate users. The tactic of checking a username and password combination within your own app is called "local" authentication. Password-based local authentication is one of the oldest widely-used authentication schemes for the web. It can be more or less secure depending on how you store and send the usernames and passwords.

### Security measures for handling sensitive data like passwords

In order to authenticate a user, we need to store their password in our database. This allows us to check that the user typed in the correct password when logging into our site.

The downside is that if anyone ever got access to our database, they would also have access to all of our users' login information.

* Use HTTPS for secure transmission of data
* Have a minimum and maximum password length, within reason
* Limit the number of successive login attempts per user (make them wait, or display Captcha)
* Never store passwords in plain text, store in a non-reversible hash form
* A side effect is that you can't recover passwords, you must reset them to new ones

Twitter high profile security breach
http://blog.codinghorror.com/dictionary-attacks-101/

* Hacker used dictionary attack to get into a high profile user's account - who happened to be an admin of Twitter
* Cracking the site was easy, because Twitter allowed an unlimited number of rapid-fire log-in attempts
* Not only was he authenticated as this user, he was authorized to access other high profile user accounts like Barack Obama's, Fox News, etc.

** Limiting the number of login attempts per user is security 101 **

1st failed login | no delay
-----------------|-----------
2nd failed login | 2 sec delay
3rd failed login | 4 sec delay
4th failed login | 8 sec delay
5th failed login | 16 sec delay

Alternately, you could display a CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart") after the fourth attempt.

### Encryption

Encryption is the conversion of data into a form, called a ciphertext, that cannot be easily understood by unauthorized people. Encryption is reversible, there is always a method for getting the original input back

> Encryption could be viewed as a safe deposit box. Whatever you put in there comes back out, as long as you possess the key with which it was locked up in the first place. It's a symmetric operation. Given a key and some input, you get a certain output. Given that output, and the same key, you'll get back the original input. It's a 1:1 mapping.

<img src="https://media.giphy.com/media/10GUbOX16lS15C/giphy.gif?response_id=592239956f571a1522dc5de8">

### Hashing

Hashing is a one-way, data-destructive process, which takes an arbitrary-length string as input, and outputs a fixed-length string. We use a [hashing algorithm](https://crackstation.net/hashing-security.htm#normalhashing) to avoid storing plain-text passwords in the database. Example:

* Input: "hello world"
* Output: "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed"

We also use a [salt](https://crackstation.net/hashing-security.htm#salt) to randomize the hashing algorithm, providing extra security against potential attacks.

> A hash function could be considered the same as baking a loaf of bread. You start out with inputs (flour, water, yeast, etc...) and after applying the hash function (mixing + baking), you end up with an output: a loaf of bread.

> Going the other way is extraordinarily difficult - you can't really separate the bread back into flour, water, yeast - some of that was lost during the baking process, and you can never tell exactly how much water or flour or yeast was used for a particular loaf, because that information was destroyed by the hashing function (aka the oven).

> Many different variants of inputs will theoretically produce identical loaves (e.g. 2 cups of water and 1 tsbp of yeast produce exactly the same loaf as 2.1 cups of water and 0.9tsbp of yeast), but given one of those loaves, you can't tell exactly what combo of inputs produced it.

<img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif?response_id=592238d7fd61ff68184e30e6">


### Bcrypt

Bcrypt encryption software uses the Blowfish algorithm designed by Bruce Schneier in 1993 and is a password hashing function that was presented in 1999. It is still a popular algorithm used to hash passwords today. It uses a random salt that helps prevent rainbow table attacks to hash the password in a way that's not recoverable. Bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

### Video

How NOT to store passwords

https://www.youtube.com/watch?v=8ZtInClXe1Q
