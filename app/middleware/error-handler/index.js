function errorHandler(error, req, res, next) {
	console.log(`\n${req.method}: ${req.originalUrl} \t ROUTE_NOT_FOUND`);
	statusCode = error.statusCode || 500;
	message = error.message || ["Something went wrong"];

	res.status(statusCode).json({
		statusCode: statusCode,
		message: message,
	});
}

module.exports = errorHandler;
