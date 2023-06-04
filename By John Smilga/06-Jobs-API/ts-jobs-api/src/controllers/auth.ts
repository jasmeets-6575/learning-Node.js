import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const register: RequestHandler = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

export const login: RequestHandler = async (req, res) => {
  res.send("login user");
};
