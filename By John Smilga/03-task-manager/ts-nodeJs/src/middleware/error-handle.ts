import express, { NextFunction, Response, Request } from "express";
import { CustomAPIError } from "../errors/custom-error";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
};
