# Bubble Sort


### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Bubble sort is one of the first sorting algorithms you should master. While it isn't particularly efficient, it's simple and intuitive.  Bubble Sort compares neighboring elements and forces larger elements to 'bubble' to the end of an array while simultaneously 'floating' smaller elements to the top/front of a list.  This sorting algorithm is what you might do if you were asked to sort a list one by one.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- describe bubble sort algorithm and identify its advantages and disadvantages.
- write a pseudocode version of bubble sort and a javascript version of bubble sort.
- determine the runtime (in big-`O()` notation) for bubble sort.

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- iterate through an array using a `for` loop, `forEach`, or other iterators.
- describe the purpose of big-`O()` notation.

## What? Bubble Sort?
[First, some Hungarian ("Csángó") folk dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)

![image](https://media.giphy.com/media/1161BCev99OuRi/giphy.gif)


Here's the basic idea of the Bubble Sort algorithm:

1. Start at the beginning of a list (array) of items.
2. Compare the item you're looking at to the next item in the list.
3. If this item is greater than the next one, swap them.
4. Move on to the next item.
5. Repeat steps 1-4 until you go through the whole list without doing any swaps.

#### Bubble Sort Animated
<figure>
<a title="By Swfung8 (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0) or GFDL (http://www.gnu.org/copyleft/fdl.html)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3ABubble-sort-example-300px.gif"><img width="400" alt="Bubble-sort-example-300px" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif"/></a><br>
<figcaption>Image: By Swfung8 (Own work) [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0) or [GFDL](http://www.gnu.org/copyleft/fdl.html), via Wikimedia Commons</figcaption>
</figure>



## Example: Sort this list using Bubble Sort: `[5, 4, 2, 3, 1, 6]`

Let's go through each iteration over the array and apply a bubble-sort.

#### Iteration 1
Look at the first two elements in the list.

0: [**5, 4**, 2, 3, 1, 6] <sub>SWAP!</sub>

Is `5 > 4` ? Yes! Swap!

If an element on the left (5) is greater than the element on the right (4), the two elements 'swap' locations.

1: [4, **5, 2**, 3, 1, 6] ⇨ [4, **2, 5**, 3, 1, 6] <sub>SWAP!</sub>

2: [4, 2, **5, 3**, 1, 6] ⇨ [4, 2, **3, 5**, 1, 6] <sub>SWAP!</sub>

3: [4, 2, 3, **5, 1**, 6] ⇨ [4, 2, 3, **1, 5**, 6] <sub>SWAP!</sub>

4: [4, 2, 3, 1, **5, 6**] ⇨ [4, 2, 3, 1, **5, 6**] <sub>order is correct, don't swap</sub>


**Important:** We now know that the last element in the list is the largest element in the list. There's no need to do a comparison with that number ever again.


#### Iteration 2

0: [**4, 2**, 3, 1, 5, ~~6~~] ⇨ [**2, 4**, 3, 1, 5, ~~6~~]  <sub>SWAP!</sub>

1: [2, **4, 3**, 1, 5, ~~6~~] ⇨ [2, **3, 4**, 1, 5, ~~6~~]  <sub>SWAP!</sub>

2: [2, 3, **4, 1**, 5, ~~6~~] ⇨ [2, 3, **1, 4**, 5, ~~6~~]  <sub>SWAP!</sub>

3: [2, 3, 1, **4, 5**, ~~6~~] ⇨ [2, 3, 1, **4, 5**, ~~6~~]  <sub>order is correct, don't swap</sub>

Stop!

Remember: we know that last element is the largest number in the list.  There is no need to compare against that number ever again.  We also now know that the **second** to last number is the second largest number; no need to move that one ever again as well. (Detect a trend?)

#### Iteration 3


0: [**2, 3**, 1, 4, ~~5, 6~~] ⇨ [**2, 3**, 1, 4, ~~5, 6~~] <sub>order is correct, don't swap</sub>

If an element on the left has met a larger or equal element, we look at its bigger neighbor and now compare the larger neighbor to it's neighbor on the right.  The process is continued until our established end.

1: [2, **3, 1**, 4, ~~5, 6~~] ⇨ [2, **1, 3**, 4, ~~5, 6~~] <sub>SWAP!</sub>

2: [2, 1, **3, 4**, ~~5, 6~~] ⇨ [2, 1, **3, 4**, ~~5, 6~~] <sub>order is correct, don't swap</sub>

Stop!

We don't stop sorting until we hit the end.  Even if we find an element that's already sorted.

#### Iteration 4

0: [**2, 1**, 3, ~~4, 5, 6~~] ⇨ [**1, 2**, 3, ~~4, 5, 6~~]

1: [1, **2, 3**, ~~4, 5, 6~~] ⇨ [1, **2, 3**, ~~4, 5, 6~~]

Stop!

#### Iteration 5
0: [**1, 2**, ~~3, 4, 5, 6~~] ⇨ Done!

Stop!

When there is **only one element** (the first element) left in our unsorted list, it is already sorted for us as a freebie!

**List is now sorted using Bubble Sort: `[1, 2, 3, 4, 5, 6]`**



## Efficiency

In big-`O()` notation, what is the runtime of Bubble sort? How do you know?! Justify your answer here.

Hints:
<details><summary>
How many comparisons will you need to make to cycle through the array once?</summary>
You make `n` comparisons each time you move through the array.
</details>
<details><summary>
In the worst case, how many times do you need to cycle through the array?</summary>
You might have to cycle through the array `n` times.
</details>

<details><summary>
Given the answer to the two questions above, how many comparisons did you need to make?</summary>
You made `n` comparisons `n` times. That means you made `n * n` comparisons or n<sup>2</sup> . That makes this algorithm O(n<sup>2</sup>).
</details>


#### [So, is this a fast algorithm?](https://www.toptal.com/developers/sorting-algorithms/)

When does it perform well?



## Challenge

**Create a `bubbleSort` function that takes in an array of numbers, uses the bubble sort algorithm on it, and returns the sorted array.**

* Work with a partner to implement the algorithm on the whiteboard.
* Start with pseudocode before moving into actual code.
* Test your work with the input/output pairs listed below:

| Input | Expected Output |
| :--- | :--- |
| `[8, 5, 3]` | `[3, 5, 8]` |
| `[0, 1, 2]` | `[0, 1, 2]` |
| `[9, 4, 7, 6]` |  `[4, 6, 7, 9]` |
| `[]`  | `[]` |

#### Hints:

<details><summary>
Start off by building pieces of the whole funciton.
</summary>
- build the capacity to swap the first two elements if the first is greater than the second.
- build the capacity to loop through the whole array swapping whenever it's appropriate.
- make sure you cycle through the array enough times to ensure the list is sorted.
</details>

<details><summary>
If you want to swap two variables, a and b:
</summary>
```javascript
// bubbleSort.js  (you'll need to create this)

var a, b, temp;
temp = a;
a = b;
b = temp;
```
</details>
<details><summary>
Don't worry about efficiency the first time through.
</summary>
After you have a working version, spend time figuring out how you could cut corners to make the algorithm to be more efficient.
</details>

A conventional for loop is probably a good idea on this one.



## Thought Bubbles

*Because we can only make that pun once.*

1. Why is it safe to stop looping through the array after you have a full pass through without swaps?

2. How would you change your function to sort the array in the reverse order?

3. What are some basic requirements for Bubble Sort to work on an input array? Would your code work with an input array like `["Thursday", 47, ["a", "b", "c"]]`?

4. Bubble Sort is known as a slower sorting algorithm in many scenarios. What is the best-case scenario for Bubble Sort? That is, what kind of array causes bubble sort to do the least amount of swaps? How many swaps would bubble sort do on this kind of array?

5. What is the worst case scenario for Bubble Sort? (What kind of array causes it to do the most swaps?)


## Resources

* [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
* [Graphical comparison of sorting algorithms](http://www.sorting-algorithms.com/)
* [Hungarian ("Csángó") folk dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)
