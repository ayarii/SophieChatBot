const UserClass = require("../models/userClass");
const User = require("../models/User");
const _ = require("underscore");
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

// GET ALL Users
exports.getAllUserClasstification = (req, res, next) => {
  User.find()
    .then((users) => {
      let countries = _.pluck(users, "pays");
      let countList = [];
      countries = _.uniq(countries);
      for (let x of countries) {
        countList.push(Object.keys(_.where(users, { pays: x })).length);
      }

      let returnRes = {
        lable: countries,
        data: countList,
      };
      res.status(200).json(returnRes);
      return;
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

// GET ALL Users
exports.getsexClasstification = (req, res, next) => {
  User.find()
    .then((users) => {
      let countries = _.pluck(users, "sexe");
      let countList = [];
      countries = _.uniq(countries);
      for (let x of countries) {
        countList.push(Object.keys(_.where(users, { sexe: x })).length);
      }

      let returnRes = {
        lable: countries,
        data: countList,
      };
      res.status(200).json(returnRes);
      return;
    })
    .catch((err) => res.status(400).json({ error: err }));
};

exports.getageClasstification = (req, res, next) => {
  User.find()
    .then((user) => {
      let tenTo15Count = 0;
      let sixteento20Count = 0;
      let twetyOneTotwetyFive = 0;
      let twentySixTothirty = 0;
      let thirtyOneTo35Count = 0;
      let thirtySixTo40Count = 0;

      for (let x in user) {
        if (user[x].age >= 10 && user[x].age <= 15) {
          tenTo15Count = tenTo15Count + 1;
        }
        if (user[x].age >= 16 && user[x].age <= 20) {
          sixteento20Count = sixteento20Count + 1;
        }
        if (user[x].age >= 21 && user[x].age <= 25) {
          twetyOneTotwetyFive = twetyOneTotwetyFive + 1;
        }
        if (user[x].age >= 26 && user[x].age <= 30) {
          twentySixTothirty = twentySixTothirty + 1;
        }
        if (user[x].age >= 31 && user[x].age <= 35) {
          thirtyOneTo35Count = thirtyOneTo35Count + 1;
        }
        if (user[x].age >= 35 && user[x].age <= 40) {
          thirtySixTo40Count = thirtySixTo40Count + 1;
        }
      }

      let returnObj = {
        lable: ["10-15", "16-20", "21-25", "26-30", "31-35", "36-40"],
        data: [
          tenTo15Count,
          sixteento20Count,
          twetyOneTotwetyFive,
          twentySixTothirty,
          thirtyOneTo35Count,
          thirtySixTo40Count,
        ],
      };
      res.status(200).json(returnObj);
      return;
    })
    .catch((err) => res.status(400).json({ error: err }));
};

exports.getintrestClasstification = (req, res, next) => {
  User.find()
    .then((users) => {
      let inrestList = _.pluck(users, "interests");
      let index = 0;
      let refectoreArray = [];
      for (let x of inrestList) {
        if (x.length == 0) {
        } else {
          for (let y of x) {
            refectoreArray.push(y);
          }
        }
        index;
      }

      let Technoligies = [
        "c",
        "c++",
        "java",
        "Python",
        "PHP",
        "JavaScript",
        "MySQL",
        "C#",
        "Linux",
        "XML",
        "Git",
        "SQL",
        "Cmd",
        "symfony",
        "react",
        "Java",
        "Angular",
        "TypeScript",
        "HTML",
      ];

      let sportsArray = [
        "ball",
        "cricket",
        "bat",
        "vollyball",
        "tenish",
        "Football",
        "Basketball",
        "Baseball",
        "Kayaking",
        "Bobsleighing",
        "Canoeing",
        "Skiing",
        "Surfing",
        "Snorkeling",
        "Olympic Swimming",
        "Rowing",
        "Aerobics",
        "Archery",
        "Gymnastics",
        "Boxing",
        "Running",
        "Cycling",
        "Discus Throw",
        "Equestrianism",
        "Fencing",
        "Figure Skating",
        "Martial Arts",
        "Long Jump",
        "Pole Vault",
        "Powerlifting",
        "Wrestling",
        "Baseball",
        "Basketball",
        "Tennis",
        "Badminton",
        "Bowling",
        "Cricket",
        "Curling",
        "Dodgeball",
        "Football",
        "Golf",
        "Handball",
        "Hockey",
        "Ice Hockey",
        "Kickball",
        "Lacrosse",
        "Polo",
        "Racquetball",
        "Rounders",
        "Rugby/American Football",
        "Squash",
        "Table Tennis",
        "Volleyball",
        "Water Polo",
        "Kitesurfing",
        "Paragliding",
        "Parasailing",
        "Skateboarding",
        "Skydiving",
        "Snowboarding",
        "Windsurfing",
        "Javelin",
        "Cricket",
      ];

      let schineDep = [
        "Mathematics",
        "Computer sciences",
        "Physical science",
        "Chemical sciences",
        "Earth and related Environmental sciences",
        "Biological science",
      ];

      // // console.log("interest", refectoreArray);
      // let intrestUnion = _.union(refectoreArray);
      // let coutList = [];
      // for (let x of intrestUnion) {
      //   let count = 0;
      //   for (let y in users) {
      //     if (users[y].interests.indexOf(x) > -1) {
      //       count = count + 1;
      //     }
      //   }
      //   coutList.push(count);
      // }
      let technologiesCount = 0;
      let sportCount = 0;
      let otherCount = 0;
      let scicenceCout = 0;
      for (let x in users) {
        isTechnology = false;
        isSport = false;
        isScience = false;

        if (users[x].interests.length == 0) {
          otherCount = otherCount + 1;
        }
        for (let y of users[x].interests) {
          // if (technologyString.search(`/${y}/i`) > -1) {
          //   technologiesCount += 1;
          // }
          // if (sportSting.search(`/${y}/i`) > -1) {
          //   sportCount += 1;
          // }
          // console.log("users[x].interests.length", users[x].interests.length);
          // if (users[x].interests.length == 0) {
          //   otherCount = otherCount + 1;
          // } else {

          // }

          if (Technoligies.find((e1) => e1.toLowerCase() == y.toLowerCase())) {
            isTechnology = true;
          }

          if (sportsArray.find((e1) => e1.toLowerCase() == y.toLowerCase())) {
            isSport = true;
          }

          if (schineDep.find((e1) => e1.toLowerCase() == y.toLowerCase())) {
            isScience = true;
          }

          // if (sportSting.search(`/${y}/i`) > -1) {
          //   sportCount += 1;
          // }
        }
        if (isTechnology) {
          technologiesCount += 1;
        }
        if (isSport) {
          sportCount = sportCount + 1;
        }
        if (isScience) {
          scicenceCout = scicenceCout + 1;
        }
      }

      let returnRes = {
        lable: ["IT Technologies", "Sports", "Science", "Other"],
        data: [technologiesCount, sportCount, scicenceCout, otherCount],
      };

      res.status(200).json(returnRes);
      return;
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};
