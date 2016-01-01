// Built-In Modules
//
// Node.js comes with several built-in modules that provide
// a ton of functionality like writing files and creating servers.
// Learn how to use these built-in modules
// and understand their documentation.
// Each module has a stability level,
// list of functions and examples of how to use the methods.

// 2가지 모듈 사용
var sayHello = require('./3_hello.js');
var fs = require('fs');

fs.writeFile('./3_hello.txt', sayHello());
