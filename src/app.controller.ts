import express from "express";
import path from "node:path";
import type { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit, { type RateLimitRequestHandler } from "express-rate-limit";
config({ path: path.resolve("./config/.env.dev") });

const limitter: RateLimitRequestHandler = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	message: {
		status: 429,
		message: "Too many requests from this IP, please try again later.",
	},
})


export const bootstrap = () :void => {
	const app: Express = express();
	const port: number = Number(process.env.PORT) || 5000; 

	app.use(cors(), express.json(), helmet());
	app.use(limitter);

	app.get("/users", (req: Request, res: Response) => {
		return res.status(200).json({message: "Hello from express using TS"});
	});

	app.listen(port, () => {
		console.log(`Server is running on port: ${port}`);
	});
}