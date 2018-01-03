const express = require('express')
// const static = require('express-static')

const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
// const ejs = require('ejs')
// const jade = require('jade')
const path = require('path')
const multer = require('multer')
const app = express()

const consolidate = require('consolidate')


app.listen(8080)

// 1.解析cookie
app.use(cookieParser('asdadadasdasdasdadasdsa'))

// 2.使用session
var arr = []
for (var i = 0;i<100000;i++) {
    arr.push('keys_' + Math.random())
}
app.use(cookieParser({
    name: 'sess_id',
    keys: arr,
    maxAge: 20*3600*1000
}))

// 3.post数据
// 解析post普通数据
app.use(bodyParser.urlencoded({extended: false}))
// 解析文件数据
app.use(multer({dest:'./www/upload/'}).any())
// 用户请求操作
app.use('/',function(req,res,next){

    console.log(req.query)
    console.log(req.body)//普通数据
    console.log(req.files)//文件数据
    console.log(req.cookies)
    console.log(req.session)
})

//配置模板引擎
 
   // *.输出什么东西
    app.set('view engine','html')  
    // *.模板文件放在哪
    app.set('views','./views/') 
   // *.哪种模板引擎
    app.engine('html',consolidate.ejs)  
    // app.engine('excel',consolidate.jade)  
    

// 接受用户请求
app.get('/index',function(req,res){
    // if(req.session.userid) { // 有session.userid代表登录过了
    //     res.render('1.ejs',{name: '登录过了'})
    // } else {
    //     res.render('login.ejs',{name: '没有登录，请注册'})
    // }
    res.render('login.ejs',{name: '没有登录，请注册'})

})
// 4.static数据 静态文件
app.use(express.static(path.join(__dirname, 'www')))



