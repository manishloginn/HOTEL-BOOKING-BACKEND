const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomschema = new Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel',
        required: true
    },
    roomtype: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    capacity: {
        type: Number,
        required: true
    },
    amenities: [String],

    // bookedDates: [
    //     {
    //         user: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'user', 
    //         },
    //         dates: {
    //             type: Date,
    //             required: true,
    //             _id: false
    //         }
    //     }]


    bookedDates:[
    ],
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users", 
        required:true
    }
}, { strict: false })

// 


module.exports = mongoose.model('rooms', roomschema)