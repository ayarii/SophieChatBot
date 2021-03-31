const express = require('express')
const { models } = require('mongoose')
const Recommendation = require('../models/Recommendation')
const recommendationController = require('../controllers/RecommendationController')
const router = express.Router();


// CREATE Recommendation
router.post('/', recommendationController.createRecommendation)

// GET ALL Recommendations
router.get('/', recommendationController.getAllRecommendation);

//GET Single Recommendation
router.get('/:id', recommendationController.getSingleRecommendation);

//Delete Recommendation
router.delete('/:id', recommendationController.deleteRecommendation)

//Put Recommendation
router.put('/:id', recommendationController.updateRecommendation)


module.exports = router;