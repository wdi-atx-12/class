// The way we previously dealt with optional arguments in JavaScript was with the
// || operator:


var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place ) {
    this.location = place || "Home"
  }
}

myRide.driveTo("Walmart")
myRide.location // "Walmart"

// vs...

myRide.driveTo()
myRide.location // "Home"



// TODO: Convert the driveTo method to use correct optional parameters


// Bonus! Can you think of a way to handle falsy values and the || operator?
// with ES5 style optional arguments?
