"use strict";

const NotFoundError = (message) => {
	return {
		statusCode: 404,
		message: message || ["Not found"],
	};
};
const NotAuthorizedError = (err) => {
	return {
		statusCode: 401,
		message: err || ["Not authorized"],
	};
};

const ValidationError = (err) => {
	return {
		statusCode: 400,
		message: err,
	};
};

const BadRequestError = (err) => {
	return {
		statusCode: 400,
		message: err || ["Bad request error"],
	};
};

const SuccessResponse = (data) => {
	return {
		statusCode: 200,
		data: data,
	};
};

const InternalServerError = (err) => {
	if (err.statusCode) return err;
	return {
		statusCode: 500,
		message: ["Internal Server Error"],
		_private: [err],
	};
};

const CreateResponse = (data) => {
	return {
		statusCode: 201,
		data: data,
	};
};
const UpdateResponse = (data) => {
	return {
		statusCode: 200,
		data: data,
	};
};
const GetResponse = (data) => {
	return {
		statusCode: 200,
		data: data,
	};
};
const DeleteResponse = () => {
	return {
		statusCode: 204,
	};
};

module.exports = {
	NotFoundError,
	ValidationError,
	BadRequestError,
	InternalServerError,
	CreateResponse,
	UpdateResponse,
	GetResponse,
	DeleteResponse,
	SuccessResponse,
	NotAuthorizedError,
};
