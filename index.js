const express = require('express')
const app = express()
require('dotenv').config()
require('./connection/MongoDbConnection')



const  addDatatodb  = require('./controllers/addDatatodb')
const Auth = require('./routes/router')

const PORT = process.env.PORT
const MODE=process.env.NODE_ENV || "production"
app.use(express.json())

app.get("/home", (req, res) => {
    res.send('ok')
})



app.use('/', addDatatodb);

app.use('/', Auth)



app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT} in ${MODE} mode `)
})