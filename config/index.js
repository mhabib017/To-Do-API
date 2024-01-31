// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
	HOST: process.env.HOST || "0.0.0.0",
	PORT: process.env.PORT || 3000,
	// Database
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	// Signin Secret
	SECRET_KEY: process.env.SECRET_KEY,
};
