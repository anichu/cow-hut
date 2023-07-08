import { Request, Response, NextFunction } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../../shared/sendResponse";
import { IUser } from "../user/user.interface";
import httpStatus from "http-status";

const signupUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const user = req.body;
		const result = await AuthService.signupUser(user);

		sendResponse<IUser>(res, {
			statusCode: httpStatus.CREATED,
			success: true,
			message: "User created successfully",
			data: result,
		});
		// next();
	}
);

export const AuthController = {
	signupUser,
};
