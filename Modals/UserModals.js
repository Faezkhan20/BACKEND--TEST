import mongoose,{Schema} from "mongoose";

const user=new Schema({
    email:String,
    name:String,
    password:String,

})


export default mongoose.model("User",user)