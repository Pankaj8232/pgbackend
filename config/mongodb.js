const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://goswamipankaj2166_db_user:goswamipankaj8232@cluster0.deqxbxb.mongodb.net/mydb")
.then(() => {
    console.log("mongodb connected");
})
.catch((e) => {
    console.log(e, "mongodb not connected");
});



// mongodb+srv://goswamipankaj_db_user:oPjBF7QTih7ayK9y@cluster0.deqxbxb.mongodb.net/mydb



