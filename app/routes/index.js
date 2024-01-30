const express = require("express");
const itemRounter = require("./items");
const userRounter = require("./users");
const router = express.Router();

// middleware that is specific to this router
router.use("/items", itemRounter);
router.use("/users", userRounter);

module.exports = router;
