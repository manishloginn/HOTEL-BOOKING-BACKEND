const express = require('express')
const { registration, login } = require('../controllers/authtication')
const router = express.Router()

router.post('/Register', registration)

router.post('/login', login)



module.exports = router