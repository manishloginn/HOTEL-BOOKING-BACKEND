const express = require('express')
const app = express()
require('dotenv').config()
require('./connection/MongoDbConnection')



const addDatatodb = require('./controllers/addDatatodb')
const Auth = require('./routes/router')
const hotelschema = require('./models/hotelschema')
const filteridFromHotel = require('./utils/filteridFromHotel')

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV || "production"
app.use(express.json())

app.get("/home", (req, res) => {
    res.send('ok')
})



app.use('/', addDatatodb);

app.use('/', Auth)


app.get('/gethotelData', async (req, res) => {
    try {
        const hoteldata = await hotelschema.find()
        const dataid =  await filteridFromHotel(hoteldata)

        res.status(200).json(hoteldata)

    } catch (error) {

    }

})



app.listen(PORT, () => {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})