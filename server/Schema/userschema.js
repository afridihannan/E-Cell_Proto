const mongoose=require("mongoose")
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confir:{
        type:String,
        required:true
    }
})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,10);
        this.confir=await bcrypt.hash(this.confir,10);
    }
    next();
})
const user=mongoose.model("E_Cell_Registrations",userSchema);
module.exports=user;