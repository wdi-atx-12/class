// example-04.js
// conditionals - switch statements

var prompt = require('./tools/prompt-sync')();

var astrologicalSign = prompt('What\'s your astrological sign? ');

switch (astrologicalSign) {
  case 'Leo':
    message = 'You\'re a passionate person.';
    break;
  case 'Virgo':
    message = 'You\'re a practical person.';
    break;
  case 'Taurus':
    message = 'You\'re a reliable person.';
    break;
  default:
    message = 'I don\'t know what to tell you.';
    break;
}

console.log( message );
console.log( '\n' );
