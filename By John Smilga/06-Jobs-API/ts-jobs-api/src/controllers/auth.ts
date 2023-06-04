import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequest } from "../errors/bad-request";

export const register: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest("Please provide all inputs");
  }
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

export const login: RequestHandler = async (req, res) => {
  res.send("login user");
};
