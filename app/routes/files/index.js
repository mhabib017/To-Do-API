const express = require("express");
const FilesController = require("../../controllers/files");
const authenticate = require("../../middleware/auth");
const fileHandler = require("../../middleware/file-handler");
const router = express.Router();

router.post(
	"/",
	authenticate,
	fileHandler.single("file"),
	FilesController.createFile
);

module.exports = router;
