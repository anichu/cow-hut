import express from "express";
import { OrderController } from "./order.controller";
import { OrderValidation } from "./order.validation";
import validateRequest from "../../middlewares/validateRequest";

const orderRouter = express.Router();

orderRouter
	.route("/")
	.post(
		validateRequest(OrderValidation.createOrderZodSchema),
		OrderController.createOrder
	)
	.get(OrderController.getOrders);

export default orderRouter;
