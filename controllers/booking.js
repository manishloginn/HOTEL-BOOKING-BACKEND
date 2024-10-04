const roomschema = require("../models/roomschema");
const { isRoomAvailable } = require("../utils/isRoomAvailable");

const bookRoom = async (req, res) => {

    const {roomId, startDate, endDate, userId} = req.body


 


    try { 
        const isAvailable = await isRoomAvailable(roomId, startDate, endDate);
        if(!isAvailable){
            return res.send({
                status:400, 
                message: 'Room is not available for the selected date range' 
            })
        }
        const room = await roomschema.findById(roomId)
        let currentDate = new Date(startDate)

        while(currentDate <= new Date(endDate)){
            room.bookedDates.push(new Date(currentDate))
            currentDate.setDate(currentDate.getDate() + 1)
        }

        room.user = userId
        await room.save()

        console.log(room)
        res.send({
            status:200,
            message:'Room booked successfully for the selected date range'
        })

        console.log(room)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

module.exports = {bookRoom}