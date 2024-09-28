const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    uesrname: {type: String, unique: true,required: true},
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['guest', 'admin'], default: 'guest' },
    createdAt: { type: Date, default: Date.now },

})

module.exports=mongoose.model('user', user)
