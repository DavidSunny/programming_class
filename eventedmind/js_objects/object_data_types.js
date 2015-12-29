// var keyword : 없으면 글로벌 변수
// identifier : name ,
// Dynamic Typing (어떤 값으로든 redefine)
// 1) primitive types
// 특징
// immutable (value을 변경 불가)
// 메모리에서 stack 영역에 쌓이는? 값 복사 (고정)
// __proto__ 이게 없음, 참조 값이 아님

// var str = "hello";
//str[0]
//"h"
//str[0] = 'W'
//str[0]
//"h"
//str
//"hello"

// assigning : 할당

myString = 'My String';
myNumber = 5;
myBoolean = true; // false
myNull = null;
myUndefined = undefined;

// 2) object type : mutable value
myObject = {};

// array 'object' type
myArray = [];

// function type
myFunction = function () {};

// custom constructed objects
myDate = new Date;