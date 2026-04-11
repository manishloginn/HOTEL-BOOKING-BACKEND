// utils/registrationvalidator.js

export const registrationValidator = ({ username, password, email, role }) => {
    return new Promise((resolve, reject) => {
        if (!username || !password || !email || !role) {
            return reject("Please fill all details");
        }
        return resolve("OK");
    });
};

export const addHotelValidator = ({
    name,
    location,
    description,
    amenities,
    images,
    createdAt,
    email,
}) => {
    return new Promise((resolve, reject) => {
        if (!name || !location || !description || !amenities || !images || !createdAt || !email) {
            return reject("Please fill all details");
        }
        return resolve("OK");
    });
};

export const validateAdmin = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject("Please fill all details");
        }
        return resolve("Admin is approved");
    });
};