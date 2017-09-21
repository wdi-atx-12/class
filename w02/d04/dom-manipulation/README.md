<!--
Creator: <Name>
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# DOM Manipulation

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

We want to be able to change things on the page so that we can make truly interactive web apps rather than static (unchanging) pages. When you want to make changes happen on the page, you need to manipulate the DOM.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- describe and draw the document object model (DOM) of a simple HTML document.
- use the elements tab to view an manipulate the DOM and styling.
- select elements from the page using CSS Selectors and use JavaScript to make changes to the DOM

## DOM

The Document Object Model or DOM is a key concept to understanding what a browser does with your HTML. The browser looks at your HTML and creates a "tree", much like a family tree of siblings, parents, and children. The `<html>` tag has two children, what are they?

Draw the DOM tree for the following HTML:

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <p> This is an insightful paragraph </p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </body>
  </html>
```

## Manipulating the DOM

- Selecting elements
  - by class
  - by id
  - by any CSS selector

- editing styles

- editing text

- editing attributes

- creating elements
