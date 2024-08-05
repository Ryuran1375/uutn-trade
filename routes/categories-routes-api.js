const express = require('express');
const router = express.Router();
const categoriescontroller = require('../contollers/categories-controller');

router.get('/', categoriescontroller.getAllcategories);

module.exports = router;