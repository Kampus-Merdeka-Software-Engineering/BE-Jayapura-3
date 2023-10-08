import { Router } from "express";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  getUserCart,
  getCartTotal,
  checkout,
} from "../controllers/cart.js";

const router = Router();

router.post("/checkout", checkout);
router.get("/total", getCartTotal);
router.post("/", addToCart);
router.delete("/", removeFromCart);
router.patch("/", updateQuantity);
router.get("/", getUserCart);

export default router;
