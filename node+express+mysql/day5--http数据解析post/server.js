const http = require('http')
const querystring = require('querystring')
http.createServer(function(req,res){
    // post 数据分段发送 (数据量大的话)
    // data时间 --有一段诗句到达就发生一次（很多次）
    let str = ''
    let i = 0
    req.on('data',function(data){
        console.log(`第${i++}次收到数据`)
        str += data
    })
    // end时间 -- 数据全部到达的时候（一次）
    req.on('end',function(){
        // console.log(str)
        var POST = querystring.parse(str)
        console.log(POST)
    })

}).listen(8080);