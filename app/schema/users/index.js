const Joi = require("joi");

const UserRegisterSchema = Joi.object({
	username: Joi.string().alphanum().min(3).required(),
	password: Joi.string().alphanum().min(5).max(10).required(),
	repeat_password: Joi.ref("password"),
}).options({allowUnknown: true});

const UserLoginSchema = Joi.object({
	username: Joi.string().alphanum().required(),
	password: Joi.string().alphanum().required(),
	repeat_password: Joi.ref("password"),
}).options({allowUnknown: true});

module.exports = {UserLoginSchema, UserRegisterSchema};
