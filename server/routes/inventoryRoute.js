// Import express
const express = require('express')
// Import product controller
const InventoryController = require('./../controllers/inventoryController.js')
// Create express router
const router = express.Router()

/* Product Routes */
router.get('/', InventoryController.GetAll)
router.get('/:id', InventoryController.Get)
router.post('/', InventoryController.Create)
router.put('/:id', InventoryController.Update)
router.delete('/:id', InventoryController.Delete)


module.exports = router
