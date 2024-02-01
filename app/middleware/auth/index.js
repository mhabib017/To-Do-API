const {decodeJWT} = require("../../utils/jwt");

const {NotAuthorizedError} = require("../../utils/responses");

async function authenticate(req, res, next) {
	try {
		// console.log("Headers", req.headers);
		let token = req.headers["authorization"];
		if (!token) throw "Authorization not found";
		token = token.split(" ")[1];
		if (!token) throw "Authorization token missing";
		payload = await decodeJWT(token);
		if (payload) {
			req.user = payload;
			return next();
		}
		throw "Invalid authorization token";
	} catch (error) {
		let err = NotAuthorizedError([error]);
		res.status(err.statusCode).json(err);
	}
}
module.exports = authenticate;
