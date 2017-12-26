// 专门处理url

const querystring =require('querystring')

let aa = 'user=gebilaowang&password=123456'
let bb = querystring.parse(aa)
console.log(bb)
// bb => {
//     user: 'gebilaowang',
//     password: '123456'
// }