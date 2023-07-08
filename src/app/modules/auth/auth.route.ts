import express from "express";
import { AuthController } from "./auth.controller";
import { UserValidation } from "../user/user.validation";
import validateRequest from "../../middlewares/validateRequest";

const authRouter = express.Router();

authRouter
	.route("/signup")
	.post(
		validateRequest(UserValidation.createUserZodSchema),
		AuthController.signupUser
	);

export default authRouter;
