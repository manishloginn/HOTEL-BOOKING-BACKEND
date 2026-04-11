// utils/isRoomAvailable.js

import bookingschema from "../models/bookingschema.js";

export const isRoomAvailable = async (roomId, CheckinDateUTC, CheckoutDateUTC) => {

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
    })

    if(overLaping.length>0){
        return false
    }
    return true
};