const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { scrapping } = require('../utils/scrapping');
const linkedIn = require('../utils/scrapping')
const {cloudinary} = require('../utils/cloudinary')

// CREATE User
exports.createUser = async(req, res) => {
    console.log("post in ...")
    // handling the image 
    var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
    try {
        const fileStr = req.body.image
        const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset : 'sophie'
        })
        console.log(uploadedResponse)
        imageUrl = uploadedResponse.url
    } catch (error) {
        console.log(error)
    }
    ////////////////
    delete req.body._id
    bcrypt.hash(req.body.password, 10)                     //10 tours de l'algorithme de hashage
        .then(hash => {
            const UserObject = JSON.parse(JSON.stringify(req.body))
            console.log("UserObject : ", UserObject)
            const user = new User({
                ...UserObject,
                image: imageUrl,
                password: hash
            })
            console.log("user : ", user)
            user.save()
                .then(() => res.status(201).json(user))
                .catch(err => res.status(400).json({ error: err }))
        }).catch(error => res.status(500).json({ error }))

}

// GET ALL Users
exports.getAllUser = (req, res, next) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch(err => res.status(400).json({ error: err }))
}


//GET Single User
exports.getSingleUser = (req, res, next) => {
    User.findById(req.params.id) // or User.findOne({_id : req.params.id})
        .then((user) => res.status(200).json(user))
        .catch(err => res.status(400).json({ error: err }))
}



//Delete User
exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ msg: `user with id : ${req.params.id} has been removed` }))
        .catch(err => res.status(400).json({ error: err }))
}

//Update User
exports.updateUser =async (req, res, next) => {
    // handling the image 
    var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
    try {
        const fileStr = req.body.image
        const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset : 'sophie'
        })
        console.log(uploadedResponse)
        imageUrl = uploadedResponse.url
    } catch (error) {
        console.log(error)
    }
    ////////////////

    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id,image:imageUrl })
        .then(() => res.status(200).json({ msg: 'user modified' }))
        .catch(err => res.status(400).json({ error: err }))
}



// CREATE User
exports.loginUser = (req, res, next) => {
    User.findOne({ userName: req.body.userName })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User Not found !' });
            }
            console.log(user)
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'incorrect password !' });//401 Unauthorized
                    }
                    let role = "user"
                    if (req.body.userName === "admin")
                        role = "admin"


                    res.status(200).json({
                        user: user,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        ),
                        role: role
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));


}


//scrappingLinkedIn
exports.scrappingLinkedIn = (req, res, next) => {
        linkedIn.scrapping(req.body.link)
        .then((result)=>res.status(200).json(result))
        .catch((err)=>res.status(500).json(err))
}
