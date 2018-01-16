// crypto 系统模块 可加密

const crypto = require('crypto')

// md5 让人看不到原文，数据库存的密码
// 可以多次md5签名

let obj = crypto.createHash('md5')

obj.update('123456')

var str = obj.degest('hex')//以数字的形式获取结果    hex： 16进制

console.log(str)

