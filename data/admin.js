
const mongoose = require("mongoose")

const Adminschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    city: String,
    state: String,
    role: String
})

const Admin = mongoose.model("Admin", Adminschema)

module.exports = Admin
