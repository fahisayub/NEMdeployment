const express=require('express');
require('dotenv').config();

const app=express();
let PORT=process.env.PORT||8080;
app.get('/',async(req,res)=>{

res.send('welcome to home');
})



app.listen(PORT,()=>{
   
    console.log('listening on port')
})