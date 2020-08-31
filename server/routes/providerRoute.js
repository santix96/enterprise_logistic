// Import express
const express = require('express')
// Import product controller
const ProviderController = require('./../controllers/providerController.js')
// Create express router
const router = express.Router()

/* Provider Routes */
router.get('/', ProviderController.GetAll)
router.get('/:id', ProviderController.Get)
router.post('/', ProviderController.Create)
router.put('/:id', ProviderController.Update)
router.delete('/:id', ProviderController.Delete)


module.exports = router
