const mongoose = require('mongoose')

const recommendationShema = mongoose.Schema({
    title:{type: String, required:true},
    university:{type: String, required:false},
    imgUrl:{type: String, required:true},
    category:{type: String, required:true},
    level: {type: String, require:false},
    interest: {type: String, require:false},
    description: {type: String, require:false}, 
    source: {type: String, require:false},
    mode: {type: String, require:false},
    date: {type: String, require:false},
    userId: {type: String, require:false},
})

module.exports = mongoose.model('Recommendation', recommendationShema)