const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelschema = new Schema({
    name : {
        type: String, 
        required : true, 
    }, 
    location: {
        type:String, 
        required:true,
    },
    describtion : {
        type:String
    },
    amenities : [String],
    images: [String],
    createdAt: {type:Date, default: Date.now}
})

module.exports = mongoose.model('hotel', hotelschema)