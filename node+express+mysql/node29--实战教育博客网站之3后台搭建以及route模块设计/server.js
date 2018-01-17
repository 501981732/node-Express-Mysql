const express = require('express')
// const static = require('express-static')
// const route = require('express-route')
const sql = require('sql')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const consolidate = require('consolidate')
const multer = require('multer')
const bodyParser = require('body-parser')

var app = express()

app.listen(8080)

// ----------------------------1.请求数据--------------------------------
    //get自带 
    // post                                            //req.query
    // 解析文件数据
    app.use(multer({dest:'./www/upload/'}).any())      //req.files

    // 解析post普通数据
    app.use(bodyParser.urlencoded({extended: false}))  //req.body

//---------------------------2.session cookie-----------------------------

    // 处理cookie                                      //req.cookies    未签名 //req.signedCookies  签名
    app.use(cookieParser())

    let keys = []
    for(var i=0;i<100000;i++) {
        keys[i] = 'sess_' + Math.random()
    }
    app.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20*60*1000
    }))                                                //req.session

// ------------------------------3.模板-----------------------------------

app.engine('html',consolidate.ejs)
app.set('views','template')
app.set('view engine','html')

// -----------------------------4.route--------------------------------------

// var r1 = express.Router()
// app.use('/article/',r1)
// r1.get('/1.html',(req,res)=>{
//     res.send('我是文章1').end()
// })
// r1.get('/2.html',(req,res)=>{
//     res.send('我是文章2').end()
// })

// router路由模块写法
app.use('/article/',require('./route/1.js'))


var r2 = express.Router()
app.use('/blog/',r2)
    r2.get('/1.html',(req,res)=>{
        res.send('我是blog2-1').end()
    })
    r2.get('/2.html',(req,res)=>{
        res.send('我是blog2-2').end()
    })

//--------------------------5.static静态文件----------------------------------------

app.use(express.static('./static/'))