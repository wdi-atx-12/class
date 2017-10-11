# Coding Tasks

1. How could you rewrite the following function to avoid side effects? (make it a "pure" function)

  ```js
  var total = 0;
  function sumArrayValues(myarray) {
    for (var i = 0; i < myarray.length; i++) {
      total += myarray[i];
    }
  }
  ```

2. Write a function that counts up to `100` but outputs `fizz` at multiples of 3, `buzz` at multiples of 5, and `fizzbuzz` at multiples of both 3 and 5.

3. Write a function that will accept an array and `return` (not output) a new array in reverse order. (Do not use the built-in `.reverse()` function)

4. Write a `duplicate()` function such that `duplicate([1,2,3,4,5]);` will return `[1,2,3,4,5,1,2,3,4,5]`.

5. The Fibonacci sequence is a series of numbers starting with `1, 1, 2, 3, 5, 8, 13, …` where each number is equal to the two previous numbers added together. Write a function that returns the n-th number in the Fibonacci sequence. _e.g._ `fibonacci(4)` will return `3` (the 4th number), `fibonacci(7)` will return `13` (the 7th number), `fibonacci(10)` = `55`, etc.
