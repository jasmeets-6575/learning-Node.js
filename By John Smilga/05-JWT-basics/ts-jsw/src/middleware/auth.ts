import { NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CustomAPIError } from "../errors/custom-error";
import { Response } from "express";
import { unAuthenticated } from "../errors/unauthenticated";



export const authenticationMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction
  ) => {
    const authHeader = req.headers.authorization;
    const JWT_URI: string | undefined = process.env.JWT_SECRET;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new unAuthenticated("No token provided");
  }

  const token: string = authHeader.split(" ")[1];
  try {
    if (JWT_URI) {
      const decoded = jwt.verify(token, JWT_URI) as JwtPayload;
      const { id, username } = decoded;
      req.user = { id, username };
      next();
    }
  } catch (error) {
    throw new unAuthenticated("Not authorized to access this route");
  }
};
