var fs = require('fs')

fs.writeFile('./input','我是通过写入的文件内容',function(err){
    if (err) {
        return console.log(err)
    }
    console.log('数据写入成功')
    console.log('。。。。。。。。。。。。。。。。。。。。。')
    console.log('读取写入的数据')

    // 异步读取
    fs.readFile('./input', function(err,data){
        if (err) {
            retuurn console.log(err)
        }
        console.log('异步读取文件数据'+data.toString())

    });
})