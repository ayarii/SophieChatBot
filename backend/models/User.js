const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    nom:{type: String, required:true},
    prenom:{type: String, required:true},
    email:{type: String, required:true},
    numtel:{type: Number, required:true},
    pays:{type: String, required:true},
    profession:{type: String, required:true},
    userName:{type: String, required:true},
    password:{type: String, required:true},
})
//id – nom – prenom – email – numtel – pays – profession
module.exports = mongoose.model('User', userShema)