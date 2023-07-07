import express, { Application, Response, Request } from "express";
import cors from "cors";
import colors from "colors";
import config from "./config";

import morgan from "morgan";
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

// ROUTE
app.get("/", async (req: Request, res: Response) => {
	const message = colors.red("HELLO SERVER");
	res.send(message);
});

export default app;
