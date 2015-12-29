//Scope Follows a Function
//
// After a function is created,
// its scope follows it around until the function
// is destroyed.
// You'll see how this can be used in practice.

//var createWorker = function () {
//
//  var newFunc = function () {
//
//  };
//
//  return function () {};
//};
//
//createWorker();

//var createWorker = function () {
//  return {
//    doWork: function () {
//      console.log("I'm working it!");
//    }
//  };
//};
//
//worker = createWorker();

var createIdempotentWorker = function () {
  var isWorked = false;
  //debugger;
  return {
    doWork: function () {
      if (isWorked) {
        console.log("I'm already did it!");
        return;
      }

      isWorked = true;
      console.log("I'm working it!");
      //debugger;
    }
  };
};

callCallback = function (cb) {
  cb();
};

worker = createIdempotentWorker();
callCallback(worker.doWork);
callCallback(worker.doWork);
callCallback(worker.doWork);

anotherWorker = createIdempotentWorker();
callCallback(anotherWorker.doWork);
callCallback(anotherWorker.doWork);
callCallback(anotherWorker.doWork);