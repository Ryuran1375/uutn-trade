const express = require('express');
const router = express.Router();
const productscontrollers = require('../contollers/products-controller');

router.get('/', productscontrollers.getAllproduct);
router.post('/',productscontrollers.createProducts );
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/register', userController.register);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
