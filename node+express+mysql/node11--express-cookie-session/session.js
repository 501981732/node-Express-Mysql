const  express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
var app = express()

// cookie
var arr = []
for(var i = 0;i<100000;i++) {
    arr.push('sign_'+Math.random())
}
app.use(cookieParser())
app.use(cookieSession({
    keys: arr
}))


app.use('/',function(req,res,next) {

console.log(req.session)

})

app.listen(8080)