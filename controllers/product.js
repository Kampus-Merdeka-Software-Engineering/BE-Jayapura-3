import Product from "../models/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    return res.status(200).json({ data: products });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getProductsBySearch = async (req, res) => {
  const search = req.params.search;
  try {
    const products = await Product.getBySearch(search);
    return res.status(200).json({ data: products });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.getById(id);
    return res.status(200).json({ data: product });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
