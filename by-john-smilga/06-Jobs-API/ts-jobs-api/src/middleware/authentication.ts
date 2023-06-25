import { NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Response } from "express";
import { unAuthenticated } from "../errors/unauthenticated";
import User from "../models/User";


export const authMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction
  ) => {
  const JWT_URI: string | undefined = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new unAuthenticated("No token provided");
  }

  const token: string = authHeader.split(" ")[1];
  try {
    if (JWT_URI) {
      const payload = jwt.verify(token, JWT_URI) as JwtPayload;
        
    //   const user = User.findById(payload.id).select("-password")
      req.user = { userId: payload.userId, name: payload.name };
      next();
    }
  } catch (error) {
    throw new unAuthenticated("Not authorized to access this route");
  }
};
