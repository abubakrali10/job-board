import type { NextFunction, Request, Response } from "express";
import { isSignUpDTO } from "./auth.dto";

class AuthenticationService {
	constructor() {}

	signup = (req: Request, res: Response, next: NextFunction): Response => {
		const { firstName, lastName, email, password }: isSignUpDTO = req.body;
		console.log({ firstName, lastName, email, password });
		return res.status(201).json({ message: "User Registed Successfully!" });
	};

	login = (req: Request, res: Response): Response => {
		return res.status(200).json({ message: "User Logged in Successfully!" });
	};
};

export default new AuthenticationService;