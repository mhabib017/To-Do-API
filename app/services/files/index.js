const {
	CreateResponse,
	GetResponse,
	DeleteResponse,
	InternalServerError,
} = require("../../utils/responses");
const knex = require("../../db-connection");

class FileService {
	static async getFile(id) {
		try {
			let res = await knex
				.select(["id", "url"])
				.from("files")
				.whereNull("deleted_at")
				.where("id", id);
			return res;
		} catch (err) {
			throw InternalServerError(err);
		}
	}
	static async createFile(file) {
		try {
			let id = await knex("files").returning("id").insert(file);
			let newFile = await this.getFile(id[0].id);
			return newFile;
		} catch (err) {
			console.log("Err", err);
			throw InternalServerError(err);
		}
	}
}

module.exports = FileService;
