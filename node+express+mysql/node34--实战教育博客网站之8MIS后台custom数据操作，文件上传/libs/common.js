/*
 * @file: 公共工具库
 * @Author: wm
 * @Date:   2018-01-10
 * 用法：import common = require('')
        // md5签名加密
        let str =  common.md5(common.md5(s+common.MD5_SUFFIX))
 */
const crypto = require('crypto')

// md5签名加密
// md5 让人看不到原文，数据库存的密码，也避免拖库之后丢失密码
// 可以多次md5签名
function md5(str) {
    var obj = crypto.createHash('md5')
    obj.update(str)
    return obj.digest('hex')    //以数字的形式获取结果    hex： 16进制
}

module.exports = {
    MD5_SUFFIX: 'dgfsdadsdffgnhmhgfdsfadsfdgfdhgfdsfdgfdgswe4r567uhnbvbcxzsdwretrythgnbcvvgdfh',
    md5: md5
}