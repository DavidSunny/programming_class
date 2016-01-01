// Build a Simple HTTP Server
//
// One of the cornerstone Node.js examples is to spin up a simple http
// server. It's the http foundation for higher level frameworks
// like Express or Meteor. In this video we'll create
// a simple http server using the http module and the createServer method.
// Then we'll send it some test requests using the curl program.

var http = require('http');

// res, req 모두 자바스크립트 객체
//var server = http.createServer(function (request, response) {
//  // callback
//  response.end('hello world\n');
//});

//~|master⚡ ⇒ curl -i http://localhost:3000
//  HTTP/1.1 200 OK
//Date: Fri, 01 Jan 2016 08:50:33 GMT
//Connection: keep-alive
//Content-Length: 12
//
//hello world


//// Class : http.ClientRequest 참조
//// Class: http.ServerResponse 참조
// 이벤트 종류, 메서드 종류 나와있음

var server = http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('hello world\n');
});

//~|master⚡ ⇒ curl -i http://localhost:3000
//  HTTP/1.1 200 OK
//Content-Type: text/plain
//Date: Fri, 01 Jan 2016 08:52:19 GMT
//Connection: keep-alive
//Transfer-Encoding: chunked
//
//hello world

server.listen(3000);

console.log('listening on localhost:3000');