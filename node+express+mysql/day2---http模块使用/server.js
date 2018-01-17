const http = require('http')

let server = http.createServer(function(req,res){
    // req 请求 浏览器的请求
    // res 响应 服务器的返回
    switch(req.url) {
        // 根据相应的请求返回东西
        case '/1.html': 
            res.write('1111');
            break;
        case '/2.html': 
            res.write('2222');
            break;
        default:
            res.write('404')
            break;
    }
    res.end()
});
// 监听--等待
// 端口--数字
server.listen(8080)