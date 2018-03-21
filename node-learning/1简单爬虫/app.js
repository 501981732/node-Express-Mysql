const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')

let app = express()

app.get('/',(req,res,next)=>{

    superagent.get('https://cnodejs.org/')
    .end((err,data) =>{
        if (err) {
            return next(err)
        }

        var $ = cheerio.load(data.text)

        var items = []

        $('#topic_list .topic_title').each((index,ele) =>{
            let $ele = $(ele)

            items.push({
                title: $ele.attr('title'),
                href: $ele.attr('href')
            })
        })
        res.send(items)
    })
})

app.listen(8080,_ =>{
    console.log('app is listening at port 3000')
})