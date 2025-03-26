const taskModel = require('../models/todoModel')


const getAllTasksService = async (title="") => {
    return await taskModel.find(title ? { $text: { $search: title, $caseSensitive: false } } : {})
}

const getTaskByIdService = async (id) => {
    return await taskModel.findById(id)
}

const createTaskService = async(todo) =>{
    const task = taskModel.create(todo)
    return task
}

const editTaskService = async(id, todo) =>{
    return await taskModel.findOneAndUpdate({ _id: id }, todo, { new: true })
}

const removeTaskService = async (id) => {
    return await taskModel.findByIdAndDelete(id)
}

module.exports = {getAllTasksService, getTaskByIdService, createTaskService, editTaskService, removeTaskService}