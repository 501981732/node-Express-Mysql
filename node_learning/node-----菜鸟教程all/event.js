var events = require('events');

// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// // 创建事件处理程序
// var connectHandler = function connected() {
//     console.log('连接成功');
//     // 触发 data_received 事件
//     eventEmitter.emit('data_received');
// }

// // 绑定 connection 事件处理程序
// eventEmitter.on('conection',connectHandler)
// // 使用匿名函数绑定data_received事件
// eventEmitter.on('data_received',function(){
//     console.log('数据接受成功')
// })

// // 触发 conection 事件
// eventEmitter.emit('conection');
// console.log('程序结束');





// var EventEmitter = require('events').EventEmitter; 
// var event = new EventEmitter(); 
// event.on('some_event', function() { 
//     console.log('some_event 事件触发'); 
// }); 
// setTimeout(function() { 
//     event.emit('some_event'); 
// }, 1000);


eventEmitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
eventEmitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
eventEmitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 