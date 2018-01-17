const fs = require('fs')

// 异步读文件
// fs.readFile(path, options, callback_);
fs.readFile('aaa.txt', function(err,data){
    if (err) {
        console.log('读取失败')
    }
    // 此时打印的是二进制数据
    console.log(data)

    console.log(data.toString())
});
// 异步写文件
// fs.writeFile(path, data, options, callback_);
fs.writeFile('bbb.txt','hello world', function(err,data){
    if (err) {
        console.log('失败')
    }
});