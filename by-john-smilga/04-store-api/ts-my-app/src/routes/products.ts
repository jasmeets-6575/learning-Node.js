import express from "express";
import { getAllProducts, getAllProductsStatic } from "../controllers/product";
const router = express.Router()

router.route("/").get(getAllProducts)
router.route("/static").get(getAllProductsStatic)

export default router;