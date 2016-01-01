// The npm Package System
//
// Node.js gives us the module system. But we still need
// a way to publish and use modules built by other people.
// The npm package system is a server and command line tool.
// The server hosts almost 200,000 packages written
// by people around the world.
// The command line tool lets us use these packages
// and even publish our own.
// In this video we'll install the express web framework package.
// You'll see where the package is installed and how we can use
// it in our main program.

// npm install express
// local install
// 현재 경로부터 node_modules 폴더를 찾는다.

// 3가지 require
// 우리가 직접 만든 파일 모듈
// bulit-in (core) module
// npm module

var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
  res.end('hello world\n');
});

//~|master⚡ ⇒ curl -i http://localhost:3000
//  HTTP/1.1 200 OK
//X-Powered-By: Express
//Date: Fri, 01 Jan 2016 09:17:08 GMT
//Connection: keep-alive
//Content-Length: 12
//
//hello world

app.listen(3000);

console.log('express app listening on localhost:3000');

// npm install 하면 모든 dependencies 한번에 설치

// npm init 엔터엔터엔터..
// => package.json 생성

// npm install express --save 했는데
// express는 devDependencies에 안되네..
// It won't do anything if you don't have a package.json file.
// Start by running npm init to create one.
// Then calls to npm install --save
// or npm install --save-dev or npm install --save-optional
//
// will update the package.json to list your dependencies.


