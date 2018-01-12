const express = require('express')
const mysql = require('mysql')

const router = express.Router()

let db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'learner'})

router.get('/',(req,res) => {
    db.query(`SELECT * FROM custom_evaluation_table`,(err,data) =>{
        if(err) {
            console.error(err)
            res.status(500).send('database error').end()
        } else {
            res.render('admin/custom.ejs',{custom:data})
        }
    })
})

router.post('/',(req,res) => {
    let title = req.body.title
    let description = req.body.description
    let src = req.body.src
    db.query(`INSERT INTO custom_evaluation_table (title,description,src) VALUES(${title},${description},${src}) `,(err,data) =>{
        if(err) {
            console.error(err)
            res.status(500).send('database error').end()
        } else {
            res.render('admin/custom.ejs',{custom:data})
        }
    })
})


module.exports = router