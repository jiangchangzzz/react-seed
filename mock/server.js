const fs=require('fs');
const Koa=require('koa');
const Router=require('koa-router');
const KoaBody=require('koa-body');

const app=new Koa();
const router=new Router();
const koaBody=new KoaBody();

router.get('/',async (context)=>{
    let html='<h1>Home</h1>'
    context.body=html;
});

router.get('/about',async (context)=>{
    let html='<h1>About</h1>';
    context.body=html;
});

router.post('/api/post',koaBody,async (context)=>{
    console.log(context.request.body);
    context.body=JSON.stringify(context.request.body);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);