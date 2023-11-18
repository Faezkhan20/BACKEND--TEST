import mongoose,{Schema} from "mongoose";

const product=new Schema({
   name:String,
   price:String,
   category:String,
   imageurl:String

})


export default mongoose.model("product",product)