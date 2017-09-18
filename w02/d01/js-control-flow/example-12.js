// example-12.js
// loops - breaking

var prompt = require('./tools/prompt-sync')();

var minutesUntilLate = 80;

console.log(); // empty line
console.log('You have ' + minutesUntilLate + ' until you\'re late for work.');

while (minutesUntilLate > 0) {
  if (Math.random() < 0.1) { // 10% chance
    // I'm awake!
    console.log('I\'m awake and ready to go with ' + minutesUntilLate + ' minutes to spare!');
    break;
  }

  console.log('I still have ' + minutesUntilLate + ' more minutes. SNOOZE BUTTON!');
  minutesUntilLate = minutesUntilLate - 10;
}

if (minutesUntilLate <= 0) {
  console.log('Oh no! I\'m late!');
}

console.log('\n');
