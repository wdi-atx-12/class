// example-09.js
// loops - while loop (and do-while)

var prompt = require('./tools/prompt-sync')();

// var input = prompt('Give me some input. ');

var annoyance = 0;

while (annoyance < 30) {
  console.log('Are we there yet?');

  annoyance++;
}

console.log('WE\'RE NOT THERE YET! STOP ASKING!');
console.log('\n');
