const express=require('express');
require('dotenv').config();

const app=express();
let PORT=process.env.PORT||8080;
app.get('/',(req,res)=>{

res.send('welcome to home');
})
app.get('/products',(req,res)=>{
    res.send('All products')
})
app.get('/user',(req,res)=>{
    res.send('All Users');
})

app.listen(PORT,()=>{
   
    console.log('listening on port')
})