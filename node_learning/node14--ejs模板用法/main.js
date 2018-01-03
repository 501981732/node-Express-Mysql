const ejs = require('ejs')

// ejs.readFile(path, options, callback);
var data = {
    name: '王猛',
    json: {arr: [
        {user: 'blue', pass: '123456'},
        {user: 'zhangsan', pass: '654321'},
        {user: 'xiaoming', pass: '999999'},
    ]},
    type: 'admin',
    css_path: '../a.txt'
}

ejs.renderFile('./1.ejs', data, function (err, data){
  if(err) {
    console.log(err)
  } else {
     console.log(data);
  }
});
