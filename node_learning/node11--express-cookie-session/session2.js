const  express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
var app = express()

// cookie
app.use(cookieParser())
app.use(cookieSession({
    // name: 's11',//可以给session改名字
    keys: ['aa','bb','cc'],
    // maxAge:   //session有效期
}))


app.use('/',function(req,res,next) {

    // 登录次数
    if (req.session['count'] == null) {
        req.session['count'] = 1
    } else {
        req.session['count']++
    }
console.log(req.session['count'])
    res.send('ok')
})

app.listen(8080)