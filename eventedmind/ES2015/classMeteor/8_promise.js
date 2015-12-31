// Promises

// Promises give us a nicer API for working with asynchronous functions.
// Instead of passing callbacks that get called at a later time,
// we can use the "then" method of the promise.
// You can even chain together many "then" calls.
// In this video we'll implement a sleep method
// that works with promises to return a result at a later time.

// Nodejs에서도 I/O(Input/Output 메서드들) 이것 또한 비동키
//setTimeout(function () {
//    console.log('hi');
//}, 2000);

//sleep = function (ms, callback) {
//  setTimeout(function () {
//    callback('result!');
//  }, ms);
//};
//
//sleep(5000, function (result) {
//  console.log(result);
//});

//sleep = function (ms, callback) {
//  setTimeout(function () {
//    callback('result!');
//  }, ms);
//};
//
//sleep(5000, function (result) {
//  console.log(result);
//});

//sleep = function (ms) {
//  let promise = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//      resolve('result!');
//    }, ms);
//  });
//
//  return promise;
//};

//promise = sleep(2000);

// console.log(promise)
// Promise
//__proto__: Promise
//  [[PromiseStatus]]: "resolved"
//  [[PromiseValue]]: "result!"

//promise.then(function(result) { console.log(result); });
//Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
//__proto__: Promise
//  [[PromiseStatus]]: "resolved"
//  [[PromiseValue]]: undefined

//promise.then(function(result) {
//  console.log(result);
//});
//
//sleep(2000)
//  .then((result) => { console.log(result); })
//  .then((result) => { console.log(result); });


//sleep(2000)
//  .then((result) => {
//    console.log(result);
//    return 'new value'; // brand new promise
//  })
//  .then((result) => { console.log(result); });

//sleep(2000)
//  .then((result) => {
//    console.log("1: ", result);
//    return sleep(5000);
//  })
//  .then((result) => { console.log("2: ", result); });


//sleep = function (ms) {
//  let promise = new Promise(function (resolve, reject) {
//    setTimeout(function () {
//      reject("OMG it's an error!");
//    }, ms);
//  });
//
//  return promise;
//};
//
//sleep(2000)
//  .then((result) => sleep(1000), (reason) => console.log(reason) );

//sleep(2000
//  .then((result) => sleep(1000))
//  .then((result) => console.log("2: ", result))
//  .catch((err) => console.log("error: ", err));




sleep = function (ms) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("result");
    }, ms);
  });

  return promise;
};

// 둘다 완료될때까지 기다림
Promise.all([sleep(1000), sleep(2000)])
  // all done:  ["result", "result"]
  .then((result) => console.log("all done: ", result));

// 먼저 완료되는게 있으면 먼저 리턴, 나머지는 수행하지 않음
Promise.race([sleep(1000), sleep(2000)])
   //  Both resolve, but 1 is faster, 결과 하나만 받음
   // result, undefined
  .then((result) => console.log("the race is won!: ", result))
  .then((result) => console.log("the race is won!: ", result));

 //"the race is won!" 이 먼저 출력 됨!
