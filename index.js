const express = require('express')
const app = express()
require('dotenv').config()
require('./connection/MongoDbConnection')



const Auth = require('./routes/router')
const insertData = require('./routes/router')
const filteridFromHotel = require('./utils/filteridFromHotel')

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV || "production"
app.use(express.json())

app.get("/", (req, res) => {
    res.send('ok')
})




app.use('/', Auth)

app.use('/', insertData)




app.listen(PORT, () => {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})