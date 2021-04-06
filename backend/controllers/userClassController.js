const UserClass = require("../models/userClass");

// CREATE User
exports.createUser = (req, res) => {
  console.log("create user ..");
  console.log("req.body : ", req.body);
  const UserObject = JSON.parse(JSON.stringify(req.body));
  console.log("userObject : ", UserObject);
  //delete req.body._id
  const user = new UserClass({
    ...UserObject,
  });
  console.log("call");
  user
    .save()
    .then(() => res.status(201).json({ msg: "user enregistré ! " }))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

// GET ALL Users
exports.getAllUser = (req, res, next) => {
  UserClass.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json({ error: err }));
};
