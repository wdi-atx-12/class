// example-05.js
// boolean logic - comparisons (equality)

var prompt = require('./tools/prompt-sync')();

var providedName = prompt('What\'s your name? ');

var targetName = 'Bob';

if (providedName === targetName) {
  console.log('You\'re the one I\'ve been looking for!');
} else {
  console.log('I don\'t want anything to do with \"' + providedName +'\". Bring me \"' + targetName + '\" or go away.')
}

console.log('\n');
