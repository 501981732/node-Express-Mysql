const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('我是web').end()
})







module.exports = router