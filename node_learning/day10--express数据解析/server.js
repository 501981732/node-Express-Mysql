const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(8080)


app.use(bodyParser.urlencoded({ extended: true,}))




// GET POST 相关数据
// req.query   ---> get数据
// req.body   ---> post数据
app.use('/',function(req,res){
    console.log('get'+  JSON.stringify(req.query));  //GET
    console.log('post'+JSON.stringify(req.body));
})


