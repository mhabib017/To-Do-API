const ItemService = require("../../services/items");
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

			res.json(GetResponse(response));
		} catch (err) {
			next(err);
		}
	}
	static async getItem(req, res, next) {
		try {
			let response = await ItemService.getItem(req.params.id);
			if (response.length == 0) throw NotFoundError("Item not found");

			res.json(GetResponse(response));
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
			let response = await ItemService.createItem(item);

			res.json(CreateResponse(response));
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
			let response = await ItemService.updateItem(item);

			res.json(UpdateResponse(response));
		} catch (err) {
			next(err);
		}
	}
	static async deleteItem(req, res, next) {
		try {
			let currentItem = await ItemService.getItem(req.params.id);
			if (currentItem.length == 0) throw NotFoundError("Item not found");

			await ItemService.deleteItem(req.params.id);

			res.json(DeleteResponse());
		} catch (err) {
			next(err);
		}
	}
}

module.exports = ItemController;
