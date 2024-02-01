const express = require("express");
const ItemsController = require("../../controllers/items");

const router = express.Router();

router.get("/", ItemsController.listItems);

router.get("/:id", ItemsController.getItem);

router.post("/", ItemsController.createItem);

router.put("/:id", ItemsController.updateItem);

router.delete("/:id", ItemsController.deleteItem);

module.exports = router;
