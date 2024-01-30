const ItemService = require("../../services/items");

class ItemController {
	static async listItems(req, res) {
		try {
			let response = await ItemService.getListItemByUserId(req.user.id);
			res.json(response);
		} catch (err) {
			res.json(JSON.stringify(err));
		}
	}
	static async getItem(req, res) {
		try {
			let response = await ItemService.getItem(req.params.id);
			res.json(response);
		} catch (err) {
			res.json(JSON.stringify(err));
		}
	}
	static async createItem(req, res) {
		try {
			let item = req.body;
			item.user_id = req.user.id;
			let response = await ItemService.createItem(req.body);
			res.json(response);
		} catch (err) {
			res.json(JSON.stringify(err));
		}
	}
	static async updateItem(req, res) {
		try {
			let item = req.body;
			item.id = req.params.id;
			let response = await ItemService.updateItem(item);
			res.json(response);
		} catch (err) {
			res.json(JSON.stringify(err));
		}
	}
	static async deleteItem(req, res) {
		try {
			let response = await ItemService.deleteItem(req.params.id);
			res.json(response);
		} catch (err) {
			res.json(JSON.stringify(err));
		}
	}
}

module.exports = ItemController;
