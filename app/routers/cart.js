const express = require("express");
const router = express.Router();
const {
  addToCart,
  removeFromCart,
  updateQuantity,
  getUserCart,
} = require("../controller/cart")

router.post("/", addToCart);
router.delete("/", removeFromCart);
router.patch("/", updateQuantity);
router.get("/", getUserCart);

module.exports = router;
