const Cart = require("../model/cart.js");

async function addToCart(req, res, next) {
  try {
    const { product_id, quantity } = req.body;
    const { id: user_id } = req.user;
    const result = await Cart.addToCart(user_id, product_id, quantity);
    res.status(200).json(result);
  } catch (error) {
    // Tangani kesalahan jika terjadi
    next(error);
  }
}

async function removeFromCart(req, res, next) {
  try {
    const { product_id } = req.body;
    const { id: user_id } = req.user;
    const result = await Cart.removeFromCart(user_id, product_id);
    res.status(200).json(result);
  } catch (error) {
    // Tangani kesalahan jika terjadi
    next(error);
  }
}

async function getUserCart(req, res, next) {
  try {
    const { id: user_id } = req.user;
    const cartProducts = await Cart.getUserCart(user_id);
    res.status(200).json({ data: cartProducts });
  } catch (error) {
    // Tangani kesalahan jika terjadi
    next(error);
  }
}

async function updateQuantity(req, res, next) {
  try {
    const { product_id, quantity } = req.body;
    const { id: user_id } = req.user;
    const result = await Cart.updateCart(user_id, product_id, quantity);
    res.status(200).json(result);
  } catch (error) {
    // Tangani kesalahan jika terjadi
    next(error);
  }
}

module.exports = {
  addToCart,
  removeFromCart,
  getUserCart,
  updateQuantity
};
