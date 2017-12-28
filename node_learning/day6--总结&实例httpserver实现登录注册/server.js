const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

let users = {} //{'wangmeng': '123456'}

let server = http.createServer(function(req, res) {
    // 解析请求数据
    let str = '';
    req.on('data', function(data) {
        str += data
    })

    req.on('end', function() {
        let obj = urlLib.parse(req.url, true)

        var url = obj.pathname
        var GET = obj.query
        var POST = querystring.parse(str)



        // 访问 ----去问访问的是接口还是文件

        // 如果是接口
        // 建简易注册接口
        if (url == '/user') {

            // 判断是登录或者注册。。。
            switch (GET.act) {
                case 'reg':

                    // 1 检查是否永福已经有了
                    // 2 插入users
                    if (users[GET.user]) {
                        res.write("{'ok': false,'msg': '此用户已存在'}")
                    } else {
                        users[GET.user] = GET.pass
                        res.write("{ok: true, 'msg': '注册成功'}")
                    }
                    break;
                case 'login':

                    // 1 检查用户是否存在
                    // 2 检查用户密码是否正确
                    if (!users[GET.user]) {
                        res.write("{'ok': false,'msg': '用户不存在'}")
                    } else if (users[GET.user] === GET.pass) {
                        res.write("{'ok': true,'msg': '登录成功'}")
                    } else {
                        res.write("{'ok': false,'msg': '用户名或密码错误'}")
                    }
                    break

                default:
                    res.write("{'ok: false,'msg': '未知的act'}")
            }
            res.end()
        } else {
            // 访问文件
            // 读取文件文件 
            let file_name = './www' + url
            fs.readFile(file_name, function(err, data) {
                // 若访问路径中www有文件
                if (err) {
                    res.write('404')
                } else {
                    res.write(data)
                }
                console.log(file_name)
                res.end()
            });
        }
    })


});
server.listen(8080)