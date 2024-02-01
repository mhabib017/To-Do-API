"use strict";

const multer = require("multer");
const moment = require("moment");

// Set up multer storage
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/"); // Uploads will be stored in the 'uploads' directory
	},
	filename: function (req, file, cb) {
		let dataTime = moment().format("dd-mm-yy-hh-mm-ss");
		cb(null, dataTime + file.originalname.replace(" ", "-")); // Keep the original file name
	},
});

// Initialize multer with your storage options
const fileHandler = multer({storage: storage});

module.exports = fileHandler;
