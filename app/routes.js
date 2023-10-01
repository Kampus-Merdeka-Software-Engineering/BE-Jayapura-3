const express = require("express");
const router = express.Router();
const controller =require('./controller/index')

router.get('/sepatu', controller.getSepatu);

router.post('/sepatu', controller.addSepatu);

module.exports = router;