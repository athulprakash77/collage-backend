const Mongoose=require("mongoose")

let sSchema=Mongoose.Schema(
    {

        rollno:String,
        name:String,
        phoneno:String,
        address:String

    }
)

let Smodel=Mongoose.model("collage",sSchema)
module.exports=Smodel