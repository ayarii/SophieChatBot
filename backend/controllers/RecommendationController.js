const Recommendation = require('../models/Recommendation')

// CREATE Recommendation
exports.createRecommendation = (req, res) => {
    console.log("create recommendation ..")
    console.log("req.body : ", req.body)
    const RecommendationObject = JSON.parse(JSON.stringify(req.body))
    console.log("RecommendationObject : ", RecommendationObject)
    //delete req.body._id
    const recommendation = new Recommendation({
        ...RecommendationObject,
    })
    recommendation.save()
        .then(() => res.status(201).json({ msg: 'Recommendation enregistré ! ' }))
        .catch(err => res.status(400).json({ error: err }))
}

// GET ALL Recommendations
exports.getAllRecommendation = (req, res, next) => {
    Recommendation.find()
        .then((recommendations) => res.status(200).json(recommendations))
        .catch(err => res.status(400).json({ error: err }))
}


//GET Single Recommendation
exports.getSingleRecommendation = (req, res, next) => {
    Recommendation.findById(req.params.id) // or Recommendation.findOne({_id : req.params.id})
        .then((recommendation) => res.status(200).json(recommendation))
        .catch(err => res.status(400).json({ error: err }))
}



//Delete Recommendation
exports.deleteRecommendation = (req, res, next) => {
    Recommendation.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ msg: `recommendation with id : ${req.params.id} has been removed` }))
        .catch(err => res.status(400).json({ error: err }))
}

//Update Recommendation
exports.updateRecommendation = (req, res, next) => {
    Recommendation.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ msg: 'Recommendation modified' }))
        .catch(err => res.status(400).json({ error: err }))
}