const  express = require('express')
const cookieParser = require('cookie-parser')
var app = express()

// cookie
app.use(cookieParser('wrjljlfnlcnxx'))
app.use('/aaa/a.html',function(req,res,next) {

    req.secret = 'wrjljlfnlcnxx'
// urlcodecomp...
// 防篡改，但是不加密
    res.cookie('user','wm',{signed:true})
    // 没有加密的cookie
    console.log(req.cookies)
    // 加密的cookie
    console.log(req.cookies)



})

app.listen(8080)