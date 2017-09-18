// example-11.js
// loops - print array

var prompt = require('./tools/prompt-sync')();

var lyrics = [
  "All right stop, Collaborate and listen",
  "Ice is back with my brand new invention",
  "Something grabs a hold of me tightly",
  "Then I flow like a harpoon daily and nightly",
  "Will it ever stop? Yo -- I don't know",
  "Turn off the lights and I'll glow"
];

console.log(); // empty line

for (var i = 0; i < lyrics.length; i++) {
  console.log(lyrics[i]);
}

console.log('\n');
