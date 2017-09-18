// example-08.js
// boolean logic - short-circuiting

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var hasHeard = yn(prompt('Have you heard (y/n)? '));

console.log('(hasHeard = ' + hasHeard + ')');
console.log();

if (hasHeard || console.log('THE BIRD IS THE WORD')) {
  console.log('So you know then. Cool.');
} else {
  console.log('You\'re missing out on some news of the avian variety.');
}

console.log('\n');
