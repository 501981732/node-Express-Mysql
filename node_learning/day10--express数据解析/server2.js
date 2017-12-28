const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const querystring = require('querystring')

app.listen(8080)


app.use(bodyParser.urlencoded({ extended: true,}))



// 手写写中间件
//所有的都会通过这个中间件
// 这是个简易的bodyparser
app.use(function(req,res,next){
    var str = ''
    req.on('data',function(data){
        str += data 
    })
    req.on('end',function(){
        // 将收集来的数据放到body传递
        req.body = str

        next()
    })
})

// 链式操作
app.use('/',function(req,res,next){
    // req.a = 12
    console.log(req.body);
    console.log(querystring.parse(req.body));
    next()  //若想链式下去则用调用next 且参数可以传递下去
})
app.use('/',function(req,res){
    // console.log(req.a)
    console.log(2);
})




