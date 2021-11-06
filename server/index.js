const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express();
const cors = require('cors')
const bcrypt=require('bcryptjs');

dotenv.config({path:'./.env'});
app.use(express.json());
app.use(cors());

const User=require('./Schema/userschema');
// app.use(require('./Routers/auth'));
app.use(express.urlencoded({extended:true}));

console.log(process.env.DB)
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log(err);
})

app.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email,phone, password, confir } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send("User already registered")
        } else {
            const user = new User({
                name:name, email:email,phone:phone, password:password, confir:confir
            })
            user.save((err) => {
                if (err) {
                    console.log("Registration Error"+'\n'+err);
                } else {
                    res.send("Registration Successful")
                }
            })
        }
    })
})

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            const isMatch=bcrypt.compare(password,user.password);
            if(isMatch){
                res.send({message:"Login Successful",user:user})
            }else{
                res.send({message:"Invalid Credentials"})
            }
        }else{
            res.send({message:"Invalid Credentials"})
        }
    })
})

// const middleware=(req,res,next)=>{
//     console.log("hello");
//     next();
// }
app.get('/',(req,res)=>{
    console.log("Hello from Server")
})
// app.get('/about',middleware,(req,res)=>{
//     console.log("Hello");
//     next();
// })

app.listen(5678,(req,res)=>{
    console.log(`Server running at port ${process.env.PORT}`);
})

