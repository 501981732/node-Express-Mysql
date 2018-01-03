const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const app = express()
const fs = require('fs')

app.use(bodyParser.urlencoded({extended: false}))
// 错误
// app.post('/',function(req,res){
//     console.log(req.body)
// })
// 上传文件

const objMulter = multer({dest: './www/upload'})
app.use(objMulter.any())
app.post('/',function(req,res){
    console.log(req.files)
//新文件名
//'./www/upload/dfb33662df86c75cf4ea8197f9d419f9' + '.png'
  var newName=req.files[0].path+path.parse(req.files[0].originalname).ext
// 改名字
    fs.rename(req.files[0].path, newName, function (err){
        if(err)
          res.send('上传失败');
        else
          res.send('成功');
      });

})
app.listen(8080)