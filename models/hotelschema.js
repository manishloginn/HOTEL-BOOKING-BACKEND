import mongoose from "mongoose";

const { Schema } = mongoose;

const hotelschema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  amenities: [String],
  images: [String],

  createdAt: {
    type: Date,
    default: Date.now
  },

  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  price: {
    type: Number
  }
});

const Hotel = mongoose.model("hotel", hotelschema);

export default Hotel;