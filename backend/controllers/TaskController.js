const Task = require('../models/Task')

// CREATE TASKS
exports.createTask = (req, res) => {
    console.log("Creating Task in Progress...")
    console.log("req.body : ", req.body)
    const TaskObject = JSON.parse(JSON.stringify(req.body))
    console.log(" taskObject : ", TaskObject)

    const task = new Task({
        ...TaskObject,
    })
    task.save()
        .then(() => res.status(201).json({ msg: 'Task is Created !' }))
        .catch(err => res.status(400).json({ error: err }))
}

// GET ALL TASKS
exports.getAllTasks = (req, res, next) => {
    Task.find()
        .then((Tasks) => res.status(200).json(Tasks))
        .catch(err => res.status(400).json({ error: err }))
}


//GET SINGLE TASK
exports.getSingleTask = (req, res, next) => {
    Task.findById(req.params.id) 
        .then((Task) => res.status(200).json(task))
        .catch(err => res.status(400).json({ error: err }))
}



//DELETE TASK
exports.deleteTask = (req, res, next) => {
    Task.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ msg: `The task with id : ${req.params.id} has been removed` }))
        .catch(err => res.status(400).json({ error: err }))
}

//UAPDATE TASK
exports.updateTask = (req, res, next) => {
    Task.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ msg: `The task with id : ${req.params.id} has been updated` }))
        .catch(err => res.status(400).json({ error: err }))
}