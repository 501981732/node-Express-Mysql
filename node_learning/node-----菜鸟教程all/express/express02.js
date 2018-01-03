var express = require('express');
var app = express();

// 中间件放置静态资源   图片， CSS, JavaScript 文件放在 public 目录下
app.use(express.static('public'));
app.get('/',function(req,res){
    res.send('HelloWorld')
})
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

