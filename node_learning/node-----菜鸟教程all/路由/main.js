var server = require("./server");
var router = require("./router");
 
server.start(router.route)
// 函数嵌套并不是吧函数的返回值传过去，而是把整个函数传过去
