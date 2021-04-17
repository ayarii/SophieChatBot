const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userId : {type : String, required : true},
    comment : {type : String, required : true},
});

module.exports = mongoose.model('Review', reviewSchema);