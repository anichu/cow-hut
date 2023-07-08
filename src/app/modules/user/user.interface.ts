import { Model } from "mongoose";

export type IName = {
	firstName: string;
	lastName?: string;
};

export type IUser = {
	phoneNumber: string;
	role: "seller" | "buyer";
	password: string;
	name: IName;
	address: string;
	budget: number;
	income: number;
};

export type IUserModel = Model<IUser, Record<string, unknown>>;
