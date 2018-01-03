var express = require('express');
var app = express();

// 中间件放置静态资源   图片， CSS, JavaScript 文件放在 public 目录下
app.use(express.static('public'));

