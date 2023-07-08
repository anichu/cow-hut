"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const user_validation_1 = require("../user/user.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const authRouter = express_1.default.Router();
authRouter
    .route("/signup")
    .post((0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), auth_controller_1.AuthController.signupUser);
exports.default = authRouter;
