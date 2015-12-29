// Function Closures
// You can create new scopes
// using a function closure.

//myFunction = function () {
//  console.log(myVariable);
//};

//outerFunction = function () {
//  var myVariable = 'Some Value';
//
//  return myFunction = function () {
//    console.log(myVariable);
//  };
//};

outerFunction = function () {
  var a = 10;

  return myFunction = function () {
    var b = 20;
    debugger;

    return a + b;
  };
};

func = function () {
  var a = 1;
   return function () {
     var b = 2;

     return function () {
       var c = 3;
       console.log(c + b + a );
       debugger;
     }
   }
};

// create scopes => closures
// scope variables
// 1) local scope : first object in lookup chain
// 2) 있으면 closure
// 3) closure..
// 4) global scope or window

result = (function () {
  var value = 0;

  return {
    value : function () {
      debugger;
      return value;
    },

    increment : function () {
      return ++value;
    }
  }
}());