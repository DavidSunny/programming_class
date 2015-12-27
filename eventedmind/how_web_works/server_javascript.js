var http = require('http')

http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end('<html><body><h1>Hello World!</h1></body></html>\n')
      break
    case '/app.js':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/javascript')
      res.end('console.log("hello world");\n');
      break
  }
}).listen(3000)

console.log('http server listening on http://localhost:3000');

/**
 * how_web_works|master⚡ ⇒ curl -i http://localhost:3000/app.js
 HTTP/1.1 200 OK
 Content-Type: text/javascript
 Date: Sun, 27 Dec 2015 11:39:33 GMT
 Connection: keep-alive
 Content-Length: 28

 console.log("hello world");
 how_web_works|master⚡ ⇒
 */
