const express = require('express')
const router = express.Router()
const common = require('../../libs/common.js')
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
router.use('/login',require('./login.js'))

// -----------------------3退出登录接口-------------------------------------------

router.get('/out',(req,res) =>{
    // 登录成功存储session
    req.session['admin_id'] = ''
    res.status(200).send({code:1,data:{}}).end()
})

// ------------------------4管理界面---------------------------------------------
router.get('/',(req,res) =>{
    res.render('admin/index.ejs',{})
})
// ------------------------5banner------------------------------------------
router.use('/banners',require('./banners.js'))
// ------------------------6custom------------------------------------------------
router.use('/custom',require('./custom.js'))

module.exports = router