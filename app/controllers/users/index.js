const UserService = require("../../services/users");
const {encodeJWT} = require("../../utils/jwt");

const {UserLoginSchema, UserRegisterSchema} = require("../../schema/users");
const {
	CreateResponse,
	SuccessResponse,
	ValidationError,
} = require("../../utils/responses");

class UserController {
	static async register(req, res, next) {
		try {
			const {error} = UserRegisterSchema.validate(req.body);
			if (error) throw ValidationError(error);

			let user = await UserService.registerUser(req.body);
			let token = encodeJWT(user);
			res.json(
				CreateResponse({
					token,
				})
			);
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
			res.json(
				SuccessResponse({
					token,
				})
			);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = UserController;
