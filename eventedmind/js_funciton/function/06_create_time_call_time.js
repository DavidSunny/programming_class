// Creating and Calling Functions
//
// Having a good picture of

// when functions are created
// vs
// when they are called

// is really important to understanding the next topic of scope.
// In this video we'll dive into a few ways to create functions
// and look at the difference between create time and call time.

//sayHello = () => {
//  return 'hello world';
//};

// top level scope
// create time
// identifier

// file이 브라우저로 전달 -> evaluating -> create {}
// return 하는 inner 함수는 create 되지 않음
// sayHello 가 호출되면 heap 메모리 영역에 create
//sayHello = () => {
//  return function inner () {
//    return 'Hello world from inner';
//  }
//};

sayHello = () => {
  var one = () => {};
  var two = () => {};

  return () => {
    return () => {
      return () => {
        return 'Hello';
      }
    }
  }
};

// outer 함수가 호출 되어야 내부 함수가 create : one에 할당될 함수, two 에 할당될 함수
// return 할 외부 함수 create..
// sayHello()

// var inner = sayHello();
// var moreInner = inner(); // 내부 함수 create
//

// Function
var inner = sayHello();
// one, two는 call time에만 scope가 살아있음
// 내부에서만 사용가능
// 외부에서 접근불가

var one = inner(); // Function
var two = one(); // Function
var three = two(); // "Hello"