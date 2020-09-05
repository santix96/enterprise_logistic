// Import express
const express = require('express')
// Import product controller
const ZoneController = require('./../controllers/zoneController.js')
// Create express router
const router = express.Router()

/* Product Routes */
router.get('/', ZoneController.GetAll)
router.get('/:id', ZoneController.Get)
router.post('/', ZoneController.Create)
router.put('/:id', ZoneController.Update)
router.delete('/:id', ZoneController.Delete)


module.exports = router
