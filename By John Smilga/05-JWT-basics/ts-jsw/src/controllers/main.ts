import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) => {
  res.send("Fake Login/Register/Signup Route");
};

export const dashboard: RequestHandler = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
