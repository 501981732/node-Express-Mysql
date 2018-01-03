//fs.open(path,flag[,mode],callback)
var fs = require('fs');
fs.open('input.txt','r+',function(err,gd){
    // 异步打开文件
    console.log('准备打开文件')
    if (err) {
        return console.error(err)
    };
    console.log('文件打开成功')
})
