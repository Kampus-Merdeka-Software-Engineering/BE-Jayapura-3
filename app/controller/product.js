const Product = require("../model/products.js");

// Pastikan Anda menambahkan async di depan fungsi-fungsi berikutnya.
async function getAllProducts(req, res, next) {
  try {
    const products = await Product.getAll();
    res.status(200).json({ data: products });
  } catch (error) {
    // Tangani kesalahan jika terjadi
    next(error);
  }
}

async function getProductsBySearch(req, res, next) {
  try {
    const search = req.params.search;
    const products = await Product.getBySearch(search);
    res.status(200).json({ data: products });
  } catch (error) {
    // Tangani kesalahan jika terjadi
    next(error);
  }
}

module.exports = {
  getAllProducts,
  getProductsBySearch
};
