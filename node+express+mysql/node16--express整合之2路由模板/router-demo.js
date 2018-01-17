const express = require('express')

const app = express()

const routeUser = express.Router()




// 目录1 /user/
routeUser.get('/1.html',function(req,res){  //  http://xxx.com/user/1.html
    res.send('1111')
})

routeUser.get('/2.html',function(req,res){
    res.send('2222')
})

app.use('/user',routeUser)

// 目录2 /article/
const routeArticle = express.Router()

routeArticle.get('/1.html',function(req,res){  //  http://xxx.com/article/1.html
    res.send('article1111')
})

app.use('/article',routeArticle)


app.listen(8080)