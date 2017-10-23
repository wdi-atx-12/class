// Use your understanding of scope to guess the outcome
// of the following functions.

var a = 50;
const b = {
  x: 1,
  y: 1,
};
let c = 'Hello ';

function funcOne() {
  console.log('\nfuncOne');
  a = 4;
  a += 2;
  var a;
  a += 10;
  console.log(a);
}

funcOne();
console.log('global a = ',a);

function funcTwo() {
  console.log('\nfuncTwo');
  a = 4;
  a += 2;
  if (true) {
    let a = 0;
    a += 10;
    console.log(a);
  }
}


funcTwo();
console.log('global a = ',a);

function funcThree() {
  console.log('\nfuncThree');
  b.x = 99;
  b.y += 99;
  console.log(b);
}


funcThree();
console.log('global b = ',b);

function funcFour() {
  console.log('\nfuncFour');
  for (let i=0; i<5; i++) {
    const b = {
      x: 1,
      y: 1,
    };
    b.x += i;
    b.y += i;
    console.log(b);
  }
  b.x += 1;
  b.y += 1;
}


funcFour();
console.log('global b = ',b);

function funcFive() {
  console.log('\nfuncFive');
  c += 'Joe';
  if (true) {
    let c = 'Howdy ';
    c += 'Bob';
    console.log(c);
  }
}

funcFive();
console.log('global c = ',c);


function funcSix(c) {
  console.log('\nfuncSix');
  c += '...';
  if (true) {
    var c = 'Good morning Sue';
    c += '!!!';
    console.log(c);
  }
}

funcSix(c);
console.log('global c = ',c);
