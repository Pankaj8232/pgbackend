
const mongoose = require("mongoose")

const Bookingschema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    gender: String,
    available: String,
    price: Number,
    quantity: Number,
    userId: String,
    utr: String,
    paymentStatus: String
})

const Booking = mongoose.model("Booking", Bookingschema)

module.exports = Booking
