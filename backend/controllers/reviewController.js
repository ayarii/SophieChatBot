const Review = require('../models/Review')

// CREATE Review
exports.createReview = (req, res) => {
    console.log("create Review ..")
    console.log("req.body : ", req.body)
    const ReviewObject = JSON.parse(JSON.stringify(req.body))
    console.log("ReviewObject : ", ReviewObject)
    //delete req.body._id
    const review = new Review({
        ...ReviewObject,
    })
    review.save()
        .then(() => res.status(201).json({ msg: 'Review enregistré ! ' }))
        .catch(err => res.status(400).json({ error: err }))
}

// GET ALL Reviews
exports.getAllReview = (req, res, next) => {
    Review.find()
        .then((reviews) => res.status(200).json(reviews))
        .catch(err => res.status(400).json({ error: err }))
}


//GET Single Review
exports.getSingleReview = (req, res, next) => {
    Review.findById(req.params.id) // or Review.findOne({_id : req.params.id})
        .then((review) => res.status(200).json(review))
        .catch(err => res.status(400).json({ error: err }))
}



//Delete Review
exports.deleteReview = (req, res, next) => {
    Review.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ msg: `Review with id : ${req.params.id} has been removed` }))
        .catch(err => res.status(400).json({ error: err }))
}

//Update Review
exports.updateReview = (req, res, next) => {
    Review.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ msg: 'Review modified' }))
        .catch(err => res.status(400).json({ error: err }))
}
