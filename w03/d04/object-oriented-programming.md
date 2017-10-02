![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Object Oriented Programming in JavaScript

### Why is this important?
*This workshop is important because:*

Object oriented programming is a common pattern throughout many languages. Its patterns will enable you to write more readable, organized, and declarative programs.

### What are the objectives?
*After this workshop, students will be able to:*

- Build practical and useful objects using Javascript constructors
- Demonstrate a working knowledge of object properties and methods
- Explain how prototype properties/methods are accessed and overridden
- Design object types in JavaScript using Object Oriented Programming techniques

### Where should we be now?
*Before this workshop, students should already be able to:*

- Create and manipulate JavaScript objects 
- Write and interpret JavaScript functions

### Review
Work with a partner and write your answers.

1. What is an object? How does it hold data? What are two ways we can access things inside of an object?
2. If an object contains a function, how can we call it?
    ```javascript
    var instructor = {
      name: "Chris Johnson",
      employer: "General Assembly",
      sayHello: function() {
        console.log("Hello, my name is " + this.name);
      }
    };

    // what code would you write here to call the `sayHello` method?
    ```
3. What is the `this` keyword used for?
4. Think back to looping through an array - if you wanted to put data in your page from the following array of objects, would you be able to easily loop through it and add the URLs to the page? Why or why not?
    ```javascript
    var myArray = [
      {
        url: "www.google.com",
        description: "The searching people",
        // other data
      },
      {
        URL: "www.generalassemb.ly",
        info: "The teaching people",
        // other data
      },
      {
        link: "www.jquery.com",
        details: "The $ people",
        // other data
      },
      {
        pageUrl: "developer.mozilla.org",
        pageDescription: "The Firefox people",
        // other data
      }
    ];
    ```
5. How would you output all of the URLs from the above array?

## Constructors

For relatively straightforward and small objects, it is perfectly fine to declare them as a variable and define them. This is known as a **literal** object definition.

Here's a flower **object literal**:

```javascript
// object literal
var flower = {
    color: 'red',
    petals: 32,
    smellsGood: true
};
```

Instead, we can use the **constructor** syntax. Let's explore what a Flower constructor might look like:

```javascript
// object constructor function
// note: constructors are always capitalized by convention
function Flower() {
    this.color = 'red';
    this.petals = 32;
    this.smellsGood = true;
}
```

This constructor is actually a function that can create unique instances of flower objects every time it is called. Below, we create a new object using the constructor and store it in a variable `tulip`.

```javascript
// the `new` keyword is necessary with constructors
var tulip = new Flower();
```

Let's break down a couple concepts introduced with this new line of code:
- The capitalization of `Flower` lets everyone know that `Flower` is an object constructor. Calling `new Flower()` will return a `Flower`-type object.
- The `new` keyword tells JavaScript that we are creating a new object instance that will be independent of any other object.
- We call the `Flower` function, which creates an object with the properties from the construtor. Our object is ready to go!

![](https://cloud.githubusercontent.com/assets/3254910/17949473/5e17a92a-6a0a-11e6-90fb-2294c3d1b6e9.png)


Accessing the properties of our new `tulip` object is the same as accessing our properties from any other object: we can use either dot or bracket notation.

```javascript
console.log(tulip.color); // red
console.log(tulip.petals); // 32
console.log(tulip.smellsGood); //true
```

If we wanted to create yet **another** flower, all we have to do is call our function just like we did above. This time, lets make an object called `lily`.

```javascript
var lily = new Flower();
```

We can access the properties of `lily` in the same manner as we did with `tulip`.

```javascript
console.log(lily.color); // red
console.log(lily.petals); // 32
console.log(lily.smellsGood); //true
```

I don't know about you, but I generally like my lilies yellow. I have also never heard of a lily with 32 petals! Can we change our `lily` object to better reflect my perfect lily? You bet!

```javascript
// Changing object property values
lily.color = 'yellow';
lily.petals = 6;
```

That's more like it! To change the value of the lily object properties, we simply access them with dot or bracket notation. We then follow with a single equals assignment operator and give a new appropriate value. Couldn't be easier!

![](https://seniorhikerphotos.files.wordpress.com/2012/06/lilysarina12052301.jpg)

## Object Methods

One of the most powerful features of Javascript Objects are Methods. Methods are simply another word for functions that are built into an object. We all know and love `Array` methods like `forEach()`, `map()`, `filter()`, and `reduce()`; these are all methods of the `Array` object. We use arrays so much that JavaScript gives us the shorthand `[]` syntax to create them instead of calling the `Array` constructor with `new Array()` to make instances. Thanks, Javascript!

Lets make a simple method in the flower constructor that outputs to the console whenever we call it.

```javascript
function Flower() {
    this.color = "red";
    this.petals = 32;
    this.smellsGood = true;
    // Demonstrates a simple method in an object
    this.bloom = function() {
        console.log("Look at me!");
    };
}
```

New flower instances will now have a method inside called `bloom`.

```js
var sunflower = new Flower();
sunflower.color = 'yellow';
sunflower.bloom();
// prints out 'Look at me!'
```

<img alt="sunflowers by skyseeker on flickr" src="https://cloud.githubusercontent.com/assets/3254910/17949651/461f09f2-6a0b-11e6-96fb-31c01b5f978a.png" width="50%">

## Prototypes

Flowers can now be created with unique attributes, which is awesome. On the other hand, you may notice that all flowers could share the `bloom` method. Right now, though, each flower instance has a separate bloom method.

```javascript
var lily = new Flower();
var rose = new Flower();

lily.bloom === rose.bloom // false
```

We want their bloom methods to be the same! Next, we'll see how to avoid creating an entirely new `bloom` method every time we make a new flower. 

<img src="https://media.giphy.com/media/10nccX8vZPEeA0/giphy.gif" alt="blooming flower gif" width="50%">

By adding the method `bloom` to the constructor's **prototype** we can enable all flowers to share a `bloom` method, or any other method for that matter! Shared attributes can also be added to the prototype, but they're less common. The prototype is simply an object that can be referenced by all the flower instances.

```javascript
function Flower() {
    this.color = 'red';
    this.petals = 32;
    this.smellsGood = true;
}

Flower.prototype.bloom = function() {
  console.log('Look at me!');
}
```

Now try running the same test from above to see if both flowers share the same `bloom` method.

```javascript
var lily = new Flower();
var rose = new Flower();

lily.bloom === rose.bloom // true
```

### Benefits

- Less wasted memory
- Single source of truth

>What if we edit the prototype *after* the flower instances have been created? Will they update their behavior accordingly?

### More methods

Let's add some more methods to the flower constructor.

```javascript
function Flower() {
    this.color = 'red';
    this.petals = 32;
    this.smellsGood = true;
}

Flower.prototype.bloom = function() {
  console.log('Look at me!');
}
Flower.prototype.describeSmell = function() {
// use `this` to access the instance's attributes
  if (this.smellsGood) {
    return 'This flower smells amazing!';
  } else {
    return 'What a noxious weed!';
  }
}
Flower.prototype.describeAppearance = function() {
  console.log('This flower is ' + this.color + ' with ' + this.petals + ' petals.');
}
```
Methods can also access properties within the object with the `this` identifier rather than using dot or bracket notation.

### Check for Understanding: `wilt` and `water`
- Create a `wilt()` method that decrements a flower's petal count by one. :(
- Create a `water()` method that increments a flower's petal count by one. :)

## Independent Practice: Model Developers

Take 10 minutes to create a `Developer` constructor.

Decide on a few properties that all developers will share. Include at least one method.

...

Create 2 or more `Developer` instances with relevant values.

## Customizable Constructors

There's an issue with our constructors so far. We're creating multiple flowers, but the attributes `color`, `petals`, and `smellsGood` all start with the same values. It makes sense for these properties to be different and customizable for each flower.

Wouldn't it be nice if at the moment we instantiate a flower we could also define its properties? Refactor the `Flower` constructor to enable this code:

```javascript
var chrysanthemum = new Flower('pink', 65, false);
```

<details>
<summary>Example solution</summary>

```javascript
function Flower(color, petals, smellsGood) {
    this.color = color;
    this.petals = petals;
    this.smellsGood = smellsGood;
    this.bloom = function() {
        console.log('Look at me!'');
    };
}
```
</details>

<br/><br/><br/><br/><br/>
<br/><br/><br/>

How could we refactor the parameters that the `Flower` constructor accepts so it takes in a single object that contains all the attributes of the instance we are initializing? Refactor the constructor to enable this code:

```javascript
var options = { petals: 65, color: 'pink', smellsGood: false };
var chrysanthemum = new Flower(options);
```

<details>
<summary>Example solution</summary>

```javascript
function Flower(options) {
    this.color = options.color;
    this.petals = options.petals;
    this.smellsGood = options.smellsGood;
    this.bloom = function() {
        console.log('Look at me!');
    };
}
```
</details>

<br/><br/><br/><br/><br/>
<br/><br/><br/>

How can we make the petal count to default to 10, if not otherwise specified? Enable this code:

```javascript
var options = { color: 'pink', smellsGood: false };
var chrysanthemum = new Flower(options);
// inspect instance
console.log(chrysanthemum);
// => Flower { color: 'pink', petals: 10, smellsGood: false }
```

<details>
<summary>Example solution</summary>

```javascript
function Flower(options) {
    this.color = options.color;
    this.petals = options.petals || 10;
    this.smellsGood = options.smellsGood;
    this.bloom = function() {
        console.log('Look at me!');
    };
}
```
</details>

## Static Methods

**Pollination**
Now that we are awesome flower experts, lets try our hand at cross pollinating two flower objects. Cross pollinating is beyond the realm of an individual flower. We could create a `crossPollinate` instance method on the prototype, but we can also attach the method to the Flower constructor itself. This would capture the fact that the `crossPollinate` method isn't a behavior of one specific flower. Methods added to an object type instead of an instance are called **static methods**. These are all *meta* actions of a flower; a flower cannot create itself! 

To exemplify this, let's create a static method (also sometimes refered to as a class method) called `crossPollinate`. We'll have to set it up a little differently than the instance methods we've been making (i.e. `bloom`), because we want to add this new method directly to the `Flower` constructor object.

- The method will take two flower instances as arguments.
- `crossPollinate` will create a new flower intance that is a mix of both "parent" colors. (i.e. red, yellow = "red-yellow"; don't worry about the color wheel).
- Make the new petal count an average between the two parents' petal counts.
- The smellsGood gene is recessive, unfortunately. This means that a flower will smell pretty IF and ONLY IF both flowers smell pretty. 

```javascript
// constructor
function Flower(color, petals, smellsGood) {
    this.color = color;
    this.petals = petals;
    this.smellsGood = smellsGood;
}

// static methods
Flower.crossPollinate = function(flower1, flower2) {
    var color = flower1.color + "-" + flower2.color;
    var petals = (flower1.petals + flower2.petals) / 2;
    var smellsGood = flower1.smellsGood && flower2.smellsGood;
    var newFlower = new Flower(color, petals, smellsGood);
    return newFlower;
}

// instance methods
Flower.prototype.bloom = function() {
    console.log("Look at me!");
}
Flower.prototype.describeSmell = function() {
    if (this.smellsGood) {
        return 'This flower smells amazing!';
    } else {
        return 'What a noxious weed!';
    }
}
Flower.prototype.describeAppearance = function() {
    // Demonstrates use of local object variables
    // use `this` to access the instance's attributes
    console.log('This flower is ' + this.color + ' with ' + this.petals + ' petals.');
}

var lily = new Flower('blue', 32, true);
var rose = new Flower('green', 12, true);

var rily = Flower.crossPollinate(rose, lily);
```

### Review!

#### Constructors

Constructors **set up** new objects
- constructor names are capitalized
- used with `new` keyword to create new objects
- properties/methods assigned to `this` become properties/methods of the created objects

#### Instance variables/functions

- instances become independent after being created
- modifying properties/methods on one does not effect others

#### Prototypes

Instances of the same class share their **prototype**
- prototype properties/methods are shared by all instances--even after creation
- if you modify the prototype after an object is created, the change applies
- prototype properties/methods are implicitly referenced when looked up on an object instance

#### Static variables and functions

Variables/functions that apply directly to the **class** of object--not instances
- typically serve as "meta" information or actions about the class of object
- static variables are most often used for useful constant values
- static functions are typically utility functions related to the class, but not reliant on individual objects

### ES6 `Class` syntax

ES6 has a new feature that allows OOP in JavaScript to look more like OOP in other languages.

```js
class Flower {
    constructor(color, petals, smellsGood) {
        this.color = color;
        this.petals = petals;
        this.smellsGood = smellsGood;
    }

    static crossPolinate(flower1, flower2) {
        const color = flower1.color + "-" + flower2.color;
        const petals = (flower1.petals + flower2.petals) / 2;
        const smellsGood = flower1.smellsGood && flower2.smellsGood;
        return new Flower(color, petals, smellsGood);
    }

    bloom() {
        console.log('Look at me!');
    }

    describeSmell() {
        if (this.smellsGood) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    }

    describeAppearance() {
        console.log(`This flower is ${this.color} with ${this.petals} petals.`);
    }
}
```

It's important to keep in mind that even though this syntax looks similar to the class syntax of other OOP languages, the majority of the inner workings of JavaScript remain the same. That is, ES6 allows JavaScript to feel familiar to programmers who rely heavily on OOP, but it is still JavaScript.

### Further Suggested Resources

- [Lynda.com's "What is object-oriented language" video](https://www.youtube.com/watch?v=SS-9y0H3Si8)
- [MDN on Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [MDN on Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
