// Introducing Scope
//
// Understanding scope is critical to understanding many JavaScript
// patterns. In this video I'll show you a few examples of where scope
// is used, and how to think about scope.

// Scope는 변수를 look-up한다.
// 여기서 a, b

var a = 10;

function add () {
  var b = 20;
  return a + b;
}
// IIFE
(function () {
  // dynamically scoped: add 함수의 변수 a가 적용되지 않음
  var a = 20;
  var result = add ();
  console.log('result: ', result);
}());

// Scope look-up process는 prototype look-up 프로세스와 유사함

// 1) 자바스크립트의 Lexically scoped
// static scoped