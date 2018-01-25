// 嵌套路由~

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

let page1 = new Router()
let page2 = new Router()

page1.get('/index', async(ctx) =>{
   ctx.body="Home index";
}).get('/wm',async(ctx2)=>{
    ctx2.body = 'Hello wm'
})

page2.get('/index2', async(ctx) =>{
   ctx.body="Home index";
}).get('/wm',async(ctx)=>{
    ctx.body = 'Hello wm2'
})


// 装在子路由

let router = new Router()

router.use('/page1',page1.routes(),page1.allowedMethods())
router.use('/page2',page2.routes(),page2.allowedMethods())





// 加载路由中间件

app.use(router.routes(),router.allowedMethods())


app.listen(3000,()=>{
    console.log('3000 is open')
})