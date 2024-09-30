const express = require('express')
const router = express.Router()
const hotelschema = require("../models/hotelschema");
const hoteldata = require('../data/hoteldata');
const roomschema = require("../models/roomschema");
const roomdata = require("../data/roomdata");
const combinedata = require("../data/combileData");



router.post('/addData', async (req, res) => {
    console.log('hitupload')
    try {
        const delet = await hotelschema.deleteMany();
        const data = await hotelschema.insertMany(hoteldata);
        res.status(201).send(data);
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send({ error: "An error occurred while adding data." });
    }
})

router.post('/roomadd', (req, res) => {
    const {hotelId, roomtype, price, availability, capacity, amenities} = req.body
    console.log(req.body)
    try {
       const data = new roomschema({
        hotelId, 
        roomtype, 
        price, 
        availability, 
        capacity, 
        amenities
       })

       data.save()
       res.status(201).send(data);
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send({ error: "An error occurred while adding data." });
    }
})



module.exports = router