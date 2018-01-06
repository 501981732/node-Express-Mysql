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
const mysql = require('mysql')

const consolidate = require('consolidate')
// common
const common = require('./libs/common')

app.listen(8080)

// 1.解析cookie
app.use(cookieParser('asdadadasdasdasdadasdsa'))

// 2.使用session
var arr = []
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random())
}
app.use(cookieParser({
    name: 'sess_id',
    keys: arr,
    maxAge: 20 * 3600 * 1000
}))

// 3.post数据
// 解析post普通数据
app.use(bodyParser.urlencoded({ extended: false }))
// 解析文件数据
app.use(multer({ dest: './www/upload/' }).any())


//配置模板引擎

// *.输出什么东西
app.set('view engine', 'html')
// *.模板文件放在哪
app.set('views', './template/')
// *.哪种模板引擎
app.engine('html', consolidate.ejs)
// app.engine('excel',consolidate.jade)  

// 连接服务器
// const db = mysql.createConnection({ host: 'localhost', port: 3306, user: 'root', password: '123456', database: 'blog' });
// 连接池
const db = mysql.createPool({ host: 'localhost', port: 3306, user: 'root', password: '123456', database: 'blog' });

// 接受用户请求
// 用户请求操作


// 链式写法， next()，并将数据挂在到res身上，传递下去
app.use('/index.html', (req, res, next) =>  {
// 查询banner的东西
    db.query("SELECT * FROM `banner_table`",function(err,data) {
        if(err) {
            res.status(500).send('database error').end()

        } else {
            res.banners = data
            next()
        }
    })
    // console.log(req.query)
    // console.log(req.body)//普通数据
    // console.log(req.files)//文件数据
    // console.log(req.cookies)
    // console.log(req.session)
})

// 主页
app.use('/index.html', (req, res, next) => {
// 查询banner的东西
    db.query("SELECT title,summary,ID FROM `article_table`",function(err,data) {
        if(err) {
            console.log(err)
            res.status(500).send('database error').end()

        } else {
            res.articles = data
            res.render('index.ejs',{banners: res.banners,articles: res.articles})
            // next()
        }
    })
})

// 文章页面
app.use('/article.html', (req, res, next) => {
// 查询文章
    if(req.query.id) {
        if(req.query.act) {
            // 增加赞
            db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`,(err,data) =>{
                if(err) {
                    res.status(500).send('数据库出差啦').end()
                    console.log(err)
                }
            })
        }
        db.query(`SELECT * FROM article_table WHERE ID = ${req.query.id}`,(err,data) =>{
            if(err) {
                res.status(500).send('数据有问题').end()
            } else {
                if (data.length!==0) {
                    data[0].sDate = common.time2date(data[0].post_time)
                    data[0].content = data[0].content.replace(/^/gm,'<p>').replace(/$/gm,'</p>')
                    res.render('conText.ejs',{article_data: data[0]})
                } else {
                    res.status(404).send('您请求的文章找不到').end()
                }
            }
        })
    } else {
        res.status(404).send('您请求的文章找不到').end()
    }

})

// 我的文章
app.use('/mydoc.html',function(req,res){
    res.render('mydoc.ejs')
})
// 注册页面

app.use('/login_user.html',function(req,res){
    res.render('login_user.ejs')
})






// 4.static数据 静态文件
// console.log(path.join(__dirname, 'www'))
// app.use(express.static(path.join(__dirname, 'www')))
app.use(express.static('./www'))