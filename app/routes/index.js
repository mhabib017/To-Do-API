const express = require("express");
const itemRounter = require("./items");
const userRounter = require("./users");
const fileRounter = require("./files");
const router = express.Router();

// middleware that is specific to this router
router.use("/items", itemRounter);
router.use("/users", userRounter);
router.use("/files", fileRounter);

module.exports = router;
