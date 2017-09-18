// example-10.js
// loops - for loops

var prompt = require('./tools/prompt-sync')();

var countTarget = parseInt(prompt('How high do you want to count? '), 10);

console.log('Let\'s count to ' + countTarget + '!');
console.log(); // empty line

for (var i = 0; i < countTarget; i++) {
  console.log(i+1);
}

console.log('Hooray!');
console.log('\n');
