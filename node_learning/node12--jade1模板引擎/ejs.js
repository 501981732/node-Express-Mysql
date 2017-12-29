const ejs = require('ejs')

// var str = jade.render('html')
var str = ejs.renderFile('./views/1.ejs',{name:'王猛'},function(err,data){
    if(err) {
        console.log('编译失败')
    } else {
        console.log(data)
    }
})
console.log(str)

