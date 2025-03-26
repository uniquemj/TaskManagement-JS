const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/', tasks)

const PORT = process.env.PORT || 8080

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(async ()=>{
        console.log("Connected to MongoDB . . .")
    })
    .catch(err => console.log("Connection failed: ", err))

app.listen(PORT, ()=>{
    console.log(`Server listening at: ${PORT}`)
})
