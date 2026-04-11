// utils/filteridFromHotel.js

import roomschema from "../models/roomschema.js";

const makingroomdata = (hotelFound, roomdata) => {
    const resultData = [];
    let roomsIndex = 0;

    for (let i = 0; i < hotelFound.length; i++) {
        for (let j = 0; j < 4; j++) {

            if (roomsIndex >= roomdata.length) break;

            const room = roomdata[roomsIndex];

            const data = new roomschema({
                hotelId: hotelFound[i]._id.toString(),
                roomtype: room.roomtype,
                availability: room.availability,
                capacity: room.capacity,
                amenities: room.amenities,
            });

            resultData.push(data);
            roomsIndex++;
        }
    }

    return resultData;
};

export default makingroomdata;