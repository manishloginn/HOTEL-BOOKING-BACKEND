const express = require('express')
const hotelschema = require("../models/hotelschema");
const roomschema = require("../models/roomschema");
const roomdata = require("../data/roomdata");
const makingroomdata = require('../utils/filteridFromHotel');
const hoteldata = require('../data/hoteldata');



const insertData = async (req, res) => {
    console.log("hi")
    try {
        const delet = await hotelschema.deleteMany();
        const data = await hotelschema.insertMany(hoteldata);
        const hotelFound = await hotelschema.find()
        const roomData = await roomdata
        const deleteroom = roomschema.deleteMany()
        const roomDataWithHotelId = await makingroomdata(hotelFound, roomData)
        const addmanyrooms = roomschema.insertMany(roomDataWithHotelId)
        res.status(200).json(roomDataWithHotelId)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = insertData