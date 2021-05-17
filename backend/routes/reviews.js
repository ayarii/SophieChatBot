const express = require('express')
const { models } = require('mongoose')
const Review = require('../models/Review')
const reviewController = require('../controllers/reviewController')
const router = express.Router();


// CREATE Review
router.post('/', reviewController.createReview)

// GET ALL Reviews
router.get('/', reviewController.getAllReview);

//GET Single Review
router.get('/:id', reviewController.getSingleReview);

//Delete Review
router.delete('/:id', reviewController.deleteReview)

//Put Review
router.put('/:id', reviewController.updateReview)


module.exports = router;