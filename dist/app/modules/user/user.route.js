"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userRouter = express_1.default.Router();
userRouter.route("/").get(user_controller_1.UserController.getAllUsers);
userRouter
    .route("/:id")
    .get(user_controller_1.UserController.getSingleUser)
    .patch(user_controller_1.UserController.updateUser)
    .delete(user_controller_1.UserController.deleteUser);
exports.default = userRouter;
