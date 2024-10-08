const hotelschema = require("../models/hotelschema")
const roomschema = require("../models/roomschema")
const hotelIdValidator = require("../utils/hotelIdValidator")

const fetchHotel = async (req, res) => {
    try {
        const hotelData = await hotelschema.find()
        if (!hotelData) {
            return res.send({
                status: 204,
                message: "no hotel found"
            })
        }
        res.send({
            status: 200,
            message: 'hotel fetch successfully',
            data: hotelData
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "An error occurred while fetching the hotels",
            error: error.message
        });
    }
}


const selectHotel = async (req, res) => {
    const { hotelId } = req.body

    try {
        hotelIdValidator(hotelId)
        const findhotel = await roomschema.find({ hotelId: hotelId })
        if (!findhotel) {
            return res.send({
                status: 500,
                message: "hotel not found"
            })
        }

        res.send({
            status: 201,
            message: "please select room",
            data: findhotel
        })

    } catch (error) {
        res.send({
            message:error
        })
    }


}

module.exports = { fetchHotel, selectHotel }