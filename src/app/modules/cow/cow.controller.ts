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

const getSingleCow = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;
		const result = await CowService.getSingleCow(id);

		if (result) {
			sendResponse<ICow>(res, {
				statusCode: httpStatus.OK,
				success: true,
				message: "Cow retrieved successfully",
				data: result,
			});
		} else {
			sendResponse<ICow>(res, {
				statusCode: httpStatus.NOT_FOUND,
				success: false,
				message: "Cow not found",
				data: null,
			});
		}
	}
);

const deleteCow = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;
		const result = await CowService.deleteCow(id);

		if (result) {
			sendResponse<ICow>(res, {
				statusCode: httpStatus.OK,
				success: true,
				message: "Cow deleted successfully",
				data: result,
			});
		} else {
			sendResponse<ICow>(res, {
				statusCode: httpStatus.NOT_FOUND,
				success: false,
				message: "Cow not found",
				data: null,
			});
		}
	}
);

const updateCow = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.params.id;
		const updatedCow = req.body;
		const result = await CowService.updateCow(id, updatedCow);

		if (result) {
			sendResponse<ICow>(res, {
				statusCode: httpStatus.OK,
				success: true,
				message: "Cow updated successfully",
				data: result,
			});
		} else {
			sendResponse<ICow>(res, {
				statusCode: httpStatus.NOT_FOUND,
				success: false,
				message: "Cow not found",
				data: null,
			});
		}
	}
);

export const CowController = {
	createCow,
	getSingleCow,
	deleteCow,
	updateCow,
};
