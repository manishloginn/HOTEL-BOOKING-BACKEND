const { default: mongoose, Mongoose } = require("mongoose");
const roomschema = require("../models/roomschema");


const makingroomdata = (hotelFound, roomdata) => {
   // console.log("hittt")

   const uniqueIds = new Set(hotelFound.map((hotelid) => hotelid._id.toString()))
   const filterhotelId = Array.from(uniqueIds).map(id => ({ hotelId: id }))
   let roomsIndex = 0;
   const resultData = []; 

   for (let i = 0; i < filterhotelId.length; i++) {
      for (let j = 1; j <=4 ; j++) {
         if(roomsIndex < roomdata.length){
            const room = roomdata[roomsIndex];
            const data = new roomschema({
               hotelId: filterhotelId[i].hotelId.toString(),
               roomtype: room.roomtype,
               // price: room.price,
               availability: room.availability,
               capacity: room.capacity,
               amenities: room.amenities,
               bookedDates:[
                  {
                     user:'',
                     dates:[]
                  }
               ],
               bookedDates:[],
            });
            resultData.push(data);
            // console.log(data);
            roomsIndex++;
         } else {
            break;
         }
      }

   }
   return resultData


}


module.exports = makingroomdata