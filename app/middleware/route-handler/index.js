function AllRouteHandler(req, res, next) {
	console.log(`\n${req.method}: ${req.originalUrl}`);
	next();
}
function RouteNotFoundHandler(req, res, next) {
	const message = `ROUTE_NOT_FOUND: ${req.originalUrl}`;
	res.status(404).json({
		statusCode: 404,
		message: message,
	});
}
module.exports = {
	AllRouteHandler,
	RouteNotFoundHandler,
};
