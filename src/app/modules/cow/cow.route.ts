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
	);

cowRouter.route("/:id").get(CowController.getSingleCow);

export default cowRouter;
