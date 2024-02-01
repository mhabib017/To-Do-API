"use strict";
function errorHandler(error, req, res, next) {
	let statusCode = error.statusCode || 500;
	let message = error.message || ["Something went wrong"];

	console.log("\n<<<Error>>>\n");
	for (let key in error) {
		console.log(key, " : ", error[key]);
	}
	console.log("\n<<<------->>>");

	res.status(statusCode).json({
		statusCode: statusCode,
		message: message,
	});
}

module.exports = errorHandler;
