var fs = require('fs')

fs.stat('./input.txt',function(err,stats){
    if (err) {
        return console.log(err)
    }
    console.log(stats)
    console.log(stats.isFile())

})