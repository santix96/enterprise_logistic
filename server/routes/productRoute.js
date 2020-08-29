// Import express
const express = require('express')
// Import product controller
const ProductController = require('./../controllers/productController.js')
// Create express router
const router = express.Router()

/* Product Routes */
router.get('/', ProductController.GetAll)
router.get('/:id', ProductController.Get)
router.post('/', ProductController.Create)
router.put('/:id', ProductController.Update)
router.delete('/:id', ProductController.Delete)


module.exports = router
