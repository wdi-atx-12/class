// Read the section on tagged template literals here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals

// Write a function `html` that can be used as a template string tag, and produces
// a string in which all the interpolated pieces are escaped as HTML. Use the
// supplied escapeHTML function to do the escaping.

// Remember that a tag function gets an array of in-between strings as its first
// argument, and then the interpolated values as further arguments.

function html(strings, ...expressions) {
  // Your code here
}

const mustEscape = '<>&"';
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`);

function escapeHTML(string) {
  return String(string).replace(/"/g, '&quot;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/&/g, '&amp;');
}

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#HTML_templating
