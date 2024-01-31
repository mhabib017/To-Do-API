const express = require("express");
const config = require("./config");
const {
	RouteNotFoundHandler,
	AllRouteHandler,
} = require("./app/middleware/route-handler");
const ErrorHandler = require("./app/middleware/error-handler");
const app = express();
app.use(express.json());

const appRouter = require("./app/routes");

app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader("Access-Control-Allow-Origin", "*");
	// Request methods you wish to allow
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE"
	);
	// Request headers you wish to allow
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type"
	);
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader("Access-Control-Allow-Credentials", true);
	// Pass to next layer of middleware
	next();
});

app.use("*", AllRouteHandler);

app.use("/api/v1/", appRouter);
app.use("/uploads", express.static("uploads"));

app.use("*", RouteNotFoundHandler);
app.use("*", ErrorHandler);
app.use(RouteNotFoundHandler);

server = app.listen(config.PORT, config.HOST, () => {
	console.log(`To Do List API Working`);
	const {address, port} = server.address();
	console.log(`Server is running at http://${address}:${port}`);
});
