import { RequestHandler } from "express";
import Task from "../models/Task";
import { CustomAPIError, createCustomError } from "../errors/custom-error";

export const getAllTasks: RequestHandler = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks, amount: tasks.length });
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

export const getTask: RequestHandler = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskId}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskId}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateTask: RequestHandler = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskId}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
