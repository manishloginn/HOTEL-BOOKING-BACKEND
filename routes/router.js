const express = require('express')
const { registration, login, inserRoomMany } = require('../controllers/authtication')
const router = express.Router()

router.post('/Register', registration)

router.post('/login', login)

router.post('/insertRooms', inserRoomMany)



module.exports = router