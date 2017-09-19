<!--
Creator: <Cory Fauver>
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# JavaScript Functions

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Functions are the building block of programs. They are the conceptual unit that will help you transition to thinking like a developer. To think like a developer, begin to think in small tasks that achieve progress one by one. Write a function that performs each of these tasks and make them work together to achieve the larger result. Once you've divided the task into functions, you can just ask the function to perform its task repeatedly with different inputs to get different desired outputs.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- Identify the differences between defining a function and calling (invoking) a function.
- Distinguish between printing a result and returning a result.
- Draw a model of a function that includes arguments as input, side effects, and return values as output.
- Explain the keyword `this` in the context of different scopes.

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- write their own JavaScript in a `.js` file and link that file to their HTML (with a `<script>` tag).
- explain the concept *flow of control* and its role in running a piece of code.
- demonstrate understanding of string, number, and boolean data types in JavaScript.

# What is a Function?
A function is a named piece of code. A function can be thought of as a program within a larger program.  They often perform small or repetitive tasks.  

![Ice Cream Sandwich Machine](https://media.giphy.com/media/1kowbKFzLQqXu/giphy.gif)

<em>A **function** is similar to a machine in that it receives an input (ice cream and cookies), processes the input (smash!), and creates a resulting output in a consistent manner (tasty ice cream sandwiches).</em>

## Benefits of Using Functions

- **Encapsulation** - Keeping code for the same purpose in the same place makes finding it and updating it easier.

- **Code Reuse** - "Don't Repeat Yourself" (DRY) is a principle of coding - keep your programs DRY! Reusing code makes it easier to change how your program works, since you only have to make updates in one place. If you find yourself writing the same code two or more times, a good rule of thumb is to move it into a function!


### Examples of function descriptions:

- Accept cell phone numbers as input and output (return) the state that phone number comes from.
- Accept credit card numbers as input and output (return) the credit card company that is associated with the card.
- Accept a string (words, letters, or any type of text) as input and output (return) the same string with all of the A's capitalized.


<details>
  <summary>With a partner, at the board, draw a model of one of the above functions.</summary>
  <p><img src="https://cloud.githubusercontent.com/assets/6520345/17683207/d55e5fda-6305-11e6-93e2-fdd72a87f81a.png"></p>
</details>

# Function definition and function calls

Once you have **DEFINED** a function you can then repeatedly **CALL** the function to use it over and over.

The function below is defined to display the message `'Hi, everyone!'` to a console.

```javascript
    // function definition
    function greetEveryone() {
        // anything inside the curly braces will be executed
        console.log('Hi, everyone!');
    }
```

The above code is called a *function definition*.  On its own, the function will not execute - nothing will happen. The function definition is simply the recipe for "the spell."  The function will need to be *called* (invoked) by an outside source to initialize and carry out its tasks. You need to "cast the spell" for it to have an impact on the context around it.  To call a function, type the function name and trailing parenthesis as a statement.

```javascript
    // function call
    greetEveryone(); // In the console, you'll see 'Hi, everyone!'
```

When a function is *called*, the code from within the definition's curly braces (these -> **`{}`**) will be executed.  It will only be executed when the function is called.

We already call functions all the time in our code, even if we didn't write them. Those functions are defined elsewhere, either in the specification of Javascript, or within the specific framework (like using the `$` function for jQuery). The new power we have to define our own functions means we can write our own chunks of code that we want to execute later.

# Defining a function with a parameter
When a function requires a parameter, it will use an input value to perform an action. In the function `greetPerson(name)` the function requires that a name value be given to it.

```javascript
    // function definition
    function greetPerson(name) {
        console.log('Hello ' + name);
    }
```

Similar to calling a function without parameters, the function name is called as a statement.  Parameters are passed into the function within the parenthesis.

```javascript
    // function call
    greetPerson('Andrea') // The console will print the string 'Hello Andrea'
    var firstName = 'Jeff';
    // function call
    greetPerson(firstName); // The console will print the string 'Hello Jeff'
```

### Say hello to some students
Functions can take variables as parameters or Strings

```javascript
    var name1 = 'Christopher';
    var name2 = 'Judy';
    var name3 = 'Noomi';

    // function calls
    greetPerson(name1); // The console will print the string 'Hello Christopher'
    greetPerson(name2); // The console will print the string 'Hello Judy'
    greetPerson(name3); // The console will print the string 'Hello Noomi'

    greetPerson('Will'); // The console will print the string 'Hello Will'
```

# Return Values and Void vs. Fruitful Functions
The above functions use `console.log()` to display a message to the screen. `console.log()` is a function for *giving information to the developer* - it shows evidence that something has happened wherever the developer wants to see evidence.

Functions also have the ability to *give information to the code* for later use. To do this, we use `return` statements.

```javascript
    // square a number and return the new value
    // function definition
    function square(a) {
      return a * a;
    }

    // function call      |
    //                    V
    var mySquaredValue = square(8);
    console.log(mySquaredValue); // 64
```
The particular function above multiplies the input value by itself and *returns* (gives) the resulting product to the line where it was called.  The variable `mySquaredValue` now stores the *return* value that the function call `square(8)` output. In this case, the `=` sign is called *assignment*. It assigns a value (whatever value is returned from `square(8)`) to a variable name, `mySquaredValue`. We can then use `mySquaredValue` to refer to that value anywhere in the code instead of needing to call the function over and over again. This is nice, because eventually we'll write much longer functions that we won't want to execute over and over again for fear of eating up processing power.

When thinking about functions, we can broadly separate them into two types: *void* functions, which do not return anything, and *fruitful* functions, which do return something. When thinking about how we will write a function, figuring out whether it is void or fruitful is an important step.

**If the code you are writing has an "answer", then you should `return` that answer, NOT print it out with `console.log`.**

In general, `console.log` is a function you only need to use in two situations: when you're trying to debug something, or when the description of a function *specifically* asks you to print something to the console.

### Practice
Work in partners & whiteboard to fill in this table.

|Function description|Void or fruitful?|Parameters & types|Return type|
|---|---|---|---|
|Capitalize the first letter of a string| | | |
|Print a countdown from 10 to 0| | | |
|Open an error popup| | | |
|Multiply two numbers together| | | |
|Put a string into the DOM element with the id "potato"| | | |
|Find the nth prime number| | | |
|Roll a 6-sided die| | | |
|Roll a die with n sides| | | |
|Lookup longitude/latitude based on provided address| | | |



## Defining a function with multiple parameters

Functions can take multiple parameters.  Each parameter must be separated from another by a comma.  

```javascript
    // Add two integers
    // function definition
    function sum(a, b) {
        return a + b;
    }

    var x = 6;
    var y = 2;

    // function calls
    var xPlusY = sum(x, y); // xPlusY will now hold the value 8
    var sumWithNumbers = sum(2, 3); // sumWithNumbers will now hold the value 5
    var bigSum = sum(44, 33); // bigSum will now hold the value 77

    console.log(xPlusY) // will print 8 to the console
    console.log(sumWithNumbers) // will print 5 to the console
    console.log(bigSum) // will print 77 to the console
```

## Functions on Integers
```javascript
    // Subtract two integers
    function subtract(a, b) {
        return a - b;
    }
```
``` javascript  
    // Multiply two integers
    function multiply(a, b) {
        return a * b;
    }
```
```javascript
    // Divide two integers
    function divide(a, b) {
        return a / b;
    }
```

How would you call the above functions?

But what if you want to perform functions on numbers that aren't integers?!  Don't worry; Javascript lumps integers and decimal numbers together in one `number` data type, so your functions will still work if you give them arguments that aren't whole numbers.


## Functions on Strings
Functions may perform actions upon Strings as well.

```javascript
    // print uppercase version of string

    // function definition
    function shoutToConsole(phrase) {
        console.log(phrase.toUpperCase());
    }

    var phrase = 'i am mighty.'
    // function call
    shout(phrase); // the console will display  "I AM MIGHTY."
```
```javascript
    // print lowercase version of string

    // function definition
    function whisperToConsole(phrase) {
        console.log(phrase.toLowerCase());
    }

    //function call
    whisper('I AM SMALL'); // the console will display the string 'i am small'
```

```javascript
    // append an exclamation point to the end of a string

    //function definition
    function exclaim(phrase) {
        return phrase + '!';
    }

    var phrase = 'Avast, ye mateys';
    // function call
    var exclamation = exclaim(phrase); // returns the string 'Avast, ye mateys!'
    console.log(exclamation); // after it is returned, we can print it
```

**Note:** When naming Javascript functions, it is best practice to
 use camelCase if multiple words are used in the title.
 This helps with readability, much like the case with
 variable and file naming conventions.

> **Bad Naming (doesn't follow convention):**
>
> * `Squarethesenumbers()`
> * `CONVERTTOBINARY()`
> * `pythagoreantheorem()`
>  
> **Good Naming (follows convention):**
>
> * `hexToBinary()`
> * `determineRootVariant()`
> * `deployPhaserTorpedos()`

```javascript
    // convert spaces to dashes in a phrase

    // function definition with good naming
    function spacesToDashes(phrase) {
        return phrase.replace(/ /g, "-");
    }

    var phrase = "Dash is also a great API lookup tool!";
    // function call
    var dashedPhrase = spacesToDashes(phrase); //returns 'Dash-is-also-a-great-API-lookup-tool!'
    console.log(dashedPhrase);
```

In the case of the function spacesToDashes, the name describes the function and is in lowerCamelCase (first word not capitalized, other words capitalized with no spaces).



## Functions on Booleans
Functions are able to receive and return boolean values.  Functions that return boolean values are commonly used to check the states of variables and whether conditions are met.

> **Note:** It is best practice to name functions with boolean return values with a prefix of 'is', 'has', or 'can.'
>
> * isEven()
> * isPrime()
> * hasCheezburger()
> * canItBlend()
>
> This will let the programmer know that the return value of the function will be a boolean value.  It also increases the readiblity of the code.

### Function with boolean value as a parameter
```javascript
// outputs a statement based on boolean value
function hasCheezburger(answer)){
    if (answer === true) {
        console.log("Can I haz ur Cheezburger?");
    } else {
        console.log("Y no Cheezburger?");
    }
}
var answer = true;
hasCheezeburger(answer); // Can I haz ur Cheezburger?
```

### Function with boolean return value
```javascript
// checks if number is greater or less than 5
function isGreaterThanFive(number){
    if(number > 5) {
        return true;
    } else {
        return false;
    }
}

var number = 3;
var result = isGreaterThanFive(number);
console.log(result); // false;
```
The above function has two return statements.  Since both are within an `if / else ` statement, only one will apply to the condition.  **Once a return statement is executed, the function ends.**  This ensures that only one return statement can be executed per function.  

*A function may have multiple possible return statements but only one may be executed at any one given function call.*


# Function Scope
A variable that is declared outside a function definition is a **global** variable, and its value is accessible and modifiable throughout your program. A variable that is declared inside a function definition is **local**.

Functions can access and modify global variables at will.  A program cannot access a function's local variable, however.  By nature, variables declared and defined within a function are created and destroyed as soon as the function starts and stops.  The local variable's data would be impossible to depend on from a source outside of the function.  

```javascript
/* banana is a global variable and can be accessed by all functions within the file */
var banana = 1;

/* This function will change the global variable `banana` */
function sliceBanana(slices){
    banana = slices;
}

sliceBanana(4);
console.log(banana); // will display 4 in the console
```

```javascript
function multiplyBySix(x){
    /* mult is a local variable and can only be accessed and altered within the function */
    var mult = 6;
    x = x * mult;
    return x;
}

console.log(multiplyBySix(4));
=> 24

/* Attempting to display a local variable outside of its scope will return an undefined */
console.log(mult);
=> Uncaught ReferenceError: mult is not defined!!! So Bad!!!!
```

## The keyword `this`

`this` is a very common word in english with a somewhat vague meaning. In javascript, `this` is a common and important concept related to scope, but distinct from it. As [Ryan Morr mentions in this blog post](http://ryanmorr.com/understanding-scope-and-context-in-javascript/):

>Every function invocation has both a scope and a context associated with it. Fundamentally, scope is function-based while context is object-based. In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of the `this` keyword which is a reference to the object that “owns” the currently executing code.

In most of the functions we'll be writing early on, the object that "owns" the currently executing code will be the `Window` object.

![image](https://cloud.githubusercontent.com/assets/6520345/17747683/bd2a0264-646a-11e6-9d73-846f68642379.png)


Later on, we'll learn how to build our own objects that contain their own functions called *methods*. In those cases, `this` will refer to the object that "owns" those functions.

```javascript
// below, this refers to the shape object so you can access its properties
var shape = {
  width: 12,
  height: 400,
  getArea: function(){
    return this.width * this.height;
  }
}

```


## Independent Practice
Refine the skills covered in this workshop with some [Function Training](https://github.com/SF-WDI-LABS/functions-exercises).

# Closing Thoughts
- You should now know the difference between defining and calling a function, you should be able to write functions that return values.
- Soon, you'll learn more about JavaScript objects and how they relate to JS functions. You'll see that you can use *constructor functions* to generate objects.
- You're going to be writing functions from here on out! Get used to thinking of them as nice containers of functionality that can be reused over and over.

## Additional Resources
- [Eloquent JavaScript's Functions chapter](http://eloquentjavascript.net/03_functions.html)
- [MDN's introduction to functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions)
- [Details about scope, context, and `this`](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
