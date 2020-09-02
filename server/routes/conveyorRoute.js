// Import express
const express = require('express')
// Import product controller
const ConveyorController = require('./../controllers/conveyorController.js')
// Create express router
const router = express.Router()

/* Product Routes */
router.get('/', ConveyorController.GetAll)
router.get('/:id', ConveyorController.Get)
router.get('/:neighborhood', ConveyorController.GetAllByNeighborhood)
router.post('/', ConveyorController.Create)
router.put('/:id', ConveyorController.Update)
router.delete('/:id', ConveyorController.Delete)

module.exports = router
