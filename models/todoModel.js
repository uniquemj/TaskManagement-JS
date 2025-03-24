const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    is_completed: Boolean
})

module.exports = mongoose.model("task", taskSchema)