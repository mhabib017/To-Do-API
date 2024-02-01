"use strict";

const express = require("express");
const itemRounter = require("./items");
const userRounter = require("./users");
const fileRounter = require("./files");
const authenticate = require("../middleware/auth");
const router = express.Router();

// middleware that is specific to this router
router.use("/items", authenticate, itemRounter);
router.use("/users", userRounter);
router.use("/files", authenticate, fileRounter);

module.exports = router;
