const bookingschema = require("../models/bookingschema");
const { checkout } = require("../routes/router");

const isRoomAvailable = async (roomId, CheckinDateUTC, CheckoutDateUTC) => {

    const overLaping = await bookingschema.find({
        roomId:roomId,
        $or:[
            {
                checkInDate:{$lte:CheckoutDateUTC},
                checkOutDate:{$gt:CheckinDateUTC}
            },
            {
                checkInDate:{$gte:CheckinDateUTC, $lte:CheckoutDateUTC},
            },
            {
                checkOutDate:{$gte:CheckinDateUTC, $lte:CheckoutDateUTC}
            },
        ],   
        status: { $in: ['confirmed'] } 
    })

    if(overLaping.length>0){
        return false
    }
    return true
}

module.exports = {isRoomAvailable}