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

2. Write a function that outputs a triangle of asterisks of size `n`.

  ```plaintext
  // example: `n` of 1 would produce:
  *

  // example: `n` of 3 would produce:
  *
  **
  ***

  // example: `n` of 4 would produce:
  *
  **
  ***
  ****
  ```

3. Write a function that counts up to `100` but outputs `fizz` at multiples of 3, `buzz` at multiples of 5, and `fizzbuzz` at multiples of both 3 and 5.

4. Write a function that will accept an array and `return` (not output) a new array in reverse order. (Do not use the built-in `.reverse()` function)

5. Write a `duplicate()` function such that `duplicate([1,2,3,4,5]);` will return `[1,2,3,4,5,1,2,3,4,5]`.

6. Write a function that accepts parameters `taxableIncome`, `taxPaid` and returns `true` if the `taxPaid` is sufficient to cover the calculated tax liability and `false` otherwise.

Tax liability is calculated based on `taxableIncome` as follows: The first $30,000 of taxable income does not increase tax liability, income between $30,000 and $60,000 is taxed at a rate of 20%, income between $60,000 and $100,000 is taxed at a rate of 30%, and income over $100,000 is taxed at a rate of 45%.

For example, a `taxableIncome` of `70000` would have a tax liability of $9,000 (no liability for the first $30,000 plus $6,000 (20% for the amount between $30k and $60k), plus $3,000 (30% of $10,000 since the last $10,000 falls in the $60k-$100k range))

7. The Fibonacci sequence is a series of numbers starting with `1, 1, 2, 3, 5, 8, 13, …` where each number is equal to the two previous numbers added together. Write a function that returns the n-th number in the Fibonacci sequence. _e.g._ `fibonacci(4)` will return `3` (the 4th number), `fibonacci(7)` will return `13` (the 7th number), `fibonacci(10)` = `55`, etc.
