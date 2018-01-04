const mysql = require('mysql')
// 链接
//mysql.createConnection(哪台服务器，用户名，密码，哪个数据库)
var db = mysql.createConnection({host: 'localhost',port: 3306,user:'root',password: '123456',database:'my_fitst_db'});

//query(SQL语句，回调函数)
db.query('SELECT * FROM `user_table`',(err,data) =>{
    if(err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data))
    }
})