import { string, z } from "zod";
import { cities, cowCategory, cowLabel } from "./cow.constant";

const createCowZodSchema = z.object({
	body: z.object({
		name: z.string({
			required_error: "name is required",
		}),
		age: z.number({
			required_error: "age is required",
		}),
		price: z.number({
			required_error: "price is required",
		}),
		location: z.enum([...cities] as [string, ...string[]], {
			required_error: "location is required",
		}),
		breed: z.string({
			required_error: "breed is required",
		}),
		weight: z.number({
			required_error: "weight is required",
		}),
		label: z.enum([...cowLabel] as [string, ...string[]], {
			required_error: "label is required",
		}),
		category: z.enum([...cowCategory] as [string, ...string[]], {
			required_error: "category is required",
		}),
		seller: z.string({
			required_error: "seller is required",
		}),
	}),
});

export const CowValidation = {
	createCowZodSchema,
};
