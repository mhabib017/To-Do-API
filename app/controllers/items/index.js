"use strict";
const ItemService = require("../../services/items");
const moment = require("moment");
const {ItemCreateSchema, ItemUpdateSchema} = require("../../schema/items");
const {
	CreateResponse,
	GetResponse,
	DeleteResponse,
	UpdateResponse,
	NotFoundError,
	ValidationError,
} = require("../../utils/responses");

class ItemController {
	static async listItems(req, res, next) {
		try {
			let response = await ItemService.getListItemByUserId(req.user.id);

			let resObject = GetResponse(response);
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
	static async getItem(req, res, next) {
		try {
			let response = await ItemService.getItem(req.params.id);
			if (response.length == 0) throw NotFoundError("Item not found");

			let resObject = GetResponse(response[0]);
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
	static async createItem(req, res, next) {
		try {
			let item = req.body;

			const {error} = ItemCreateSchema.validate(item);
			if (error) throw ValidationError(error);

			item.user_id = req.user.id;
			item.created_at = moment().utc().format("YYYY-MM-DD HH:mm").toString();
			item.updated_at = item.created_at;
			let response = await ItemService.createItem(item);

			let resObject = CreateResponse(response[0]);
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
	static async updateItem(req, res, next) {
		try {
			let item = req.body;
			item.id = req.params.id;

			let currentItem = await ItemService.getItem(item.id);
			if (currentItem.length == 0) throw NotFoundError("Item not found");

			const {error} = ItemUpdateSchema.validate(item);
			if (error) throw ValidationError(error);

			item.updated_at = moment().utc().format("YYYY-MM-DD HH:mm").toString();
			let response = await ItemService.updateItem(item);

			let resObject = UpdateResponse(response[0]);
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
	static async deleteItem(req, res, next) {
		try {
			let currentItem = await ItemService.getItem(req.params.id);
			if (currentItem.length == 0) throw NotFoundError("Item not found");

			await ItemService.deleteItem(req.params.id);

			let resObject = DeleteResponse();
			res.status(resObject.statusCode).json(resObject);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = ItemController;
