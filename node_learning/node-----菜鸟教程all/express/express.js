//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(3000, function () {
 
  var host = server.address()
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
  console.log( host)
  console.log(port)
 
})