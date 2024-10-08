

const hotelIdValidator = (hotelId) => {
    return new Promise((res, rej) => {
      if(!hotelId) rej('hotelId is not valid')
        
        res('hotelid is valid')
    })
}

module.exports = hotelIdValidator