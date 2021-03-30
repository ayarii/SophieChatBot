
const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();


// CREATE TASK
router.post('/', TaskController.createTask)

// GET ALL TASKS
router.get('/', TaskController.getAllTasks);

//GET SINGLE TASK
router.get('/:id', TaskController.getSingleTask);

//DELETE TASK
router.delete('/:id', TaskController.deleteTask)

// PUT TASK
router.put('/:id', TaskController.updateTask)


module.exports = router;
