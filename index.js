const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser('secret'));

app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.send('connected');
})

app.get('/setcookie',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('fruit','grape',{signed:true});
    res.send('sent cookie');
})

app.listen(5000,()=>{
    console.log('server running');
})