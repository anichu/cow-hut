import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderService } from "./order.service";
import { IOrder } from "./order.interface";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createOrder = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const order = req.body;
		const result = await OrderService.createOrder(order);

		sendResponse<IOrder>(res, {
			statusCode: httpStatus.CREATED,
			success: true,
			message: "Order created successfully",
			data: result,
		});
		// next();
	}
);

export const OrderController = {
	createOrder,
};
