const User = require('../models/User')
const multer = require('multer')




// CREATE User
exports.createUser = (req, res) => {
    delete req.body._id
    console.log("req.body : ", req.body)
    const UserObject = JSON.parse(JSON.stringify(req.body))
    console.log("userObject : ", UserObject)
    
    const user = new User({
        ...UserObject,
    })
    user.save()
        .then(() => res.status(201).json(user))
        .catch(err => res.status(400).json({ error: err }))
}

// GET ALL Users
exports.getAllUser = (req, res, next) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch(err => res.status(400).json({ error: err }))
}


//GET Single User
exports.getSingleUser = (req, res, next) => {
    User.findById(req.params.id) // or User.findOne({_id : req.params.id})
        .then((user) => res.status(200).json(user))
        .catch(err => res.status(400).json({ error: err }))
}



//Delete User
exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ msg: `user with id : ${req.params.id} has been removed` }))
        .catch(err => res.status(400).json({ error: err }))
}

//Update User
exports.updateUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ msg: 'user modified' }))
        .catch(err => res.status(400).json({ error: err }))
}