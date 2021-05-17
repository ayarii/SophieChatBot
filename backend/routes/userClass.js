const express = require("express");
const { models } = require("mongoose");
const UserClass = require("../models/userClass");
const userClass = require("../controllers/userClassController");
const router = express.Router();

// CREATE User
router.post("/", userClass.createUser);

// GET ALL Users
router.get("/", userClass.getAllUser);

// GET ALL Users
router.get("/get-user-classification", userClass.getAllUserClasstification);

router.get("/get-usersex-classification", userClass.getsexClasstification);

router.get("/get-age-classification", userClass.getageClasstification);

router.get("/get-intrest-classification", userClass.getintrestClasstification);

module.exports = router;
