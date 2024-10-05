const roomschema = require("../models/roomschema")

const isRoomAvailable = async (roomId, startDate, endDate) => {

    const room = await roomschema.findById(roomId)

   

    const bookedDates = new Set(room.bookedDates.flatMap(booking => 
        booking.dates.map(date => date.toISOString().split('T')[0])
        // .toISOString().split('T')[0]
    ));

    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        const formatedDate = currentDate.toISOString().split('T')[0];

        if (bookedDates.has(formatedDate)) {
            console.log("false")
            return false
        }
        currentDate.setDate(currentDate.getDate() + 1)
    }

    return true
}

module.exports = {isRoomAvailable}