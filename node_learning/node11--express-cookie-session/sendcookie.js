const  express = require('express')

var app = express()

// cookie
app.use('/aaa/a.html',function(req,res,next) {
    // maxAge 有效期
    res.cookie('user','wmm',{path:'/aaa',maxAge: 30*24*3600*1000})
    res.send('ok')

})

app.listen(8080)