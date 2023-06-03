import { RequestHandler } from "express";

export const authenticationMiddleware: RequestHandler = async (
  req,
  res,
  next
) => {
  console.log(req.headers.authorization);
  next();
};

