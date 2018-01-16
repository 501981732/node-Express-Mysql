const express = require('express')
const router = express.Router()
const mysql = require('mysql')

// 创建连接池
let db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'learner'})

router.get('/getBanners',(req,res) =>{
    db.query(`SELECT * FROM banner_table`,(err,data)  =>{
        if(err) {
            console.error(err)
            res.status(500).send('database error').end()
        } else {
            res.send(data).end()
        }
    })
})







module.exports = router