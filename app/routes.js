const express = require("express");
const router = express.Router();
const controller =require('./controller/index')

router.get('/sepatu', controller.getSepatuSQL);

router.post('/sepatu', controller.addSepatu);

module.exports = router;