const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    nom:{type: String},
    prenom:{type: String},
    email:{type: String},
    numtel:{type: Number},
    pays:{type: String},
    profession:{type: String},
    userName:{type: String},
    password:{type: String},
    image:{type: String},
    interests : [{
        type : String
    }]
})
//id – nom – prenom – email – numtel – pays – profession - interests
module.exports = mongoose.model('User', userShema)