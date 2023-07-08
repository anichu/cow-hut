import { z } from "zod";
import { userRole } from "./user.constant";
import User from "./user.model";

const createUserZodSchema = z.object({
	body: z.object({
		phoneNumber: z.string({
			required_error: "phoneNumber is required",
		}),
		role: z.enum([...userRole] as [string, ...string[]], {
			required_error: "role is required",
		}),

		password: z.string({
			required_error: "password is required",
		}),

		name: z.object({
			firstName: z.string({
				required_error: "name is required",
			}),
			lastName: z.string().optional(),
		}),

		address: z.string({
			required_error: "Year is required",
		}),
		income: z.number().optional(),
		budget: z.number().optional(),
	}),
});
const updateUserZodSchema = z.object({
	body: z.object({
		phoneNumber: z
			.string({
				required_error: "phoneNumber is required",
			})
			.optional(),
		role: z
			.enum([...userRole] as [string, ...string[]], {
				required_error: "role is required",
			})
			.optional(),

		password: z
			.string({
				required_error: "password is required",
			})
			.optional(),

		name: z
			.object({
				firstName: z
					.string({
						required_error: "name is required",
					})
					.optional(),
				lastName: z.string().optional(),
			})
			.optional(),

		address: z
			.string({
				required_error: "Year is required",
			})
			.optional(),
		income: z.number().optional(),
		budget: z.number().optional(),
	}),
});

export const UserValidation = {
	createUserZodSchema,
};
