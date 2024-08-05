const express = require('express');
const router = express.Router();
const productscontrollers = require('../contollers/products-controller');

router.get('/', productscontrollers.getAllproduct);
router.post('/',productscontrollers.createProducts )

module.exports = router;