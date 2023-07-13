var http = require('http');
var upper=require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(upper.upperCase("Vasu Parsaniya"));
  res.end();
}).listen(8080);

// console.log("HelloWorld!");