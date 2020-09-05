// Import express
const express = require('express')
// Import product controller
const NeighborhoodController = require('./../controllers/neighborhoodController.js')
// Create express router
const router = express.Router()

/* Product Routes */
router.get('/', NeighborhoodController.GetAll)
router.get('/:id', NeighborhoodController.Get)
router.post('/', NeighborhoodController.Create)
router.put('/:id', NeighborhoodController.Update)
router.delete('/:id', NeighborhoodController.Delete)


module.exports = router
