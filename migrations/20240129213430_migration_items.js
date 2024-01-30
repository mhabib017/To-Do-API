/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("users", function (table) {
			table.increments("id").primary();
			table.string("username");
			table.string("password");
			table.timestamp("deleted_at");
			table.timestamps(true, true);
		})
		.createTable("items", function (table) {
			table.increments("id").primary();
			table.string("name");
			table.string("description");
			table.string("url");
			table.integer("user_id");
			table.timestamp("deleted_at");
			table.timestamps(true, true);
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("users").dropTable("items");
};
