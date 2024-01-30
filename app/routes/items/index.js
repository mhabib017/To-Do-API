const express = require("express");
const ItemsController = require("../../controllers/items");
const authenticate = require("../../middleware/auth");
const router = express.Router();

router.get("/", authenticate, ItemsController.listItems);

router.get("/:id", authenticate, ItemsController.getItem);

router.post("/", authenticate, ItemsController.createItem);

router.put("/:id", authenticate, ItemsController.updateItem);

router.delete("/:id", authenticate, ItemsController.deleteItem);

module.exports = router;
