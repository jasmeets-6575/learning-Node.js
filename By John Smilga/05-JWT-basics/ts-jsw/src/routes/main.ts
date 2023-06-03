import express from "express";
import { dashboard, login } from "../controllers/main";
const router = express.Router();

router.route("/dashboard").get(dashboard);
router.route("/login").get(login);

export default router;
