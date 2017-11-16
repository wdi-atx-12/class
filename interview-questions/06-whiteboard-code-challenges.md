# Whiteboard Code Challenges

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

8. Write a function that accepts a string and returns a number representing the number of vowels in the string provided.

9. Write a function that accepts a start number and an end number. It should print all the even numbers in the range provided.

10. Write a function that moves the first 2 characters of a string to the end of the string.

11. Write a function that adds all the numbers in a provided array. Bonus: Make all odd numbers count twice.

12. https://codepen.io/chriscoyier/pen/tljap - Reverse the items in a list (in DOM)

13. Rotate a given array to the right by `n` steps. For example, given `[1,2,3,4,5]` and `1`, you should return `[5,1,2,3,4]`. Given `[1,2,3,4,5]` and `8`, you should return `[3,4,5,1,2]`.

14. (HARD!) A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation `1001` and contains a binary gap of length 2. The number 265 has binary representation `100001001` and contains two binary gaps: one of length 4 and one of length 2. The number 18 has binary representation `10010` and contains one binary gap of length 1. Note that the outside 0 doesn't count in this case. The number 15 has binary representation `1111` and has no binary gaps.

Write a function that, given a positive integer `n`, returns the length of its longest binary gap. The function should return 0 if `n` doesn't contain a binary gap.

For example, given `1049` the function should return `5`, because `n` has binary representation `10000011001` and so its longest binary gap is of length `5`.

15. Calculate the total "score" of a provided word. The "score" is calculated by adding 3 points for every consonant and 5 points for every vowel.
