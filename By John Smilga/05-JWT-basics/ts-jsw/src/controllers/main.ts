import { RequestHandler } from "express";
import { CustomAPIError } from "../errors/custom-error";
import * as dotenv from "dotenv";
import jwt ,{JwtPayload} from "jsonwebtoken";
dotenv.config();

const JWT_URI: string | undefined = process.env.JWT_SECRET;
export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }
  // just for demo, normally provided by DB
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  if (JWT_URI) {
    const token = jwt.sign({ id, username }, JWT_URI, { expiresIn: "30d" });
    res.status(200).send({ msg: "user created", token });
  }
};

export const dashboard: RequestHandler = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token: string = authHeader.split(" ")[1];
  try {
    if (JWT_URI) {
      const decoded = jwt.verify(token, JWT_URI) as JwtPayload;

      const luckyNumber = Math.floor(Math.random() * 100);
      res.status(200).json({
        msg: `Hello, ${decoded.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      });
    }
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route", 401);
  }
};
