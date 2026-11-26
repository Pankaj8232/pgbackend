
const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    password: String,
    city: String,
    state: String,
    pincode: Number
})

const Login = mongoose.model("Login", Userschema)

module.exports = Login
