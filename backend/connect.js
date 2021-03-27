const mongoose = require('mongoose');
const config = require('./database/mongodb.json'); 

class Connexion {
    constructor() {
        mongoose.connect(config.mongo.uri, {useNewUrlParser : true, useUnifiedTopology : true},
            ()=> console.log('Connected to DB'));




      /*  mongoose.connect('mongodb+srv://hr:0000@cluster0.ba3ru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => console.log('Connexion à MongoDB réussie !'))
            .catch(() => console.log('Connexion à MongoDB échouée !'));
        */
       
        } 
}
module.exports = Connexion