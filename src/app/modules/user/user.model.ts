import { Schema, model } from "mongoose";
import { IUser, IUserModel } from "./user.interface";

const UserSchema = new Schema<IUser, IUserModel>({
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

const User = model<IUser, IUserModel>("User", UserSchema);

export default User;
