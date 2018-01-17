const express = require('express')
const router = express.Router()

router.get('/1.html',(req,res)=>{
    res.send('我是文章1').end()
})
router.get('/2.html',(req,res)=>{
    res.send('我是文章2').end()
})

module.exports = router