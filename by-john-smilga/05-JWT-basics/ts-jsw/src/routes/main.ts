import express from "express";
import { dashboard, login } from "../controllers/main";
import { authenticationMiddleware } from "../middleware/auth";

const router = express.Router();

router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);

export default router;
