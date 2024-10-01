const roomdata = require("../data/roomdata");
const hotelschema = require("../models/hotelschema");
const roomschema = require("../models/roomschema");
const userschema = require("../models/userschema");
const makingroomdata = require("../utils/filteridFromHotel");
const { registrationValidator } = require("../utils/registraionvalidator");




const inserRoomMany = async (req, res) => {
    try {
        const hoteldata = await hotelschema.find()
        const roomData = await roomdata
        const roomDataWithHotelId =  await makingroomdata(hoteldata, roomData)
        const deleteroom = roomschema.deleteMany()
        const addmanyrooms = roomschema.insertMany(roomDataWithHotelId)
        res.status(200).json(roomDataWithHotelId)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const registration = async (req, res) => {
    const { username, password, email, role } = req.body;

    try {
        // Validate the incoming data
        await registrationValidator({ username, password, email, role });
        let findindb = await userschema.findOne({ email }); 

        if (findindb) {
            return res.send({
                status: 401,
                message: "User already exists" 
            });
        }

        const data = new userschema({
            username,
            password,
            email,
            role
        });

        await data.save();

        res.status(201).json(data);
    } catch (error) {
        console.error("Registration error:", error); 
        res.status(500).send({ error: "An error occurred during registration." });
    }
}

const login = async (req, res) => {  
}


module.exports = { registration, login, inserRoomMany }
