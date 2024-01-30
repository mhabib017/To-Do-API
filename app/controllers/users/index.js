const UserService = require("../../services/users");
const {encodeJWT} = require("../../utils/jwt");

class UserController {
	static async register(req, res) {
		try {
			let user = await UserService.registerUser(req.body);
			let token = encodeJWT(user);
			res.json({
				token: token,
			});
		} catch (err) {
			res.json(err);
		}
	}
	static async login(req, res) {
		try {
			let user = await UserService.loginUser(req.body);
			let token = encodeJWT(user);
			res.json({
				token: token,
			});
		} catch (err) {
			res.json(err);
		}
	}
}

module.exports = UserController;
