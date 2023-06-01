import { RequestHandler } from "express";

export const getAllTasks: RequestHandler = (req, res) => {
  res.send("get all tasks");
};

export const createTasks: RequestHandler = (req, res) => {
  res.json(req.body);
};

export const getTask: RequestHandler = (req, res) => {
  res.json({ id: req.params.id });
};

export const updateTask: RequestHandler = (req, res) => {
  res.send("update task");
};

export const deleteTask: RequestHandler = (req, res) => {
  res.send("delete task");
};
