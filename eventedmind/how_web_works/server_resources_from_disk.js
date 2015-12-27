var http = require('http')
var fs = require('fs');

http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      var content = fs.readFileSync('app/app.html')
      res.end(content + '\n')
      break
    case '/app.js':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/javascript')
      var content = fs.readFileSync('app/app.js')
      res.end(content + '\n');
      break
    case '/app.css':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/css')
      var content = fs.readFileSync('app/app.css')
      res.end(content + '\n');
      break
  }
}).listen(3000)

console.log('http server listening on http://localhost:3000');

/**
 *how_web_works|master⚡ ⇒ curl -i http://localhost:3000
 HTTP/1.1 200 OK
 Content-Type: text/html
 Date: Sun, 27 Dec 2015 12:03:06 GMT
 Connection: keep-alive
 Content-Length: 179

 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <title>Good Job</title>
 <script src="/app.js"></script>
 </head>
 <body>
 <h1>Hello World</h1>
 </body>
 </html>
 how_web_works|master⚡ ⇒ curl -i http://localhost:3000/app.js
 HTTP/1.1 200 OK
 Content-Type: text/javascript
 Date: Sun, 27 Dec 2015 12:03:12 GMT
 Connection: keep-alive
 Content-Length: 73

console.log('Hello World');
 *
 *
 */
