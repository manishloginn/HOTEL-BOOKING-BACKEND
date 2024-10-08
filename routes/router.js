const express = require('express')
const { userRegistration, userLogin, roomAdd, hotelRegistration, adminLogin } = require('../controllers/authtication')
const insertData = require('../controllers/addDatatodb')
const { bookRoom } = require('../controllers/booking')
const authenticateUser = require('../utils/authenticateUser')
const { fetchHotel, selectHotel } = require('../controllers/fetchHotem')
const router = express.Router()




router.post('/insertData', insertData)
router.post('/userRegister', userRegistration)
router.post('/userLogin', userLogin)
router.post('/adminRegistration', hotelRegistration)
router.post('/adminLogin', adminLogin)
router.post('/roomadd', roomAdd )
router.get('/hotelData', fetchHotel) //fetch hotels
router.post('/hotelselect', selectHotel ) // select hotel for booking
router.post('/bookRoom', authenticateUser, bookRoom) // select room inside selected hotel and book room



module.exports = router