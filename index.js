const express = require('express')
const app = express()
require('dotenv').config()
const database = require('./connection/MongoDbConnection')

const PORT = process.env.PORT
const MODE=process.env.NODE_ENV || "production"






app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})