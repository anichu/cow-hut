import express from "express";
import { CowController } from "./cow.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CowValidation } from "./cow.validation";

const cowRouter = express.Router();

cowRouter
	.route("/")
	.post(
		validateRequest(CowValidation.createCowZodSchema),
		CowController.createCow
	)
	.get(CowController.getAllCows);
cowRouter
	.route("/:id")
	.get(CowController.getSingleCow)
	.delete(CowController.deleteCow)
	.patch(
		validateRequest(CowValidation.updateZodSchema),
		CowController.updateCow
	);

export default cowRouter;
