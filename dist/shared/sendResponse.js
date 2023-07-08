"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponseWithPagination = exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        data: data.data || null,
    };
    res.status(data.statusCode).json(responseData);
};
exports.sendResponse = sendResponse;
const sendResponseWithPagination = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null,
        data: data.data || null,
    };
    res.status(data.statusCode).json(responseData);
};
exports.sendResponseWithPagination = sendResponseWithPagination;
