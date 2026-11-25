const moongose=require("mongoose")

moongose.connect("mongodb+srv://goswamipankaj2166_db_user:oPjBF7QTih7ayK9y@cluster0.deqxbxb.mongodb.net/",{ 
    family : 4
}).then(()=>{ 
    console.log("mongodb connected")
}).catch((e)=>{
    console.log(e,"mongodb not connected")
})