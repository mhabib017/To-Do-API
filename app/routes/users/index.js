const express = require("express");
const UsersController = require("../../controllers/users");
const router = express.Router();

router.post("/register", UsersController.register);

router.post("/login", UsersController.login);

module.exports = router;
