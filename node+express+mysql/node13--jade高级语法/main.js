const jade = require('jade')
const fs = require('fs')

// console.log(jade.renderFile('./views/1.jade',{pretty:true}));

// console.log(jade.renderFile('./views/3.jade',{pretty:true,name: '王猛',a:2,b:3}));


// console.log(jade.renderFile('./views/3.jade',{
//     pretty:true,
//     a: 1,
//     b: 2,
//     name: '王猛',
//     json: {width: '200px', height: '200px', background: 'red'},
//     arr: ['aaa', 'left-wrap'],
//     arr2: ['aa', 'bb','cc'],
//     content: "<h2>你好啊</h2><p>对方水电费色弱威尔士地方</p>"
//     }));

// 读取
var str=jade.renderFile('./views/index.jade', {pretty: true});
// 写入
fs.writeFile('./build/index.html', str, function (err){
  if(err)
    console.log('编译失败');
  else
    console.log('成功');
});