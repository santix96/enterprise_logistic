// Import express
const express = require('express')
// Import users controller
const ProductController = require('./../controllers/productController.js')
// Create express router
const router = express.Router()

/* Product Routes */
router.get('/', ProductController.GetAll)
router.get('/:id', ProductController.Get)


module.exports = router
