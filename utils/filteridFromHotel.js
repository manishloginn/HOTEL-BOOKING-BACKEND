const filteridFromHotel = (hoteldata) => {
   const uniqueIds = new Set(hoteldata.map((hotelid) => hotelid._id.toString()))
   console.log(Array.from(uniqueIds).map(id => ({ hotelId: id })))
}


module.exports = filteridFromHotel