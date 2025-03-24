const express = require('express')
const mongoose = require('mongoose')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()

app.use(express.json())

app.use('/', tasks)

const PORT = process.env.PORT || 8080

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(()=>console.log("Connected to MongoDB . . ."))
    .catch(err => console.log("Connection failed: ", err))

app.listen(PORT, ()=>{
    console.log(`Server listening at: ${PORT}`)
})
