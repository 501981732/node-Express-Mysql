// var fs = require('fs');
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('fs.txt');
// // 设置编码
// readerStream.setEncoding('utf-8')

// // 处理流事件 --> data, end, and error
// readerStream.on('data',function(chunk){
//     data += chunk
// })
// readerStream.on('end',function(){
//     console.log(data)
// })
// readerStream.on('error',function(err){
//     console.log(err.stack)
// })
// console.log('程序执行完毕')


// 写入流
var fs = require('fs')
var data ='我想写点东西'
// 创建一个可以写入的流，写入到output.txt中

var  writerStream = fs.createWriteStream('output.txt');
// 使用utf-8编码写入数据
writerStream.write(data,'utf-8');
// 编辑文件末尾
writerStream.end();
// 处理事件流 --》 data，end,error
writerStream.on('finish',function(){
    console.log('写入完成')
})
writerStream.on('error',function(){
    console.log(err.stack)
})
console.log('程序执行完毕')




// 管道流

var fs = require('fs')
// 创建可读流
var readerStream = fs.createReadStream('input.txt')
// 创建可写流
var writerStream = fs.createWriteStream('output.txt')
// 管道读写操作
// 把inout 写入output
readerStream.pipe(writerStream)
console.log('读写程序执行完毕')



