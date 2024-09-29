const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reviewSchema = new Schema({
    hotelId: {
        type : mongoose.Schema.Types.ObjectId,
        ref:'hotel',
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    }, 
    rating: {
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
        type:String,
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
})  

module.exports = mongoose.model('review', reviewSchema)