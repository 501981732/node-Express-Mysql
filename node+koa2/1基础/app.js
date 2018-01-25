const Koa = require('koa')

const app = new Koa()
const route = require('koa-route')
app.listen(3000)

// Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）
// Context.response.body属性就是发送给用户的内容。

const main =  ctx => {
    // ctx.response代表 HTTP Response。
    // ctx.request代表 HTTP Request。
    ctx.response.body = 'Hello World'

}

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

app.use(route.get('/', main));
app.use(route.get('/about', about))
app.use(main)

