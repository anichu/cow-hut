import express from "express";
import userRouter from "../app/modules/user/user.route";
import authRouter from "../app/modules/auth/auth.route";
import cowRouter from "../app/modules/cow/cow.route";

const router = express.Router();

const moduleRoutes = [
	{
		path: "/users",
		route: userRouter,
	},
	{
		path: "/auth",
		route: authRouter,
	},
	{
		path: "/cows",
		route: cowRouter,
	},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export { router };
