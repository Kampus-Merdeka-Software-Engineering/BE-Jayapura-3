const express = require("express");
const router = express.Router();
const { getAllProducts, getProductsBySearch } = require( "../controller/product.js")


router.get("/");
router.get("/getAll", getAllProducts);
router.get("/search/:search", getProductsBySearch);

module.exports = router;
