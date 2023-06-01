"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTasks = exports.getAllTasks = void 0;
const getAllTasks = (req, res) => {
    res.send("get all tasks");
};
exports.getAllTasks = getAllTasks;
const createTasks = (req, res) => {
    res.json(req.body);
};
exports.createTasks = createTasks;
const getTask = (req, res) => {
    res.json({ id: req.params.id });
};
exports.getTask = getTask;
const updateTask = (req, res) => {
    res.send("update task");
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    res.send("delete task");
};
exports.deleteTask = deleteTask;
