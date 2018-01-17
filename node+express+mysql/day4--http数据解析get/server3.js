// http之get请求
const http = require('http')
const querystring = require('querystring')
const url = require('url')
http.createServer(function(req, res) {

    let obj =  url.parse(req.url,true)

    let pathname = obj.pathname

    let query = obj.query
    
    console.log(pathname)
    console.log(query)
    res.end()
}).listen(8080)