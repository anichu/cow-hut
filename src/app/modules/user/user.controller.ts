import { Request, Response, NextFunction } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getSingleUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;
		const result = await UserService.getSingleUser(id);
		sendResponse<IUser>(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "User retrieve successfully",
			data: result,
		});
	}
);

const getAllUsers = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const users = await UserService.getAllUsers();

		sendResponse<IUser[]>(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "Users retrieved successfully",
			data: users,
		});
	}
);

const updateUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;
		const updates = req.body;
		const result = await UserService.updateUser(id, updates);

		sendResponse<IUser>(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "User updated successfully",
			data: result,
		});
	}
);

const deleteUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;
		const deletedUser = await UserService.deleteUser(id);

		sendResponse<IUser | null>(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "User deleted successfully",
			data: deletedUser,
		});
	}
);

export const UserController = {
	getSingleUser,
	updateUser,
	deleteUser,
	getAllUsers,
};
