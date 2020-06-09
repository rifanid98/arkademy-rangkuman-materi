/**
 * ExpressJs FW
 */
// import express framework
const express = require('express');
// instance of express router
const router = express.Router();

/**
 * Load All Routes
 */
const productRouter = require('./r_products');

/**
 * Fire the router
 */
router.use('/products', productRouter);

module.exports = router;