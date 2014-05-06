/**
* Created with codio.test.
* User: gosa
* Date: 2014-05-06
* Time: 10:40 AM
* To change this template use Tools | Templates.
*/
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);
console.log('Server running at port 3000');