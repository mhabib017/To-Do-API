const knex = require("../../db-connection");
const {InternalServerError, NotFoundError} = require("../../utils/responses");

class UserService {
	static async getUserByUsername(username) {
		try {
			let res = await knex
				.select("*")
				.from("users")
				.whereNull("deleted_at")
				.where("username", username);
			return res;
		} catch (err) {
			throw InternalServerError(err);
		}
	}

	static async getUserById(id) {
		try {
			let res = await knex
				.select(["id", "username"])
				.from("users")
				.whereNull("deleted_at")
				.where("id", id);
			return res;
		} catch (err) {
			throw InternalServerError(err);
		}
	}

	static async loginUser(user) {
		try {
			let users = await knex
				.select("*")
				.from("users")
				.whereNull("deleted_at")
				.where("username", user.username)
				.where("password", user.password);
			if (users.length > 0) {
				let newUser = users[0];
				delete newUser.password;
				return newUser;
			}
			throw NotFoundError(["Username or password is incorrect."]);
		} catch (err) {
			throw InternalServerError(err);
		}
	}

	static async registerUser(user) {
		try {
			let oldUsers = await this.getUserByUsername(user.username);
			if (oldUsers.length == 0) {
				let id = await knex("users").returning("id").insert(user);
				let newUser = await this.getUserById(id[0].id);
				return newUser[0];
			}
			throw NotFoundError(["Username already exists."]);
		} catch (err) {
			throw InternalServerError(err);
		}
	}
}

module.exports = UserService;
