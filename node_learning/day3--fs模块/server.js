const http = require('http')
const fs = require('fs')

let server = http.createServer(function(req,res){
// req.url => 'index.html'
// 读取 => '.www/index.html'
    let file_name = 'www' + req.url
    fs.readFile(file_name,function(err,data){
        if(err) {
            console.log('读取失败')
            res.write('404')
        } else {
            // 机器对机器不用toString
            res.write(data)
        }
        res.end()
    });
});

server.listen('8080')

// 放到www文件夹下也不需要重新启动服务器
// 访问  /index.html则会读取www下对应的文件
// 若读取不到则返回404
