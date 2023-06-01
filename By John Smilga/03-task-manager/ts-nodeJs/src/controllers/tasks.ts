import { RequestHandler } from "express";
import Task from "../models/Task";

export const getAllTasks: RequestHandler = (req, res) => {
  res.send("get all tasks");
};

export const createTasks: RequestHandler = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
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
