//Programs and Modules
//
//You run one main Node.js file - your program.
// The program then requires other modules that it needs for functionality.
// So modules are a way of organizing code.
// Modules are separate JavaScript files that can export a function
// or an object of function properties.
// In this video you'll learn how to require a module by file path.
// Then you'll see how to require and use a built-in module
// like the fs filesystem module.

// 컨벤션상 index.js (or app.js) - run program (main javascript file)

// export 안했는데도 콘솔로그 출력
//require('./2_hello');

//var sayHello = require('./2_hello').sayHello;

var sayHello = require('./2_hello');

sayHello();
