import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { ICow } from "./cow.interface";
import { CowService } from "./cow.service";
import httpStatus from "http-status";

const createCow = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const cow = req.body;
		const result = await CowService.createCow(cow);

		sendResponse<ICow>(res, {
			statusCode: httpStatus.CREATED,
			success: true,
			message: "Cow created successfully",
			data: result,
		});
		// next();
	}
);

export const CowController = {
	createCow,
};
