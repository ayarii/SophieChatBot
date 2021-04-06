const express = require("express");
const { models } = require("mongoose");
const UserClass = require("../models/userClass");
const userClass = require("../controllers/userClassController");
const router = express.Router();

// CREATE User
router.post("/", userClass.createUser);

// GET ALL Users
router.get("/", userClass.getAllUser);

module.exports = router;
