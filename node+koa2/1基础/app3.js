const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const path = require('path')

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./demos/template.html', 'utf8');
};

app.use(main);
app.listen(3000);