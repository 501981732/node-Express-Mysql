const express = require('express')
const router = express.Router()
const common = require('../../libs/common.js')
const mysql = require('mysql')

// 创建连接池
let db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'learner'})

router.get('/',(req,res) =>{

    switch(req.query.act) {
        case 'mod':
        // 修改
            db.query(`SELECT * FROM banner_table WHERE ID=${req.query.id}`,(err,data) =>{
                if(err) {
                        console.error(err)
                        res.status(500).send('database error').end()             
                }else if(data.length ==0) {
                        res.status(404).send('data not found').end()
                    } else {
                        db.query(`SELECT * FROM banner_table`,(err,data2) =>{
                            if(err) {
                                console.error(err)
                                res.status(500).send('database error').end()
                            } else {
                                res.render('admin/banners.ejs',{banners:data2,mod_data:data[0]})
                            }
                        })       
                    }
                })
        // })
        break
        case 'del':
        // 删除
            db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data) =>{
                if (err) {
                    console.error(err)
                    res.status(500).send('database error').end()
                } else {
                    res.redirect('/admin/banners')
                }
            })
        break
        default:
        // 
            db.query(`SELECT * FROM banner_table`,(err,data) =>{
                if(err) {
                    console.error(err)
                    res.status(500).send('database error').end()
                } else {
                    res.render('admin/banners.ejs',{banners:data})
                }
            })
            break
    }
    })
// })
router.post('/',(req,res) =>{
    let title = req.body.title
    let description = req.body.description
    let href = req.body.href
    let mod_id = req.body.mod_id
    if (!title || !description || !href) {
        res.status(400).send('arg error').end()
    } else {
        //提交修改
        if(req.body.mod_id){
            db.query(`UPDATE banner_table SET \
              title='${title}',\
              description='${description}',\
              href='${href}' \
              WHERE ID=${mod_id}`,
              (err, data)=>{
                if(err){
                  console.error(err);
                  res.status(500).send('database error').end();
                }else{
                  res.redirect('/admin/banners');
                }
              }
            );
        } else {
            // 提交添加
            db.query(`INSERT INTO banner_table (title,description,href) VALUES('${title}','${description}','${href}')`,(err,data)=>{
                if(err) {
                    console.error(err)
                    res.status(500).send('err').end()
                } else {
                    // get方式重定向回去
                    // 数据得以呈现
                    // res.send('ok').end()
                    res.redirect('/admin/banners')
                }
            })            
        }
    }
})

module.exports = router