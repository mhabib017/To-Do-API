"use strict";

const express = require("express");
const ItemsController = require("../../controllers/items");

const router = express.Router();

router.get("/", ItemsController.listItems);

router.get("/:id(\\d+)/", ItemsController.getItem);

router.post("/", ItemsController.createItem);

router.put("/:id(\\d+)/", ItemsController.updateItem);

router.delete("/:id(\\d+)/", ItemsController.deleteItem);

module.exports = router;
