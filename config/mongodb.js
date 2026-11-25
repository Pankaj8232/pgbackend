const moongose=require("mongoose")

moongose.connect("mongodb://localhost:27017/pgproject").then(()=>{
    console.log("mongodb connected")
}).catch((e)=>{
    console.log(e,"mongodb not connected")
})