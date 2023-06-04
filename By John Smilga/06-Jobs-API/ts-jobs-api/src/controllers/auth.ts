import { RequestHandler } from "express";

export const register: RequestHandler = async (req, res) => {
  res.send("register use");
};
export const login: RequestHandler = async (req, res) => {
  res.send("login use");
};
