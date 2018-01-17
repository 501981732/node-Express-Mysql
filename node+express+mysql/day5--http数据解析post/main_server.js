const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

let server = http.createServer(function(req,res){
// GET
    let obj = urlLib.parse(req.url)
    // let obj = urlLib.parse(req.url,true)
    let url = obj.pathname
    const GET =obj.query
    // console.log(urlLib.parse(req.url).query)
    // console.log(urlLib.parse(req.url,true).query)
// POST
let str = '' //只考虑字符串的情况下
    req.on('data',function(data){
        str += data
    })
    req.on('end',function(){
        let POST = querystring.parse(str)
    })

    /*
       url ---- 要什么
       GET ----- get数据
       POST ---- post数据
    */ 
    let file_name = './www' + url
    // 访问到的话就返回 否则404
    fs.readFile(file_name,function(err,data){
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end()
    });
});

server.listen(8080)