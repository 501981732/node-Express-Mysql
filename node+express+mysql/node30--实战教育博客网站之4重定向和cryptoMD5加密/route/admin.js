const express = require('express')
const router = express.Router()


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

// 登录页面
router.get('/login',(req,res) =>{
    res.render('admin/login.ejs',{})
})








module.exports = router