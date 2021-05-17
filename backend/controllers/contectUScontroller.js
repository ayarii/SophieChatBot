const contectUS = require("../models/contectUs");
const nodemailer = require("nodemailer");

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
    .then(async () => {
      // res.status(201).json({ msg: "we have recivied your request . our team will contact you soon" })

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "rdpfifatest@gmail.com", // generated ethereal user
          pass: "Omar1235", // generated ethereal password
        },
      });

      let info = await transporter
        .sendMail({
          from: `Thanks For Contacting US <rdpfifatest@gmail.com>`,
          to: contectUSObj.email,
          subject: "Contact Us",
          // text: "Hi hello",
          html: `<h1><strong>Thanks For Contacting Us Our Team will solve your issue</strong></h1><hr></hr> <b>Message:  </b>${contectUSObj.message}`, // html body
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });

      let info2 = await transporter
        .sendMail({
          from: `User Issue <${contectUSObj.email}>`,
          to: "rdpfifatest@gmail.com",
          subject: "Contact Us",
          // text: "Hi hello",
          html: `<h1><strong>User Info</strong></h1><hr></hr> <b>Message:  </b>${contectUSObj.message}<hr></hr><b>firstname:  </b>${contectUSObj.firstname}<hr></hr><b>lastname:  </b>${contectUSObj.lastname}<hr></hr><b>email:  </b>${contectUSObj.email}<hr></hr>`, // html body
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.write(
        "<h1>we have recivied your request . our team will contact you soon!</h1>"
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};
