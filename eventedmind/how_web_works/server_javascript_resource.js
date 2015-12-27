var http = require('http')

http.createServer(function (req, res) {
  switch (req.url) {
    case '/':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end('<html><head><script src="/app.js"></script></head><body><h1>Hello World!</h1></body></html>\n')
      break
    case '/app.js':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/javascript')
      res.end('console.log("hello world");\n');
      break
  }
}).listen(3000)

console.log('http server listening on http://localhost:3000');