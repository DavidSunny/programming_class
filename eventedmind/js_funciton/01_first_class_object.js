var func = function () {

};
// 이건 데코레이션같은 것.. 실제로 {} 이것이 heap 영역에
// 메모리 공간 할당됨
// stack 영역의 지역변수에 할당

//func()
//func.call()
//func.apply()
//func.bind()
//func.name

//function is callable object

// first class
// 특징
// 1) "data" (객체니까)
// 2) assign
// 3) passing in args
// 4) return func

// function decoration syntax for creating func
// functionDeclaration : 이게 name
function functionDeclaration() {};

// a function expression
// functions are assigned to variables
// 여기서 name 은 "Empty" : 이런 함수를
// ananymous function (익명함수)
var functionExpression = function () {};

// function can be passed and assigned to argument variables
// like "func" below
var map = function (func) {};
map(functionExpression);


// functions can be returned from other functions
var wrapFunction = function (func) {
  // return 문이 없으면 undefined를 default로 리턴
  return function () {
    func();
  }
};

// function can have names
// 희한한게 이렇게 하면
// namedFunc() 호출이 안됨
// namedFunction() 해야함
// 그냥 프로퍼티 name : namedFunc 이렇게 됨
var namedFunction = function namedFunc () {};

// 이렇게 변수명과 함수명이 같은 경우
// stack traces 하기 좋다.
// 변수가 stack에 쌓임, 함수명이 동일
var sameFunc = function sameFunc () {};

// or they can be anonymous
var anonymousFunction = function () {};


// functions can take named on anonymous arguments
var argFunction = function (argOne, argTwo /* res ... */) {
  //arguments is Array-like objects
  console.log('arguments: ', arguments);
  // available on the "arguments" object : special keyword

  // 필요한 것만 담는다?
  // slice method can also be called to convert Array-like objects
  // collections to a new Array
  var args = Array.prototype.slice.call(arguments);
  console.log('args: ', args);
  var rest = args.slice(2);
  console.log('rest: ', rest);

  //argFunction('one', 'two', 'three')
  // arguments:  ["one", "two", "three"]
  // 0: "one"
  // 1: "two"
  // 2: "three"
  // callee:
  // (argOne, argTwo /* res ... */)
  // length: 3
  // Symbol(Symbol.iterator): function values()
  // __proto__: Object

  // args:  ["one", "two", "three"]
  // rest:  ["three"]
};

