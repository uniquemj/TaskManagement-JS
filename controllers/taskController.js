const taskModel = require('../models/todoModel')


const getAllTask = async(req, res) =>{
    try{
        const tasks = await taskModel.find({})
        return res.status(200).send({
            count: tasks.length,
            data: tasks
        })
    } catch(e){
        res.status(500).send({message: e.message})
    }
}

const getTaskById = async(req, res) =>{
    try{
        const {id} = req.params
        const task = await taskModel.findById(id)
        return res.status(200).send(task)
    } catch(e){
        res.status(500).send({message: e.message})
    }
}

const createTask = async (req, res) =>{
    try{
        const {title, description, is_completed} = req.body
        
        if(!title){
            return res.status(400).send({"message":"title is required"})
        }
        
        const createdTask = await taskModel.create({
            title: title,
            description: description || "",
            is_completed: is_completed || false
        })
        
        return res.status(200).send(createdTask)
    } catch(e){
        res.status(500).send({message: e.message})
    }
}

const editTask = async(req, res) =>{
    try{
        const {id} = req.params

        const result = await taskModel.findOneAndUpdate({_id: id}, req.body, {new: true})

        if(!result){
            return res.status(404).send({message:"Task not found"})
        }
        return res.status(200).send(result)
    } catch(e){
        res.status(500).send({message: e.message})
    }
}

const removeTask = async(req, res) =>{
    try{
        const {id} = req.params
        const result = await taskModel.findByIdAndDelete(id)
        if(!result){
            return res.status(404).send({message:"Task not found"})
        }
        return res.status(200).send({message: "Task deleted."})
    } catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {getAllTask, getTaskById, createTask, editTask, removeTask}