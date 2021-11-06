const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    try{
        res.send("Hello")
    }catch(err){
        console.log(err)
    }
})

app.listen(5678,(req,res)=>{
    console.log("server running at port 6000");
})