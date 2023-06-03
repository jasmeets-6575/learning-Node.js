import { RequestHandler } from "express";
import { CustomAPIError } from "../errors/custom-error";

export const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  // mongo
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }
  res.send("Fake Login/Register/Signup Route");
};

export const dashboard: RequestHandler = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
