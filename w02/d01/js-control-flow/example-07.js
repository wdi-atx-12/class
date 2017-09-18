// example-07.js
// boolean logic - additional examples

var prompt = require('./tools/prompt-sync')();

var word = prompt('Give me a word. ');

console.log('Your word is \"' + word + '\"');
console.log();

console.log('Word length divisible by 2? ' + (word.length % 2 === 0));
console.log('Word length divisble by 3? ' + (word.length % 3 === 0));
console.log('Word length divisble by 4? ' + (word.length % 4 === 0));
console.log();

console.log('Word starts a-m? ' + (word < 'n'));
console.log('\n');
