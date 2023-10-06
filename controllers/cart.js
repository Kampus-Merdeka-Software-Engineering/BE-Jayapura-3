import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  const { product_id, quantity, size } = req.body;
  const { id: user_id } = req.user;
  try {
    await Cart.addToCart(user_id, product_id, quantity, size);
    return res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  const { product_id } = req.body;
  const { id: user_id } = req.user;
  try {
    await Cart.removeFromCart(user_id, product_id);
    return res
      .status(200)
      .json({ message: "Product removed from cart", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getUserCart = async (req, res) => {
  const { id: user_id } = req.user;
  try {
    const cartProducts = await Cart.getUserCart(user_id);
    return res.status(200).json({ data: cartProducts });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getCartTotal = async (req, res) => {
  const { id: user_id } = req.user;
  try {
    const cartProducts = await Cart.getUserCart(user_id);

    let subTotal = 0;
    let shipementCost = 0;

    cartProducts.forEach((product) => {
      subTotal += product.price * product.quantity;
      shipementCost += 10 * product.quantity;
    });

    return res.status(200).json({
      subTotal,
      shipementCost,
      tax: subTotal * 0.05,
      total: subTotal + shipementCost + subTotal * 0.05,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateQuantity = async (req, res) => {
  const { product_id, quantity } = req.body;
  const { id: user_id } = req.user;
  try {
    await Cart.updateCart(user_id, product_id, quantity);
    return res.status(200).json({ message: "Cart updated", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const checkout = async (req, res) => {
  const { id: user_id } = req.user;
  try {
    await Cart.checkout(user_id);
    return res.status(200).json({ message: "Cart updated", success: true });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
