import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductsBySearch,
} from "../controllers/product.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/search/:search", getProductsBySearch);

export default router;
