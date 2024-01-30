const config = require("../../config");

const knex = require("knex")({
	client: "postgresql", // or your database client
	connection: {
		user: config.DB_USER,
		host: config.DB_HOST,
		database: config.DB_NAME,
		password: config.DB_PASSWORD,
	},
});

module.exports = knex;
