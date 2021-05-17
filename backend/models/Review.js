const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userId : {type : String, required : true},
    userImg : {type : String, required : false},
    comment : {type : String, required : true},
});

module.exports = mongoose.model('Review', reviewSchema);