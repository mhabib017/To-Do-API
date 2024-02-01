"use strict";
const UserService = require("../../services/users");
const {encodeJWT} = require("../../utils/jwt");
const moment = require("moment");

const {UserLoginSchema, UserRegisterSchema} = require("../../schema/users");
const {
	CreateResponse,
	SuccessResponse,
	ValidationError,
} = require("../../utils/responses");

class UserController {
	static async register(req, res, next) {
		try {
			let userInput = req.body;

			const {error} = UserRegisterSchema.validate(userInput);
			if (error) throw ValidationError(error);

			userInput.created_at = moment()
				.utc()
				.format("YYYY-MM-DD HH:mm")
				.toString();
			userInput.updated_at = userInput.created_at;

			let user = await UserService.registerUser(userInput);
			let token = encodeJWT(user);

			let resObject = SuccessResponse({
				token,
			});
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
	static async login(req, res, next) {
		try {
			const {error} = UserLoginSchema.validate(req.body);
			if (error) throw ValidationError(error);

			let user = await UserService.loginUser(req.body);
			let token = encodeJWT(user);

			let resObject = SuccessResponse({
				token,
			});
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = UserController;
