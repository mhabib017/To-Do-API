"use strict";
const express = require("express");
var cors = require("cors");
const config = require("./config");

const bodyParser = require("body-parser");
const {
	RouteNotFoundHandler,
	AllRouteHandler,
} = require("./app/middleware/route-handler");
const ErrorHandler = require("./app/middleware/error-handler");
const app = express();
// app.use(express.json());

app.use(bodyParser.json());

const customHeaders = {
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
	"Access-Control-Allow-Origin": "*", // Allow requests from any origin
};

// Enable CORS with custom headers
app.use(cors({exposedHeaders: customHeaders}));

const appRouter = require("./app/routes");

app.use("*", AllRouteHandler);

app.use("/api/v1/", appRouter);

app.use("/uploads", express.static("uploads"));
app.use("*", ErrorHandler);

app.use("*", RouteNotFoundHandler);

var server = app.listen(config.PORT, config.HOST, () => {
	console.log(`To Do List API Working`);
	const {address, port} = server.address();
	console.log(`Server is running at http://${address}:${port}`);
});
