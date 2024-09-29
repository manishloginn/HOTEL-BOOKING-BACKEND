const mongoose = require('mongoose')
const Schema = mongoose.Schema


const paymentSchema = new Schema({
    bookingId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"booking",
        required:true
    },
    paymentMethod : {
        type: String,
        enum: ['credit_card', 'paypal', 'bank_transfer'], 
        required : true
    }, 
    amount : {
        type: Number,
        required: true
    },
    status : {
        type:String,
        enum:['pending', 'completed', 'failed'],
        default:'pending'
    },
    transactionId: { type: String },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('payment', paymentSchema)