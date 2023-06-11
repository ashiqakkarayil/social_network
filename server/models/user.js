import mongoose from "mongoose";
const {Schema }=mongoose;

const userSchema =new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        

    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64,
    },
    secret:
    {
        type:String,
        trim:true,
        required:true,
    },
    about:{},
    photo:String,
    following:[{type:Schema.ObjectId,ref:"user"}],
    followers:[{type:Schema.ObjectId,ref:"user"}],

},
{timestamps:true}

);

export default mongoose.model("user",userSchema);