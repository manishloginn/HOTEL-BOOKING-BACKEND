const express = require('express')
const { userRegistration, userLogin, roomAdd, hotelRegistration, adminLogin } = require('../controllers/authtication')
const insertData = require('../controllers/addDatatodb')
const { bookRoom } = require('../controllers/booking')
const authenticateUser = require('../utils/authenticateUser')
const { fetchHotel, selectHotel } = require('../controllers/fetchHotem')
const adminAuthenticate = require('../utils/adminAuthenticate')
const router = express.Router()
const myBookingController = require("./../controllers/myBookings")


router.post('/insertData', insertData)
router.post('/userRegister', userRegistration)
router.post('/userLogin', userLogin)
router.post('/adminRegistration', hotelRegistration)
router.post('/adminLogin', adminLogin)
router.post('/roomadd', adminAuthenticate, roomAdd )//add room with middlewear check its room admin or not
router.get('/hotelData', fetchHotel) //fetch hotels
router.post('/hotelselect', selectHotel ) // select hotel for booking
router.post('/bookRoom', authenticateUser, bookRoom) // select room inside selected hotel and book room
router.get("/myBookings",authenticateUser,myBookingController)

module.exports = router