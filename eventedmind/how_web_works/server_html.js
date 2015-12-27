var http = require('http')

http.createServer(function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<html><body><h1>Hello World!</h1></body></html>\n')
}).listen(3000)

console.log('http server listening on http://localhost:3000');

/**
 * how_web_works|master⚡ ⇒ curl -i http://localhost:3000
 HTTP/1.1 200 OK
 Content-Type: text/html
 Date: Sun, 27 Dec 2015 10:50:26 GMT
 Connection: keep-alive
 Content-Length: 48

 // http request, http response, 여기 Text, 브라우저가 parse함 -> rendering
 <html><body><h1>Hello World!</h1></body></html>
 */
