var fs = require('fs');

var data = fs.readFileSync('fs.txt');
console.log(data.toString())
console.log('阻塞程序结束');
fs.readFile('fs.txt', function(err,data){
    if (err) return console.log(err)
    console.log(data.toString())
});
console.log('非阻塞程序结束')