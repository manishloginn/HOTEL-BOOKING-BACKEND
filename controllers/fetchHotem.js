const hotelschema = require("../models/hotelschema")

const fetchHotel = async (req, res) => {
    try {
        const hotelData = await hotelschema.find()
        if(!hotelData){
            return res.send({
                status:204,
                message:"no hotel found"
            })
        }
        res.send({
            status:200,
            message:'hotel fetch successfully',
            data:hotelData
        })
        
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "An error occurred while fetching the hotels",
            error: error.message
        });
    }
}

module.exports = fetchHotel