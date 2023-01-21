const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")

const Smodel=require("./model/studentModel")


var collage=Express()
collage.use(Bodyparser.json())
collage.use(Bodyparser.urlencoded({extended:true}))




collage.get("/student",(req,res)=>{
res.send("welcome to collage")
})


collage.post("/addstudent",(req,res)=>{
    let data=new Smodel(req.body)
    console.log(data)
 res.send("add student ")
})
    

collage.post("/searchstudent",(req,res)=>{
 res.send("search student")
 })


collage.post("/deletestudent",(req,res)=>{
res.send("delete student")
})


             collage.get("/faculity",(req,res)=>{
             res.send("welcome to collage")
             })


             collage.post("/faculityadd",(req,res)=>{
              
             res.send("add faculity")
             })

    
             collage.post("/faculitysearch",(req,res)=>{
             res.send("faculity search ")
             })


             collage.post("/faculitydelete",(req,res)=>{
             res.send(" faculity delete ")
             })

collage.listen(2002)