const jade = require('jade')
const fs = require('fs')

// var str = jade.render('html')
var str = jade.renderFile('./views/1.jade',{pretty: true})
// console.log(str)


// 将读到的东西写到build里面
fs.writeFile('./build/2.html',str,function(err,data){
    if(err) {
        console.log('写入失败')
    } else {
        console.log('写入成功')
    }
})
