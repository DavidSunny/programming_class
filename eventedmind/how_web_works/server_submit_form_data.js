var http = require('http')
var fs = require('fs');

function printRequest(req) {
  console.log('*****************');
  console.log(req.method + " " + req.url);
  console.log('*****************');

  // header 출력
  for(var key in req.headers) {
    console.log(key.toUpperCase() + " " + req.headers[key]);
  }

  // nodejs를 이용해서 body 출력
  req.on('data', function (chunk) {
    console.log("")
    console.log(chunk.toString())
  })

  req.on('end', function () {
    console.log('********End***********')
  })
}

http.createServer(function (req, res) {
  printRequest(req)

  switch (req.url) {
    case '/':
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.setHeader('Set-Cookie', 'shoppingcart=item1, item2')
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
    //case '/submit':
    //  res.statusCode = 200
    //  res.setHeader('Content-Type', 'text/html')
    //  var content = fs.readFileSync('app/app.html')
    //  res.end(content + '\n')
    //  break
    case '/submit':
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.setHeader('Content-Type', 'text/html');
      res.end();
      break
    default:
      res.statusCode = 404;
      res.statusMessage = "Not Found";
      res.end();
    // body에 key=value
  }
}).listen(3000)

console.log('http server listening on http://localhost:3000');
