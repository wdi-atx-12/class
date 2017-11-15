[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Classes in Python

### Objectives
* Understand difference between objects and classes
* Understand how classes are defined
* Understand how objects are initialized
* Understand instance variables and instance methods
* Understand class variables and class methods
* Utilize the `self` keyword
* Understand method chaining in a class

### Resources
Fork or clone this repo to gain access to a complete working end-product of
the examples in this lesson:

https://github.com/wdi-atx-11/python-class-examples

## Classes
Python is an object oriented language. Object oriented languages allow us to
create things that act like physical objects in our day-to-day lives. Every day
we interact with objects like chairs, beverages, and CDs. These objects have
properties that define them, and they have things we can do with them.

If I were to describe the properties that make up coffee I drink I would say
each cup of coffee I drink has a `capacity`, a current `amount`. There's also
things I an do with each cup of coffee I drink. I can `fill` my cup. I can
`empty` my cup. I can `drink` some of my coffee. Python classes allow us to
model the properties of my coffee and define how I can interact with my coffee.

I'm not the only person who drinks coffee. A good class definition models what
a cup of coffee is for everyone. Then, we can use the class definition to create
**instances** of the class so I can my coffee, Sean can have his coffee and Brandi
can have her Coffee. Each **instance** of the coffee class can have a different
`capacity`, and keep track of different `amounts`. Although our coffees have
different properties the properties are affected by actions like `fill`, `empty`,
and `drink` similarly.

Here's what a Coffee class would look like in Python:

```python
class CoffeeCup():
  def __init__(self, capacity):
    self.capacity = capacity
    self.amount = 0

  def fill(self):
    self.amount = self.capacity

  def empty(self):
    self.amount = 0

  def drink(self, amount):
    self.amount -= amount
    if (self.amount < 0):
      self.amount = 0
```

The `CoffeeCup` is a collection of variables and methods. The variables in
this class are `self.capacity` and `self.amount`. The methods in this class
are `fill`, `empty`, and `drink`. The `__init__` method is a special method
Python executes when a new cup of coffee is created.

The `self` keyword is similar to the `this` keyword in JavaScript. The `self`
keyword allow each instance of a `CoffeeCup` to know what it's own capacity is
and what it's own current amount is.

Create instances of a class by calling `ClassName()`. This invokes the
`__init__` method. You can pass parameters to it too, `ClassName(param1, param2)`.

Here's how Steve, Sean and Brandi could each have their own cup of coffee. Let's
assume the `capacity` and `amount` units are all in ounces.

```python
steves_cup = CoffeeCup(12)  # a fancy latte.
seans_cup = CoffeeCup(16)    # gas station drip.
brandis_cup = CoffeeCup(2)  # a quick espresso.
```

Each of our cups start empty and have their own capacity. Let's fill the cups,
have everyone take a 1 ounce drink, and print the amount left in each cup.

```python
steves_cup.fill()
seans_cup.fill()
brandis_cup.fill()

steves_cup.drink(1)
seans_cup.drink(1)
brandis_cup.drink(1)

print(steves_cup.amount, "ounces left")
print(seans_cup.amount, "ounces left")
print(brandis_cup.amount, "ounces left")
```

That's the basics of how to create and interact with objects in Python!

## Sidenote: Class Methods and Class Properties

Class methods are like `static` methods in other languages. They are useful for tracking meta-information or utility functions related to the class itself (as opposed to being used on individual instances of a class).

```python
class Widget():
  count = 0

  def __init__(self):
    Widget.count += 1
    self.num = Widget.count

  def say_hi(self):
    print('I\'m widget number {}'.format(self.num))

  @classmethod
  def say_num_items(cls):
    print('There are {} Widget instances'.format(cls.count))
```

The above class will keep track of the number of instances of the class that get created. You can then access methods defined with the `@classmethod` decorator directly on the class name.

```python
# create instances
a = Widget()
b = Widget()
c = Widget()
d = Widget()

# call instance methods
a.say_hi() # "I'm widget number 1"
c.say_hi() # "I'm widget number 3"

# access class methods/properties
Widget.say_num_items() # "There are 4 Widget instances"
print(Widget.count) # 4
```

## Sidenote: Private Methods

Methods prefaced by two underscores (`__`) are private and cannot be accessed outside the class definition.

```python
class ShyPerson():
  def __init__(self, name):
    self.name = name

  def __introduce_self(self):
    print('Hi! My name is {}!'.format(self.name))

  def have_a_drink(self):
    print('{} had something to drink.'.format(self.name))
    self.__introduce_self()
```

When you create an instance of the class above, you will not be able to invoke the `__introduce_self` method directly. However, when you invoke the `have_a_drink` method, it will internally call the private `__introduce_self` method.

```python
chris = ShyPerson('Chris')

# THIS WILL THROW AN ERROR!
chris.__introduce_self() # BAD

# __introduce_self will get called internally when this runs
chris.have_a_drink()
```

## Packages and Modules

A module is a file containing Python definitions and statements. Modules allow us to write code in a reusable manner, any code within modules are loaded once and cached into `.pyc` files as bytecode.

A Package in Python is just a directory with an `__init__.py` file in it. The file can be empty. Packages help us organize our code another level above just using modules.

```
.
├── __init__.py
├── coffee_test.py
└── lib
    ├── __init__.py
    └── coffee
        ├── __init__.py
        ├── coffee_cup.py
        ├── espresso.py
```

```python
# lib/coffee/coffee_cup.py
class CoffeeCup():
  def __init__(self, capacity):
    self.capacity = capacity
    self.amount = 0

  # etc... etc...
```

```python
# coffee_test.py
from lib.coffee.coffee_cup import CoffeeCup

chris_cup = CoffeeCup(12)
britney_jo_cup = CoffeeCup(16)

chris_cup.fill()
britney_jo_cup.fill()

print(chris_cup.amount)
print(britney_jo_cup.amount)

# etc... etc...
```

## Exercise: Create Your Own Class
Write a `BankAccount` class.
* Bank accounts should be created with the `type` of account (like "savings" or "checking").
* Each account should keep track of it's current `balance`.
* Start each account with a `balance` set to zero.
* Add a `deposit` method, which adds to the `balance`, prints a message about the transaction, and returns the new balance.
* Add a `withdraw` method, which substracts from the `balance`, prints a message about the transaction, and returns the amount withdrawn from the account.

Create a "checking" account and a "savings" account. Withdraw money from the savings account and deposit that amount into the checking account.

Bonus: start each account with an additional `overdraft_fees` property that starts at zero. If a call to `withdraw` ends with the `balance` below zero
then `overdraft_fees` should be incremented by twenty.

## Default Parameters
Python allows us to provide default values for parameters in any function we
provide. Let's write a `Point` class that has `x` and `y` variables. If no
`x` and `y` values are provided when a `Point` is initialized `x` and `y`
should both default to zero.

Add a method called `distance` that calculates and returns the distance between
the current point and the origin. Use the mathematical distance formula where
the distance between a point and the origin is defined as the square root of
(x*x + y*y).

Use Python's exponent `**` operator to calculate square root. `9 ** .5 == 3.0`

## Printing Objects
Ever tried to have Python print an object? It's nasty. If you try to print an
object Python will print a representation of the object where you'll see what
type of an object it is and it will show you a number representing something
about where the object exists in memory, which we don't care about.

```python
print(p0)
<__main__.Point object at 0x107335630>
```

We can write a special method `__str__` that Python will call when an
object is printed or turned in to a string. Customizing this method in our
classes makes our programs much easier to interact with.

Notice that Python goes out of it's way to improve the readability of code.
Any method that looks like `__init__` or `__str__` with underscores has a
special purpose in the language. Python uses the underscores to make it
immediately clear that *this is where the magic happens!*

Let's define a `__str__` method in our `Point` class that will print out
points like we're used to seeing points. `p0` in the example above should
appear as "(0,0)" and `p2` in the example above should appear as "(3,4)".

```python
class Point():
  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y

  def __str__(self):
    return "({},{})".format(self.x, self.y)

  def distance(self):
    return (self.x ** 2 + self.y ** 2) ** .5
```

Now we can create points and when we print those objects we see something
pretty printed instead of the garbly-goop we saw before.

```python
p0 = Point()
p2 = Point(3, 4)

print(p0)
(0,0)

print(p2)
(3,4)
```

## Class Variables
In our `CoffeeCup` example and the `BankAccount` example and in our `Point`
example each class has variables attached to the `self` property that exist
independently for each object that's created. We can also attach variables
to the class itself so that there's one single thing that exists for an entire
class. These are called **class variables**.

For the `Point` class we'll create a class variable to represent `ORIGIN`.
Class variables are available even without creating any instances of a class.
We'll be able to write code that references `Point.ORIGIN` by itself.

Change the `distance` method to accept a reference to a second Point as an
optional parameter. The second point parameter should have a default value
of `None`. We will write an if statement to detect when p2 is `None` and
set it to `Point.ORIGIN` instead.

It's hard to reference the `Point` class in the class definition itself because
it hasn't finished being created yet. We'll attach `ORIGIN` to the `Point`
class after it's defined.

```python
class Point():
  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y

  def __str__(self):
    return "({},{})".format(self.x, self.y)

  def distance(self, p2=None):
    if p2 is None:
      p2 = Point.ORIGIN
    dx = self.x - p2.x
    dy = self.y - p2.y
    return (dx ** 2 + dy ** 2) ** .5

# attach ORIGIN after the Point class is defined
Point.ORIGIN = Point()
```

```python
# we can access ORIGIN through the Point class.
print(Point.ORIGIN)
(0,0)

p1 = Point(3,4)
p2 = Point(3,19)

# Distance defaults to calculating how far away a Point is from ORIGIN
p1.distance()
5.0

# Distance will calculate the distance from one point to another if a
# a second Point is provided as a parameter.
p1.distance(p2)
15.0
```
