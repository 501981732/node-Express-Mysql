const querystring = require('querystring');

modile.exports = function (req,res,next) {
    
    var str = ''
    req.on('data',function(data){
        str += data 
    })
    req.on('end',function(){
        // 将收集来的数据放到body传递
        req.body = str

        next()
    })
}