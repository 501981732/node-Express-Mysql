const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')
const app = new Koa()


const staticPath = './static'   
// 设置静态资源文件
app.use(static(
  path.join( __dirname,  staticPath)
))

app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})