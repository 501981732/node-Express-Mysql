// http之get请求
const http = require('http')

http.createServer(function(req, res) {
    // req获取前台数据
    let hash = {}  // {user:'xxx',password: 'xxx'}
    let url = req.url
    if (req.url.indexOf('/')) {
        let arr = req.url.split('?')
        url = arr[0]
        let arr2 = arr[1].split('&')
        arr2.forEach((item, index) => {
            let arr3 = item.split('=')
            hash[arr3[0]] = arr3[1]
        })
    } else {
        // var url = req.url
        // hash = {}
    }
    console.log(url, 'GET')
    console.log(hash)
    // res.write('aaa')
    res.end()
}).listen(8080)