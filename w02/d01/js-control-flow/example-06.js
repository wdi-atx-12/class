// example-06.js
// boolean logic - comparisons (gt/lt)

var prompt = require('./tools/prompt-sync')();

var classSize = parseInt(prompt('How big is the class? '), 10);

var isTinyClass = classSize < 8;
console.log('isTinyClass = ' + isTinyClass);

var isHugeClass = classSize >= 24;
console.log('isHugeClass = ' + isHugeClass);
