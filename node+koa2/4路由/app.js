// 原生路由

// 原生路由的实现需要引入fs模块来读取文件。然后再根据路由的路径去读取，最后返回给页面，进行渲染。
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();


// fs模块返回一个promise对象，
function render(page){
        return  new Promise((resolve,reject)=>{
            let pageUrl = `./page/${page}`;
            fs.readFile(pageUrl,"binary",(err,data)=>{
                console.log(444);
                if(err){
                    reject(err)
                }else{
                    
                    resolve(data);
                }
            })
        })
    
}

// 根据对应的url去读取文件
async function route(url){
    
    let page = '404.html';
    switch(url){
        case '/':
            
            page ='index.html';
            break;
        case '/index':
            page ='index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break; 
    }
    let html = await render(page);
    
    return html;
}

app.use(async(ctx)=>{
    let url = ctx.request.url;
    // await 读取文件
    let html = await route(url);
    
    ctx.body=html;
})
app.listen(3000);
console.log('starting at 3000');