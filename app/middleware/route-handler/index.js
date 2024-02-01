function AllRouteHandler(req, res, next) {
	console.log(`\n${req.method}: ${req.originalUrl}`);
	next();
}
function RouteNotFoundHandler(req, res, next) {
	const message = `\n${req.method}: ${req.originalUrl} \t ROUTE_NOT_FOUND`;
	res.status(404).json({
		statusCode: 404,
		message: message,
	});
}
module.exports = {
	AllRouteHandler,
	RouteNotFoundHandler,
};
