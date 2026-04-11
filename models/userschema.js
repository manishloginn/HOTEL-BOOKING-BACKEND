import mongoose from "mongoose";

const {Schema} = mongoose

const user = new Schema({
    username: {type: String, unique: true,required: true},
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required:true },
    createdAt: { type: Date, default: Date.now },
})

const User = mongoose.model('user', user);

export default User;
