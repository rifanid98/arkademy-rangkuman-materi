/**
 * ExpressJs Framework
 */
// import express fw
const express = require("express");
// using express built in router
const router = express.Router();

/**
 * Load Model
 */
// Load book model
const book = require('../models/m_book');

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "get router"
    })
});

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "post router"
    })
});

router.patch("/", (req, res, next) => {
    res.status(200).json({
        message: "patch router"
    })
});

router.delete("/:id", (req, res, next) => {
    res.status(200).json({
        message: "delete router"
    })
});

module.exports = router;