const mongoose = require('mongoose')
const Schema = mongoose.Schema


// const roomschema = new Schema({
//     roomtype: {
//         type:String,
//         required : true,
//     },
//     price : {
//         type:Number,
//         require:true
//     },
//     availability: {
//         type : Boolean, 
//         default:true
//     },
//     capacity: {
//         type: Number,
//         required:true
//     },
//     amenities:[String],
// })




const hotelschema = new Schema({
    name : {
        type: String, 
        required : true, 
    }, 
    location: {
        type:String, 
        required:true,
    },
    description : {
        type:String
    },
    amenities : [String],
    images: [String],
    createdAt: {type:Date, default: Date.now},
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }, 
    role: { type: String, required:true }
})

module.exports = mongoose.model('hotel', hotelschema)

