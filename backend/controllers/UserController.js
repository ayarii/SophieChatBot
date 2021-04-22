const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { scrapping } = require('../utils/scrapping');
const linkedIn = require('../utils/scrapping')
const {cloudinary} = require('../utils/cloudinary')
const multer = require('multer');
const fct = require('../src/index');
const fs = require('fs');
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })



// CREATE User
exports.createUser = async(req, res) => {
    console.log("post in ...")
    // handling the image 
    var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
    try {
        const fileStr = req.body.image
         await cloudinary.uploader.upload(fileStr,{
            upload_preset : 'sophie'
        }).then((res)=>{
            imageUrl = res.url
        })
    } catch (error) {
        console.log(error)
    }
    ////////////////
    delete req.body._id
    bcrypt.hash(req.body.password, 10)                     //10 tours de l'algorithme de hashage
        .then(hash => {
            const UserObject = JSON.parse(JSON.stringify(req.body))
            const user = new User({
                ...UserObject,
                image: imageUrl,
                password: hash
            })
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



//upload.single('myFile'),

//UploadingResume
exports.ResumeUpload = upload.single('myFile'),(req, res) => {
}

exports.resumeScrapping = (req, res, next) => {

// From file to file
fct.parseResumeFile(`./uploads/${req.params.fileName}`, './files/compiled') // input file, output dir
  .then(file => {
    fs.readFile('./files/compiled/' + req.params.fileName + '.json', (err, data) => {
        if (err) throw err;
        let Info = JSON.parse(data);
        console.log(Info);
        res.status(200).send(Info);
        });  
  })
  .catch(error => {
    console.error(error);
  });
    
}



//AddUserthroughResume
exports.AddUserthroughResume =async (req, res, next) => {

    // handling image
    var imageUrl = "http://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png"//a logo default
    let uploadedResponse;
    try {
        const fileStr = req.body.image
            uploadedResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset : 'sophie'
        }).then((res)=>{
            imageUrl = res.url
        })
        
        delete req.body._id
        bcrypt.hash(req.body.password, 10)                     
        .then(hash => {
        const UserObject = JSON.parse(JSON.stringify(req.body))
        console.log("UserObject : ", UserObject)
        const user = new User({
            ...UserObject,
            image: imageUrl,
            password:hash
        })
        console.log("user : ", user)
    
        user.save()
            .then(() => res.status(201).json(user))
            .catch(err => res.status(400).json({ error: err }))
        }).catch(error => res.status(500).json({ error }))


    } catch (error) {
        console.log(error)
    }

    

}

