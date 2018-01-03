var express = require('express')
var app = express()

app.use(express.static('public'))

// 设置默认主页
app.get('/',function(req,res){
    res.sendFile(__dirname + ''+'index2.html')
})

app.get('/process_get',function(req,res){
       // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   res.end(JSON.stringify(response))
})
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})