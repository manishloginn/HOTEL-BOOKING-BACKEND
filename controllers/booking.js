const bookingschema = require("../models/bookingschema");
const roomschema = require("../models/roomschema");
const { isRoomAvailable } = require("../utils/isRoomAvailable");
const JWT = require('jsonwebtoken')

const bookRoom = async (req, res) => {

    
    const { roomId, startDate, endDate, guest } = req.body
    const token = req.cookies.userToken

    user = JWT.verify(token, process.env.JWT_SECRET)
    req.userId = user.id;
    const userId = req.userId


    try {

        const isAvailable = await isRoomAvailable(roomId, startDate, endDate);
        if(startDate === endDate){
           return res.send({
                status:401,
                message:"checkin and checkout date can not be same "
            })
        }

        if(startDate > endDate){
            return res.send({
                status:401,
                message:"checkout date is not lesser than check in date "
            })
        }

        if (!isAvailable) {
            return res.send({
                status: 400,
                message: 'Room is not available for the selected date range'
            })
        }
        const room = await roomschema.findById(roomId)
        let currentDate = new Date(startDate)
        const end = new Date(endDate);
        

        if(guest > room.capacity){
            return res.send({
                status:401,
                message:`room capacity only ${room.capacity} people`
            })
        }


        let existingUserBooking = room.bookedDates.find(
            (booking) => booking.user.toString() === userId.toString()
        );

        const bookingDates = [];




        while (currentDate <= end) {
            bookingDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        let priceInto = (bookingDates.length) - 1

        room.price *= priceInto 

        if (existingUserBooking) {
            existingUserBooking.dates.push(...bookingDates);
        } else {
            room.bookedDates.push({
                user: userId,
                dates: bookingDates,
            });
        }

        const bookingData =  new bookingschema(
            {
                userId:userId,
                hotelId:room.hotelId,
                roomId:roomId,
                checkInDate:startDate,
                checkOutDate:endDate,
                guests:guest,
                totalPrice:room.price
            }
        )
        
        await bookingData.save()
        await room.save()

        res.send({
            status: 200,
            message: 'Room booked successfully for the selected date range',
            data: room
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}




module.exports = { bookRoom }