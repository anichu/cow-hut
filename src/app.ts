import express, { Application, Response, Request, NextFunction } from "express";
import cors from "cors";
import colors from "colors";
import config from "./config";
import httpStatus from "http-status";
import morgan from "morgan";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { router } from "./routes";
const app: Application = express();

app.use(cors());

if (config.node_env === "development") {
	app.use(morgan("dev"));
}

// TODO:: BODY PARSER
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
// routes
app.use("/api/v1", router);

// ROUTE
app.get("/", async (req: Request, res: Response) => {
	const message = colors.red("HELLO SERVER");
	res.send(message);
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: "Not Found",
		errorMessages: [
			{
				path: req.originalUrl,
				message: "Api Not Found",
			},
		],
	});
	//next();
});

export default app;
