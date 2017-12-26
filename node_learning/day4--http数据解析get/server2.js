// http之get请求
const http = require('http')
const querystring = require('querystring')
http.createServer(function(req, res) {
    let url = req.url.split('?')[0]
    let param = req.url.split('?')[1]
    let f = querystring.parse(param)
    console.log(f)
    res.write(JSON.stringify(f))
    res.end()
}).listen(8080)