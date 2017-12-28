const express = require('express')
const path = require('path')

// const bodyParse = require('body-parse')
// 搭建服务
const app = express()
// const expressStatic = require('express-static')

// server.use('/',function(req,res){
//     // console.log('get')
// })
// server.use(expressStatic('./www')) 中间件 设置静态文件

// json模拟数据库信息

var users = {
    'wm': '123'
}
// 获得post数据
// app.use(bodyParser.urlencoded({ extended: false }))
/***********接口*******************/ 
app.get('/login',function(req,res){
    // req.query可以读到query

    var user = req.query['user']
    var psw = req.query['psw']

    if (users[user] == null) {
        res.send({ok:false,msg: '用户不存在'})
    } else if(users[user]!==psw ) {
        res.send({ok:false,msg: '密码不正确'})
    } else {

        res.send({ok:true,msg: '登录成功'})
    }
})

app.get('/register',function(req,res){
    // req.query可以读到query
    cosole.log(req.body)
    var user = req.body['user']
    var psw = req.body['psw']
    if (users[user] !== undefined) {
        console.log(users[user])
        res.send({ok:false,msg: '用户已存在'})
    } else if(!psw){
        res.send({ok:false,msg: '密码不能为空'})
    } else {
        users[user] = psw
        res.send({ok:true,msg: '注册成功'})
    }
})

/***********没有读到接口则走下面的静态页面*******************/ 
// 读取静态文件
app.use(express.static(path.join(__dirname, 'www')));
app.listen('8080')