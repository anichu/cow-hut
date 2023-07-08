"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNumber: zod_1.z.string({
            required_error: "phoneNumber is required",
        }),
        role: zod_1.z.enum([...user_constant_1.userRole], {
            required_error: "role is required",
        }),
        password: zod_1.z.string({
            required_error: "password is required",
        }),
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: "name is required",
            }),
            lastName: zod_1.z.string().optional(),
        }),
        address: zod_1.z.string({
            required_error: "Year is required",
        }),
        income: zod_1.z.number().optional(),
        budget: zod_1.z.number().optional(),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNumber: zod_1.z
            .string({
            required_error: "phoneNumber is required",
        })
            .optional(),
        role: zod_1.z
            .enum([...user_constant_1.userRole], {
            required_error: "role is required",
        })
            .optional(),
        password: zod_1.z
            .string({
            required_error: "password is required",
        })
            .optional(),
        name: zod_1.z
            .object({
            firstName: zod_1.z
                .string({
                required_error: "name is required",
            })
                .optional(),
            lastName: zod_1.z.string().optional(),
        })
            .optional(),
        address: zod_1.z
            .string({
            required_error: "Year is required",
        })
            .optional(),
        income: zod_1.z.number().optional(),
        budget: zod_1.z.number().optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
};
