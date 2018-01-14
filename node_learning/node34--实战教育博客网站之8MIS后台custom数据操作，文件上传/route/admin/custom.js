const express = require('express')
const mysql = require('mysql')
const path = require('path')
const router = express.Router()
const fs = require('fs')
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
    // 文件上传
    // multer 提供的files req.files
    let oldPath = req.files[0].path
    // 扩展名
    let ext = path.parse(req.files[0].originalname).ext
    let newPath = oldPath + ext
    let newFilename = req.files[0].filename + ext
    console.log(newFilename)

    fs.rename(oldPath,newPath,(err)=>{
        if(err) {
            res.status(500).send('file opration error').end()
        } else {
            if(req.body.mod_id) {
            //修改 

            } else {
            // 新增
            db.query(`INSERT INTO custom_evaluation_table (title,description,src) VALUES('${title}','${description}','${newFilename}')`,(err,data) =>{
                if(err) {
                    console.error(err)
                    res.status(500).send('database error').end()
                } else {
                    res.redirect('/admin/custom')
                }
            })
            } 
        }
    })

})


module.exports = router