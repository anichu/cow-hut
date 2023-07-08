import express from "express";
import { UserController } from "./user.controller";

const userRouter = express.Router();

userRouter.route("/").get(UserController.getAllUsers);
userRouter
	.route("/:id")
	.get(UserController.getSingleUser)
	.patch(UserController.updateUser)
	.delete(UserController.deleteUser);
export default userRouter;
