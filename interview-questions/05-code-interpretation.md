# Code Snippets

1. Explain the output of the following code:

  ```js
  console.log('woof');
  setTimeout(function() {
    console.log('quack');
  }, 0);
  console.log('meow');
  ```

2. What are the values of the following variables after the code runs?

  ```js
  var a = 10 + '20';
  var b = 10 + 10 + '20';
  var c = '20' + 10 + 10;
  ```

3. What will the two alerts below contain?

  ```js
  var foo = 'Hello';
  (function() {
    var bar = ' World';
    alert(foo + bar);
  });
  alert(foo + bar);
  ```

4. What is the output of the following code?

  ```js
  var foo = {n: 1};
  var bar = foo;
  bar.n += 15;
  console.log(foo.n);
  ```

5. What is the value of `count` after the following code finishes running?

  ```js
  var count = 0;
  var x = 22;
  while(x >= 0) {
    x /= 2;
    x -= 1;
    count += 2;
  }
  ```
