import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequest } from "../errors/bad-request";
import bcrypt from "bcryptjs";

export const register: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password:hashedPassword}

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

export const login: RequestHandler = async (req, res) => {
  res.send("login user");
};
