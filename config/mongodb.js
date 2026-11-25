const moongose=require("mongoose")

moongose.connect("mongodb://localhost:27017/pgproject",{
    family : 4
}).then(()=>{
    console.log("mongodb connected")
}).catch((e)=>{
    console.log(e,"mongodb not connected")
})