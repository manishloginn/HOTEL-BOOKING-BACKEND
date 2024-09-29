const hotelschema = require("../models/hotelschema");
const hoteldata = require('../data/hoteldata');
const roomschema = require("../models/roomschema");
const roomdata = require("../data/roomdata");

const addDatatodb = async (req, res) => {
    try {
        const delet = await hotelschema.deleteMany();
        const data = await hotelschema.insertMany(hoteldata);
        res.status(201).send(data); 
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send({ error: "An error occurred while adding data." });
    }
   
}

module.exports = {addDatatodb}