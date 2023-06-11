import User from '../models/user.js';
import {hashpassword,comparePassword} from '../helper/auth.js';

export const register = async(req,res)=>{
    
     console.log("Register  Endpoint =>",req.body)
  const {name,email,password,secret }=req.body;
    if(!name) return res.status(400).send("Name is required");
    if(!password || password.length<6) return res.status(400).send("password is required");

    if(!secret) return res.status(400).send("Answer is required");
    const exist =await User.findOne({email});
    if(exist) return res.status(400).send("email is taken");

    const hashedPassword=await hashpassword(password);

    const user =new User({name,email,password:hashedPassword,secret});
    try
    {
        await user.save();
        console.log("Registered Use =>",user);
        return res.json({
            ok:true,    
        });
    }
    catch (err)
    {
        console.log("Registered Failed =>",err);
        return res.status(400).send("Error.try again");
    }

};