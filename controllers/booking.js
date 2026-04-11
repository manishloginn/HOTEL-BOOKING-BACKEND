import bookingschema from "../models/bookingschema.js";
import hotelschema from "../models/hotelschema.js";
import roomschema from "../models/roomschema.js";
import { createOrder } from "../utils/createorder.js";
import { isRoomAvailable } from "../utils/isRoomAvailable.js";
import JWT from "jsonwebtoken";

export const bookRoom = async (req, res) => {


    const { hotelId, roomId, startDate, endDate, guest } = req.body
    const authHeader = req.headers.authorization;
    console.log(authHeader, "authHeader")
    let checkInDate = new Date(startDate);
    let checkoutDate = new Date(endDate);
    checkInDate.setHours(11, 0, 0)
    checkoutDate.setHours(10,59,59)
    const CheckinDateUTC = new Date(checkInDate.getTime() - (checkInDate.getTimezoneOffset()*60000));
    const CheckoutDateUTC = new Date(checkoutDate.getTime() - (checkoutDate.getTimezoneOffset() * 60000))
    const token = authHeader.split(' ')[1];
    let user = JWT.verify(token, process.env.JWT_SECRET)
    req.userId = user.id;
    const userId = req.userId
    try {
        if (startDate === endDate) {
            throw new Error("checkin and checkout date can not be same ")
            return res.send({
                status: 401,
                message: "checkin and checkout date can not be same "
            })
        }

        if (startDate > endDate) {
            throw new Error("checkout date is not lesser than check in date ")
            return res.send({
                status: 401,
                message: "checkout date is not lesser than check in date "
            })
        }

        const isAvailable = await isRoomAvailable(roomId, CheckinDateUTC, CheckoutDateUTC);

        if (!isAvailable) {
            throw new Error('Room is not available for the selected date range')
        }
        const room = await roomschema.findById(roomId)
        const hotel = await hotelschema.findById(hotelId)



        if (guest > room.capacity) {
            throw new Error(`room capacity only ${room.capacity} people`)
        }



        let diffrenceintime = checkoutDate.getTime() - checkInDate.getTime();

        let differenceIndays = diffrenceintime / (1000 * 3500 * 24);

        console.log(new Date(startDate), new Date(endDate))

        hotel.price *= parseInt(differenceIndays)

        console.log(parseInt(differenceIndays))
        console.log(hotel.price)


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


        const orderDetails = await createOrder(bookingData._id, hotel.price);
        res.send({
            status: 200,
            message: orderDetails.url,
            data: room
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}
