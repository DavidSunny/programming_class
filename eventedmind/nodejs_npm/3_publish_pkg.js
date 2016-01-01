// Publishing Your Package
//
// Now that we're done creating a basic package
// we'll publish it to the npm servers so others can make use of it.

// packages/hello 이동
// npm publish
// You need a paid account to perform this action.
// For more info, visit: https://www.npmjs.com/private-modules
// : @keycode/hello

// private은 유료, public은 무료

// npm publish --access public
// + @keycode/hello@1.0.0

// npm install @keycode/hello
// npm 서버에서 copy

// package.json 에서
// "@keycode/hello": "^1.1.0"
// major 버전 1. 최신이면 ok (1.0.0 밖에 없으면 ?)
// error, 1.1.0 부터 2.0.0 미만까지 버전이라는 뜻
// >=1.1.0 <2.0.0'
// 2는 안깔림

// npm install --save-dev @keycode/hello
// @keycode/hello@1.0.0 node_modules/@keycode/hello
