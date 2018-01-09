const common = require('./libs/common.js')

var s = '123456'
// 多次签名 并且后面加一个乱串
var str =  common.md5(common.md5(s+common.MD5_SUFFIX))

console.log(str)
