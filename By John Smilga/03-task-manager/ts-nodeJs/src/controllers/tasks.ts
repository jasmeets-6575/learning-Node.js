import { RequestHandler } from "express";
import Task from "../models/Task";

export const getAllTasks: RequestHandler = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const createTasks: RequestHandler = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
