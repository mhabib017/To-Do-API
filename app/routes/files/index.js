"use strict";

const express = require("express");
const FilesController = require("../../controllers/files");
const fileHandler = require("../../middleware/file-handler");
const router = express.Router();

router.post("/", fileHandler.single("file"), FilesController.createFile);

module.exports = router;
