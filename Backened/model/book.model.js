import mongoose from "mongoose";
const BookSchema=mongoose.Schema({
 name:String,
 title:String,
 price:Number,
 category:String,
 image:String,

})
const book=mongoose.model("book",BookSchema)
export default book