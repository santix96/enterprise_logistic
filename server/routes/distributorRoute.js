// Import express
const express = require('express')
// Import product controller
const DistributorController = require('./../controllers/distributorController.js')
// Create express router
const router = express.Router()

/* Distributor Routes */
router.get('/', DistributorController.GetAll)
router.get('/:id', DistributorController.Get)
router.post('/', DistributorController.Create)
router.put('/:id', DistributorController.Update)
router.delete('/:id', DistributorController.Delete)

module.exports = router
