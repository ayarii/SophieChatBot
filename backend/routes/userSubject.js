const express = require("express");
const { models } = require("mongoose");
const UserSubject = require("../models/userSubject");
const userSubject = require("../controllers/userSubjectController");
const router = express.Router();

// CREATE User
router.post("/", userSubject.createUser);

// GET ALL Users
router.get("/", userSubject.getAllUser);

module.exports = router;
