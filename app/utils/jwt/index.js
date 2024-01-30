var jwt = require("jsonwebtoken");
const config = require("../../../config");

function encodeJWT(payload) {
	return jwt.sign(payload, config.SECRET_KEY, {expiresIn: 60 * 60});
}

function decodeJWT(token) {
	try {
		var decoded = jwt.verify(token, config.SECRET_KEY);
		return decoded;
	} catch (err) {
		return null;
	}
}

module.exports = {
	encodeJWT,
	decodeJWT,
};
