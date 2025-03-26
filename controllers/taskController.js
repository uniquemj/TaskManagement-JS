const {createTaskService, getAllTasksService, getTaskByIdService, editTaskService, removeTaskService} = require('../services/todoServices')


const getAllTask = async(req, res) =>{
    try{
        const {title} = req.query
        const tasks = await getAllTasksService(title)
        if(tasks.length == 0){
            return res.status(404).send({message:"No Tasks were found."})
        }

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
        const task = await getTaskByIdService(id)
        
        if(!task){
            return res.status(404).send({message:"Task not found"})
        }

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
        
        const createdTask = await createTaskService({
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

        const result = await editTaskService(id, req.body)

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
        const result = await removeTaskService(id)
        if(!result){
            return res.status(404).send({message:"Task not found"})
        }
        return res.status(200).send({message: "Task deleted."})
    } catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {getAllTask, getTaskById, createTask, editTask, removeTask}