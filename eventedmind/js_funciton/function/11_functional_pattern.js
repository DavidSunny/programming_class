// Functional Patterns
//
// In this video I'll show you a few common functional patterns
// used in JavaScript including
// private scope,
// synchronous and asynchronous callbacks,
// and iterators.

/*****************************************************************************/
/* Iteration and Applying*/
/*****************************************************************************/
forEach = function (array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
};

items = ['one', 'two', 'three'];

forEach(items, function (item, idx) {
  console.log(idx + ': ' + item);
});

map = function (array, func) {
  var newArray = [];
  var result;
  for (var i = 0; i < array.length; i++) {
    result = func(array[i], i);
    newArray.push(result);
  }

  return newArray;
};

newArray = map(items, function (item, idx) {
  return item + '-new';
});

/*****************************************************************************/
/* Callbacks (Synchronous and Asynchronous) */
/*****************************************************************************/
/*
 whenDone = function () {
   console.log("I'm done!");
 };

 doWork = function (callback) {
   // do some work
   setTimeout(callback, 3000);
 };
 */

/*****************************************************************************/
/* Creating Scope */
/*****************************************************************************/
/*
 functionWithScope = (function () {
   var x = 20;

   return function () {
     console.log('Private Variable Value: ' + x);
   };
 }());
 
 functionWithScope();
 */
