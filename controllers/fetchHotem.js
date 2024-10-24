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

    if(!hotelId){
       return res.send({
            status:400,
            message:"hotelId not found"
        })
    }

    try {
        hotelIdValidator(hotelId)
        const findhotel = await roomschema.find({ hotelId: hotelId })
        const hotelSearch = await hotelschema.findById({_id:hotelId})

        // console.log(hotelSearch)
        if (!findhotel) {
            return res.send({
                status: 500,
                message: "hotel not found"
            })
        }

        res.send({
            status: 201,
            message: "please select room",
            data: findhotel,
            hotelDetail:hotelSearch
        })

    } catch (error) {
        res.send({
            message:error
        })
    }


}


const fetchRoomInHotel = async (req, res) => {
    const {hotelId} = req.body;
    // console.log(hotelId)

    if(!hotelId){
        return res.send({
            status:401,
            message:"Plesase select valid hotel"
        })
    }

    try {
        const result = await roomschema.find({hotelId:hotelId})
        if(!result) {
            return res.send({
                status:500,
                message:"No Rooms Available"
            })
        }
        // console.log(result)
        

        res.send({
            status:200,
            message:"Rooms Fetch",
            data:result
        })

        
    } catch (error) {
        console.log("Error", error)
    }

}
module.exports = { fetchHotel, selectHotel, fetchRoomInHotel }