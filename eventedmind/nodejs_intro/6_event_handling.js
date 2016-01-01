// Event Handling
//
// Classes in Node.js can be "Event Emitters" which means
// we can listen and respond to certain events,
// just like we can in browser programming.
// For example, the http class provides a connection event
// that we can attach listeners to.
// In this example we'll attach an event listener for the connection event.
// Then we'll attach an event listener to the finish event of the response.


var http = require('http');

var server = http.createServer(function (request, response) {
  //Event: 'finish' 이벤트 핸들러 등록: function () {}
  //Emitted when the response has been sent.
  response.on('finish', function () {
    console.log('finished with the response');
  });

  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('hello world\n');
});

//nodejs_intro|master⚡ ⇒ node 6_event_handling.js
//listening on localhost:3000
//we have a connection
//finished with the response


// 콜백함수는 이벤트 핸들러
// 미래에 이벤트가 언제 발생해도 계속 subscribe 하고 있다.
server.on('connection', function (socket) {
  console.log('we have a connection');
});



server.listen(3000);

console.log('listening on localhost:3000');