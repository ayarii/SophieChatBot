const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    userId : {type : Number, required : true},
    title : {type : String, required : true},
    description : {type : String, required : false},
    beginDate : {type: String, required : true},
    endDate : {type : String, required : true},
    status : {type : String,required : true}
});

module.exports = mongoose .model('Task', taskSchema);