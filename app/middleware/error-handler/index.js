function errorHandler(error, req, res, next) {
	statusCode = error.statusCode || 500;
	message = error.message || ["Something went wrong"];

	// console.log("Error==>\n", error);
	for (let key in error) {
		console.log(key, error[key]);
	}

	res.status(statusCode).json({
		statusCode: statusCode,
		message: message,
	});
}

module.exports = errorHandler;
