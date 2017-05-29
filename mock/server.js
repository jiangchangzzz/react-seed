const fs=require('fs');
const Koa=require('koa');
const Router=require('koa-router');

const app=new Koa();

let router=new Router();

router.get('/',async (context)=>{
    let html='<h1>Home</h1>'
    context.body=html;
});

router.get('/about',async (context)=>{
    let html='<h1>About</h1>';
    context.body=html;
});

router.post('/api/post',async (context)=>{
    console.log(context.request.body);
    context.body=JSON.stringify(context.request.body);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);