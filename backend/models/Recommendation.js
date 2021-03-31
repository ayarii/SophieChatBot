const mongoose = require('mongoose')

const recommendationShema = mongoose.Schema({
    title:{type: String, required:true},
    description:{type: String, required:true},
    img:{type: String, required:false},
    category:{type: String, required:true},
    userId: {type: Number, require:true},
})

module.exports = mongoose.model('Recommendation', recommendationShema)