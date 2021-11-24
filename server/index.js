const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const authenticate = require('./Routers/authenticate');

dotenv.config({ path: './.env' });
app.use(express.json());
app.use(cors());

const User = require('./Schema/userschema');
// app.use(require('./Routers/auth'));
app.use(express.urlencoded({ extended: true }));

console.log(process.env.DB)
mongoose.connect(process.env.DB, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
})

app.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email, phone, password, confir } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send("User already registered")
        } else {
            const user = new User({
                name: name, email: email, phone: phone, password: password, confir: confir
            })
            user.save((err) => {
                if (err) {
                    console.log("Registration Error" + '\n' + err);
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
            const isMatch=bcrypt.compareSync(password,user.password);
            console.log(isMatch);
            if(isMatch===true){
                res.send({message:"Login Successful",user:user})
            }else{
                res.send({message:"Invalid Credentials"})
            }
        }else{
            res.send({message:"Invalid Credentials"})
        }
    })
})

//About
app.get('/about', authenticate, (req, res) => {
    res.send(req.rootuser);
})

app.get('/', (req, res) => {
    console.log("Hello from Server")
})





app.listen(5678, (req, res) => {
    console.log(`Server running at port ${process.env.PORT}`);
})

/*
if (user) {
                const isMatch = bcrypt.compareSync(password, user.password);
                console.log(isMatch);
                if (isMatch === true) {
                    const token =await user.generateAuthToken();
                    console.log(token);
                    res.cookie("jwt", token, {
                        expires: new Date(Date.now() + 1000),
                        httpOnly: true
                    })
                    res.send({ message: "Login Successful", user: user })
                } else {
                    res.send({ message: "Invalid Credentials" })
                }
            } else {
                res.send({ message: "Invalid Credentials" })
            }
*/

