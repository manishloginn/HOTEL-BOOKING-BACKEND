const roomschema = require("../models/roomschema");
const { isRoomAvailable } = require("../utils/isRoomAvailable");

const bookRoom = async (req, res) => {

    const { roomId, startDate, endDate, userId } = req.body

    try {
        const isAvailable = await isRoomAvailable(roomId, startDate, endDate);
        if (!isAvailable) {
            return res.send({
                status: 400,
                message: 'Room is not available for the selected date range'
            })
        }
        const room = await roomschema.findById(roomId)
        let currentDate = new Date(startDate)
        const end = new Date(endDate);



        let existingUserBooking = room.bookedDates.find(
            (booking) => booking.user.toString() === userId.toString()
        );
        // console.log(existingUserBooking)
        const bookingDates = [];

        while (currentDate <= end) {
            bookingDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        if (existingUserBooking) {
            console.log("existinguser")
            existingUserBooking.dates.push(...bookingDates);
            room.save()
            res.send({
                status: 200,
                message: 'Room booked successfully Updated'
            })
        } else {
            console.log("else existinguser")
            room.bookedDates.push({
                user: userId,
                dates: bookingDates,
            });

            // room.user = userId
            await room.save()

            res.send({
                status: 200,
                message: 'Room booked successfully for the selected date range'
            })

            console.log(room)

        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

module.exports = { bookRoom }