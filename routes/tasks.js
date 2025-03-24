const express = require('express')
const router = express.Router()

const {getAllTask, getTaskById, createTask, editTask, removeTask} = require('../controllers/taskController')

// GET All Task
router.get('/tasks/',getAllTask)

// GET Task By Id
router.get('/tasks/:id',getTaskById)

// Create Task
router.post('/tasks/',createTask)

// Update Task
router.put('/tasks/:id',editTask)

// Remove Task
router.delete('/tasks/:id',removeTask)

module.exports = router