const mysql = require('mysql')

var db = mysql.createConnection({host: 'localhost',port:3306,user: 'root',password: '123456',database: 'my_fitst_db'})

db.query('SELECT * FROM `user_table`',(err,data)=>{

    if (err) {
        console.log(err)
    } else {
        console.log(JSON.stringify(data))
    }

})