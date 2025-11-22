import type { Request, Response } from "express";

class AuthenticationService {
	signup = (req: Request, res: Response): Response => {
		return res.status(201).json({ message: "User Registed Successfully!" });
	};

	login = (req: Request, res: Response): Response => {
		return res.status(200).json({ message: "User Logged in Successfully!" });
	};
};

export default new AuthenticationService;