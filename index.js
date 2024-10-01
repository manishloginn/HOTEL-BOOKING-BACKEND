const express = require('express')
const app = express()
require('dotenv').config()
require('./connection/MongoDbConnection')



const addDatatodb = require('./controllers/addDatatodb')
const Auth = require('./routes/router')
const inserRoomMany = require('./routes/router')
const hotelschema = require('./models/hotelschema')
const filteridFromHotel = require('./utils/filteridFromHotel')
const roomschema = require('./models/roomschema')
const roomdata = require('./data/roomdata')

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV || "production"
app.use(express.json())

app.get("/", (req, res) => {
    res.send('ok')
})



app.use('/', addDatatodb);

app.use('/', Auth)

app.use('/', inserRoomMany)




app.listen(PORT, () => {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})