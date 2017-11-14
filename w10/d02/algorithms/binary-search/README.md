![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Binary Search

Binary search is a search algorithm used to find the position of a target item in a sorted array.

![Morty Searching](http://i.giphy.com/l41lFw057lAJQMwg0.gif)

## Intro: 5 minutes

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Not only is binary search a popular interview question, but it's also a fundamental concept in how efficient searches are performed.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- Explain on a high level what a binary search is
- Implement binary search in JavaScript


### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- Write functions in JavaScript
- Translate descriptions of a function's behavior into pseudocode and code


### Brute Force

What would be your first instinct on how to simply, *systematically* search a sorted array for a specific number?


<details>
  <summary>Click for an idea</summary>
  <p>
The "Brute Force" solution is to move one-by-one from the first element to the final element, checking if they are equal. There are more efficient solutions! 
  </p>
</details>

### Steps of Binary Search: 10 minutes

1. The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array.
2. If the target value is equal to the middle element's value, then the position is returned and the search is finished.
3. If the target value is less than the middle element's value, then the search continues on the lower half of the array (excluding middle element;) or if the target value is greater than the middle element's value, then the search continues on the upper half of the array.
4. This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned).
[Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)

> What does binary search assume about the set of numbers it will search through?

## Demo: 10 minutes


We can act this out with some volunteers. Each volunteer gets a number and will be sorted into a collection, lowest to highest. How can we act out binary search to find a specific number? Break it down step by step.

## Exercise: 20 minutes

Based on the description above and the real-life demo, pseudocode a plan for implementing a binary search, and then start coding. We'll go over a possible solution after 10 minutes.

## Challenge

Write a binary search algorithm that will take in 2 arguments: an array and a single number. Return the index of the number if it exists in the array. Return -1 if that number does not exist in the array.

### Example 1

```javascript
array = [0,2,4,6,8,10,12,14,16,18,20]
number = 8
binarySearch(array, number) => 4
```

### Example 2

```javascript
array = [0,2,4,6,8,10,12,14,16,18,20]
number = 7
binarySearch(array, number) => -1
```

## Stretch Challenge: 10 minutes

Implement your binary search algorithm using a recursive pattern!  This method is faster and more eloquent, but will stretch your imagination and sanity.

## Recap: 5 minutes

Binary Search is an efficient algorithm for searching. This search mechanism is popular, useful, and is the root of many modern searching algorithms in practice currently.

> Check: Can anyone give their own high-level overview of what binary search does?



## Closing Thoughts
- After this lesson, you should feel comfortable describing the binary search algorithm. You should also feel equipped to write this algorithm in JavaScript.
- Don't worry if you feel that you need to look at resources while coding binary search for now, but you will want to study this algorithm so that you would feel comfortable writing it yourself without any resources.
- We'll talk soon about binary search trees, tries, and the efficiency of this algorithm. All of these topics rely on binary search.
