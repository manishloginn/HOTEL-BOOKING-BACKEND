import mongoose from "mongoose";

const {Schema} = mongoose

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
    availability: {
        type: Boolean,
        default: true
    },
    capacity: {
        type: Number,
        required: true
    },
    amenities: [String]
   
}, { strict: false })

// 


const Room = mongoose.model('rooms', roomschema)
export default Room;