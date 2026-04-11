// const bookingschema = require("../models/bookingschema")
import bookingModel from "../models/bookingschema.js";
const mySingleBooking = async (req, res) => {
    const { bookingId } = req.body

    if (!bookingId) {
        return res.status(400).json({
            message: "Booking id required"
        })
    }

    try {
        const bookingRes = await bookingModel.findOne({ _id: bookingId })
            .populate("hotelId")
            .populate("roomId")
            .populate("userId")
            
        if (!bookingRes) {
            return res.status(200).json({
                message: "No booking Found"
            })
        }
        return res.status(200).send(bookingRes)
    } catch (error) {
        return res.status(500).json({
            message: error.message || "internel server error"
        })
    }
}

export default mySingleBooking