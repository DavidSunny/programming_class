//The Spread Operator
//
// The new spread operator saves a lot of time by letting us go back
// and forth between arrays and positional arguments.
// In many cases it replaces the need to use the apply method of functions.
// It also enables a common use case of accepting an anonymous number of
// positional arguments.

playWithSpread = function (a, b, ...rest) {
  console.log(a, b, rest);
};

//playWithSpread(1, 2, 3, 4, 5);

let args = [1, 2, 3];
playWithSpread(...args);
// apply 쓰고 this 해당 함수 {} 를 bind하고 배열을 인자로 넘기는 일을 간단하게 처리
//playWithSpread.apply(this, args);