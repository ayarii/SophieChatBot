const contectUS = require("../models/contectUs");

// CREATE User
exports.createUser = (req, res) => {
  const contectUSObj = JSON.parse(JSON.stringify(req.body));
  console.log("contectUSObj : ", contectUSObj);
  //delete req.body._id
  const contect = new contectUS({
    ...contectUSObj,
  });

  contect
    .save()
    .then(() => {
      // res.status(201).json({ msg: "we have recivied your request . over team will contact you soon" })
      res.write(
        "<h1>we have recivied your request . over team will contact you soon!</h1>"
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};
