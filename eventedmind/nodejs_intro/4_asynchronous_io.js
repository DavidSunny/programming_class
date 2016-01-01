// Asynchronous IO
//
// Asynchronous IO let's us read or write files and network sockets
// in parallel with the rest of our code. All we have to do is
// provide a callback function. Learn how to use asynchronous
// functions by playing with the writeFile and readFile methods
// of the fs module. Provide a callback that takes an error
// and result parameter.

// 에이싱크로너스 아이오(input output)
// TCP request, HTTP(web server)

// Nodejs
// -> single threaded
// -> single process : computing process가 한번에 오직 한번 실행
// 복수의 node 프로세스를 시작하지 않는다면..

// 노드제이에스에서 I/O는 디폴트로 비동기다.
// fs에서 올바른 파일이라면 예외는 없다.

var sayHello = require('./4_hello.js');
var fs = require('fs');

// writeFile call 되는 즉시 곧바로 다음으로 권한 넘김
//fs.writeFile('./4_hello.txt', sayHello(), function (err, result) {
//  console.log('done writing the file');
//});

//fs.readFile('./4_hello.txt', function (err, result) {
//  if (err) return console.error(err);
//
//  console.log(result.toString());
//});

//var returnValue = fs.readFile('./4_hello.txt', function (err, result) {
//  if (err) return console.error(err);
//
//  console.log(result.toString());
//});
//
//// undefined
//console.log(returnValue);

// file을 완전히 read해서 메모리로 보내까지 기다림
var returnValue = fs.readFileSync('./4_hello.txt');

// undefined
console.log(returnValue.toString());


console.log('made the writeFile call');

// 출력 순서
//made the writeFile call
//done writing the file

// 동기버전 메서드와 비동기버전 메서드가 있음(nodejs 디폴트)
