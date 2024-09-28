const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookingschema = new Schema ({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required : true
    },
    hotelId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotel",
        required : true
    },
    roomId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms"
    },
    checkInDate: {
        type:Date,
        required : true
    },
    checkOutDate: {
        type:Date,
        required:true
    },
    guests: {
        type:Number,
        required:true
    },
    totalPrice: {
        type:Number,
        required:true
    },
    status: {
        type: String,
        enum: ['confirmed', 'canceled', 'completed'],
        default: "confirmed",
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('booking', bookingschema)