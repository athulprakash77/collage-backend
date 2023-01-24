const Mongoose=require("mongoose")

let sSchema=Mongoose.Schema(
    {

        rollno:String,
        name:String,
        phoneno:String,
        address:String

    }
)
module.exports=Mongoose.model("collage",sSchema)