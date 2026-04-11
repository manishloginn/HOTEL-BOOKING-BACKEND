// controllers/insertData.js

import hotelschema from "../models/hotelschema.js";
import roomschema from "../models/roomschema.js";
import roomdata from "../data/roomdata.js";
import makingroomdata from "../utils/filteridFromHotel.js";
import hoteldata from "../data/hoteldata.js";

const insertData = async (req, res) => {
    try {
        // 1. Clear old data
        await hotelschema.deleteMany();
        await roomschema.deleteMany();

        // 2. Insert hotels
        const insertedHotels = await hotelschema.insertMany(hoteldata);

        // 3. Get room template data
        const roomTemplate = roomdata;

        // 4. Map hotelId into rooms
        const roomDataWithHotelId = makingroomdata(
            insertedHotels,
            roomTemplate
        );

        // 5. Insert rooms
        await roomschema.insertMany(roomDataWithHotelId);

        return res.status(200).json({
            message: "Data inserted successfully",
            hotels: insertedHotels.length,
            rooms: roomDataWithHotelId.length
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};

export default insertData;