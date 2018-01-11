const express = require('express')
const router = express.Router()
const common = require('../libs/common.js')
const mysql = require('mysql')

// 创建连接池
let db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'learner'})

// -----------------------------1------------------------------------------------
// 访问所有页面时检查登录状态
router.use((req,res,next)=>{
    // 检查登录状态
    // 登录之后加cookie but cookie不安全
    // 可以加session 安全
    // 没登录并且不是login页面就重定向到login页面
    // if (!req.session['admin_id'] && req.url = '/admin/login') {
    if (!req.session['admin_id'] && req.url != '/login') {
        // 重定向到登录
        res.redirect('/admin/login')
    } else {
        next()
    }
})

// ----------------------------2登录页面-------------------------------------------
// get时    访问页面
router.get('/login',(req,res)=>{
    res.render('admin/login.ejs',{})
})
// post时候 数据
router.post('/login',(req,res) =>{
    // console.log(req.body)  //获取post数据  body-parser
    var username = req.body.username
    // 需要md5签名加密
    var password = common.md5(common.md5(req.body.password + common.MD5_SUFFIX))
    // 验证账号密码
    // 注意这里去的username要加字符串
    db.query(`SELECT * FROM admin_table WHERE username='${username}'`,(err,data)=>{
        if(err) {
            console.log(err)
            res.status(500).send('database error').end()
        } else {
            // console.log(data)
            // db请求成功
            if (data.length ===0) {
                res.status(400).send('no this admin').end()
            } else {
                if(data[0].password !== password) {
                    res.status(400).send('this password is incorrect').end()
                } else {
                    // 登录成功存储session
                    req.session['admin_id'] = data[0].ID
                    res.redirect('/admin')
                }
            }
        }
    })
// -----------------------3退出登录接口-------------------------------------------

router.get('/out',(req,res) =>{
    // 登录成功存储session
    req.session['admin_id'] = ''
    res.status(200).send({code:1,data:{}}).end()
})
// 管理界面
router.get('/',(req,res) =>{
    res.render('admin/index.ejs',{})
})
// ---------------------------4banner------------------------------------------
router.get('/banners',(req,res) =>{

    switch(req.query.act) {
        case 'mod':
        // todo
        break
        case 'del':
            db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data) =>{
                if (err) {
                    console.error(err)
                    res.status(500).send('database error').end()
                } else {
                    res.redirect('/admin/banners')
                }
            })
        break
        default:
            db.query(`SELECT * FROM banner_table`,(err,data) =>{
                if(err) {
                    console.error(err)
                    res.status(500).send('database error').end()
                } else {
                    res.render('admin/banners.ejs',{banners:data})
                }
            })
            break
    }
    })
})
router.post('/banners',(req,res) =>{
    let title = req.body.title
    let description = req.body.description
    let href = req.body.href
    if (!title || !description || !href) {
        res.status(400).send('arg error').end()
    } else {
        db.query(`INSERT INTO banner_table (title,description,href) VALUES('${title}','${description}','${href}')`,(err,data)=>{
            if(err) {
                console.error(err)
                res.status(500).send('err').end()
            } else {
                // get方式重定向回去
                // 数据得以呈现
                // res.send('ok').end()
                res.redirect('/admin/banners')
            }
        })
    }
})
// --------------------------------------------------------------------------------------
router.get('/demo.html',(req,res) =>{
    res.render('admin/demo.ejs',{})
})









module.exports = router