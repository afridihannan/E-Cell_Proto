const express=require('express')
const router=express.Router();
const Data=require('../Schema/userschema');
const app=express();

router.post('/register',(req,res)=>{
    console.log(req.body)
    const {name,email,phone,password,confir}=req.body;
    Data.findOne({email:email}).then((user)=>{
        if(user){
            return res.status(422).json({error:"Already registered"})
        }else{
            const User=new Data({name,email,phone,password,confir});
        }
        User.save().then(()=>{
            res.status(201).json({message:"User Registered"})
        }).cathch(err=>{
            res.status(500).json({error:"Failed"});
        })
    }).cathch(err=>{
        console.log(err);

    })
})

router.post('/login',(req,res)=>{
    const{email,password}=req.body;
    Data.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successful"})
            }else{
                res.send({message:"Password Not Correct"})
            }
        }else{
            res.send({message:"Invalid Credentials"})
        }
    })
})

module.exports=router;