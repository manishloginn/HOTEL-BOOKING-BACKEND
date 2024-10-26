const express = require('express')
const { userRegistration, userLogin, roomAdd, hotelRegistration, adminLogin } = require('../controllers/authtication')
const insertData = require('../controllers/addDatatodb')
const { bookRoom } = require('../controllers/booking')
const authenticateUser = require('../utils/authenticateUser')
const { fetchHotel, selectHotel, fetchRoomInHotel } = require('../controllers/fetchHotem')
const adminAuthenticate = require('../utils/adminAuthenticate')
const router = express.Router()




router.post('/insertData', insertData)
router.post('/userRegister', userRegistration)
router.post('/userLogin', userLogin)
router.post('/adminRegistration', hotelRegistration)
router.post('/adminLogin', adminLogin)
router.post('/roomadd', authenticateUser, roomAdd )
router.get('/hotelData', fetchHotel) 
router.post('/hotelRooms' , fetchRoomInHotel)
router.post('/hotelselect', selectHotel) 
router.post('/bookRoom', authenticateUser, bookRoom) 




module.exports = router