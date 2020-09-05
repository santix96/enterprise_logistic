// Import express
const express = require('express')
// Import product controller
const OrderController = require('./../controllers/orderController.js')
// Create express router
const router = express.Router()

/* Order Routes */
router.get('/', OrderController.GetAll)
router.get('/:email', OrderController.Get)
router.post('/', OrderController.Create)
router.put('/:id', OrderController.Update)
router.delete('/:id', OrderController.Delete)


module.exports = router
