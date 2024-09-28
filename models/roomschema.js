const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomschema = new Schema({
    hotelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hotel',
        required: true
    },
    roomtype: {
        type:String,
        required : true,
    },
    price : {
        type:Number,
        require:true
    },
    availability: {
        type : Boolean, 
        default:true
    },
    capacity: {
        type: Number,
        required:true
    },
    amenities:[String],
})

module.exports = mongoose.model('rooms', roomschema)