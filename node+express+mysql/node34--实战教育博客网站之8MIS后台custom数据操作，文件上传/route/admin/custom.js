const express = require('express')
const mysql = require('mysql')
const path = require('path')
const router = express.Router()
const fs = require('fs')
let db = mysql.createPool({host:'localhost',user:'root',password:'123456',database:'learner'})

router.get('/',(req,res) => {
    switch(req.body.act){
        case 'del': 
            db.query(`SELECT * FROM custom_evaluation_table WHERE ID=${req.query.id}`,(err,data)=>{
                if(err) {
                    console.error(err)
                    res.status(500).send('database error').end()     
                } else {
                    if(data.length ===0) {
                        res.status(404).send('no this custom evalutions').end()
                    } else {
                        // 删除文件
                        // fs.nulink('../static/upload/'+data[0].src,(err,data) {
                        fs.nulink('static/upload/'+data[0].src,(err,data) => {
                            if(err) {
                                console.error(err)
                                res.status(500).send('file opration error').end()     
                            } else {
                                db.query(`DELETE FROM custom_evaluation_table WHERE ID=${req.body.id}`,(err,data)=>{
                                    if(err) {
                                        console.error(err)
                                        res.status(500).send('database error').end()
                                    } else {
                                         res.redirect('/admin/custom')
                                    }
                                })   
                            }
                        })
                    }
                }
            })
        break;
        case 'mod':
            db.query(`SELECT * FROM custom_evaluation_table WHERE ID=${req.query.id}`,(err,data) =>{
                if(err) {
                    console.error(err)
                    res.status(500).send('database error').end()
                } else if (data.length === 0) {
                    res.status(404).send('no this evalutions').end()
                } else {
                    db.query(`SELECT * FROM custom_evaluation_table`, (err, custom)=>{
                      if(err){
                        console.error(err);
                        req.status(500).send('database error').end();
                      }else{
                        res.render('admin/custom.ejs', {custom, mod_data: data[0]});
                      }
                    });
                }
            })
        break;
        default:
            db.query(`SELECT * FROM custom_evaluation_table`, (err, evaluations)=>{
              if(err){
                console.error(err);
                req.status(500).send('database error').end();
              }else{
                res.render('admin/custom.ejs', {evaluations});
              }
            });
        }
      });
  router.post('/', function (req, res){
    var title=req.body.title;
    var description=req.body.description;

    if(req.files[0]){
      var ext=pathLib.parse(req.files[0].originalname).ext;

      var oldPath=req.files[0].path;
      var newPath=req.files[0].path+ext;

      var newFileName=req.files[0].filename+ext;
    }else{
      var newFileName=null;
    }

    if(newFileName){
      fs.rename(oldPath, newPath, (err)=>{
        if(err){
          console.error(err);
          res.status(500).send('file opration error').end();
        }else{
          if(req.body.mod_id){  //修改
            //先删除老的
            db.query(`SELECT * FROM custom_evaluation_table WHERE ID=${req.body.mod_id}`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else if(data.length==0){
                res.status(404).send('old file not found').end();
              }else{
                fs.unlink('static/upload/'+data[0].src, (err)=>{
                  if(err){
                    console.error(err);
                    res.status(500).send('file opration error').end();
                  }else{
                    db.query(`UPDATE custom_evaluation_table SET \
                      title='${title}', description='${description}', \
                      src='${newFileName}' \
                      WHERE ID=${req.body.mod_id}`, (err)=>{
                        if(err){
                          console.error(err);
                          res.status(500).send('database error').end();
                        }else{
                          res.redirect('/admin/custom');
                        }
                      });
                  }
                });
              }
            });
          }else{                //添加
            db.query(`INSERT INTO custom_evaluation_table \
            (title, description, src)
            VALUES('${title}', '${description}', '${newFileName}')`, (err, data)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.redirect('/admin/custom');
              }
            });
          }
        }
      });
    }else{
      if(req.body.mod_id){  //修改
        //直接改
        db.query(`UPDATE custom_evaluation_table SET \
          title='${title}', description='${description}' \
          WHERE ID=${req.body.mod_id}`, (err)=>{
            if(err){
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.redirect('/admin/custom');
            }
          });
      }else{                //添加
        db.query(`INSERT INTO custom_evaluation_table \
        (title, description, src)
        VALUES('${title}', '${description}', '${newFileName}')`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/custom');
          }
        });
      }
    }
  });


module.exports = router