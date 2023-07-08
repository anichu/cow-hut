"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    phoneNumber: { type: String, unique: true, required: true },
    role: { type: String, enum: ["seller", "buyer"], required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String },
    },
    address: { type: String, required: true },
    budget: { type: Number, required: true },
    income: { type: Number, default: 0 },
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
