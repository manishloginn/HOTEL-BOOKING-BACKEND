const bookingschema = require("../models/bookingschema");
const roomschema = require("../models/roomschema")

const isRoomAvailable = async (roomId, startDate, endDate) => {

    let currentDate = new Date(startDate);

    const room = await roomschema.findById(roomId)


    const bookedDates = new Set(room.bookedDates.flatMap(booking => 
        booking.dates.map(date => date.toISOString().split('T')[0])
    ));



    

    while (currentDate <= new Date(endDate)) {
        const formatedDate = currentDate.toISOString().split('T')[0];
        if (bookedDates.has(formatedDate)) {
            return false
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return true
}

module.exports = {isRoomAvailable}