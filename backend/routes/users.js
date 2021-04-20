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


//Login
router.post('/login', userController.loginUser)

//LinkedIn scrapping
router.post('/linkedIn', userController.scrappingLinkedIn)

//Resume scrapping
router.post('/resumeUpload', userController.ResumeUpload)


// GET resumeParser
router.get('/resumeScrapping/:fileName', userController.resumeScrapping);



module.exports = router;
