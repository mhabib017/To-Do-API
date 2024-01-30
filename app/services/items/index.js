const moment = require("moment");

const knex = require("../../db-connection");

class ItemService {
	static async getListItemByUserId(userId) {
		try {
			let res = await knex
				.select([
					"id",
					"name",
					"description",
					"url",
					"created_at",
					"updated_at",
				])
				.from("items")
				.where({deleted_at: null, user_id: userId});
			return res;
		} catch (error) {
			throw error;
		}
	}
	static async getItem(id) {
		try {
			let res = await knex
				.select([
					"id",
					"name",
					"description",
					"url",
					"created_at",
					"updated_at",
				])
				.from("items")
				.whereNull("deleted_at")
				.where("id", id);
			return res;
		} catch (err) {
			throw err;
		}
	}
	static async createItem(item) {
		try {
			let id = await knex("items").returning("id").insert(item);
			let newItem = await this.getItem(id[0].id);
			return newItem;
		} catch (err) {
			throw err;
		}
	}
	static async updateItem(item) {
		try {
			let res = await knex("items").where({id: item.id}).update(item);
			let updatedItem = await this.getItem(item.id);
			return updatedItem;
		} catch (err) {
			throw err;
		}
	}
	static async deleteItem(id) {
		try {
			let time = moment();
			let res = await knex("items").where({id: id}).update({
				updated_at: time,
				deleted_at: time,
			});
			return res;
		} catch (err) {
			throw err;
		}
	}
}

module.exports = ItemService;
