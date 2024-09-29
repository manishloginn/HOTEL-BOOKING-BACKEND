const express = require('express')
const app = express()
require('dotenv').config()
const database = require('./connection/MongoDbConnection')
const { addDatatodb } = require('./controllers/addDatatodb')
const hoteldata = require('./data/hoteldata')
const hotelschema = require('./models/hotelschema')

const PORT = process.env.PORT
const MODE=process.env.NODE_ENV || "production"
app.use(express.json())

app.get("/home", (req, res) => {
    res.send('ok')
})

//add data
app.post('/addData', addDatatodb);




app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})