const express = require('express')
const app = express()
const myBodyParser = require('./libs/my-body-parser.js')

app.listen(8080)


app.use(myBodyParser)

// 链式操作
app.use('/',function(req,res,next){
    console.log(req.body);
    next()  
})
app.use('/',function(req,res){
    console.log(2);
})




