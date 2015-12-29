add = new Function('a', 'b', 'return a + b;');

//function anonymous(a,b
//  /**/) {
//  return a + b;
//}
// add(2, 3) => 5

// 1) heap
// 2)
// create time
// call time

//add = function (a, b) { // literal syntax , function expression
//  return a + b;
//}

// runtime시 사용할 수 없음
// 호이스팅 됨
//function add (a, b) {
//  return a + b;
//}

//add = function (a, b) {
//  return a + b;
//};
//
//add.sayHello = function () {
//  return 'hello';
//};

Function.prototype.log = function () {
  // 아래 원래 익명 함수 , 함수객체 add
  var func = this;

  return function () {
    console.log('Logging message');

    return func.apply(this, arguments);
  }
};

add = function (a, b) {
  return a + b;

}.log();


// 이 강의로 function object 개념을 이해할 것

// 순서 다시 정리
// 1) create
// 2) objects heap
// 3) prop setting
// 4) inherits