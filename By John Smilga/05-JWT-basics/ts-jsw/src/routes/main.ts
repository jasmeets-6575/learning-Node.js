import express from "express";
import { dashboard, login } from "../controllers/main";
const router = express.Router();

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

export default router;
