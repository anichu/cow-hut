import { IOrder } from "./order.interface";
import Order from "./order.model";

export const createOrder = async (payload: IOrder): Promise<IOrder> => {
	const result = await Order.create(payload);
	return result;
};

export const getOrders = async (): Promise<IOrder[] | []> => {
	const result = await Order.find({})
		.populate({
			path: "buyer",
			model: "User",
		})
		.populate({
			path: "cow",
			model: "Cow",
		});
	return result;
};

export const OrderService = {
	createOrder,
	getOrders,
};
