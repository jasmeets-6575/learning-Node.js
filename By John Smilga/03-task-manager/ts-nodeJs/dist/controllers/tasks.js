"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTasks = exports.getAllTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task_1.default.find({});
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.getAllTasks = getAllTasks;
const createTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.createTasks = createTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: taskId } = req.params;
        const task = yield Task_1.default.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskId}` });
        }
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.getTask = getTask;
const updateTask = (req, res) => {
    res.send("update task");
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: taskId } = req.params;
        const task = yield Task_1.default.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskId}` });
        }
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.deleteTask = deleteTask;
