/* import type { NextFunction, Request, Response } from "express";

export interface IError extends Error {
	statusCode: number;
}

export class ApplicationException extends Error {
	constructor (message: string, public statusCode: number, options?: ErrorOptions) {
		super(message, options);
	}
}

export const globalErrorHandler = (err: IError, req: Request, res: Response, next: NextFunction) => {
	return res.status(err.statusCode || 500).json({
		message: err.message || "Something went wrong!",
		stack: process.env.MODE === "DEV" ? err.stack : undefined,
	});
} 
*/

import type { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
  status: number;
  details?: any;
  constructor(status: number, message: string, details?: any) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  const status = err?.status || 500;
  const message = err?.message || 'Internal Server Error';
  res.status(status).json({ status: 'error', message, details: err?.details || undefined });
};
