const express = require("express");
const {User, validate} = require("../models/user");

const router = express.Router();

// CRUD Operations

module.exports = router