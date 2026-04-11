// utils/hotelIdValidator.js

const hotelIdValidator = (hotelId) => {
    return new Promise((resolve, reject) => {
        if (!hotelId) {
            return reject("hotelId is not valid");
        }

        return resolve("hotelid is valid");
    });
};

export default hotelIdValidator;