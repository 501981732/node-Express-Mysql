
// 两种方式获取get请求
// 获得GET请求的方式有两种，一种是从request中获得，一种是一直从上下文中获得。获得的格式也有两种：query和querystring。根据实际需求进行灵活变换
const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url =ctx.url;

    //从request中获取GET请求
    let req_query = ctx.request.query;    //{xx:xx}
    let req_querystring = ctx.request.querystring; //{x=xx&x=x}

    //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring,
        ctx,
        methld: ctx.method
        // res:ctx.res
    }

});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});