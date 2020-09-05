// Import express
const express = require('express')
// Import product controller
const OrdersByProductController = require('./../controllers/ordersByProductController.js')
// Create express router
const router = express.Router()

/* Order Routes */
router.get('/', OrdersByProductController.GetAll)
router.get('/:id', OrdersByProductController.Get)
router.post('/', OrdersByProductController.Create)
router.put('/:id', OrdersByProductController.Update)
router.delete('/:id', OrdersByProductController.Delete)


module.exports = router
