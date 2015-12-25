var http = require('http');

var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Welcome to Node Essential Training\n');
};

var server = http.createServer(handleRequest);

// 브라우저에서 localhost:3000에 접속하면
// Welcome to Node Essential Training
// 위 메시지를 볼 수 있을 것이다.

server.listen(3000, 'localhost');

/**
 * console.log('server: ', server);
 *server:  Server {
  domain: null,
  _events:
   { request: [Function],
     connection: [Function: connectionListener],
     clientError: [Function] },
  _eventsCount: 3,
  _maxListeners: undefined,
  _connections: 0,
  _handle: null,
  _usingSlaves: false,
  _slaves: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  _pendingResponseData: 0 }
 *
 *
 *
 */