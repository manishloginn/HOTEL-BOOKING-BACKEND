import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingschema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel",
    required: true
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rooms"
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  order_id: {
    type: String
  },
  status: {
    type: String,
    enum: ["confirmed", "canceled", "completed", "pending"],
    default: "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model("booking", bookingschema);

export default Booking;