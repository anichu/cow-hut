"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const order_validation_1 = require("./order.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const orderRouter = express_1.default.Router();
orderRouter
    .route("/")
    .post((0, validateRequest_1.default)(order_validation_1.OrderValidation.createOrderZodSchema), order_controller_1.OrderController.createOrder)
    .get(order_controller_1.OrderController.getOrders);
exports.default = orderRouter;
