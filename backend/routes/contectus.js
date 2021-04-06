const express = require("express");
const { models } = require("mongoose");
const contactUs = require("../models/contectUs");
const contactUSController = require("../controllers/contectUScontroller");
const router = express.Router();

// CREATE User
router.post("/", contactUSController.createUser);

module.exports = router;
