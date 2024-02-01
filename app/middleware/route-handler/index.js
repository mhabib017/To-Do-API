const {NotAuthorizedError} = require("../../utils/responses");

function AllRouteHandler(req, res, next) {
	console.log(`\n${req.method}: ${req.originalUrl}`);
	next();
}
function RouteNotFoundHandler(req, res, next) {
	const message = `ROUTE_NOT_FOUND: ${req.originalUrl}`;
	let err = NotAuthorizedError([message]);
	res.status(err.statusCode).json(err);
}
module.exports = {
	AllRouteHandler,
	RouteNotFoundHandler,
};
