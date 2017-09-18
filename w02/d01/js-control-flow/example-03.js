// example-03.js
// conditionals - if-else statements

var prompt = require('./tools/prompt-sync')();
var yn = require('./tools/yn');

var hasSweetTooth = yn(prompt('Do you have a sweet tooth (y/n)? '));

var trailMixIngredients = [
  'raisins',
  'almonds',
  'peanuts'
];

if (hasSweetTooth) {
  trailMixIngredients.push('M&Ms');
} else {
  trailMixIngredients.push('sunflower seeds');
}

console.log( 'Here\'s your trail mix: ' );
console.log( trailMixIngredients.join(', ') );
console.log( '\n' );
