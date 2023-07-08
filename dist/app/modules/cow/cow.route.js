"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cow_controller_1 = require("./cow.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cow_validation_1 = require("./cow.validation");
const cowRouter = express_1.default.Router();
cowRouter
    .route("/")
    .post((0, validateRequest_1.default)(cow_validation_1.CowValidation.createCowZodSchema), cow_controller_1.CowController.createCow)
    .get(cow_controller_1.CowController.getAllCows);
cowRouter
    .route("/:id")
    .get(cow_controller_1.CowController.getSingleCow)
    .delete(cow_controller_1.CowController.deleteCow)
    .patch((0, validateRequest_1.default)(cow_validation_1.CowValidation.updateZodSchema), cow_controller_1.CowController.updateCow);
exports.default = cowRouter;
