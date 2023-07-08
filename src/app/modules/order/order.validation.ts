import { z } from "zod";

const createOrderZodSchema = z.object({
	body: z.object({
		buyer: z.string({
			required_error: "Buyer is required",
		}),

		cow: z.string({
			required_error: "Cow is required",
		}),
	}),
});

const updateOrderZodSchema = z.object({
	body: z.object({
		buyer: z
			.string({
				required_error: "Buyer is required",
			})
			.optional(),

		cow: z
			.string({
				required_error: "Cow is required",
			})
			.optional(),
	}),
});

export const OrderValidation = {
	createOrderZodSchema,
	updateOrderZodSchema,
};
