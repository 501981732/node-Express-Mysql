var Hello = require('./hello.js');
hello = new Hello;

hello.setName('name')
hello.sayHello()
console.log(__filename)
console.log(__dirname)