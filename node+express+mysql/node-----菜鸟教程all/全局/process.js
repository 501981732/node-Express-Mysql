process.on('exit',function(code){
    // 一下代码永远不会执行
    setTimeout(function() {
        console.log('不执行啊不执行')
    }, 0)
    console.log('退出码为：'+ code)
})
console.log('程序执行结束')

// 一旦当前事件循环结束，调用回到函数。
process.nextTick(function(){
    console.log(process.cwd());   
    console.log('..............');   
    console.log(process.env);   
    console.log(__filename);   
    console.log(__dirname);   
});

// // 
// console.log('..................')
// // 输出到终端
// process.stdout.write("Hello World!" + "\n");

// // 通过参数读取
// process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val);
// });

// // 获取执行路径
// console.log(process.execPath);


// // 平台信息
// console.log(process.platform);