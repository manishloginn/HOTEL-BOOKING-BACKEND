const express = require('express')
const app = express()
require('dotenv').config()
require('./connection/MongoDbConnection')
const cookieParser = require('cookie-parser');
const cors = require('cors');





const Auth = require('./routes/router')
const insertData = require('./routes/router')
const filteridFromHotel = require('./utils/filteridFromHotel')
app.use(cookieParser());


const PORT = process.env.PORT
const MODE = process.env.NODE_ENV || "production"
app.use(express.json())
app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));


app.get("/", (req, res) => {
    res.send('ok')
})




app.use('/', Auth)

app.use('/', insertData)




app.listen(PORT, () => {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})