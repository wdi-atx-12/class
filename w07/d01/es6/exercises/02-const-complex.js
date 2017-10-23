// Does the fact that account is constant mean that we can't update password?
// Why, or why not?

const account = {
  username: "marijn",
  password: "xyzzy"
};

account.password = "s3cret";

console.log(account.password);


// Bonus: If you want to make an object so its properties can't be updated,
// use the object freeze function.

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance
