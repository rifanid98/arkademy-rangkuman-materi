/**
 * ExpressJs FW
 */
// import express framework
const express = require('express');
// instance of express router
const router = express.Router();

/**
 * Routes
 */
// load the controller
const productController = require('../controllers/c_products');

// Get All Products
router.get('/', productController.getAllProducts);
// Post a Product
router.post('/', productController.postProduct);
// Update a Product
router.patch('/:id', productController.patchProduct);
// Delete a Product
router.delete('/:id', productController.deleteProduct);

module.exports = router;