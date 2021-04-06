const express = require('express')
const { models } = require('mongoose')
const User = require('../models/User')
const userController = require('../controllers/UserController')
const router = express.Router();
const multer = require('multer')

// CREATE User
router.post('/', userController.createUser)

// GET ALL Users
router.get('/', userController.getAllUser);

//GET Single User
router.get('/:id', userController.getSingleUser);

//Delete User
router.delete('/:id', userController.deleteUser)

//Put User
router.put('/:id', userController.updateUser)


module.exports = router;
