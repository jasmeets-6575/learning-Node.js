import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const register: RequestHandler = async (req, res) => {

  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

export const login: RequestHandler = async (req, res) => {
  res.send("login user");
};
