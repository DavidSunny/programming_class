// Creating Packages
//
// In this lesson you'll create your own package
// to learn how packages are structured.
// I'll start by creating an account on npm.
// Then I'll show you how to create a package.json file
// using the npm init command.
// Then we'll make us of name-spacing so our package name
// doesn't conflict with other packages on npm.
// Once we've given the package a little functionality
// you'll see how to use the npm link command to test it locally.

// npm login (username, pwd, email)
// mkdir packages
// cd packages
// mkdir hello
// cd hello
// npm init
// 엔터엔터엔터
// wstorm package.json


// name은 완전히 유니크해야함
// "name": "@keycode/hello", 이런식으로 네임스페이스
// index.js 파일 만들고
// npm link (심링크)
// /usr/local/lib/node_modules/@keycode/hello
// -> /Users/mac/workspace/nodejs/programming_class/eventedmind/nodejs_npm/packages/hello

// app 폴더로 가서
// npm link @keycode/hello
//app|master⚡ ⇒ npm link @keycode/hello
///Users/mac/workspace/nodejs/programming_class/eventedmind/nodejs_npm/app/node_modules/@keycode/hello
// -> /usr/local/lib/node_modules/@keycode/hello
// -> /Users/mac/workspace/nodejs/programming_class/eventedmind/nodejs_npm/packages/hello

// @keycode 폴더가 생성되고 그 안에 심링크된 hello 모듈이 있을 것이다.
// hello -> /usr/local/lib/node_modules/@keycode/hello

// 이렇게 하면 npm에 퍼블리쉬하는 것 없이도 로컬 머신상에서 가능

var hello = require('@keycode/hello');
hello();
