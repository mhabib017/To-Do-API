const FileService = require("../../services/files");

class FileController {
	static async createFile(req, res, next) {
		try {
			let file = {
				url: `${req.protocol}://${req.get("host")}/${req.file.path}`,
				user_id: req.user.id,
			};
			let response = await FileService.createFile(file);
			res.json(response);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = FileController;
