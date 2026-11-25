
const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    pincode: Number,
    state: String,
    city: String,
    image: String
})

const Data = mongoose.model("users", Userschema)

module.exports = Data
