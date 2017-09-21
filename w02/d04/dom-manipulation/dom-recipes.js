/* SELECTING ELEMENTS
*****************************/

// first element that matches the CSS_SELECTOR
var ELEMENT = document.querySelector('CSS_SELECTOR');

// all elements that match the CSS_SELECTOR
var ELEMENTS = [...document.querySelectorAll('CSS_SELECTOR')]; //es6
var ELEMENTS = Array.prototype.slice.apply(document.querySelectorAll('CSS_SELECTOR'));

/* EDITING CONTENT
*****************************/

// change text content (no markup)
ELEMENT.innerText = 'NEW_TEXT';

// change HTML content (warning: possible security implications)
ELEMENT.innerHTML = 'NEW_TEXT';

// get current value of an attribute
var value = ELEMENT.getAttribute('ATTRIBUTE');
var videoAddress = youtubeLink.getAttribute('href');

// set a new value for an attribute
ELEMENT.setAttribute('ATTRIBUTE', 'NEW_VALUE');
googleLink.setAttribute('href', 'https://www.google.com/')

/* EDITING STYLES
*****************************/

// get current value of a style (usually a string)
var value = ELEMENT.style.CSS_PROPERTY_NAME;
var paragraphFontSize = paragraph.style.fontSize; // ex 1
var paragraphFontSize = paragraph.style['font-size']; // ex 2

// set a new value for a CSS property (should usually be a string)
ELEMENT.style.CSS_PROPERTY_NAME = 'NEW_VALUE';
formSection.style.paddingTop = '50px'; // ex 1
formSection.style['padding-top'] = '50px'; // ex 2

/* CREATING/ADDING ELEMENTS
*****************************/

// create a new element
var NEW_ELEMENT = document.createElement('HTML_TAG_NAME');
var list = document.createElement('ul'); // ex

// add element to another element
PARENT_ELEMENT.appendChild(ELEMENT_TO_ADD);
PARENT_ELEMENT.insertBefore(ELEMENT_TO_ADD, EXISTING_ELEMENT);
list.appendChild(newItem); // ex - puts newItem as the last child of the list
form.insertBefore(label, input); // ex - puts the label just before the input

// remove an element from the DOM
PARENT_ELEMENT.removeChild(ELEMENT_TO_REMOVE);
page.removeChild(popup); // ex
