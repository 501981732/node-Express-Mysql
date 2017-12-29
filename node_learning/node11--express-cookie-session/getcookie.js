const  express = require('express')
const cookieParser = require('cookie-parser')
var app = express()

// cookie
app.use(cookieParser())
app.use('/aaa/a.html',function(req,res,next) {
    // 设置maxAge 有效期
    res.cookie('user','wmm',{path:'/aaa',maxAge: 30*24*3600*1000})
    res.send('ok')
    // cookieparser req.cookie
    // 读取
    console.log(req.cookies);

})

app.listen(8080)