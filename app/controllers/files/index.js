"use strict";
const FileService = require("../../services/files");
const {CreateResponse, ValidationError} = require("../../utils/responses");
const moment = require("moment");

class FileController {
	static async createFile(req, res, next) {
		try {
			if (!req.file) {
				throw ValidationError(["file is not selected"]);
			}

			let dateTime = moment().utc().format("YYYY-MM-DD HH:mm").toString();
			let file = {
				url: `${req.protocol}://${req.get("host")}/${req.file.path}`,
				user_id: req.user.id,
				created_at: dateTime,
				updated_at: dateTime,
			};
			let response = await FileService.createFile(file);

			let resObject = CreateResponse(response[0]);
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = FileController;
