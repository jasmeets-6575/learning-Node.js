import { RequestHandler } from "express";
import { CustomAPIError } from "../errors/custom-error";
import * as dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import { BadRequest } from "../errors/bad-request";

interface CustomRequest extends Request {
  user: {
    id: string;
    username: string;
  };
}

dotenv.config();

const JWT_URI: string | undefined = process.env.JWT_SECRET;
export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }
  // just for demo, normally provided by DB
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  if (JWT_URI) {
    const token = jwt.sign({ id, username }, JWT_URI, { expiresIn: "30d" });
    res.status(200).send({ msg: "user created", token });
  }
};

export const dashboard = async (req: any, res: Response) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
