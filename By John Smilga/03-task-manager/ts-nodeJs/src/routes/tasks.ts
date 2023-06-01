import { Router } from "express";
import {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks";
const router = Router();

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);


export default router;
