const bookingschema = require("../models/bookingschema");
const hotelschema = require("../models/hotelschema");
const roomschema = require("../models/roomschema");
const { isRoomAvailable } = require("../utils/isRoomAvailable");
const JWT = require('jsonwebtoken')

const bookRoom = async (req, res) => {

    const { hotelId, roomId, startDate, endDate, guest } = req.body
    const authHeader = req.headers.authorization;


    let checkInDate = new Date(startDate);
    let checkoutDate = new Date(endDate);

    checkInDate.setHours(11, 0, 0)
    checkoutDate.setHours(10,59,59)

    const CheckinDateUTC = new Date(checkInDate.getTime() - (checkInDate.getTimezoneOffset()*60000));
    const CheckoutDateUTC = new Date(checkoutDate.getTime() - (checkoutDate.getTimezoneOffset() * 60000))




    const token = authHeader.split(' ')[1];




    user = JWT.verify(token, process.env.JWT_SECRET)
    req.userId = user.id;
    const userId = req.userId
    try {
        if (startDate === endDate) {
            return res.send({
                status: 401,
                message: "checkin and checkout date can not be same "
            })
        }

        if (startDate > endDate) {
            return res.send({
                status: 401,
                message: "checkout date is not lesser than check in date "
            })
        }

        const isAvailable = await isRoomAvailable(roomId, CheckinDateUTC, CheckoutDateUTC);

        // console.log(isRoomAvailable)

        if (!isAvailable) {
            return res.send({
                status: 400,
                message: 'Room is not available for the selected date range'
            })
        }
        const room = await roomschema.findById(roomId)
        const hotel = await hotelschema.findById(hotelId)



        if (guest > room.capacity) {
            return res.send({
                status: 401,
                message: `room capacity only ${room.capacity} people`
            })
        }


        // let existingUserBooking = room.bookedDates.find(
        //     (booking) => booking.user.toString() === userId.toString()
        // );

        // const bookingDates = [];

        // while (currentDate <= end) {
        //     bookingDates.push(new Date(currentDate));
        //     currentDate.setDate(currentDate.getDate() + 1);
        // }

        // // console.log(hotel)
        // let priceInto = (bookingDates.length) - 1

        // let sum = (startDate + endDate) - 1

        let diffrenceintime = checkoutDate.getTime() - checkInDate.getTime();

        let differenceIndays = diffrenceintime / (1000 * 3500 * 24);

        console.log(new Date(startDate), new Date(endDate))

        hotel.price *= parseInt(differenceIndays)

        console.log(parseInt(differenceIndays))
        console.log(hotel.price)

        // if (existingUserBooking) {
        //     existingUserBooking.dates.push(...bookingDates);
        // } else {
        //     room.bookedDates.push({
        //         user: userId,
        //         dates: bookingDates,
        //     });
        // }

        const bookingData = new bookingschema(
            {
                userId: userId,
                hotelId: room.hotelId,
                roomId: roomId,
                checkInDate: CheckinDateUTC,
                checkOutDate: CheckoutDateUTC,
                guests: guest,
                totalPrice: hotel.price
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