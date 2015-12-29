/************************************
 * Static Scoping
************************************/

var x = 10;

function foo () {
  // What value of x is used here?
  console.log('x: ', x);
};

(function () {
  var x = 20;

  // What about now?
  foo();
}());

/************************************
 * Creating Closures
 * new scope
 ************************************/

function baz () {
  // x는 create 타임시에만 visible
  var x = 1;

  return {
    foo: function foo () { return ++x; },
    bar: function bar () { return --x; }
  }
};

objectWithClosure = baz();

console.log('foo: ', objectWithClosure.foo());
console.log('bar: ', objectWithClosure.bar());

/************************************
 * The Looping Problem 
 ************************************/

// Bad!!
var data = [];
for (var k = 0; k < 3; k++) {
  data[k] = function () {
    console.log('k: ', k);
  };
}

data.forEach(function(x) {
  x(); // 3, 3, 3
});


// Good!!
var data = [];
for (var k = 0; k < 3; k++) {
  data[k] = (function (x) {
    return function () {
      console.log('x: ', x);
    };
  }(k));
}

data.forEach(function(x) {
  x(); // 0, 1, 2
});

/************************************
 * Binding Functions
 ************************************/

// The bind() method creates a new function that,
// when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided
// when the new function is called.

// Syntax : fun.bind(thisArg[, arg1[, arg2[, ...]]])

// Parameters

// 1) thisArg
// The value to be passed as the this parameter to the target function
// when the bound function is called.
// The value is ignored if the bound function is constructed
// using the new operator. (new 생성자 함수를 통해 생성된 함수면... 무시됨)

// 2) arg1, arg2, ...
// Arguments to prepend to arguments provided to the bound function
// when invoking the target function.

function bind (func, thisArg) {
  return function () {
    return func.apply(thisArg, arguments);
  }
}

sayHello = function () {
  return 'Hello' + ' ' + this.name;
};

var boundFunc = bind(sayHello, { name: 'Chris' });

console.log('sayHello: ', boundFunc());
