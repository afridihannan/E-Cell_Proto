const user=require('../Schema/userschema');
const jwt=require('jsonwebtoken');

const authenticate=async(req,res,next)=>{
    try{
        console.log("Authenticate");
       const token=req.cookies.jwt;
       const verifytoken=jwt.verify(token,process.env.SECRET);

       const rootuser=await user.findOne({_id:verifytoken._id},{"tokens.token":token})
       if(!rootuser){
           throw new error("Not found");
       }
       req.token=token;
       req.rootuser=rootuser;
       req.userID=rootuser._id;
    
       next();
    }catch{
        res.send("Unauthorised");
    }
}
module.exports=authenticate;