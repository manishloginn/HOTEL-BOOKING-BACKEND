const express = require('express')
const { registration, login, roomAdd } = require('../controllers/authtication')
const insertData = require('../controllers/addDatatodb')
const router = express.Router()




router.post('/insertData', insertData)
router.post('/Register', registration)
router.post('/login', login)
router.post('/addHotel', async (req, res) => {
    try {
        const delet = await hotelschema.deleteMany();
        const data = await hotelschema.insertMany(hoteldata);
        res.status(201).send(data);
    } catch (error) {
        console.error("Error adding data:", error);
        res.status(500).send({ error: "An error occurred while adding data." });
    }
})

router.post('/roomadd', roomAdd )




module.exports = router