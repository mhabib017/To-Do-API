"use strict";

const Joi = require("joi");

const ItemCreateSchema = Joi.object({
	name: Joi.string().required(),
	description: Joi.string().required(),
}).options({allowUnknown: true});

const ItemUpdateSchema = Joi.object({
	name: Joi.string().allow(null),
	description: Joi.string().allow(null),
}).options({allowUnknown: true});

module.exports = {ItemCreateSchema, ItemUpdateSchema};
