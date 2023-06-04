import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequest } from "../errors/bad-request";
import { unAuthenticated } from "../errors/unauthenticated";

export const register: RequestHandler = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new unAuthenticated("Invalid Credentials");
  }
  
  const isPasswordCorrect = user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new unAuthenticated("Invalid Credentials");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};
