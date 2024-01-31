function AllRouteHandler(req, res, next) {
	console.log(`\n${req.method}: ${req.originalUrl}`);
	next();
}
function RouteNotFoundHandler(req, res, next) {
	const error = new Error(`Can't find ${req.originalUrl} on server`);
	error.statusCode = 404;
	next(error);
}
module.exports = {
	AllRouteHandler,
	RouteNotFoundHandler,
};
