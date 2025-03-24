const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {type: String, text: true},
    description: String,
    is_completed: Boolean
})

module.exports = mongoose.model("task", taskSchema)