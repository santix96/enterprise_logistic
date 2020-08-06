// Import express
const express = require('express')
// Import home controller
const homeController = require('../controllers/homeController.js')
// Create express router
const router = express.Router()
// Create rout between homeControllers and '/' endpoint
router.get('/', homeController.homeGet)
// Export router
module.exports = router