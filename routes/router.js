const express = require('express')
const { userRegistration, userLogin, roomAdd, hotelRegistration, adminLogin } = require('../controllers/authtication')
const insertData = require('../controllers/addDatatodb')
const { bookRoom } = require('../controllers/booking')
const authenticateUser = require('../utils/authenticateUser')
const router = express.Router()




router.post('/insertData', insertData)
router.post('/userRegister', userRegistration)
router.post('/userLogin', userLogin)
router.post('/adminRegistration', hotelRegistration)
router.post('/adminLogin', adminLogin)
router.post('/roomadd', roomAdd )
router.post('/bookRoom', authenticateUser, bookRoom)



module.exports = router