# Intro to HTML

### Why is this important?
*This workshop is important because:*

HTML is the oldest and most fundamental language of the web.  It contains a page's content, provides structure for that content, and gives the browser important metadata about the page.

### Learning Objectives
*After this workshop, developers will be able to:*

- Semantically structure a given document using HTML
- List commonly-abused HTML elements
- List commonly-used HTML elements
- Label the components of an HTML element and its tags
- Link to a given file using either absolute and relative paths
- Use Chrome Dev Tools to inspect an element
- Brief intro to forms


## Create Barebones structure for an HTML document

```
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
</head>
<body>
  <!-- this is a comment! -->
</body>
</html>
```

- `<!DOCTYPE html>`: The first line on every single webpage. This really bothers me. It doesn't look like other tags. You don't need to close it. Its job is to tell the browser, "Hey, everything after this is HTML." Aside from knowing that you need to have this as the first line of every webpage, you can ignore it.

- `<html>`: The *second* line on every webpage. `</html>` is the *last* line on every webpage.

- `<head>`: Every webpage has two main "body parts": the `<head>` and the `<body>`. The `head` contains **meta-data**: that is, data the user won't actually see in the webpage. There are a couple different things we can put in here, but for now we'll stick with...

- `<title>`: The name of the webpage as it appears at the top of the window, or in your bookmarks bar, or history, or in Google searches. It's in the `<head>` because it *doesn't actually show up on the webpage itself*.

- `<body>`: Where all everything you "see" lives.

## Linking Files and Images

- Relative Path  
../ = used to go up directories/folders  
`<img src="../img/Betty-White.jpg" alt="Wendy Bite">`
- Absolute Path  
/ at the beginning means to go all the way to the root  
`<img src="/img/Betty-White.jpg" alt="Wendy Bite">`
- Absolute Link  
`<img src="http://www.goldengirls.com/img/Betty-White.jpg" alt="Wendy Bite">`

# HTML forms

Forms are an important way a web application receive user input. The proper use of forms makes it easier to develop accessible websites with a good user experience.

#### Example Form Element Tag

```
<form method="POST" action="/page">
  <input type="text" name="pageName" />
  <input type="submit" value="Create" />
</form>
```

### Attributes

By default, when a form is submitted, it generates an HTTP request. In the opening of the `<form>` tag you can see two attributes: method & action

- method: the HTTP verb (method) that the browser uses to submit the form.
- action: the path of the HTTP request page that processes the information submitted via the form. Although it's a bit strange, action specifies *where* to take action - it's the address for the HTTP request.

> A route is simply a combination of a method & action. For example GET '/page' or POST '/users' are both valid routes.
> For now simply understand that it is convention for GET to be used in a request when the person using your site (the client) wants to receive data, and for POST to be used in a request when the client wants to send data.

### Challenge: Doomed?

Create an html form that, on submit, sends the user to "hasthelargehadroncolliderdestroyedtheworldyet.com". This form will only have one input: the submit button. Hint: what's the form action? Bonus: Can you change the submit button to say "Are we doomed?".

<details>
<summary>Example solution</summary>

```html
<form action="http://hasthelargehadroncolliderdestroyedtheworldyet.com" method="GET">
  <input type="submit" value="Are we doomed!?">
</form>
```
</details>

## Common Inputs

| Field Type | HTML Code | Widget (Control) | Notes |
|:-- |:-- |:-- |:-- |
| plain text | `<input type="text">` | ![<input type="text">][text] | the type attribute can be omitted |
| password field | `<input type="password">` | ![<input type="password">][text] | echoes dots instead of characters |
| text area | `<textarea></textarea>` | ![<textarea></textarea>][area] | a more customizable plain text area |
| checkbox | `<input type="checkbox">` | ![<input type="checkbox">][check] | can be toggled on or off |
| radio button | `<input type="radio">` | ![<input type="radio" name="group"> <input type="radio" name="group">][radio] | can be grouped with other inputs |
| drop-down lists | `<select><option>` | ![<select><option>Option 1</option><option>Option 2</option></select>][select] | [check here for more info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) |
| file picker | `<input type="file">` | ![<input type="file">][file] | pops up an “open file” dialog |
| hidden field | `<input type="hidden">` |  | nothing there!
| submit button | `<input type="submit">` | ![<input type="submit">][submit] | activates the form's submission <br/>(a `POST` request or <br/>Javascript action) |

<!-- Images -->
[text]:   https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-text.png
[area]:   https://raw.github.com/h4w5/html_form_cheatsheet_images/master/textarea.png
[check]:  https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-checkbox.png
[radio]:  https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-radio.png
[select]: https://raw.github.com/h4w5/html_form_cheatsheet_images/master/select-option.png
[file]:   https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-file.png
[submit]: https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-submit.png

### Important Attributes

All input types (including `<textarea>`s) have the following attributes:

- **`type`**: the type of data that is being input (affects the "widget" that is used to display this element by the browser).
- **`name`**: the key used to describe this data in the HTTP request.
- **`id`**: the unique identifier that other HTML elements, JavaScript and CSS use to access this
  element in the browser.
- **`value`**: the default data that is assigned to the element.
- **`placeholder`**: not a default value, but a useful HTML5 addition of a data "prompt" for an input.
- **`autofocus`**: defaults the cursor to a specific input when the page originally loads. You can only have one autofocus on your page.
- **`disabled`**: a Boolean attribute indicating that the "widget" is not available for interaction.
- **`required`**: a Boolean attribute indicating that the field must have a value / cannot be left empty.

Radio buttons or checkboxes:

- **`checked`**: a Boolean that indicates whether the control is selected by default (is false unless).
- **`name`**: the group to which this element is connected. For radio buttons, only one element per group (or name) can be checked.
- **`value`**: the data or value that is returned for a specific group (a multi-element control), if this element is checked.


You may be thinking to yourself, "an HTTP request has optional data that it should be able to send too. Where does that come from in the form?"

Great question!

The data portion comes from the `name` and `value` attributes of the inputs!

### Challenge: Login Form

Create an html `form` with two inputs: one for a username (named "username"), the other for password (named "password") (normally you don't see your password when you type it, so make sure it's blocked out!). What happens in the URL when you click submit?

<details>
<summary>Example solution</summary>

```html
<form>
	<input type="text" name="username" placeholder=" username..." required>
	<input type="password" password="password" placeholder="password..." required>
	<input type="submit">
</form>
```

</details>


## The `<label>` element and `placeholder` attribute

We encourage you to always use the optional `<label>` tag with each of your form inputs.

>"This is the most important element if you want to build accessible forms." — MDN

**Label**

```html
<label for="password">Password:</label>
<input id="password" type="text" name="password" />
```

>"*Do not use the placeholder attribute instead of a <label> element*. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it." -MDN


**Placeholder**

```html
<input type="text" name="username" placeholder="Enter a unique username...">
```

> Make sure the label's `for` attribute matches the input's `id` attribute!

## Common Validations

Form validations help to prevent users from submitting bad data to the server. They are very important to improve UX, but *do not increase the security* of the application.

* a missing or empty field (required)
* an email address that was missing an "@" symbol (wrong pattern)
* a password that is obviously too short (invalid length)

#### `required` attribute

Try submitting the below form without entering your name:

```html
<form>
  <label for="colorField">What is your favorite color?</label>
  <input id="colorField" name="favColor" required>
  <button>Submit</button>
</form>
```
Notice the `required` attribute on the input. Therefore, the form will not submit until some information is entered into the field.

#### `pattern` attribute

```html
<form>
  <label for="kindOfBob">Do you go by bob or bobert?</label>
  <input id="kindOfBob" name="bobType" pattern="bob|bobert" required>
  <button>Submit</button>
</form>
```

The `pattern` attribute allows us to specify the values we will accept. In this case only `bob` or `bobert` are acceptable.

#### `length` attribute

You may need the user to enter a specific amount of characters. Let's say you need a username to be at least 6 characters. You can use the `minlength` or `maxlength` attributes to help.

```html
<form>
  <label for="password">What's your password?</label>
  <input id="password" type="password" name="password" minlength="8" required>
  <button>Submit</button>
</form>
```

## Closing Thoughts

Semantic HTML is an expectation among modern web developers. Take care to choose semantic HTML elements, class names, and ids. (Semantic naming is also a best practice in JavaScript and across programming languages.)

*The most important things to practice right now are:*

- using meaningful tags, classes, and ids.
- following best practices to write clean, readable code.
