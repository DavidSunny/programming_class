// What is a Runtime?
//
//  In this video I'll introduce The JavaScript Runtime class.
// A runtime is the code that runs our code. In NodeJS or the Chrome browser,
// the runtime is written in C++ in a project called V8. In this class
// you'll learn about the p
// arts of the runtime that affect our application code.

// 이건 글로벌로 선언되지 않음
// var로 지역변수로 선언한 것과 마찮가지
//function sayHello() {
//  debugger;
//  console.log('Hello!');
//}

// runtime시 인자들을 take한다.
// call stack에 보내짐
sayHello = function sayHello () {
  debugger;
  console.log('Hello!');
};

tryEventLoop = function tryEventLoop () {
  console.log('putting function on the task queue');
  setTimeout(function () {
    console.log('task executed about 2 seconds later');
  }, 2000);
};

// app (js) -> chrome developer (c++) -> V8 (c++) : compiles, runtime
// Metoeer : app (js) -> meteor (js) -> nodejs (c++) -> V8 (c++)

// What is V8?
//  V8 is Google's open source high-performance JavaScript engine,
// written in C++ and used in Google Chrome,
// the open source browser from Google.
// It implements ECMAScript as specified in ECMA-262,
// and runs on Windows XP or later, Mac OS X 10.5+,
// and Linux systems that use IA-32, ARM or MIPS processors.
// V8 can run standalone, or can be embedded into any C++ application.