
const mongoose = require("mongoose")

const Productschema = new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    slug: String,
    available: Number,
    quantity: Number,
    gender: String,
    image: String,
    more: String
})

const Products = mongoose.model("Products", Productschema)

module.exports = Products
