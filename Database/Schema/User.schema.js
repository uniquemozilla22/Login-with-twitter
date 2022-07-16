import  Mongoose  from "mongoose";

const User = new Mongoose.Schema({
    username:{
        type:String,
        required:'true'
    },
    name:{
        type:String,
        required:true
    },
    socialID:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false
    }
})


const  UserSchema = Mongoose.model('user',User )


export default UserSchema