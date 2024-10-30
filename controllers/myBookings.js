const bookingModel = require("./../models/bookingschema")

const myBookingController = async (req, res) => {
    const userId = req.user.id
    try {
        const dbRes = await bookingModel.find({ userId: userId })
            .populate("userId")
            .populate('hotelId')
            .populate("roomId")

        if (!dbRes || dbRes.length === 0) {
            return res.status(200).json({
                message: "sNo Bookings Found"
            })
        }
        return res.status(200).json({
            data: dbRes
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "internel server error"
        })
    }
}

module.exports = myBookingController