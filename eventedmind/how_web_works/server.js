var http = require('http')

http.createServer(function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
}).listen(3000)

console.log('http server listening on http://localhost:3000');

