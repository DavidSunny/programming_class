// Default Parameters
//
// You can now define default parameter values for functions.
// We used to do this by hand by "guarding" against null values
// and providing defaults in the body of the function.
// Now it's a lot easier to read and understand
// because the defaults can be provided right in the parameters list
// of the function.
// It even works with objects and nested object properties.

//playWithArgs = function (a, b, options) {
//  // guarding
//  a = a || "a value";
//  b = b || "b value";
//
//  options = options || {};
//
//  options.value = options.value || "my value";
//};
//
//playWithArgs = function (a = "a value", b = "b value", options = { value: "my value" }) {
//};
//
//playWithArgs();

addTwo = function (a) {
  return a + 2;
};

// calculated at call time
playWithArgs = (a, b = addTwo(a)) => {
  console.log(a, b);
};

playWithArgs(2);

