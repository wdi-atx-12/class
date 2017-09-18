// example-02.js
// conditionals - if statements

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var isWellBehaved = yn(prompt('Is Johnny a good boy (y/n)? '));

var allowance = 0;

allowance += 10;

if (isWellBehaved) {
  allowance += 15;
}

console.log( 'Johnny\'s allowance is $' + allowance + '.\n\n ' );
